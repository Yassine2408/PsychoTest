export interface Question {
  id: number
  text: string
  options: {
    text: string
    value: number
  }[]
  category: 'anxiety' | 'depression' | 'trauma' | 'stress' | 'mood'
}

export const assessmentQuestions: Question[] = [
  {
    id: 1,
    text: "Over the past two weeks, how often have you felt nervous, anxious, or on edge?",
    category: "anxiety",
    options: [
      { text: "Not at all", value: 0 },
      { text: "Several days", value: 1 },
      { text: "More than half the days", value: 2 },
      { text: "Nearly every day", value: 3 }
    ]
  },
  {
    id: 2,
    text: "How often have you been bothered by not being able to stop or control worrying?",
    category: "anxiety",
    options: [
      { text: "Not at all", value: 0 },
      { text: "Several days", value: 1 },
      { text: "More than half the days", value: 2 },
      { text: "Nearly every day", value: 3 }
    ]
  },
  {
    id: 3,
    text: "Over the past two weeks, how often have you had little interest or pleasure in doing things?",
    category: "depression",
    options: [
      { text: "Not at all", value: 0 },
      { text: "Several days", value: 1 },
      { text: "More than half the days", value: 2 },
      { text: "Nearly every day", value: 3 }
    ]
  },
  {
    id: 4,
    text: "How often have you felt down, depressed, or hopeless?",
    category: "depression",
    options: [
      { text: "Not at all", value: 0 },
      { text: "Several days", value: 1 },
      { text: "More than half the days", value: 2 },
      { text: "Nearly every day", value: 3 }
    ]
  },
  {
    id: 5,
    text: "How often do you have trouble falling or staying asleep, or sleeping too much?",
    category: "depression",
    options: [
      { text: "Not at all", value: 0 },
      { text: "Several days", value: 1 },
      { text: "More than half the days", value: 2 },
      { text: "Nearly every day", value: 3 }
    ]
  },
  {
    id: 6,
    text: "How often do you feel tired or have little energy?",
    category: "depression",
    options: [
      { text: "Not at all", value: 0 },
      { text: "Several days", value: 1 },
      { text: "More than half the days", value: 2 },
      { text: "Nearly every day", value: 3 }
    ]
  },
  {
    id: 7,
    text: "How often do you experience unwanted memories or flashbacks of a traumatic event?",
    category: "trauma",
    options: [
      { text: "Never", value: 0 },
      { text: "Rarely", value: 1 },
      { text: "Sometimes", value: 2 },
      { text: "Often", value: 3 },
      { text: "Very often", value: 4 }
    ]
  },
  {
    id: 8,
    text: "How often do you avoid places, people, or activities that remind you of a traumatic experience?",
    category: "trauma",
    options: [
      { text: "Never", value: 0 },
      { text: "Rarely", value: 1 },
      { text: "Sometimes", value: 2 },
      { text: "Often", value: 3 },
      { text: "Very often", value: 4 }
    ]
  },
  {
    id: 9,
    text: "How often do you feel emotionally numb or detached from others?",
    category: "trauma",
    options: [
      { text: "Never", value: 0 },
      { text: "Rarely", value: 1 },
      { text: "Sometimes", value: 2 },
      { text: "Often", value: 3 },
      { text: "Very often", value: 4 }
    ]
  },
  {
    id: 10,
    text: "How often do you feel overwhelmed by daily responsibilities?",
    category: "stress",
    options: [
      { text: "Never", value: 0 },
      { text: "Rarely", value: 1 },
      { text: "Sometimes", value: 2 },
      { text: "Often", value: 3 },
      { text: "Very often", value: 4 }
    ]
  },
  {
    id: 11,
    text: "How often do you have difficulty concentrating on tasks?",
    category: "stress",
    options: [
      { text: "Never", value: 0 },
      { text: "Rarely", value: 1 },
      { text: "Sometimes", value: 2 },
      { text: "Often", value: 3 },
      { text: "Very often", value: 4 }
    ]
  },
  {
    id: 12,
    text: "How often do you experience sudden mood changes?",
    category: "mood",
    options: [
      { text: "Never", value: 0 },
      { text: "Rarely", value: 1 },
      { text: "Sometimes", value: 2 },
      { text: "Often", value: 3 },
      { text: "Very often", value: 4 }
    ]
  },
  {
    id: 13,
    text: "How often do you feel irritable or angry without clear reason?",
    category: "mood",
    options: [
      { text: "Never", value: 0 },
      { text: "Rarely", value: 1 },
      { text: "Sometimes", value: 2 },
      { text: "Often", value: 3 },
      { text: "Very often", value: 4 }
    ]
  },
  {
    id: 14,
    text: "How often do you worry about things that are out of your control?",
    category: "anxiety",
    options: [
      { text: "Never", value: 0 },
      { text: "Rarely", value: 1 },
      { text: "Sometimes", value: 2 },
      { text: "Often", value: 3 },
      { text: "Very often", value: 4 }
    ]
  },
  {
    id: 15,
    text: "How often do you feel physically tense or restless?",
    category: "anxiety",
    options: [
      { text: "Never", value: 0 },
      { text: "Rarely", value: 1 },
      { text: "Sometimes", value: 2 },
      { text: "Often", value: 3 },
      { text: "Very often", value: 4 }
    ]
  }
]

export const totalQuestions = assessmentQuestions.length 