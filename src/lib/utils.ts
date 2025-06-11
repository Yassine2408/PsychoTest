import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { UserInfo } from "@/components/UserInfoForm"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Assessment scoring functions
export interface AssessmentResult {
  score: number
  level: 'Low' | 'Moderate' | 'High' | 'Severe'
  description: string
  recommendations: string[]
  personalizedInsights: string[]
  riskFactors: string[]
  strengths: string[]
}

export function calculateAssessmentScore(answers: number[], userInfo?: UserInfo): AssessmentResult {
  const totalScore = answers.reduce((sum, answer) => sum + answer, 0)
  const maxScore = answers.length * 4 // Assuming 0-4 scale
  const normalizedScore = (totalScore / maxScore) * 100

  let level: AssessmentResult['level']
  let description: string
  let recommendations: string[]
  let personalizedInsights: string[] = []
  let riskFactors: string[] = []
  let strengths: string[] = []

  // Base assessment
  if (normalizedScore <= 25) {
    level = 'Low'
    description = 'Your responses suggest minimal emotional distress. You appear to be managing well emotionally.'
    recommendations = [
      'Continue maintaining healthy habits',
      'Practice regular self-care',
      'Stay connected with supportive relationships'
    ]
    strengths = ['Good emotional regulation', 'Effective coping strategies']
  } else if (normalizedScore <= 50) {
    level = 'Moderate'
    description = 'Your responses indicate some areas of emotional concern that may benefit from attention.'
    recommendations = [
      'Consider speaking with a counselor or therapist',
      'Practice stress management techniques',
      'Engage in regular physical activity',
      'Maintain a consistent sleep schedule'
    ]
  } else if (normalizedScore <= 75) {
    level = 'High'
    description = 'Your responses suggest significant emotional distress that would benefit from professional support.'
    recommendations = [
      'Strongly consider professional counseling',
      'Reach out to trusted friends or family',
      'Practice mindfulness and relaxation techniques',
      'Consider medication evaluation if appropriate'
    ]
  } else {
    level = 'Severe'
    description = 'Your responses indicate severe emotional distress. Professional help is strongly recommended.'
    recommendations = [
      'Seek immediate professional help',
      'Contact a mental health crisis line if needed',
      'Don\'t hesitate to reach out to emergency services if you\'re in crisis',
      'Connect with a mental health professional as soon as possible'
    ]
  }

  // Personalized analysis based on user info
  if (userInfo) {
    // Age-specific insights
    if (userInfo.age === '18-24') {
      personalizedInsights.push('Young adults often experience transition-related stress')
      if (normalizedScore > 50) recommendations.push('Consider campus counseling services if you\'re a student')
    } else if (userInfo.age === '25-34') {
      personalizedInsights.push('Career and relationship pressures are common in this age group')
    } else if (userInfo.age === '55+') {
      personalizedInsights.push('Life transitions and health concerns may impact emotional wellbeing')
    }

    // Support system analysis
    if (userInfo.supportSystem === 'strong') {
      strengths.push('Strong support network')
      personalizedInsights.push('Your strong support system is a valuable asset for recovery')
    } else if (userInfo.supportSystem === 'limited' || userInfo.supportSystem === 'none') {
      riskFactors.push('Limited social support')
      recommendations.push('Consider joining support groups or community activities')
    }

    // Stress level considerations
    if (userInfo.stressLevel === 'overwhelming') {
      riskFactors.push('High baseline stress levels')
      recommendations.unshift('Address overwhelming stress as a priority')
    } else if (userInfo.stressLevel === 'low') {
      strengths.push('Good stress management')
    }

    // Previous therapy experience
    if (userInfo.previousTherapy === 'current') {
      strengths.push('Already engaged in mental health care')
      personalizedInsights.push('Continue working with your current therapist')
    } else if (userInfo.previousTherapy === 'past') {
      personalizedInsights.push('Your previous therapy experience may be helpful')
    }

    // Medication considerations
    if (userInfo.currentMedication === 'yes') {
      personalizedInsights.push('Continue following your medication regimen as prescribed')
    }

    // Occupation-based insights
    if (userInfo.occupation.toLowerCase().includes('student')) {
      personalizedInsights.push('Academic stress management techniques may be beneficial')
    } else if (userInfo.occupation.toLowerCase().includes('healthcare') || 
               userInfo.occupation.toLowerCase().includes('teacher')) {
      personalizedInsights.push('Consider job-related stress and burnout prevention')
    }
  }

  return {
    score: Math.round(normalizedScore),
    level,
    description,
    recommendations,
    personalizedInsights,
    riskFactors,
    strengths
  }
} 