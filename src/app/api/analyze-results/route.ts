import { NextRequest, NextResponse } from 'next/server'
import { analyzeAssessmentWithAI, UserInfo, GeneratedQuestion } from '@/lib/gemini'

export async function POST(request: NextRequest) {
  try {
    const { 
      userInfo, 
      questions, 
      answers, 
      language = 'en' 
    }: { 
      userInfo: UserInfo; 
      questions: GeneratedQuestion[];
      answers: number[];
      language?: string;
    } = await request.json()

    if (!questions || !Array.isArray(questions) || !answers || !Array.isArray(answers)) {
      return NextResponse.json(
        { error: 'Questions and answers are required' },
        { status: 400 }
      )
    }

    console.log('🔍 Starting AI analysis for:', {
      name: userInfo?.name || 'Anonymous',
      questionsCount: questions.length,
      answersCount: answers.filter(a => a !== null).length,
      language
    })

    // Analyze results using Gemini AI
    const aiAnalysis = await analyzeAssessmentWithAI(userInfo, questions, answers, language)

    console.log('✅ AI analysis completed successfully')

    return NextResponse.json({
      success: true,
      analysis: aiAnalysis,
      aiPowered: true
    })
  } catch (error) {
    console.error('❌ AI analysis API error:', error)
    return NextResponse.json(
      { error: 'Failed to analyze assessment results' },
      { status: 500 }
    )
  }
} 