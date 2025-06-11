"use client"

import { motion } from "framer-motion"
import { Question as QuestionType } from "@/data/questions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useTranslation } from "../hooks/useTranslation"

interface QuestionProps {
  question: QuestionType
  selectedAnswer: number | null
  onAnswerSelect: (value: number) => void
  questionNumber: number
  totalQuestions: number
}

export function Question({
  question,
  selectedAnswer,
  onAnswerSelect,
  questionNumber,
  totalQuestions,
}: QuestionProps) {
  const { t } = useTranslation();
  
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
            {t('questions.questionOf', { number: questionNumber, total: totalQuestions })}
          </div>
          <CardTitle className="text-xl leading-relaxed">
            {t(question.textKey)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onAnswerSelect(option.value)}
              className={cn(
                "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:shadow-md",
                selectedAnswer === option.value
                  ? "border-blue-500 bg-blue-50 text-blue-700 shadow-md"
                  : "border-gray-200 hover:border-gray-300 bg-white"
              )}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={cn(
                    "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors",
                    selectedAnswer === option.value
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300"
                  )}
                >
                  {selectedAnswer === option.value && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  )}
                </div>
                <span className="font-medium">{t(option.textKey)}</span>
              </div>
            </motion.button>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
} 