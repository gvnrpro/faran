
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, isRTL } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    
    // Update URL to include language prefix
    const currentPath = location.pathname;
    
    // Strip out any existing language prefix
    let pathWithoutLang = currentPath;
    if (currentPath.startsWith('/en/') || currentPath.startsWith('/ar/')) {
      pathWithoutLang = currentPath.substring(4); // Remove /xx/ prefix
    } else if (currentPath === '/en' || currentPath === '/ar') {
      pathWithoutLang = '/';
    }
    
    // Add new language prefix if not at root
    const newPath = pathWithoutLang === '/' ? 
      `/${newLanguage}` : 
      `/${newLanguage}${pathWithoutLang}`;
      
    navigate(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 text-faran-brown hover:text-faran-gold transition-colors duration-300"
      aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <Globe size={16} className="text-faran-gold" />
      <span className="text-sm uppercase tracking-wider">
        {language === "en" ? "العربية" : "English"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
