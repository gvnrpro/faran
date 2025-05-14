
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
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.collection": "Collection",
    "nav.legacy": "Legacy",
    "nav.craftsmanship": "Craftsmanship",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.tagline": "The Scent of Ancestry",
    "hero.description": "A legacy sealed in fragrance. Passed from palm to palm, tent to palace—FARAN is not merely worn; it is inherited.",
    "hero.cta1": "Enter FARAN",
    "hero.cta2": "Discover Oud",
    
    // About Section
    "about.title": "About FARAN",
    "about.p1": "FARAN is a house of memory. Of mastery. Born from the desert winds and ancient trade routes, FARAN distills rare Agarwood into olfactory heritage.",
    "about.p2": "This is not fragrance for the many. This is for those who understand. Those who recognize the honor of scent—its ability to convey legacy, status, and unspoken emotion.",
    "about.p3": "From Indian temples to Cambodian rainforests, each FARAN composition carries a centuries-old ritual, bottled with reverence and Emirati pride.",
    "about.tagline": "Worthy of Remembrance",
    
    // Collection Section
    "collection.title": "The FARAN Collection",
    "collection.subtitle": "Each composition tells a story of heritage, craftsmanship, and uncompromising quality.",
    "collection.cta": "Explore All Fragrances",
    
    // Collection Products
    "collection.royal.title": "Royal Oud",
    "collection.royal.subtitle": "Signature Collection",
    "collection.royal.type": "Perfume Oil",
    "collection.royal.description": "Notes of rare Indian agarwood, precious ambergris, and mountain-harvested saffron create a scent worthy of nobility.",
    
    "collection.amber.title": "Amber Accord",
    "collection.amber.subtitle": "Heritage Collection",
    "collection.amber.type": "Perfume Oil",
    "collection.amber.description": "A warm embrace of aged amber, vanilla orchid, and Moroccan cedar that evolves beautifully throughout the day.",
    
    "collection.desert.title": "Desert Night",
    "collection.desert.subtitle": "Exclusive Reserve",
    "collection.desert.type": "Concentrated Perfume",
    "collection.desert.description": "The mystique of the Arabian night captured with notes of midnight jasmine, frankincense, and Cambodian oud.",
    
    "collection.sultan.title": "Sultan's Legacy",
    "collection.sultan.subtitle": "Private Collection",
    "collection.sultan.type": "Luxury Perfume",
    "collection.sultan.description": "A majestic blend of the finest aged agarwood, Bulgarian rose, and sandalwood for those who lead.",
    
    // Legacy Section
    "legacy.title": "The FARAN Legacy",
    "legacy.description": "Our journey through time, preserving ancient traditions while embracing modern excellence.",
    
    // Craftsmanship Section
    "craftsmanship.title": "Craftsmanship & Ingredients",
    "craftsmanship.description": "Our Agarwood is not harvested. It is honored. Discover the exceptional materials that form the heart of FARAN.",
    "craftsmanship.cta": "Learn About Our Process",
    
    // Agarwood Types
    "agarwood.salla.title": "Indian Agarwood (Salla)",
    "agarwood.salla.description": "From the misty forests of Northeast India, our Assam Agarwood is known for its sweet, deep, and balsamic notes with subtle hints of fruit. We select only the most resinous Salla pieces, considering the forest's altitude and the tree's age for optimal fragrance profile.",
    
    "agarwood.baby.title": "Baby Salla",
    "agarwood.baby.description": "A more delicate variant of Salla, Baby Salla offers a lighter but equally complex aroma. Our sustainable harvesting practices ensure we honor both the trees and the communities who tend them, preserving this precious resource for future generations.",
    
    "agarwood.mouri.title": "Mouri Agarwood",
    "agarwood.mouri.description": "Mouri Agarwood presents a distinctive character with rich earthy undertones and a subtle sweetness that evolves over time. Each carefully selected piece undergoes meticulous examination by our master perfumers before being included in our exclusive collection.",
    
    "agarwood.joura.title": "Joura Agarwood",
    "agarwood.joura.description": "The rarest of our Indian varieties, Joura offers complex notes of spice, honeyed fruits, and a distinctive vanillic sweetness that evolves over time. Each piece is carefully aged for at least a decade before use, ensuring unparalleled olfactory depth.",
    
    // Gifting Section
    "gifting.title": "The Art of Gifting",
    "gifting.description": "In Arabian culture, gifting fragrance is not merely a gesture—it is a statement of honor. FARAN allows you to gift not just a perfume, but a heritage.",
    "gifting.subtitle": "Our bespoke packaging and presentation cases transform each FARAN product into a keepsake that honors both giver and recipient.",
    "gifting.cta": "Explore Gift Sets",
    
    // Newsletter Section
    "newsletter.title": "Join the FARAN Majlis",
    "newsletter.description": "Be among the select few to receive exclusive insights about new releases, heritage stories, and private events.",
    "newsletter.button": "Join Now",
    
    // Footer
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
    "hero.cta2": "Discover Oud"
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  // Translation function
  const t = (key: string): string => {
    // For Arabic, fall back to English if the key doesn't exist in Arabic
    if (language === "ar" && !translations.ar[key as keyof typeof translations.ar]) {
      return translations.en[key as keyof typeof translations.en] || key;
    }
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
