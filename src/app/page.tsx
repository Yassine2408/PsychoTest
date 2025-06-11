"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { assessmentQuestions, totalQuestions } from "@/data/questions"
import { Question } from "@/components/Question"
import { Results } from "@/components/Results"
import { UserInfoForm, UserInfo } from "@/components/UserInfoForm"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Brain, Heart, ArrowRight, ArrowLeft } from "lucide-react"
import { AssessmentResult } from "@/lib/utils"
import { useTranslation } from "../hooks/useTranslation"

type AppState = 'welcome' | 'userInfo' | 'assessment' | 'results'

export default function Home() {
  const { t } = useTranslation();
  const [currentState, setCurrentState] = useState<AppState>('welcome')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(totalQuestions).fill(null)
  )
  const [result, setResult] = useState<AssessmentResult | null>(null)
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [isLoading, setIsLoading] = useState(false)

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
      const response = await fetch('/api/assess', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers, userInfo }),
      })

      const data = await response.json()
      
      if (data.success) {
        setResult(data.result)
        setCurrentState('results')
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
    setAnswers(new Array(totalQuestions).fill(null))
    setResult(null)
    setUserInfo(null)
  }

  const startAssessment = () => {
    setCurrentState('userInfo')
  }

  const handleUserInfoSubmit = (userData: UserInfo) => {
    setUserInfo(userData)
    setCurrentState('assessment')
  }

  const handleUserInfoSkip = () => {
    setCurrentState('assessment')
  }

  const progress = ((currentQuestion + 1) / totalQuestions) * 100
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
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                {t('common.description')}
              </p>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: Heart,
                    title: t('common.comprehensiveAnalysis'),
                    description: t('common.comprehensiveAnalysisDesc')
                  },
                  {
                    icon: Brain,
                    title: t('common.personalizedResults'),
                    description: t('common.personalizedResultsDesc')
                  },
                  {
                    icon: ArrowRight,
                    title: t('common.actionableInsights'),
                    description: t('common.actionableInsightsDesc')
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
                        <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-blue-600" />
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
                  <CardTitle className="text-2xl">{t('common.whatToExpect')}</CardTitle>
                  <CardDescription className="text-base">
                    {t('common.assessmentTime')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-semibold text-sm">15</span>
                    </div>
                    <span className="text-gray-700">{t('common.questionsCount')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-700">{t('common.evidenceBased')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{t('common.immediateResults')}</span>
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={startAssessment}
                size="lg"
                className="text-lg px-8 py-4 h-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
{t('common.startAssessment')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              {/* Disclaimer */}
              <p className="text-sm text-gray-500 mt-8 max-w-2xl mx-auto">
                This assessment is for informational purposes only and is not a substitute for professional medical advice, 
                diagnosis, or treatment. Please consult with a qualified healthcare provider for any mental health concerns.
              </p>
            </motion.div>
          )}

          {currentState === 'assessment' && (
            <motion.div
              key="assessment"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Emotional Wellness Assessment
                </h1>
                <div className="max-w-md mx-auto">
                  <Progress value={progress} className="h-3" />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>Progress</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <Question
                  question={assessmentQuestions[currentQuestion]}
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
                  Previous
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!isCurrentAnswered || isLoading}
                  className="min-w-[120px]"
                >
                  {isLoading ? (
                    "Processing..."
                  ) : currentQuestion === totalQuestions - 1 ? (
                    "View Results"
                  ) : (
                    <>
                      Next
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
              <Results result={result} userInfo={userInfo || undefined} onRetake={handleRetake} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
