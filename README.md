# PsychoTest - Emotional Assessment Platform

A comprehensive emotional and mental health assessment tool built with Next.js 15, featuring personalized insights, professional resources, and a beautiful user interface.

## 🌟 Features

### Core Assessment
- **15-Question Scientifically-Informed Assessment** across 5 categories:
  - Anxiety levels
  - Depression indicators  
  - Trauma responses
  - Stress factors
  - Mood patterns

### Personalized Analysis
- **User Information Collection** (optional)
- **Demographic-Based Insights** tailored to age, gender, and background
- **Support System Analysis** 
- **Therapy History Consideration**
- **4-Tier Severity Scoring** (Low, Moderate, High, Severe)

### Professional Resources
- **Crisis Support Hotlines** with international coverage
- **Mental Health Professional Directory**
- **Therapeutic Resource Recommendations**
- **Emergency Contact Information**

### User Experience
- **Beautiful Modern UI** with gradient backgrounds and glass morphism
- **Smooth Animations** powered by Framer Motion
- **Mobile-Optimized** responsive design
- **Print-Friendly Results** page
- **Progress Tracking** throughout assessment
- **Accessibility Features** with proper focus management

## 🚀 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom-built with class-variance-authority
- **Deployment**: Netlify-ready with optimized configuration

## 📦 Installation

### Prerequisites
- Node.js 18.0.0 or later
- npm or yarn package manager

### Local Development
```bash
# Clone the repository
git clone https://github.com/Yassine2408/PsychoTest.git

# Navigate to project directory
cd PsychoTest

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Build for Production
```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### Environment Setup
The application works out of the box with no additional environment variables required.

### Customization Options
- **Assessment Questions**: Modify questions in `/src/lib/questions.ts`
- **Scoring Algorithm**: Update scoring logic in `/src/lib/scoring.ts`
- **Styling**: Customize theme in `tailwind.config.ts`
- **Professional Resources**: Update resources in `/src/lib/resources.ts`

## 📱 Application Flow

1. **Welcome Page** - Feature overview and assessment introduction
2. **User Information** (Optional) - Demographics and background collection
3. **Assessment** - 15 interactive questions with progress tracking
4. **Results Analysis** - Comprehensive scoring and personalized insights
5. **Resources** - Professional help and crisis support information
6. **Print Results** - Clean, printable summary page

## 🎨 Design Philosophy

- **User-Centric**: Prioritizing user comfort and privacy
- **Accessibility-First**: WCAG compliant with proper navigation
- **Mobile-Responsive**: Touch-friendly interface optimization
- **Professional**: Clean, trustworthy design for sensitive content
- **Performance**: Optimized loading and smooth interactions

## 🔒 Privacy & Security

- **No Data Storage**: All information processed locally
- **Privacy-First**: No tracking or data collection
- **Confidential**: Results never leave the user's device
- **Security Headers**: Proper HTTP security configurations
- **GDPR Compliant**: No personal data retention

## 🚀 Deployment

### Netlify (Recommended)
This project is optimized for Netlify deployment:

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the Next.js configuration
3. Build command: `npm run build`
4. Publish directory: `.next`

### Other Platforms
- **Vercel**: Zero-config deployment for Next.js
- **AWS Amplify**: Full-stack deployment with backend support
- **Railway**: Container-based deployment

## 📊 Assessment Categories

### Anxiety Assessment
- Generalized anxiety symptoms
- Social anxiety indicators
- Panic attack frequency
- Physical anxiety manifestations

### Depression Screening
- Mood persistence patterns
- Interest and pleasure levels
- Energy and motivation
- Sleep and appetite changes

### Trauma Response
- PTSD-related symptoms
- Emotional regulation
- Intrusive thoughts
- Avoidance behaviors

### Stress Evaluation
- Work/life stress levels
- Coping mechanism effectiveness
- Overwhelming situation frequency
- Physical stress symptoms

### Mood Analysis
- Emotional stability
- Mood swing patterns
- Emotional expression
- Daily functioning impact

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This assessment tool is for informational purposes only and does not constitute professional medical advice, diagnosis, or treatment. Always seek the advice of qualified mental health professionals for any mental health concerns.

## 📞 Support

- **Crisis Support**: If you're experiencing a mental health crisis, please contact emergency services or a crisis hotline immediately
- **Technical Support**: Open an issue on GitHub for technical questions
- **Feature Requests**: Submit feature requests through GitHub Issues

---

**Built with ❤️ for mental health awareness and support**
