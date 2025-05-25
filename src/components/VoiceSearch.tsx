
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface VoiceSearchProps {
  onSearchResults?: (query: string, results: any[]) => void;
}

const VoiceSearch = ({ onSearchResults }: VoiceSearchProps) => {
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isSupported, setIsSupported] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    // Check if speech recognition is supported
    const SpeechRecognition = 
      (window as any).SpeechRecognition || 
      (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      setIsSupported(true);
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = language === 'ar' ? 'ar-AE' : 'en-US';
      
      recognitionInstance.onresult = (event: any) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        setTranscript(transcript);
        
        if (event.results[current].isFinal) {
          handleVoiceSearch(transcript);
        }
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      recognitionInstance.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }
  }, [language]);

  const handleVoiceSearch = (query: string) => {
    if (!query.trim()) return;

    // Process voice search queries
    const processedQuery = processVoiceQuery(query.toLowerCase());
    
    if (processedQuery.action === 'navigate') {
      navigate(`/${language}/${processedQuery.route}`);
    } else if (processedQuery.action === 'search') {
      navigate(`/${language}/shop?search=${encodeURIComponent(processedQuery.query)}`);
    }

    setTranscript("");
  };

  const processVoiceQuery = (query: string) => {
    // Arabic voice commands
    if (language === 'ar') {
      if (query.includes('العطور') || query.includes('المتجر')) {
        return { action: 'navigate', route: 'shop' };
      }
      if (query.includes('طلب مخصص') || query.includes('طلب خاص')) {
        return { action: 'navigate', route: 'custom-orders' };
      }
      if (query.includes('التواصل') || query.includes('الاتصال')) {
        return { action: 'navigate', route: 'contact' };
      }
      if (query.includes('العود') || query.includes('عطر')) {
        return { action: 'search', query: query };
      }
    } else {
      // English voice commands
      if (query.includes('shop') || query.includes('products') || query.includes('fragrances')) {
        return { action: 'navigate', route: 'shop' };
      }
      if (query.includes('custom order') || query.includes('bespoke')) {
        return { action: 'navigate', route: 'custom-orders' };
      }
      if (query.includes('contact') || query.includes('call')) {
        return { action: 'navigate', route: 'contact' };
      }
      if (query.includes('oud') || query.includes('perfume') || query.includes('fragrance')) {
        return { action: 'search', query: query };
      }
    }

    return { action: 'search', query: query };
  };

  const startListening = () => {
    if (recognition && isSupported) {
      setTranscript("");
      setIsListening(true);
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  if (!isSupported) {
    return null;
  }

  return (
    <div className="relative">
      <button
        onClick={isListening ? stopListening : startListening}
        className={`p-3 rounded-full transition-all duration-300 ${
          isListening 
            ? 'bg-red-500 text-white animate-pulse' 
            : 'bg-faran-gold hover:bg-faran-brass text-white'
        }`}
        title={isRTL ? 
          (isListening ? "إيقاف البحث الصوتي" : "بحث صوتي") :
          (isListening ? "Stop voice search" : "Voice search")
        }
      >
        {isListening ? <MicOff size={20} /> : <Mic size={20} />}
      </button>

      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-white rounded-lg shadow-lg p-4 min-w-[200px] border border-faran-gold/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-faran-brown">
                  {isRTL ? "يتم الاستماع..." : "Listening..."}
                </span>
              </div>
              
              {transcript && (
                <div className="text-sm text-faran-brown/70 p-2 bg-faran-beige rounded">
                  "{transcript}"
                </div>
              )}

              <div className="mt-3 text-xs text-faran-brown/60">
                {isRTL ? (
                  <div>
                    <p>جرب قول:</p>
                    <p>"اعرض العطور" • "طلب مخصص" • "ابحث عن عود"</p>
                  </div>
                ) : (
                  <div>
                    <p>Try saying:</p>
                    <p>"Show fragrances" • "Custom order" • "Search for oud"</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VoiceSearch;
