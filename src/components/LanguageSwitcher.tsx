
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, isRTL } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 text-white hover:text-faran-gold transition-colors duration-300"
      aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <Globe size={16} />
      <span className={`text-sm uppercase tracking-wider ${isRTL ? 'mr-1' : 'ml-1'}`}>
        {language === "en" ? "العربية" : "English"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
