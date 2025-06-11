"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, ArrowRight, Calendar, Briefcase } from "lucide-react"
import { useTranslation } from "../hooks/useTranslation"

export interface UserInfo {
  name: string
  age: string
  gender: string
  occupation: string
  previousTherapy: string
  currentMedication: string
  supportSystem: string
  stressLevel: string
}

interface UserInfoFormProps {
  onSubmit: (userInfo: UserInfo) => void
  onSkip: () => void
}

export function UserInfoForm({ onSubmit, onSkip }: UserInfoFormProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<UserInfo>({
    name: "",
    age: "",
    gender: "",
    occupation: "",
    previousTherapy: "",
    currentMedication: "",
    supportSystem: "",
    stressLevel: ""
  })

  const handleInputChange = (field: keyof UserInfo, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name.trim()) {
      onSubmit(formData)
    }
  }

  const isFormValid = formData.name.trim().length > 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
        >
          <User className="w-8 h-8 text-white" />
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Personal Information
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Sharing some basic information helps us provide more personalized insights. 
          All information is confidential and used only for assessment purposes.
        </p>
      </div>

      <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Tell Us About Yourself</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <label className="block text-sm font-semibold text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your first name"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <label className="block text-sm font-semibold text-gray-700">
                  Age Range
                </label>
                <select
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select age range</option>
                  <option value="18-24">18-24</option>
                  <option value="25-34">25-34</option>
                  <option value="35-44">35-44</option>
                  <option value="45-54">45-54</option>
                  <option value="55-64">55-64</option>
                  <option value="65+">65+</option>
                </select>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <label className="block text-sm font-semibold text-gray-700">
                  {t('form.gender')}
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">{t('form.selectGender')}</option>
                  <option value="female">{t('common.female')}</option>
                  <option value="male">{t('common.male')}</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-2"
              >
                <label className="block text-sm font-semibold text-gray-700">
                  Current Occupation
                </label>
                <input
                  type="text"
                  value={formData.occupation}
                  onChange={(e) => handleInputChange("occupation", e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="e.g., Student, Teacher, Engineer"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-4 pt-4 border-t border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                Mental Health Background (Optional)
              </h3>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Previous Therapy Experience
                </label>
                <select
                  value={formData.previousTherapy}
                  onChange={(e) => handleInputChange("previousTherapy", e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select option</option>
                  <option value="never">Never had therapy</option>
                  <option value="past">Had therapy in the past</option>
                  <option value="current">Currently in therapy</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Current Medication for Mental Health
                </label>
                <select
                  value={formData.currentMedication}
                  onChange={(e) => handleInputChange("currentMedication", e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select option</option>
                  <option value="none">No medication</option>
                  <option value="yes">Yes, taking medication</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-4 pt-4 border-t border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-purple-500" />
                Current Situation
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Support System
                  </label>
                  <select
                    value={formData.supportSystem}
                    onChange={(e) => handleInputChange("supportSystem", e.target.value)}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select option</option>
                    <option value="strong">Strong support from family/friends</option>
                    <option value="moderate">Some support from family/friends</option>
                    <option value="limited">Limited support</option>
                    <option value="none">No support system</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Current Stress Level
                  </label>
                  <select
                    value={formData.stressLevel}
                    onChange={(e) => handleInputChange("stressLevel", e.target.value)}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select option</option>
                    <option value="low">Low stress</option>
                    <option value="moderate">Moderate stress</option>
                    <option value="high">High stress</option>
                    <option value="overwhelming">Overwhelming stress</option>
                  </select>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row justify-between items-center pt-6 space-y-4 sm:space-y-0"
            >
              <Button
                type="button"
                variant="ghost"
                onClick={onSkip}
                className="text-gray-600 hover:text-gray-800"
              >
                Skip this step
              </Button>
              
              <Button
                type="submit"
                disabled={!isFormValid}
                size="lg"
                className="min-w-[200px] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Continue to Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-6"
      >
        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
          🔒 Your information is completely confidential and is used only to personalize your assessment results. 
          We do not store or share your personal data.
        </p>
      </motion.div>
    </motion.div>
  )
} 