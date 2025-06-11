export interface Question {
  id: number
  textKey: string
  options: {
    textKey: string
    value: number
  }[]
  category: 'anxiety' | 'depression' | 'trauma' | 'stress' | 'mood'
}

export const assessmentQuestions: Question[] = [
  {
    id: 1,
    textKey: "questions.question1",
    category: "anxiety",
    options: [
      { textKey: "questions.notAtAll", value: 0 },
      { textKey: "questions.severalDays", value: 1 },
      { textKey: "questions.moreThanHalf", value: 2 },
      { textKey: "questions.nearlyEveryDay", value: 3 }
    ]
  },
  {
    id: 2,
    textKey: "questions.question2",
    category: "anxiety",
    options: [
      { textKey: "questions.notAtAll", value: 0 },
      { textKey: "questions.severalDays", value: 1 },
      { textKey: "questions.moreThanHalf", value: 2 },
      { textKey: "questions.nearlyEveryDay", value: 3 }
    ]
  },
  {
    id: 3,
    textKey: "questions.question3",
    category: "depression",
    options: [
      { textKey: "questions.notAtAll", value: 0 },
      { textKey: "questions.severalDays", value: 1 },
      { textKey: "questions.moreThanHalf", value: 2 },
      { textKey: "questions.nearlyEveryDay", value: 3 }
    ]
  },
  {
    id: 4,
    textKey: "questions.question4",
    category: "depression",
    options: [
      { textKey: "questions.notAtAll", value: 0 },
      { textKey: "questions.severalDays", value: 1 },
      { textKey: "questions.moreThanHalf", value: 2 },
      { textKey: "questions.nearlyEveryDay", value: 3 }
    ]
  },
  {
    id: 5,
    textKey: "questions.question5",
    category: "depression",
    options: [
      { textKey: "questions.notAtAll", value: 0 },
      { textKey: "questions.severalDays", value: 1 },
      { textKey: "questions.moreThanHalf", value: 2 },
      { textKey: "questions.nearlyEveryDay", value: 3 }
    ]
  },
  {
    id: 6,
    textKey: "questions.question6",
    category: "depression",
    options: [
      { textKey: "questions.notAtAll", value: 0 },
      { textKey: "questions.severalDays", value: 1 },
      { textKey: "questions.moreThanHalf", value: 2 },
      { textKey: "questions.nearlyEveryDay", value: 3 }
    ]
  },
  {
    id: 7,
    textKey: "questions.question7",
    category: "trauma",
    options: [
      { textKey: "questions.never", value: 0 },
      { textKey: "questions.rarely", value: 1 },
      { textKey: "questions.sometimes", value: 2 },
      { textKey: "questions.often", value: 3 },
      { textKey: "questions.veryOften", value: 4 }
    ]
  },
  {
    id: 8,
    textKey: "questions.question8",
    category: "trauma",
    options: [
      { textKey: "questions.never", value: 0 },
      { textKey: "questions.rarely", value: 1 },
      { textKey: "questions.sometimes", value: 2 },
      { textKey: "questions.often", value: 3 },
      { textKey: "questions.veryOften", value: 4 }
    ]
  },
  {
    id: 9,
    textKey: "questions.question9",
    category: "trauma",
    options: [
      { textKey: "questions.never", value: 0 },
      { textKey: "questions.rarely", value: 1 },
      { textKey: "questions.sometimes", value: 2 },
      { textKey: "questions.often", value: 3 },
      { textKey: "questions.veryOften", value: 4 }
    ]
  },
  {
    id: 10,
    textKey: "questions.question10",
    category: "stress",
    options: [
      { textKey: "questions.never", value: 0 },
      { textKey: "questions.rarely", value: 1 },
      { textKey: "questions.sometimes", value: 2 },
      { textKey: "questions.often", value: 3 },
      { textKey: "questions.veryOften", value: 4 }
    ]
  },
  {
    id: 11,
    textKey: "questions.question11",
    category: "stress",
    options: [
      { textKey: "questions.never", value: 0 },
      { textKey: "questions.rarely", value: 1 },
      { textKey: "questions.sometimes", value: 2 },
      { textKey: "questions.often", value: 3 },
      { textKey: "questions.veryOften", value: 4 }
    ]
  },
  {
    id: 12,
    textKey: "questions.question12",
    category: "mood",
    options: [
      { textKey: "questions.never", value: 0 },
      { textKey: "questions.rarely", value: 1 },
      { textKey: "questions.sometimes", value: 2 },
      { textKey: "questions.often", value: 3 },
      { textKey: "questions.veryOften", value: 4 }
    ]
  },
  {
    id: 13,
    textKey: "questions.question13",
    category: "mood",
    options: [
      { textKey: "questions.never", value: 0 },
      { textKey: "questions.rarely", value: 1 },
      { textKey: "questions.sometimes", value: 2 },
      { textKey: "questions.often", value: 3 },
      { textKey: "questions.veryOften", value: 4 }
    ]
  },
  {
    id: 14,
    textKey: "questions.question14",
    category: "anxiety",
    options: [
      { textKey: "questions.never", value: 0 },
      { textKey: "questions.rarely", value: 1 },
      { textKey: "questions.sometimes", value: 2 },
      { textKey: "questions.often", value: 3 },
      { textKey: "questions.veryOften", value: 4 }
    ]
  },
  {
    id: 15,
    textKey: "questions.question15",
    category: "anxiety",
    options: [
      { textKey: "questions.never", value: 0 },
      { textKey: "questions.rarely", value: 1 },
      { textKey: "questions.sometimes", value: 2 },
      { textKey: "questions.often", value: 3 },
      { textKey: "questions.veryOften", value: 4 }
    ]
  }
]

export const totalQuestions = assessmentQuestions.length 