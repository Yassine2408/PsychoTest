"use client"

import { motion } from "framer-motion"
import { AssessmentResult } from "@/lib/utils"
import { UserInfo } from "@/components/UserInfoForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Heart, AlertTriangle, CheckCircle, XCircle, Download, Printer, TrendingUp, Shield, Target } from "lucide-react"

interface ResultsProps {
  result: AssessmentResult
  userInfo?: UserInfo
  onRetake: () => void
}

export function Results({ result, userInfo, onRetake }: ResultsProps) {
  const getIconAndColor = () => {
    switch (result.level) {
      case 'Low':
        return { icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-50' }
      case 'Moderate':
        return { icon: AlertTriangle, color: 'text-yellow-600', bgColor: 'bg-yellow-50' }
      case 'High':
        return { icon: AlertTriangle, color: 'text-orange-600', bgColor: 'bg-orange-50' }
      case 'Severe':
        return { icon: XCircle, color: 'text-red-600', bgColor: 'bg-red-50' }
    }
  }

  const { icon: Icon, color, bgColor } = getIconAndColor()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl mx-auto space-y-6"
    >
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className={`w-16 h-16 mx-auto rounded-full ${bgColor} flex items-center justify-center mb-4`}
        >
          <Icon className={`w-8 h-8 ${color}`} />
        </motion.div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Assessment Complete
        </h1>
        <p className="text-lg text-gray-600">
          Here are your personalized results
        </p>
      </div>

      {/* Score Card */}
      <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-pink-500" />
            Your Assessment Score
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              {result.score}
            </div>
            <div className={`text-xl font-semibold ${color} mb-4`}>
              {result.level} Level
            </div>
            <Progress value={result.score} className="h-3" />
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3">What this means:</h3>
            <p className="text-gray-700 leading-relaxed">
              {result.description}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-xl">Recommended Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {result.recommendations.map((recommendation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700">{recommendation}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <Card className="backdrop-blur-sm bg-amber-50/90 shadow-xl border-amber-200">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-amber-800">
              <p className="font-semibold mb-1">Important Notice</p>
              <p>
                This assessment is for informational purposes only and is not a substitute 
                for professional medical or psychological advice. If you are experiencing 
                severe distress or thoughts of self-harm, please seek immediate professional help.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personalized Insights */}
      {result.personalizedInsights.length > 0 && (
        <Card className="backdrop-blur-sm bg-blue-50/90 shadow-xl border-blue-200">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
              Personalized Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {result.personalizedInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-3 p-3 bg-white/70 rounded-lg"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">{insight}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Strengths and Risk Factors */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Strengths */}
        {result.strengths.length > 0 && (
          <Card className="backdrop-blur-sm bg-green-50/90 shadow-xl border-green-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                Your Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {result.strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">{strength}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Risk Factors */}
        {result.riskFactors.length > 0 && (
          <Card className="backdrop-blur-sm bg-orange-50/90 shadow-xl border-orange-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Target className="w-5 h-5 mr-2 text-orange-600" />
                Areas to Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {result.riskFactors.map((factor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-700">{factor}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* User Summary (for print) */}
      {userInfo && (
        <Card className="backdrop-blur-sm bg-gray-50/90 shadow-xl border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl">Assessment Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <div><span className="font-semibold">Name:</span> {userInfo.name}</div>
                {userInfo.age && <div><span className="font-semibold">Age:</span> {userInfo.age}</div>}
                {userInfo.occupation && <div><span className="font-semibold">Occupation:</span> {userInfo.occupation}</div>}
                <div><span className="font-semibold">Assessment Date:</span> {new Date().toLocaleDateString()}</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Score:</span> {result.score}/100</div>
                <div><span className="font-semibold">Level:</span> {result.level}</div>
                {userInfo.stressLevel && <div><span className="font-semibold">Current Stress:</span> {userInfo.stressLevel}</div>}
                {userInfo.supportSystem && <div><span className="font-semibold">Support System:</span> {userInfo.supportSystem}</div>}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Professional Resources */}
      <Card className="backdrop-blur-sm bg-purple-50/90 shadow-xl border-purple-200">
        <CardHeader>
          <CardTitle className="text-xl">Professional Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Crisis Support</h4>
              <div className="space-y-2 text-sm">
                <div>• National Suicide Prevention Lifeline: 988</div>
                <div>• Crisis Text Line: Text HOME to 741741</div>
                <div>• Emergency Services: 911</div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Find Help</h4>
              <div className="space-y-2 text-sm">
                <div>• Psychology Today Therapist Finder</div>
                <div>• SAMHSA National Helpline: 1-800-662-4357</div>
                <div>• Local Community Mental Health Centers</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <Card className="backdrop-blur-sm bg-amber-50/90 shadow-xl border-amber-200">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-amber-800">
              <p className="font-semibold mb-1">Important Notice</p>
              <p>
                This assessment is for informational purposes only and is not a substitute 
                for professional medical or psychological advice. If you are experiencing 
                severe distress or thoughts of self-harm, please seek immediate professional help.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 no-print">
        <Button
          onClick={onRetake}
          variant="outline"
          size="lg"
          className="min-w-[180px]"
        >
          Retake Assessment
        </Button>
        <Button
          onClick={() => window.print()}
          size="lg"
          className="min-w-[180px] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          <Printer className="mr-2 w-5 h-5" />
          Print Results
        </Button>
      </div>
    </motion.div>
  )
} 