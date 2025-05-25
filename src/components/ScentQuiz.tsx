
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Sparkles, RotateCcw } from "lucide-react";

interface QuizQuestion {
  id: string;
  question: { en: string; ar: string };
  options: Array<{
    id: string;
    text: { en: string; ar: string };
    value: string;
  }>;
}

interface ScentQuizProps {
  onComplete: (preferences: {
    preferredIntensity: string[];
    preferredScents: string[];
    priceRange: [number, number];
    occasion: string[];
  }) => void;
}

const ScentQuiz = ({ onComplete }: ScentQuizProps) => {
  const { language, isRTL } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [isComplete, setIsComplete] = useState(false);

  const questions: QuizQuestion[] = [
    {
      id: "intensity",
      question: {
        en: "What fragrance intensity do you prefer?",
        ar: "ما هي قوة العطر التي تفضلها؟"
      },
      options: [
        { id: "light", text: { en: "Light & Subtle", ar: "خفيف ومهذب" }, value: "Light" },
        { id: "medium", text: { en: "Balanced & Moderate", ar: "متوازن ومعتدل" }, value: "Medium" },
        { id: "strong", text: { en: "Bold & Powerful", ar: "قوي ومؤثر" }, value: "Strong" }
      ]
    },
    {
      id: "scents",
      question: {
        en: "Which scent families appeal to you most?",
        ar: "أي عائلات العطور تروق لك أكثر؟"
      },
      options: [
        { id: "woody", text: { en: "Woody & Earthy", ar: "خشبي وترابي" }, value: "woody" },
        { id: "floral", text: { en: "Floral & Fresh", ar: "زهري ومنعش" }, value: "floral" },
        { id: "smoky", text: { en: "Smoky & Mysterious", ar: "دخاني وغامض" }, value: "smoky" },
        { id: "sweet", text: { en: "Sweet & Warm", ar: "حلو ودافئ" }, value: "sweet" }
      ]
    },
    {
      id: "budget",
      question: {
        en: "What's your preferred price range?",
        ar: "ما هو النطاق السعري المفضل لديك؟"
      },
      options: [
        { id: "budget", text: { en: "Under 2,000 AED", ar: "أقل من 2,000 درهم" }, value: "0-2000" },
        { id: "mid", text: { en: "2,000 - 3,000 AED", ar: "2,000 - 3,000 درهم" }, value: "2000-3000" },
        { id: "premium", text: { en: "3,000+ AED", ar: "3,000+ درهم" }, value: "3000-10000" }
      ]
    },
    {
      id: "occasion",
      question: {
        en: "When do you typically wear fragrance?",
        ar: "متى تتعطر عادة؟"
      },
      options: [
        { id: "daily", text: { en: "Daily & Professional", ar: "يومياً ومهنياً" }, value: "daily" },
        { id: "evening", text: { en: "Evening & Special Events", ar: "مساءً والمناسبات الخاصة" }, value: "evening" },
        { id: "formal", text: { en: "Formal & Traditional", ar: "رسمي وتقليدي" }, value: "formal" },
        { id: "versatile", text: { en: "All Occasions", ar: "جميع المناسبات" }, value: "versatile" }
      ]
    }
  ];

  const handleAnswer = (questionId: string, optionValue: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: [optionValue]
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      completeQuiz();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const completeQuiz = () => {
    const preferences = {
      preferredIntensity: answers.intensity || [],
      preferredScents: answers.scents || [],
      priceRange: answers.budget?.[0]?.split('-').map(Number) as [number, number] || [0, 10000],
      occasion: answers.occasion || []
    };
    
    setIsComplete(true);
    onComplete(preferences);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsComplete(false);
  };

  const currentQ = questions[currentQuestion];
  const canProceed = answers[currentQ?.id]?.length > 0;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-faran-gold" size={28} />
          <h3 className="text-2xl font-serif text-faran-brown">
            {isRTL ? "اكتشف عطرك المثالي" : "Discover Your Perfect Scent"}
          </h3>
        </div>
        <p className="text-faran-brown/70">
          {isRTL 
            ? "أجب على بعض الأسئلة لنساعدك في العثور على العطر المناسب لك"
            : "Answer a few questions to help us find the perfect fragrance for you"}
        </p>
      </div>

      {!isComplete && (
        <>
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-faran-brown/60 mb-2">
              <span>{isRTL ? "السؤال" : "Question"} {currentQuestion + 1}</span>
              <span>{questions.length} {isRTL ? "من" : "of"} {questions.length}</span>
            </div>
            <div className="w-full bg-faran-beige rounded-full h-2">
              <div 
                className="bg-faran-gold h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-serif text-faran-brown mb-6 text-center">
                {currentQ.question[language]}
              </h4>

              <div className="space-y-3 mb-8">
                {currentQ.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(currentQ.id, option.value)}
                    className={`w-full p-4 text-left border-2 rounded-lg transition-all ${
                      answers[currentQ.id]?.includes(option.value)
                        ? 'border-faran-gold bg-faran-gold/10 text-faran-brown'
                        : 'border-faran-beige hover:border-faran-gold/50 text-faran-brown/80'
                    }`}
                  >
                    {option.text[language]}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                currentQuestion === 0
                  ? 'text-faran-brown/30 cursor-not-allowed'
                  : 'text-faran-brown hover:text-faran-gold'
              }`}
            >
              <ChevronLeft size={20} />
              {isRTL ? "التالي" : "Previous"}
            </button>

            <button
              onClick={nextQuestion}
              disabled={!canProceed}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                canProceed
                  ? 'bg-faran-gold text-white hover:bg-faran-darkGold'
                  : 'bg-faran-beige text-faran-brown/50 cursor-not-allowed'
              }`}
            >
              {currentQuestion === questions.length - 1 
                ? (isRTL ? "اكتشف النتائج" : "Discover Results")
                : (isRTL ? "السابق" : "Next")
              }
              <ChevronRight size={20} />
            </button>
          </div>
        </>
      )}

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="mb-6">
            <Sparkles className="text-faran-gold mx-auto mb-4" size={48} />
            <h4 className="text-2xl font-serif text-faran-brown mb-2">
              {isRTL ? "تم! إليك توصياتنا" : "Perfect! Here are your recommendations"}
            </h4>
            <p className="text-faran-brown/70">
              {isRTL 
                ? "لقد اخترنا لك عطوراً تناسب تفضيلاتك بشكل مثالي"
                : "We've curated fragrances that perfectly match your preferences"}
            </p>
          </div>

          <button
            onClick={resetQuiz}
            className="btn-luxury-outline flex items-center gap-2 mx-auto"
          >
            <RotateCcw size={16} />
            {isRTL ? "إعادة الاختبار" : "Retake Quiz"}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ScentQuiz;
