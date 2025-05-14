
import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// English translations (Arabic translations to be added later)
const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.collection": "Collection",
    "nav.legacy": "Legacy",
    "nav.craftsmanship": "Craftsmanship",
    "nav.contact": "Contact",
    "hero.tagline": "The Scent of Ancestry",
    "hero.description": "A legacy sealed in fragrance. Passed from palm to palm, tent to palace—FARAN is not merely worn; it is inherited.",
    "hero.cta1": "Enter FARAN",
    "hero.cta2": "Discover Oud",
    "about.title": "About FARAN",
    "about.p1": "FARAN is a house of memory. Of mastery. Born from the desert winds and ancient trade routes, FARAN distills rare Agarwood into olfactory heritage.",
    "about.p2": "This is not fragrance for the many. This is for those who understand. Those who recognize the honor of scent—its ability to convey legacy, status, and unspoken emotion.",
    "about.p3": "From Indian temples to Cambodian rainforests, each FARAN composition carries a centuries-old ritual, bottled with reverence and Emirati pride.",
    "about.tagline": "Worthy of Remembrance",
    "footer.boutique": "FARAN Flagship Boutique",
    "footer.address": "The Dubai Mall, Fashion Avenue",
    "footer.location": "Dubai, United Arab Emirates",
    "footer.tagline": "A scent that remembers. A brand for those who lead.",
    "footer.explore": "Explore",
    "footer.legacy": "Our Legacy",
    "footer.shop": "Shop Oud"
  },
  ar: {
    // For now, we'll just use the English versions for most things
    "nav.home": "الرئيسية",
    "nav.about": "عن فران",
    "nav.collection": "المجموعة",
    "nav.legacy": "الإرث",
    "nav.craftsmanship": "الحرفية",
    "nav.contact": "اتصل بنا",
    "hero.tagline": "عبق الأجداد",
    "hero.description": "A legacy sealed in fragrance. Passed from palm to palm, tent to palace—FARAN is not merely worn; it is inherited.",
    "hero.cta1": "Enter FARAN",
    "hero.cta2": "Discover Oud",
    "about.title": "عن فران",
    "about.p1": "FARAN is a house of memory. Of mastery. Born from the desert winds and ancient trade routes, FARAN distills rare Agarwood into olfactory heritage.",
    "about.p2": "This is not fragrance for the many. This is for those who understand. Those who recognize the honor of scent—its ability to convey legacy, status, and unspoken emotion.",
    "about.p3": "From Indian temples to Cambodian rainforests, each FARAN composition carries a centuries-old ritual, bottled with reverence and Emirati pride.",
    "about.tagline": "Worthy of Remembrance",
    "footer.boutique": "FARAN Flagship Boutique",
    "footer.address": "The Dubai Mall, Fashion Avenue",
    "footer.location": "Dubai, United Arab Emirates",
    "footer.tagline": "A scent that remembers. A brand for those who lead.",
    "footer.explore": "Explore",
    "footer.legacy": "Our Legacy",
    "footer.shop": "Shop Oud"
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  // Is Right-to-Left
  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
