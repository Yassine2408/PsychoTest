import { NextRequest, NextResponse } from 'next/server'
import { generatePersonalizedQuestions, UserInfo } from '@/lib/gemini'

export async function POST(request: NextRequest) {
  try {
    const { userInfo, language = 'en' }: { userInfo: UserInfo; language?: string } = await request.json()

    if (!userInfo) {
      return NextResponse.json(
        { error: 'User information is required' },
        { status: 400 }
      )
    }

    console.log('Generating personalized questions for:', {
      name: userInfo.name,
      age: userInfo.age,
      occupation: userInfo.occupation,
      language
    })

    // Generate personalized questions using Gemini AI
    const personalizedAssessment = await generatePersonalizedQuestions(userInfo, language)

    console.log('Generated assessment with context:', personalizedAssessment.context)

    return NextResponse.json({
      success: true,
      assessment: personalizedAssessment,
      personalized: true
    })
  } catch (error) {
    console.error('Generate questions API error:', error)
    return NextResponse.json(
      { error: 'Failed to generate personalized questions' },
      { status: 500 }
    )
  }
} 