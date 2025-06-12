"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Heart, 
  Lightbulb, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle,
  Sparkles,
  RotateCcw,
  Download,
  Star
} from "lucide-react"
import { AssessmentResult } from "@/lib/utils"
import { UserInfo } from "@/components/UserInfoForm"

interface AIResultsProps {
  result: AssessmentResult & {
    personalizedFeedback?: string;
    recommendations?: string[];
    insights?: string[];
    strengths?: string[];
    areasForImprovement?: string[];
    aiPowered?: boolean;
  }
  userInfo?: UserInfo
  onRetake: () => void
}

export function AIResults({ result, userInfo, onRetake }: AIResultsProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 65) return "text-blue-600"
    if (score >= 45) return "text-yellow-600"
    if (score >= 25) return "text-orange-600"
    return "text-red-600"
  }

  const getScoreBackground = (score: number) => {
    if (score >= 80) return "bg-green-50 border-green-200"
    if (score >= 65) return "bg-blue-50 border-blue-200"
    if (score >= 45) return "bg-yellow-50 border-yellow-200"
    if (score >= 25) return "bg-orange-50 border-orange-200"
    return "bg-red-50 border-red-200"
  }

  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 65) return "bg-blue-500"
    if (score >= 45) return "bg-yellow-500"
    if (score >= 25) return "bg-orange-500"
    return "bg-red-500"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto space-y-6"
    >
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center"
        >
          {result.aiPowered ? <Sparkles className="w-10 h-10 text-white" /> : <Brain className="w-10 h-10 text-white" />}
        </motion.div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {userInfo?.name ? `${userInfo.name}'s Assessment Results` : 'Your Assessment Results'}
        </h1>
        
        {result.aiPowered && (
          <Badge variant="secondary" className="bg-purple-100 text-purple-700 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Analysis
          </Badge>
        )}
      </div>

      {/* Score Overview */}
      <Card className={`shadow-xl border-2 ${getScoreBackground(result.score)}`}>
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl mb-4">Emotional Wellness Score</CardTitle>
          <div className={`text-6xl font-bold ${getScoreColor(result.score)} mb-4`}>
            {result.score}/100
          </div>
          <Badge 
            variant="outline" 
            className={`text-lg px-4 py-2 ${getScoreColor(result.score)} border-current`}
          >
            {result.level}
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Progress 
              value={result.score} 
              className="h-4"
              style={{ 
                background: 'rgba(0,0,0,0.1)' 
              }}
            />
            {result.personalizedFeedback && (
              <div className="bg-white/80 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-purple-600" />
                  Personalized Feedback
                </h3>
                <p className="text-gray-700 leading-relaxed">{result.personalizedFeedback}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* AI Insights Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Strengths */}
        {result.strengths && result.strengths.length > 0 && (
          <Card className="shadow-lg border-0 bg-green-50">
            <CardHeader>
              <CardTitle className="text-xl text-green-800 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Your Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {result.strengths.map((strength, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start space-x-3"
                  >
                    <Star className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800">{strength}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Areas for Improvement */}
        {result.areasForImprovement && result.areasForImprovement.length > 0 && (
          <Card className="shadow-lg border-0 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                Growth Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {result.areasForImprovement.map((area, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start space-x-3"
                  >
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800">{area}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Recommendations */}
      {result.recommendations && result.recommendations.length > 0 && (
        <Card className="shadow-lg border-0 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-xl text-purple-800 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2" />
              Personalized Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {result.recommendations.map((recommendation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white p-4 rounded-lg border border-purple-200"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-purple-800 leading-relaxed">{recommendation}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* AI Insights */}
      {result.insights && result.insights.length > 0 && (
        <Card className="shadow-lg border-0 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-xl text-indigo-800 flex items-center">
              <Brain className="w-6 h-6 mr-2" />
              Psychological Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {result.insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white p-4 rounded-lg border border-indigo-200"
                >
                  <p className="text-indigo-800 leading-relaxed">{insight}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Actions */}
      <Card className="shadow-lg border-0">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onRetake}
              variant="outline"
              className="min-w-[200px] h-12"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Take Assessment Again
            </Button>
            <Button
              onClick={() => window.print()}
              className="min-w-[200px] h-12 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700"
            >
              <Download className="w-5 h-5 mr-2" />
              Save Results
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <div className="text-center text-sm text-gray-500 max-w-2xl mx-auto">
        <p>
          This assessment is for informational purposes only and should not replace professional mental health advice. 
          If you're experiencing significant distress, please consult with a qualified mental health professional.
        </p>
        {result.aiPowered && (
          <p className="mt-2 flex items-center justify-center">
            <Sparkles className="w-4 h-4 mr-1" />
            Results generated using AI analysis for enhanced personalization
          </p>
        )}
      </div>
    </motion.div>
  )
} 