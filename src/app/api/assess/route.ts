import { NextRequest, NextResponse } from 'next/server'
import { calculateAssessmentScore } from '@/lib/utils'
import { saveAssessment, initializeDatabase } from '@/lib/database'

export async function POST(request: NextRequest) {
  try {
    const { answers, userInfo } = await request.json()

    if (!answers || !Array.isArray(answers)) {
      return NextResponse.json(
        { error: 'Invalid answers format' },
        { status: 400 }
      )
    }

    // Initialize database tables if they don't exist
    await initializeDatabase()

    // Calculate the assessment result with user info
    const result = calculateAssessmentScore(answers, userInfo)

    // Save assessment to database
    try {
      const savedAssessment = await saveAssessment({
        userInfo,
        score: result.score,
        level: result.level,
        answers
      })

      if (savedAssessment) {
        console.log('Assessment saved to database:', {
          id: savedAssessment.id,
          timestamp: savedAssessment.created_at,
          score: result.score,
          level: result.level,
          answersCount: answers.length
        })
      } else {
        console.log('Assessment completed (database not configured):', {
          timestamp: new Date().toISOString(),
          score: result.score,
          level: result.level,
          answersCount: answers.length
        })
      }
    } catch (dbError) {
      console.error('Failed to save to database, but assessment calculated:', dbError)
      // Continue even if database save fails, so user still gets their result
    }

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