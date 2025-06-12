"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { GeneratedQuestion } from "@/lib/gemini"

interface PersonalizedQuestionProps {
  question: GeneratedQuestion
  selectedAnswer: number | null
  onAnswerSelect: (value: number) => void
  questionNumber: number
  totalQuestions: number
}

export function PersonalizedQuestion({
  question,
  selectedAnswer,
  onAnswerSelect,
  questionNumber,
  totalQuestions,
}: PersonalizedQuestionProps) {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="backdrop-blur-sm bg-white/80 shadow-xl border-0">
        <CardHeader className="text-center pb-6">
          <div className="text-sm text-muted-foreground mb-2">
            Question {questionNumber} of {totalQuestions}
          </div>
          <CardTitle className="text-xl leading-relaxed">
            {question.text}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onAnswerSelect(index)}
              className={cn(
                "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:shadow-md",
                selectedAnswer === index
                  ? "border-purple-500 bg-purple-50 text-purple-700 shadow-md"
                  : "border-gray-200 hover:border-gray-300 bg-white"
              )}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={cn(
                    "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors",
                    selectedAnswer === index
                      ? "border-purple-500 bg-purple-500"
                      : "border-gray-300"
                  )}
                >
                  {selectedAnswer === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  )}
                </div>
                <span className="font-medium">{option}</span>
              </div>
            </motion.button>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
} 