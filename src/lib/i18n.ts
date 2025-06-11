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
      progressLabel: "Question {current} of {total}"
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
      progressLabel: "Question {current} sur {total}"
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
      progressLabel: "السؤال {current} من {total}"
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

  t(key: string): string {
    const keys = key.split('.');
    let value: any = this.resources[this.currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
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