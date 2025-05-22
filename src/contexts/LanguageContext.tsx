
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

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

// English and Arabic translations
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.shop": "Shop",
    "nav.custom": "Custom Orders",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.tagline": "The Scent of Ancestry",
    "hero.description": "A legacy sealed in fragrance. Passed from palm to palm, tent to palace—FARAN is not merely worn; it is inherited.",
    "hero.cta1": "Explore Collection",
    "hero.cta2": "Bestsellers",
    
    // Shop Section
    "shop.title": "FARAN Exclusive Collection",
    "shop.description": "Discover our exclusive collection of premium oud and luxury fragrances. Each piece tells a story of heritage, craftsmanship, and uncompromising quality.",
    "shop.all": "All Products",
    "shop.by.profile": "Shop by Profile",
    "shop.bestsellers": "Bestsellers",
    
    // Product Categories
    "category.gifting": "Gifting",
    "category.daily": "Daily Wear",
    "category.signature": "Signature Scent",
    "category.collectors": "Collectors",
    
    // Product Details
    "product.details": "Product Details",
    "product.type": "Type:",
    "product.origin": "Origin:",
    "product.rarity": "Rarity:",
    "product.scent": "Scent Profile",
    "product.top": "Top Notes:",
    "product.heart": "Heart Notes:",
    "product.base": "Base Notes:",
    "product.suitable": "Perfect For",
    "product.description": "Detailed Description",
    "product.order": "Order via WhatsApp",
    "product.view": "View Product",
    
    // Testimonials
    "testimonials.title": "Client Testimonials",
    
    // Footer
    "footer.boutique": "FARAN Flagship Boutique",
    "footer.address": "The Dubai Mall, Fashion Avenue",
    "footer.location": "Dubai, United Arab Emirates",
    "footer.copyright": "© 2025 FARAN. All rights reserved.",
    "footer.legal": "Privacy Policy",
    "footer.terms": "Terms of Service"
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "عن فاران",
    "nav.shop": "المتجر",
    "nav.custom": "طلبات مخصصة",
    "nav.contact": "اتصل بنا",
    
    // Hero Section
    "hero.tagline": "عبق الأجداد",
    "hero.description": "إرث مختوم بالعطور. ينتقل من يد إلى يد، من خيمة إلى قصر - فاران ليس مجرد عطر يُرتدى؛ بل إرث يُورث.",
    "hero.cta1": "استكشف المجموعة",
    "hero.cta2": "الأكثر مبيعاً",
    
    // Shop Section
    "shop.title": "مجموعة فاران الحصرية",
    "shop.description": "اكتشف مجموعتنا الحصرية من أرقى أنواع العود والعطور الفاخرة. كل قطعة تروي قصة إرث وحرفية وجودة لا مثيل لها.",
    "shop.all": "كل المنتجات",
    "shop.by.profile": "تسوق حسب الاستخدام",
    "shop.bestsellers": "الأكثر مبيعاً",
    
    // Product Categories
    "category.gifting": "الهدايا",
    "category.daily": "الاستخدام اليومي",
    "category.signature": "العطر المميز",
    "category.collectors": "المجموعات",
    
    // Product Details
    "product.details": "تفاصيل المنتج",
    "product.type": "النوع:",
    "product.origin": "المصدر:",
    "product.rarity": "الندرة:",
    "product.scent": "مكونات العطر",
    "product.top": "النوتة العليا:",
    "product.heart": "النوتة الوسطى:",
    "product.base": "النوتة الأساسية:",
    "product.suitable": "مناسب لـ",
    "product.description": "وصف مفصل",
    "product.order": "اطلب عبر واتساب",
    "product.view": "عرض المنتج",
    
    // Testimonials
    "testimonials.title": "آراء العملاء",
    
    // Footer
    "footer.boutique": "متجر فاران الرئيسي",
    "footer.address": "دبي مول، طريق الأزياء",
    "footer.location": "دبي، الإمارات العربية المتحدة",
    "footer.copyright": "© 2025 فاران. جميع الحقوق محفوظة.",
    "footer.legal": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة"
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Try to get language from localStorage, default to English
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('faranLanguage');
    return (savedLanguage === 'ar' || savedLanguage === 'en') ? savedLanguage : 'en';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('faranLanguage', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

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
