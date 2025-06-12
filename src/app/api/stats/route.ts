import { NextResponse } from 'next/server'
import { getAssessmentStats, initializeDatabase } from '@/lib/database'

export async function GET() {
  try {
    // Initialize database tables if they don't exist
    await initializeDatabase()

    // Get assessment statistics
    const stats = await getAssessmentStats()

    return NextResponse.json({
      success: true,
      stats
    })
  } catch (error) {
    console.error('Stats API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    )
  }
} 