interface TranslationResources {
  [key: string]: {
    common: Record<string, string>;
    form: Record<string, string>;
    questions: Record<string, string>;
    results: Record<string, string>;
    emergency: Record<string, string>;
  };
}

const resources: TranslationResources = {
  en: {
    common: {
      title: "Emotional Wellness Assessment",
      description: "Take a few minutes to understand your emotional well-being. This scientifically-informed assessment will provide personalized insights and recommendations for your mental health journey.",
      continue: "Continue",
      retake: "Retake Assessment", 
      print: "Print Results",
      skip: "Skip this step",
      loading: "Loading...",
      viewResults: "View Results",
      previous: "Previous",
      next: "Next",
      processing: "Processing...",
      male: "Male",
      female: "Female",
      startAssessment: "Start Assessment",
      comprehensiveAnalysis: "Comprehensive Analysis",
      comprehensiveAnalysisDesc: "Evaluates anxiety, depression, trauma, stress, and mood indicators",
      personalizedResults: "Personalized Results", 
      personalizedResultsDesc: "Receive tailored recommendations based on your responses",
      actionableInsights: "Actionable Insights",
      actionableInsightsDesc: "Get practical next steps to support your mental wellness",
      whatToExpect: "What to Expect",
      assessmentTime: "The assessment takes approximately 5-10 minutes to complete",
      questionsCount: "carefully crafted questions",
      evidenceBased: "Evidence-based assessment methods",
      immediateResults: "Immediate, personalized results",
      progress: "Progress",
      disclaimer: "This assessment is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Please consult with a qualified healthcare provider for any mental health concerns."
    },
    form: {
      personalInfo: "Personal Information",
      tellUsAboutYourself: "Tell Us About Yourself",
      name: "First Name *",
      namePlaceholder: "Enter your first name",
      age: "Age Range", 
      gender: "Gender",
      occupation: "Current Occupation",
      occupationPlaceholder: "e.g., Student, Teacher, Engineer",
      mentalHealthBackground: "Mental Health Background (Optional)",
      previousTherapy: "Previous Therapy Experience",
      currentMedication: "Current Medication for Mental Health",
      currentSituation: "Current Situation",
      supportSystem: "Support System",
      stressLevel: "Current Stress Level",
      selectAge: "Select age range",
      selectGender: "Select gender",
      selectOption: "Select option",
      // Age options
      age1824: "18-24",
      age2534: "25-34", 
      age3544: "35-44",
      age4554: "45-54",
      age5564: "55-64",
      age65plus: "65+",
      // Therapy options
      neverTherapy: "Never had therapy",
      pastTherapy: "Had therapy in the past",
      currentTherapy: "Currently in therapy",
      preferNotToSay: "Prefer not to say",
      // Medication options
      noMedication: "No medication",
      yesMedication: "Yes, taking medication",
      // Support system options
      strongSupport: "Strong support from family/friends",
      moderateSupport: "Some support from family/friends", 
      limitedSupport: "Limited support",
      noSupport: "No support system",
      // Stress level options
      lowStress: "Low stress",
      moderateStress: "Moderate stress",
      highStress: "High stress",
      overwhelmingStress: "Overwhelming stress",
      privacyNote: "🔒 Your information is completely confidential and is used only to personalize your assessment results.",
      continueToAssessment: "Continue to Assessment"
    },
    questions: {
      progressLabel: "Question {current} of {total}",
      // Question texts
      question1: "Over the past two weeks, how often have you felt nervous, anxious, or on edge?",
      question2: "How often have you been bothered by not being able to stop or control worrying?",
      question3: "Over the past two weeks, how often have you had little interest or pleasure in doing things?",
      question4: "How often have you felt down, depressed, or hopeless?",
      question5: "How often do you have trouble falling or staying asleep, or sleeping too much?",
      question6: "How often do you feel tired or have little energy?",
      question7: "How often do you experience unwanted memories or flashbacks of a traumatic event?",
      question8: "How often do you avoid places, people, or activities that remind you of a traumatic experience?",
      question9: "How often do you feel emotionally numb or detached from others?",
      question10: "How often do you feel overwhelmed by daily responsibilities?",
      question11: "How often do you have difficulty concentrating on tasks?",
      question12: "How often do you experience sudden mood changes?",
      question13: "How often do you feel irritable or angry without clear reason?",
      question14: "How often do you worry about things that are out of your control?",
      question15: "How often do you feel physically tense or restless?",
      
      // Answer options
      notAtAll: "Not at all",
      severalDays: "Several days",
      moreThanHalf: "More than half the days",
      nearlyEveryDay: "Nearly every day",
      never: "Never",
      rarely: "Rarely",
      sometimes: "Sometimes", 
      often: "Often",
      veryOften: "Very often",
      
      // Question indicator
      questionOf: "Question {number} of {total}"
    },
    results: {
      assessmentComplete: "Assessment Complete",
      personalizedResults: "Here are your personalized results",
      yourScore: "Your Assessment Score",
      level: "Level",
      lowLevel: "Low Level",
      moderateLevel: "Moderate Level", 
      highLevel: "High Level",
      severeLevel: "Severe Level",
      whatThisMeans: "What this means:",
      recommendations: "Recommended Next Steps",
      personalizedInsights: "Personalized Insights", 
      strengths: "Your Strengths",
      riskFactors: "Areas to Address",
      assessmentSummary: "Assessment Summary",
      name: "Name",
      age: "Age",
      score: "Score",
      assessmentDate: "Assessment Date",
      currentStress: "Current Stress",
      supportSystem: "Support System",
      professionalResources: "Professional Resources",
      crisisSupport: "Crisis Support",
      findHelp: "Find Help",
      importantNotice: "Important Notice",
      disclaimer: "This assessment is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Please consult with a qualified healthcare provider for any mental health concerns."
    },
    emergency: {
      suicideHotline: "Morocco Suicide Prevention: 0801 007 755",
      emergencyServices: "Emergency Services: 15 (SAMU) / 19 (Police)",
      mentalHealthHotline: "Mental Health Support: 0801 007 755",
      nationalHelpline: "SOS Help Morocco: +212 5 22 94 94 94"
    }
  },
  fr: {
    common: {
      title: "Évaluation du Bien-être Émotionnel",
      description: "Une évaluation complète pour comprendre votre santé mentale et émotionnelle actuelle",
      continue: "Continuer",
      retake: "Refaire l'évaluation",
      print: "Imprimer les résultats",
      skip: "Ignorer cette étape",
      loading: "Chargement...",
      viewResults: "Voir les résultats",
      previous: "Précédent",
      next: "Suivant",
      processing: "Traitement...",
      progress: "Progrès",
      male: "Homme",
      female: "Femme",
      startAssessment: "Commencer l'évaluation",
      comprehensiveAnalysis: "Analyse Complète",
      comprehensiveAnalysisDesc: "Évaluation approfondie de votre bien-être émotionnel",
      personalizedResults: "Résultats Personnalisés",
      personalizedResultsDesc: "Insights adaptés à votre profil unique",
      actionableInsights: "Conseils Pratiques",
      actionableInsightsDesc: "Recommandations concrètes pour améliorer votre bien-être",
      whatToExpect: "À quoi s'attendre",
      assessmentTime: "Prend environ 10-15 minutes à compléter",
      questionsCount: "15 questions soigneusement sélectionnées",
      evidenceBased: "Basé sur des recherches scientifiques",
      immediateResults: "Résultats immédiats avec recommandations",
      disclaimer: "Cette évaluation est uniquement à des fins informatives et ne remplace pas un avis médical professionnel, un diagnostic ou un traitement. Veuillez consulter un professionnel de santé qualifié pour toute préoccupation de santé mentale."
    },
    form: {
      personalInfo: "Informations Personnelles",
      tellUsAboutYourself: "Parlez-nous de Vous",
      name: "Prénom *",
      namePlaceholder: "Entrez votre prénom",
      age: "Tranche d'âge",
      gender: "Genre",
      occupation: "Profession Actuelle",
      occupationPlaceholder: "ex: Étudiant, Professeur, Ingénieur",
      mentalHealthBackground: "Antécédents de Santé Mentale (Optionnel)",
      previousTherapy: "Expérience Thérapeutique Antérieure",
      currentMedication: "Médicaments Actuels pour la Santé Mentale",
      currentSituation: "Situation Actuelle",
      supportSystem: "Système de Soutien",
      stressLevel: "Niveau de Stress Actuel",
      selectAge: "Sélectionner la tranche d'âge",
      selectGender: "Sélectionner le genre",
      selectOption: "Sélectionner une option",
      // Age options
      age1824: "18-24",
      age2534: "25-34",
      age3544: "35-44", 
      age4554: "45-54",
      age5564: "55-64",
      age65plus: "65+",
      // Therapy options
      neverTherapy: "Jamais eu de thérapie",
      pastTherapy: "Thérapie dans le passé",
      currentTherapy: "Actuellement en thérapie",
      preferNotToSay: "Préfère ne pas dire",
      // Medication options
      noMedication: "Aucun médicament",
      yesMedication: "Oui, prend des médicaments",
      // Support system options
      strongSupport: "Soutien fort de la famille/amis",
      moderateSupport: "Quelque soutien de la famille/amis",
      limitedSupport: "Soutien limité",
      noSupport: "Aucun système de soutien",
      // Stress level options
      lowStress: "Stress faible",
      moderateStress: "Stress modéré", 
      highStress: "Stress élevé",
      overwhelmingStress: "Stress accablant",
      privacyNote: "🔒 Vos informations sont entièrement confidentielles et utilisées uniquement pour personnaliser vos résultats d'évaluation.",
      continueToAssessment: "Continuer vers l'Évaluation"
    },
    questions: {
      progressLabel: "Question {current} sur {total}",
      // Question texts  
      question1: "Au cours des deux dernières semaines, à quelle fréquence vous êtes-vous senti nerveux, anxieux ou sur les nerfs ?",
      question2: "À quelle fréquence avez-vous été gêné par l'incapacité d'arrêter ou de contrôler vos inquiétudes ?",
      question3: "Au cours des deux dernières semaines, à quelle fréquence avez-vous eu peu d'intérêt ou de plaisir à faire des choses ?",
      question4: "À quelle fréquence vous êtes-vous senti déprimé, découragé ou sans espoir ?",
      question5: "À quelle fréquence avez-vous des difficultés à vous endormir ou à rester endormi, ou dormez-vous trop ?",
      question6: "À quelle fréquence vous sentez-vous fatigué ou manquez-vous d'énergie ?",
      question7: "À quelle fréquence vivez-vous des souvenirs indésirables ou des flashbacks d'un événement traumatisant ?",
      question8: "À quelle fréquence évitez-vous des lieux, des personnes ou des activités qui vous rappellent une expérience traumatisante ?",
      question9: "À quelle fréquence vous sentez-vous émotionnellement engourdi ou détaché des autres ?",
      question10: "À quelle fréquence vous sentez-vous dépassé par les responsabilités quotidiennes ?",
      question11: "À quelle fréquence avez-vous des difficultés à vous concentrer sur des tâches ?",
      question12: "À quelle fréquence vivez-vous des changements d'humeur soudains ?",
      question13: "À quelle fréquence vous sentez-vous irritable ou en colère sans raison claire ?",
      question14: "À quelle fréquence vous inquiétez-vous de choses qui échappent à votre contrôle ?",
      question15: "À quelle fréquence vous sentez-vous physiquement tendu ou agité ?",
      
      // Answer options
      notAtAll: "Pas du tout",
      severalDays: "Plusieurs jours",
      moreThanHalf: "Plus de la moitié des jours",
      nearlyEveryDay: "Presque tous les jours",
      never: "Jamais",
      rarely: "Rarement",
      sometimes: "Parfois",
      often: "Souvent", 
      veryOften: "Très souvent",
      
      // Question indicator
      questionOf: "Question {number} sur {total}"
    },
    results: {
      yourScore: "Votre Score d'Évaluation",
      level: "Niveau",
      recommendations: "Recommandations",
      personalizedInsights: "Aperçus Personnalisés",
      strengths: "Vos Forces",
      riskFactors: "Domaines à Traiter",
      professionalResources: "Ressources Professionnelles",
      crisisSupport: "Soutien de Crise",
      findHelp: "Trouver de l'Aide",
      assessmentSummary: "Résumé de l'Évaluation",
      importantNotice: "Avis Important",
      disclaimer: "This assessment is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Please consult with a qualified healthcare provider for any mental health concerns."
    },
    emergency: {
      suicideHotline: "Prévention du Suicide Maroc: 0801 007 755",
      emergencyServices: "Services d'Urgence: 15 (SAMU) / 19 (Police)",
      mentalHealthHotline: "Soutien Santé Mentale: 0801 007 755",
      nationalHelpline: "SOS Aide Maroc: +212 5 22 94 94 94"
    }
  },
  ar: {
    common: {
      title: "تقييم الصحة النفسية والعاطفية",
      description: "خذ بضع دقائق لفهم صحتك العاطفية. سيوفر لك هذا التقييم المستند علمياً رؤى شخصية وتوصيات لرحلة صحتك النفسية.",
      continue: "متابعة",
      retake: "إعادة التقييم",
      print: "طباعة النتائج",
      skip: "تخطي هذه الخطوة", 
      loading: "جاري التحميل...",
      viewResults: "عرض النتائج",
      previous: "السابق",
      next: "التالي",
      processing: "جاري المعالجة...",
      male: "ذكر",
      female: "أنثى",
      startAssessment: "بدء التقييم",
      comprehensiveAnalysis: "تحليل شامل",
      comprehensiveAnalysisDesc: "يقيم القلق والاكتئاب والصدمات والتوتر ومؤشرات المزاج",
      personalizedResults: "نتائج شخصية",
      personalizedResultsDesc: "احصل على توصيات مخصصة بناءً على إجاباتك",
      actionableInsights: "رؤى قابلة للتطبيق",
      actionableInsightsDesc: "احصل على خطوات عملية لدعم صحتك النفسية",
      whatToExpect: "ما تتوقعه",
      assessmentTime: "يستغرق التقييم حوالي 5-10 دقائق للإكمال",
      questionsCount: "أسئلة مصممة بعناية",
      evidenceBased: "طرق تقييم مبنية على الأدلة",
      immediateResults: "نتائج فورية وشخصية",
      progress: "التقدم",
      disclaimer: "هذا التقييم لأغراض إعلامية فقط وليس بديلاً عن المشورة الطبية المهنية أو التشخيص أو العلاج. يرجى استشارة مقدم رعاية صحية مؤهل لأي مخاوف صحية نفسية."
    },
    form: {
      personalInfo: "المعلومات الشخصية",
      tellUsAboutYourself: "أخبرنا عن نفسك",
      name: "الاسم الأول *",
      namePlaceholder: "أدخل اسمك الأول",
      age: "الفئة العمرية",
      gender: "الجنس",
      occupation: "المهنة الحالية", 
      occupationPlaceholder: "مثال: طالب، معلم، مهندس",
      mentalHealthBackground: "السوابق النفسية (اختياري)",
      previousTherapy: "التجربة العلاجية السابقة",
      currentMedication: "الأدوية الحالية للصحة النفسية",
      currentSituation: "الوضع الحالي",
      supportSystem: "نظام الدعم",
      stressLevel: "مستوى التوتر الحالي",
      selectAge: "اختر الفئة العمرية",
      selectGender: "اختر الجنس",
      selectOption: "اختر خياراً",
      // Age options
      age1824: "18-24",
      age2534: "25-34",
      age3544: "35-44",
      age4554: "45-54", 
      age5564: "55-64",
      age65plus: "65+",
      // Therapy options
      neverTherapy: "لم أتلق علاجاً نفسياً أبداً",
      pastTherapy: "تلقيت علاجاً نفسياً في الماضي",
      currentTherapy: "أتلقى علاجاً نفسياً حالياً",
      preferNotToSay: "أفضل عدم القول",
      // Medication options
      noMedication: "لا أتناول أدوية",
      yesMedication: "نعم، أتناول أدوية",
      // Support system options
      strongSupport: "دعم قوي من العائلة/الأصدقاء",
      moderateSupport: "بعض الدعم من العائلة/الأصدقاء",
      limitedSupport: "دعم محدود",
      noSupport: "لا يوجد نظام دعم",
      // Stress level options
      lowStress: "توتر منخفض",
      moderateStress: "توتر متوسط",
      highStress: "توتر عالي",
      overwhelmingStress: "توتر مرهق",
      privacyNote: "🔒 معلوماتك سرية تماماً وتُستخدم فقط لتخصيص نتائج التقييم الخاصة بك.",
      continueToAssessment: "المتابعة إلى التقييم"
    },
    questions: {
      progressLabel: "السؤال {current} من {total}",
      // Question texts
      question1: "خلال الأسبوعين الماضيين، كم مرة شعرت بالتوتر أو القلق أو الانزعاج؟",
      question2: "كم مرة انزعجت من عدم قدرتك على التوقف أو السيطرة على القلق؟",
      question3: "خلال الأسبوعين الماضيين، كم مرة كان لديك اهتمام قليل أو متعة في فعل الأشياء؟",
      question4: "كم مرة شعرت بالحزن أو الاكتئاب أو اليأس؟",
      question5: "كم مرة واجهت صعوبة في النوم أو البقاء نائماً، أو النوم كثيراً؟",
      question6: "كم مرة تشعر بالتعب أو لديك طاقة قليلة؟",
      question7: "كم مرة تواجه ذكريات غير مرغوب فيها أو استرجاع لحدث صادم؟",
      question8: "كم مرة تتجنب الأماكن أو الأشخاص أو الأنشطة التي تذكرك بتجربة صادمة؟",
      question9: "كم مرة تشعر بالخدر العاطفي أو الانفصال عن الآخرين؟",
      question10: "كم مرة تشعر بالإرهاق من المسؤوليات اليومية؟",
      question11: "كم مرة تواجه صعوبة في التركيز على المهام؟",
      question12: "كم مرة تواجه تغيرات مزاجية مفاجئة؟",
      question13: "كم مرة تشعر بالانزعاج أو الغضب دون سبب واضح؟",
      question14: "كم مرة تقلق بشأن أشياء خارجة عن سيطرتك؟",
      question15: "كم مرة تشعر بالتوتر الجسدي أو القلق؟",
      
      // Answer options
      notAtAll: "إطلاقاً",
      severalDays: "عدة أيام",
      moreThanHalf: "أكثر من نصف الأيام",
      nearlyEveryDay: "تقريباً كل يوم",
      never: "أبداً",
      rarely: "نادراً",
      sometimes: "أحياناً",
      often: "غالباً",
      veryOften: "كثيراً جداً",
      
      // Question indicator
      questionOf: "السؤال {number} من {total}"
    },
    results: {
      yourScore: "نتيجة التقييم الخاصة بك",
      level: "المستوى",
      recommendations: "التوصيات",
      personalizedInsights: "رؤى شخصية",
      strengths: "نقاط قوتك",
      riskFactors: "المجالات التي تحتاج للعمل عليها",
      professionalResources: "الموارد المهنية",
      crisisSupport: "دعم الأزمات",
      findHelp: "العثور على المساعدة",
      assessmentSummary: "ملخص التقييم",
      importantNotice: "ملاحظة مهمة",
      disclaimer: "This assessment is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Please consult with a qualified healthcare provider for any mental health concerns."
    },
    emergency: {
      suicideHotline: "الوقاية من الانتحار المغرب: 0801 007 755",
      emergencyServices: "خدمات الطوارئ: 15 (سامو) / 19 (شرطة)",
      mentalHealthHotline: "دعم الصحة النفسية: 0801 007 755",
      nationalHelpline: "SOS مساعدة المغرب: +212 5 22 94 94 94"
    }
  }
};

// Simple i18n without external dependencies
class SimpleI18n {
  private currentLanguage: string = 'fr'; // Default to French for Morocco
  private resources = resources;

  init(language: string = 'fr') {
    this.currentLanguage = language;
    return this;
  }

  changeLanguage(language: string) {
    this.currentLanguage = language;
    // Trigger re-render by dispatching a custom event
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: language }));
  }

  t(key: string, params?: Record<string, string | number>): string {
    const keys = key.split('.');
    let value: any = this.resources[this.currentLanguage];
    
    for (const k of keys) {
      value = value[k];
      if (value === undefined) {
        return key; // Return key if translation not found
      }
    }
    
    // Handle parameter interpolation
    if (params && typeof value === 'string') {
      let result = value;
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        result = result.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(paramValue));
      });
      return result;
    }
    
    return value || key;
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  getLanguages() {
    return ['fr', 'ar', 'en'];
  }
}

export const i18n = new SimpleI18n().init();
export default i18n; 