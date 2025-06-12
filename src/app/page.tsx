"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PersonalizedQuestion } from "@/components/PersonalizedQuestion"
import { AIResults } from "@/components/AIResults"
import { UserInfoForm, UserInfo } from "@/components/UserInfoForm"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Brain, Heart, ArrowRight, ArrowLeft, Sparkles, Users, Clock } from "lucide-react"
import { AssessmentResult } from "@/lib/utils"
import { useTranslation } from "../hooks/useTranslation"
import { GeneratedQuestion } from "@/lib/gemini"

type AppState = 'welcome' | 'userInfo' | 'generating' | 'assessment' | 'results'

interface PersonalizedAssessment {
  questions: GeneratedQuestion[];
  context: string;
}

export default function Home() {
  const { t, language } = useTranslation();
  const [currentState, setCurrentState] = useState<AppState>('welcome')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [result, setResult] = useState<AssessmentResult | null>(null)
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [personalizedQuestions, setPersonalizedQuestions] = useState<GeneratedQuestion[]>([])
  const [assessmentContext, setAssessmentContext] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const totalQuestions = personalizedQuestions.length || 15

  const handleAnswerSelect = (value: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      handleSubmitAssessment()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmitAssessment = async () => {
    setIsLoading(true)
    try {
      console.log('🚀 Starting AI-powered assessment analysis...')
      
      // First, use AI to analyze the results
      const aiAnalysisResponse = await fetch('/api/analyze-results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userInfo: userInfo || {},
          questions: personalizedQuestions,
          answers: answers,
          language: language 
        }),
      })

      let aiAnalysis = null
      if (aiAnalysisResponse.ok) {
        const aiData = await aiAnalysisResponse.json()
        if (aiData.success) {
          aiAnalysis = aiData.analysis
          console.log('✅ AI analysis successful:', aiAnalysis.level)
        }
      }

      // Then save to database with AI results
      const response = await fetch('/api/assess', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          answers, 
          userInfo,
          personalizedContext: assessmentContext,
          aiAnalysis: aiAnalysis,
          personalizedQuestions: personalizedQuestions
        }),
      })

      const data = await response.json()
      
      if (data.success) {
        // Use AI analysis if available, otherwise use basic calculation
        const finalResult = aiAnalysis ? {
          ...data.result,
          ...aiAnalysis,
          aiPowered: true
        } : {
          ...data.result,
          aiPowered: false
        }
        
        setResult(finalResult)
        setCurrentState('results')
        console.log('🎉 Assessment completed with AI analysis!')
      } else {
        console.error('Assessment failed:', data.error)
      }
    } catch (error) {
      console.error('Error submitting assessment:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleRetake = () => {
    setCurrentState('welcome')
    setCurrentQuestion(0)
    setAnswers([])
    setResult(null)
    setUserInfo(null)
    setPersonalizedQuestions([])
    setAssessmentContext("")
  }

  const startAssessment = () => {
    setCurrentState('userInfo')
  }

  const handleUserInfoSubmit = async (userData: UserInfo) => {
    setUserInfo(userData)
    await generatePersonalizedQuestions(userData)
  }

     const handleUserInfoSkip = async () => {
     // Generate questions without user info
     await generatePersonalizedQuestions({})
   }

  const generatePersonalizedQuestions = async (userData: Partial<UserInfo>) => {
    setIsGenerating(true)
    setCurrentState('generating')
    
    try {
      // Convert UserInfo to the format expected by Gemini
      const geminiUserInfo = {
        name: userData.name || '',
        age: userData.age ? parseInt(userData.age) : undefined,
        gender: userData.gender || '',
        occupation: userData.occupation || '',
        location: undefined // Not available in current UserInfo
      }

      const response = await fetch('/api/generate-questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userInfo: geminiUserInfo,
          language: language 
        }),
      })

      const data = await response.json()
      
      if (data.success) {
        setPersonalizedQuestions(data.assessment.questions)
        setAssessmentContext(data.assessment.context)
        setAnswers(new Array(data.assessment.questions.length).fill(null))
        setCurrentState('assessment')
        console.log('Generated personalized assessment:', data.assessment.context)
      } else {
        console.error('Failed to generate questions:', data.error)
        // Fallback to assessment with default questions
        setCurrentState('assessment')
      }
    } catch (error) {
      console.error('Error generating questions:', error)
      // Fallback to assessment with default questions
      setCurrentState('assessment')
    } finally {
      setIsGenerating(false)
    }
  }

  const progress = totalQuestions > 0 ? ((currentQuestion + 1) / totalQuestions) * 100 : 0
  const isCurrentAnswered = answers[currentQuestion] !== null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSwitcher />
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-4 sm:py-8">
        <AnimatePresence mode="wait">
          {currentState === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Header */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
              >
                <Brain className="w-10 h-10 text-white" />
              </motion.div>

              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {t('common.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                {t('common.description')}
              </p>

              {/* AI-Powered Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-purple-700 font-medium mb-8">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Personalized Assessment
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: Sparkles,
                    title: "AI-Personalized Questions",
                    description: "Questions tailored specifically to your profile using advanced AI"
                  },
                  {
                    icon: Users,
                    title: "Individual Context",
                    description: "Assessment considers your age, occupation, and personal background"
                  },
                  {
                    icon: Brain,
                    title: "Deeper Insights",
                    description: "More accurate results through personalized psychological evaluation"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="h-full backdrop-blur-sm bg-white/80 shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Assessment Info */}
              <Card className="max-w-2xl mx-auto backdrop-blur-sm bg-white/90 shadow-xl border-0 mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                    Personalized Assessment Process
                  </CardTitle>
                  <CardDescription className="text-base">
                    Experience a truly personalized emotional wellness evaluation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-semibold text-sm">1</span>
                    </div>
                    <span className="text-gray-700">Share your basic information (optional)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-semibold text-sm">2</span>
                    </div>
                    <span className="text-gray-700">AI generates 15 personalized questions for you</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-semibold text-sm">3</span>
                    </div>
                    <span className="text-gray-700">Receive detailed, personalized insights</span>
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={startAssessment}
                size="lg"
                className="text-lg px-8 py-4 h-auto bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700"
              >
                Start Personalized Assessment
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>

              {/* Disclaimer */}
              <p className="text-sm text-gray-500 mt-8 max-w-2xl mx-auto">
                {t('common.disclaimer')}
              </p>
            </motion.div>
          )}

          {currentState === 'generating' && (
            <motion.div
              key="generating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-2xl mx-auto text-center"
            >
              <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
                <CardContent className="p-12">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center"
                  >
                    <Sparkles className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Creating Your Personalized Assessment
                  </h2>
                  <p className="text-gray-600 mb-6">
                    AI is analyzing your profile to generate questions tailored specifically for you...
                  </p>
                  
                  <div className="space-y-3">
                    {[
                      "Analyzing your profile...",
                      "Selecting relevant psychological factors...",
                      "Crafting personalized questions...",
                      "Finalizing your assessment..."
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.5 }}
                        className="text-sm text-gray-500 flex items-center justify-center"
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        {step}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {currentState === 'assessment' && personalizedQuestions.length > 0 && (
            <motion.div
              key="assessment"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Personalized Assessment
                </h1>
                {assessmentContext && (
                  <p className="text-sm text-purple-600 mb-4 bg-purple-50 px-4 py-2 rounded-lg inline-block">
                    {assessmentContext}
                  </p>
                )}
                <div className="max-w-md mx-auto">
                  <Progress value={progress} className="h-3" />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>{t('common.progress')}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <PersonalizedQuestion
                  question={personalizedQuestions[currentQuestion]}
                  selectedAnswer={answers[currentQuestion]}
                  onAnswerSelect={handleAnswerSelect}
                  questionNumber={currentQuestion + 1}
                  totalQuestions={totalQuestions}
                />
              </div>

              {/* Navigation */}
              <div className="flex justify-between max-w-2xl mx-auto">
                <Button
                  onClick={handlePrevious}
                  variant="outline"
                  disabled={currentQuestion === 0}
                  className="min-w-[120px]"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  {t('common.previous')}
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!isCurrentAnswered || isLoading}
                  className="min-w-[120px]"
                >
                  {isLoading ? (
                    t('common.processing')
                  ) : currentQuestion === totalQuestions - 1 ? (
                    t('common.viewResults')
                  ) : (
                    <>
                      {t('common.next')}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          )}

          {currentState === 'userInfo' && (
            <motion.div
              key="userInfo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <UserInfoForm onSubmit={handleUserInfoSubmit} onSkip={handleUserInfoSkip} />
            </motion.div>
          )}

          {currentState === 'results' && result && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <AIResults result={result} userInfo={userInfo || undefined} onRetake={handleRetake} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
