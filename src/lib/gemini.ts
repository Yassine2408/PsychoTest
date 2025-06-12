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

// Function to check if Gemini is configured
export function isGeminiConfigured(): boolean {
  return Boolean(getGeminiApiKey());
}

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

    const prompt = createPrompt(userInfo, language);
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Parse the JSON response from Gemini
    const parsedResponse = JSON.parse(text);
    
    return {
      questions: parsedResponse.questions.map((q: any, index: number) => ({
        id: index + 1,
        text: q.text,
        options: q.options
      })),
      context: parsedResponse.context || ''
    };
  } catch (error) {
    console.error('Failed to generate personalized questions:', error);
    // Fallback to default questions if AI generation fails
    return getDefaultQuestions(language);
  }
}

// Create a personalized prompt based on user information
function createPrompt(userInfo: UserInfo, language: string): string {
  const languageNames = {
    en: 'English',
    fr: 'French',
    ar: 'Arabic',
    es: 'Spanish'
  };

  const langName = languageNames[language as keyof typeof languageNames] || 'English';

  return `You are a professional psychologist creating a personalized emotional wellness assessment. 

User Profile:
- Name: ${userInfo.name || 'Not provided'}
- Age: ${userInfo.age || 'Not provided'}
- Gender: ${userInfo.gender || 'Not provided'}
- Occupation: ${userInfo.occupation || 'Not provided'}
- Location: ${userInfo.location || 'Not provided'}

Create exactly 15 personalized questions in ${langName} that assess emotional well-being, tailored to this person's profile. Each question should have 4 multiple choice options.

Consider:
- Age-appropriate concerns and life stages
- Occupation-related stress factors
- Cultural context from their location
- Gender-specific considerations when relevant
- Use their name occasionally to make it personal

Response format (JSON only, no other text):
{
  "context": "Brief explanation of how questions were personalized for this user",
  "questions": [
    {
      "text": "Question text using their name/context",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"]
    }
  ]
}

Make questions that range from basic emotional awareness to deeper psychological insights. Include questions about stress, relationships, work-life balance, self-esteem, and coping mechanisms relevant to their profile.`;
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