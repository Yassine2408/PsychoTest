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
      immediateResults: "Immediate, personalized results"
    },
    form: {
      personalInfo: "Personal Information",
      name: "Full Name",
      age: "Age Range", 
      gender: "Gender",
      occupation: "Current Occupation",
      mentalHealthBackground: "Mental Health Background (Optional)",
      previousTherapy: "Previous Therapy Experience",
      currentMedication: "Current Medication for Mental Health",
      currentSituation: "Current Situation",
      supportSystem: "Support System",
      stressLevel: "Current Stress Level",
      selectAge: "Select age range",
      selectGender: "Select gender",
      selectOption: "Select option",
      privacyNote: "🔒 Your information is completely confidential and is used only to personalize your assessment results."
    },
    questions: {
      progressLabel: "Question {current} of {total}"
    },
    results: {
      yourScore: "Your Assessment Score",
      level: "Level",
      recommendations: "Recommendations",
      personalizedInsights: "Personalized Insights", 
      strengths: "Your Strengths",
      riskFactors: "Areas to Address",
      professionalResources: "Professional Resources",
      crisisSupport: "Crisis Support",
      findHelp: "Find Help",
      assessmentSummary: "Assessment Summary",
      importantNotice: "Important Notice",
      disclaimer: "This assessment is for informational purposes only and is not a substitute for professional medical or psychological advice."
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
      description: "Prenez quelques minutes pour comprendre votre bien-être émotionnel. Cette évaluation scientifiquement informée vous fournira des insights personnalisés et des recommandations pour votre parcours de santé mentale.",
      continue: "Continuer",
      retake: "Refaire l'évaluation",
      print: "Imprimer les résultats",
      skip: "Passer cette étape",
      loading: "Chargement...",
      male: "Homme",
      female: "Femme",
      startAssessment: "Commencer l'Évaluation",
      comprehensiveAnalysis: "Analyse Complète",
      comprehensiveAnalysisDesc: "Évalue l'anxiété, la dépression, les traumatismes, le stress et les indicateurs d'humeur",
      personalizedResults: "Résultats Personnalisés",
      personalizedResultsDesc: "Recevez des recommandations sur mesure basées sur vos réponses",
      actionableInsights: "Aperçus Actionnables",
      actionableInsightsDesc: "Obtenez des étapes pratiques pour soutenir votre bien-être mental",
      whatToExpect: "À Quoi S'Attendre",
      assessmentTime: "L'évaluation prend environ 5 à 10 minutes à compléter",
      questionsCount: "questions soigneusement élaborées",
      evidenceBased: "Méthodes d'évaluation basées sur des preuves",
      immediateResults: "Résultats immédiats et personnalisés"
    },
    form: {
      personalInfo: "Informations Personnelles",
      name: "Nom Complet",
      age: "Tranche d'âge",
      gender: "Genre",
      occupation: "Profession Actuelle",
      mentalHealthBackground: "Antécédents de Santé Mentale (Optionnel)",
      previousTherapy: "Expérience Thérapeutique Antérieure",
      currentMedication: "Médicaments Actuels pour la Santé Mentale",
      currentSituation: "Situation Actuelle",
      supportSystem: "Système de Soutien",
      stressLevel: "Niveau de Stress Actuel",
      selectAge: "Sélectionner la tranche d'âge",
      selectGender: "Sélectionner le genre",
      selectOption: "Sélectionner une option",
      privacyNote: "🔒 Vos informations sont entièrement confidentielles et utilisées uniquement pour personnaliser vos résultats d'évaluation."
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
      disclaimer: "Cette évaluation est à des fins informatives uniquement et ne remplace pas les conseils médicaux ou psychologiques professionnels."
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
      immediateResults: "نتائج فورية وشخصية"
    },
    form: {
      personalInfo: "المعلومات الشخصية",
      name: "الاسم الكامل",
      age: "الفئة العمرية",
      gender: "الجنس",
      occupation: "المهنة الحالية",
      mentalHealthBackground: "السوابق النفسية (اختياري)",
      previousTherapy: "التجربة العلاجية السابقة",
      currentMedication: "الأدوية الحالية للصحة النفسية",
      currentSituation: "الوضع الحالي",
      supportSystem: "نظام الدعم",
      stressLevel: "مستوى التوتر الحالي",
      selectAge: "اختر الفئة العمرية",
      selectGender: "اختر الجنس",
      selectOption: "اختر خياراً",
      privacyNote: "🔒 معلوماتك سرية تماماً وتُستخدم فقط لتخصيص نتائج التقييم الخاصة بك."
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
      disclaimer: "هذا التقييم لأغراض إعلامية فقط وليس بديلاً عن المشورة الطبية أو النفسية المهنية."
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