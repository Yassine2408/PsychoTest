import { GoogleGenerativeAI } from '@google/generative-ai';

// Get API key from environment variables
const getGeminiApiKey = () => {
  return process.env.GEMINI_API_KEY || '';
};

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(getGeminiApiKey());

export interface UserInfo {
  name?: string;
  age?: number;
  gender?: string;
  occupation?: string;
  location?: string;
}

export interface GeneratedQuestion {
  id: number;
  text: string;
  options: string[];
}

export interface PersonalizedAssessment {
  questions: GeneratedQuestion[];
  context: string;
}

export interface AIAnalysisResult {
  score: number;
  level: string;
  personalizedFeedback: string;
  recommendations: string[];
  insights: string[];
  strengths: string[];
  areasForImprovement: string[];
}

// Function to check if Gemini is configured
export function isGeminiConfigured(): boolean {
  return Boolean(getGeminiApiKey());
}

// Language mapping for better AI understanding
const getLanguageContext = (language: string) => {
  const languageMap = {
    'en': {
      name: 'English',
      cultural: 'Western/International context',
      instructions: 'Use clear, professional English with empathetic tone'
    },
    'fr': {
      name: 'French', 
      cultural: 'French/Francophone context',
      instructions: 'Use clear, professional French with empathetic tone. Consider French cultural nuances'
    },
    'ar': {
      name: 'Arabic',
      cultural: 'Middle Eastern/Arabic context', 
      instructions: 'Use clear, professional Arabic with empathetic tone. Consider Middle Eastern cultural values and family dynamics'
    },
    'es': {
      name: 'Spanish',
      cultural: 'Spanish/Hispanic context',
      instructions: 'Use clear, professional Spanish with empathetic tone. Consider Hispanic cultural values'
    }
  };
  
  return languageMap[language as keyof typeof languageMap] || languageMap['en'];
};

// Function to generate personalized questions using Gemini AI
export async function generatePersonalizedQuestions(
  userInfo: UserInfo,
  language: string = 'en'
): Promise<PersonalizedAssessment> {
  if (!isGeminiConfigured()) {
    console.log('Gemini API not configured, using default questions');
    return getDefaultQuestions(language);
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const langContext = getLanguageContext(language);
    const prompt = createQuestionPrompt(userInfo, language, langContext);
    
    console.log(`🤖 Generating personalized questions in ${langContext.name} for:`, {
      name: userInfo.name || 'Anonymous',
      age: userInfo.age || 'Not specified',
      occupation: userInfo.occupation || 'Not specified'
    });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Clean the response text to ensure it's valid JSON
    const cleanedText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    // Parse the JSON response from Gemini
    const parsedResponse = JSON.parse(cleanedText);
    
    console.log(`✅ Successfully generated ${parsedResponse.questions.length} personalized questions`);
    
    return {
      questions: parsedResponse.questions.map((q: any, index: number) => ({
        id: index + 1,
        text: q.text,
        options: q.options
      })),
      context: parsedResponse.context || ''
    };
  } catch (error) {
    console.error('❌ Failed to generate personalized questions:', error);
    // Fallback to default questions if AI generation fails
    return getDefaultQuestions(language);
  }
}

// Function to analyze assessment results using Gemini AI
export async function analyzeAssessmentWithAI(
  userInfo: UserInfo,
  questions: GeneratedQuestion[],
  answers: number[],
  language: string = 'en'
): Promise<AIAnalysisResult> {
  if (!isGeminiConfigured()) {
    console.log('Gemini API not configured, using basic analysis');
    return getBasicAnalysis(answers, language);
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const langContext = getLanguageContext(language);
    const prompt = createAnalysisPrompt(userInfo, questions, answers, language, langContext);
    
    console.log(`🤖 Analyzing assessment results in ${langContext.name} for:`, {
      name: userInfo.name || 'Anonymous',
      totalQuestions: questions.length,
      answersProvided: answers.filter(a => a !== null).length
    });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Clean the response text to ensure it's valid JSON
    const cleanedText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    // Parse the JSON response from Gemini
    const analysisResult = JSON.parse(cleanedText);
    
    console.log(`✅ AI analysis complete - Level: ${analysisResult.level}, Score: ${analysisResult.score}`);
    
    return analysisResult;
  } catch (error) {
    console.error('❌ Failed to analyze with AI:', error);
    // Fallback to basic analysis if AI analysis fails
    return getBasicAnalysis(answers, language);
  }
}

// Create a personalized prompt for question generation
function createQuestionPrompt(userInfo: UserInfo, language: string, langContext: any): string {
  return `You are a professional psychologist creating a personalized emotional wellness assessment.

LANGUAGE & CULTURAL CONTEXT:
- Language: ${langContext.name}
- Cultural Context: ${langContext.cultural}
- Instructions: ${langContext.instructions}

USER PROFILE:
- Name: ${userInfo.name || 'Not provided'}
- Age: ${userInfo.age || 'Not provided'}
- Gender: ${userInfo.gender || 'Not provided'}
- Occupation: ${userInfo.occupation || 'Not provided'}
- Location: ${userInfo.location || 'Not provided'}

TASK:
Create exactly 15 personalized questions in ${langContext.name} that assess emotional well-being, tailored to this person's profile. Each question should have exactly 4 multiple choice options.

PERSONALIZATION GUIDELINES:
- Age-appropriate concerns and life stages
- Occupation-related stress factors and challenges
- Cultural context and values from their background
- Gender-specific considerations when relevant
- Use their name occasionally to make it personal (if provided)
- Consider common stressors for their demographic

QUESTION CATEGORIES TO INCLUDE:
- Stress and coping mechanisms (3-4 questions)
- Emotional regulation and mood (3-4 questions) 
- Relationships and social connections (2-3 questions)
- Work-life balance and occupation-specific stress (2-3 questions)
- Self-esteem and personal growth (2-3 questions)
- Physical and mental health awareness (1-2 questions)

RESPONSE FORMAT (JSON only, no other text):
{
  "context": "Brief explanation of how questions were personalized for this user in ${langContext.name}",
  "questions": [
    {
      "text": "Question text in ${langContext.name} using their context",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"]
    }
  ]
}

Make questions that range from basic emotional awareness to deeper psychological insights. Ensure all text is in ${langContext.name} and culturally appropriate.`;
}

// Create a prompt for AI analysis of results
function createAnalysisPrompt(userInfo: UserInfo, questions: GeneratedQuestion[], answers: number[], language: string, langContext: any): string {
  // Create question-answer pairs for analysis
  const questionAnswerPairs = questions.map((q, index) => ({
    question: q.text,
    selectedOption: answers[index] !== null ? q.options[answers[index]] : 'Not answered',
    answerIndex: answers[index]
  }));

  return `You are a professional psychologist analyzing the results of a personalized emotional wellness assessment.

LANGUAGE & CULTURAL CONTEXT:
- Language: ${langContext.name}
- Cultural Context: ${langContext.cultural}
- Instructions: ${langContext.instructions}

USER PROFILE:
- Name: ${userInfo.name || 'Anonymous'}
- Age: ${userInfo.age || 'Not specified'}
- Gender: ${userInfo.gender || 'Not specified'}
- Occupation: ${userInfo.occupation || 'Not specified'}

ASSESSMENT DATA:
${questionAnswerPairs.map((qa, index) => `
Question ${index + 1}: ${qa.question}
Selected Answer: ${qa.selectedOption}
`).join('')}

ANALYSIS TASK:
Provide a comprehensive psychological analysis in ${langContext.name} considering:
1. The user's personal context and background
2. Their response patterns across all questions
3. Cultural and demographic factors
4. Occupation-specific stressors
5. Age-appropriate mental health considerations

SCORING GUIDELINES:
- Score range: 0-100 (higher = better emotional wellness)
- Level categories: "Excellent", "Good", "Moderate", "Needs Attention", "Seek Support"
- Consider answer patterns, not just individual responses

RESPONSE FORMAT (JSON only, no other text):
{
  "score": 75,
  "level": "Good",
  "personalizedFeedback": "Detailed, empathetic feedback in ${langContext.name} that addresses their specific situation, using their name if provided",
  "recommendations": [
    "Specific, actionable recommendation 1 in ${langContext.name}",
    "Specific, actionable recommendation 2 in ${langContext.name}",
    "Specific, actionable recommendation 3 in ${langContext.name}"
  ],
  "insights": [
    "Key psychological insight 1 based on their responses in ${langContext.name}",
    "Key psychological insight 2 based on their responses in ${langContext.name}"
  ],
  "strengths": [
    "Identified strength 1 in ${langContext.name}",
    "Identified strength 2 in ${langContext.name}"
  ],
  "areasForImprovement": [
    "Area for growth 1 in ${langContext.name}",
    "Area for growth 2 in ${langContext.name}"
  ]
}

Ensure all text is in ${langContext.name}, culturally sensitive, and professionally appropriate.`;
}

// Fallback basic analysis when AI is not available
function getBasicAnalysis(answers: number[], language: string): AIAnalysisResult {
  const validAnswers = answers.filter(a => a !== null);
  const averageScore = validAnswers.reduce((sum, answer) => sum + answer, 0) / validAnswers.length;
  const normalizedScore = Math.round((averageScore / 3) * 100);
  
  let level = 'Moderate';
  if (normalizedScore >= 80) level = 'Excellent';
  else if (normalizedScore >= 65) level = 'Good';
  else if (normalizedScore >= 45) level = 'Moderate';
  else if (normalizedScore >= 25) level = 'Needs Attention';
  else level = 'Seek Support';

  const feedback = {
    en: `Based on your responses, your emotional wellness score is ${normalizedScore}/100, indicating a ${level.toLowerCase()} level of emotional well-being.`,
    fr: `Basé sur vos réponses, votre score de bien-être émotionnel est ${normalizedScore}/100, indiquant un niveau ${level.toLowerCase()} de bien-être émotionnel.`,
    ar: `بناءً على إجاباتك، درجة صحتك العاطفية هي ${normalizedScore}/100، مما يشير إلى مستوى ${level} من الرفاهية العاطفية.`,
    es: `Basado en sus respuestas, su puntaje de bienestar emocional es ${normalizedScore}/100, indicando un nivel ${level.toLowerCase()} de bienestar emocional.`
  };

  return {
    score: normalizedScore,
    level,
    personalizedFeedback: feedback[language as keyof typeof feedback] || feedback.en,
    recommendations: ['Consider professional consultation', 'Practice mindfulness', 'Maintain social connections'],
    insights: ['Assessment completed', 'Results based on standard analysis'],
    strengths: ['Self-awareness', 'Willingness to assess'],
    areasForImprovement: ['Emotional regulation', 'Stress management']
  };
}

// Fallback default questions if AI generation fails
function getDefaultQuestions(language: string): PersonalizedAssessment {
  const questions = {
    en: [
      {
        text: "How often do you feel overwhelmed by daily responsibilities?",
        options: ["Never", "Rarely", "Sometimes", "Often"]
      },
      {
        text: "How satisfied are you with your current relationships?",
        options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied"]
      },
      {
        text: "How well do you handle stress in challenging situations?",
        options: ["Very well", "Well", "Okay", "Poorly"]
      },
      {
        text: "How often do you take time for self-care activities?",
        options: ["Daily", "Weekly", "Monthly", "Rarely"]
      },
      {
        text: "How confident do you feel about your future goals?",
        options: ["Very confident", "Confident", "Uncertain", "Not confident"]
      }
    ],
    fr: [
      {
        text: "À quelle fréquence vous sentez-vous dépassé par les responsabilités quotidiennes?",
        options: ["Jamais", "Rarement", "Parfois", "Souvent"]
      },
      {
        text: "Dans quelle mesure êtes-vous satisfait de vos relations actuelles?",
        options: ["Très satisfait", "Satisfait", "Neutre", "Insatisfait"]
      },
      {
        text: "Comment gérez-vous le stress dans les situations difficiles?",
        options: ["Très bien", "Bien", "Correctement", "Mal"]
      },
      {
        text: "À quelle fréquence prenez-vous du temps pour des activités de bien-être?",
        options: ["Quotidiennement", "Hebdomadairement", "Mensuellement", "Rarement"]
      },
      {
        text: "Dans quelle mesure êtes-vous confiant concernant vos objectifs futurs?",
        options: ["Très confiant", "Confiant", "Incertain", "Pas confiant"]
      }
    ]
  };

  const defaultQuestions = questions[language as keyof typeof questions] || questions.en;

  return {
    questions: defaultQuestions.map((q, index) => ({
      id: index + 1,
      text: q.text,
      options: q.options
    })),
    context: "Using default assessment questions"
  };
} 