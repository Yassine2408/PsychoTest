import { NextRequest, NextResponse } from 'next/server'
import { calculateAssessmentScore } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const { answers, userInfo } = await request.json()

    if (!answers || !Array.isArray(answers)) {
      return NextResponse.json(
        { error: 'Invalid answers format' },
        { status: 400 }
      )
    }

    // Calculate the assessment result with user info
    const result = calculateAssessmentScore(answers, userInfo)

    // Log the assessment for analytics (in a real app, you'd save to database)
    console.log('Assessment completed:', {
      timestamp: new Date().toISOString(),
      score: result.score,
      level: result.level,
      answersCount: answers.length
    })

    return NextResponse.json({
      success: true,
      result
    })
  } catch (error) {
    console.error('Assessment API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 