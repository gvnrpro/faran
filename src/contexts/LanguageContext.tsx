
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

// English and Arabic translations
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
    "collection.title": "Our Fragrance Collections",
    "collection.subtitle": "Crafted with intention. Aged with patience. Designed to be remembered.",
    "collection.royal.title": "The Royal Oud Collection",
    "collection.royal.subtitle": "Primal. Pristine. Majestic.",
    "collection.royal.description": "Premium oud chips hand-selected from Agarwood trees over 100 years old, sourced from Cambodia's untouched forests. Pure heritage in raw form.",
    "collection.royal.type": "Type: Woody Oriental",
    "collection.amber.title": "Amber Elixir",
    "collection.amber.subtitle": "Time-drawn majesty.",
    "collection.amber.description": "Aged for 12 years before bottling. This elixir speaks in layers—spiced warmth, aged wood, and the hush of time.",
    "collection.amber.type": "Type: Spicy Oriental",
    "collection.desert.title": "Desert Rose",
    "collection.desert.subtitle": "The soul of Taif.",
    "collection.desert.description": "Infused with rose petals gathered only at dawn in the Taif valleys. Feminine yet resolute—like desert bloom after rainfall.",
    "collection.desert.type": "Type: Floral Woody",
    "collection.sultan.title": "Sultan's Gift Set",
    "collection.sultan.subtitle": "Give legacy, not just luxury.",
    "collection.sultan.description": "Our finest oils and chips, presented in a hand-carved wooden chest lined with silk. Designed for ceremonial gifting and dignitaries.",
    "collection.sultan.type": "Type: Premium Presentation",
    "collection.cta": "View All Collections",
    "craftsmanship.title": "The Essence of Oud",
    "craftsmanship.subtitle": "A Guide to the Rare and Revered",
    "craftsmanship.intro": "Luxury is knowledge. The finest ouds tell stories—not just through scent, but through soil, age, and ritual. At FARAN, we honor each.",
    "craftsmanship.assam.title": "Assam Agarwood",
    "craftsmanship.assam.origin": "Origin: Northeast India",
    "craftsmanship.assam.profile": "Scent Profile: Sweet • Balsamic • Fruity Notes",
    "craftsmanship.assam.description": "From the mist-laced forests of Assam, this oud is tender yet complex. Its sweetness is ancient, sacred—echoing in temples and private gatherings.",
    "craftsmanship.assam.ideal": "Ideal for: Sophisticated wearers seeking subtle elegance.",
    "craftsmanship.cambodian.title": "Cambodian Oud",
    "craftsmanship.cambodian.origin": "Origin: Western Cambodia",
    "craftsmanship.cambodian.profile": "Scent Profile: Earthy • Smooth • Golden Warmth",
    "craftsmanship.cambodian.description": "A favorite of Gulf royals, Cambodian oud is prized for its softness and strength. Royal yet wearable, it lingers with quiet confidence.",
    "craftsmanship.cambodian.ideal": "Ideal for: Traditionalists and collectors of refined classics.",
    "craftsmanship.indonesian.title": "Indonesian Kyara",
    "craftsmanship.indonesian.origin": "Origin: Kalimantan, Indonesia",
    "craftsmanship.indonesian.profile": "Scent Profile: Smoky • Meditative • Complex",
    "craftsmanship.indonesian.description": "The crown jewel of oud. Once reserved for emperors, Kyara is intensely rare. Smoky, resinous, and transcendent, it reveals itself slowly—like a prayer whispered over hours.",
    "craftsmanship.indonesian.ideal": "Ideal for: Collectors, royalty, and spiritual connoisseurs.",
    "craftsmanship.aged.title": "Aged Oud",
    "craftsmanship.aged.profile": "Profile: Deep • Resin-rich • Multi-layered",
    "craftsmanship.aged.description": "We age our most noble ouds for up to 15 years, unlocking depths no fresh distillation can achieve. It is time, captured in oil.",
    "craftsmanship.aged.ideal": "Ideal for: Ceremonial gifting, private use, and legacy collections.",
    "craftsmanship.cta": "Learn about our sourcing & aging process",
    "gifting.title": "The Ritual of Gifting",
    "gifting.description": "To gift FARAN is to bestow presence, respect, and continuity. In Arabian culture, fragrance is the most intimate of gestures—symbolizing trust, memory, and timeless bond.",
    "gifting.subtitle": "Our gift sets are curated not only to impress, but to honor.",
    "gifting.cta": "Explore Gift Sets",
    "legacy.title": "The FARAN Legacy",
    "legacy.subtitle": "Fragrance Through the Ages",
    "legacy.ancient.title": "Ancient Origins",
    "legacy.ancient.description": "Among Bedouins, scent was more than pleasure—it was hospitality and honor.",
    "legacy.royal.title": "17th Century Royal Courts",
    "legacy.royal.description": "FARAN's ancestors were perfumers to sultans and kings. Their legacy continues in every bottle.",
    "legacy.revival.title": "1970s Majlis Revival",
    "legacy.revival.description": "Oud returned as a symbol of masculine hospitality, rooted in tradition yet worn with pride.",
    "legacy.today.title": "Today",
    "legacy.today.description": "FARAN lives in penthouses and palaces. From majlis to metropolis—always refined, never forgotten.",
    "testimonials.title": "Esteemed Voices",
    "testimonials.royal": ""It felt like my grandfather walked into the room. FARAN captures not just a scent, but a legacy."",
    "testimonials.royal.person": "H.A., Royal Family Member, UAE",
    "testimonials.executive": ""The only gift I trust to impress an Emirati diplomat. FARAN is rare among rarities."",
    "testimonials.executive.person": "S.M., Global Executive",
    "testimonials.collector": ""Each time I experience FARAN, I discover a new chapter. It evolves like an ancient manuscript."",
    "testimonials.collector.person": "K.J., Private Collector",
    "newsletter.title": "Join the Majlis",
    "newsletter.description": "Stay close to the scent of legacy. Join our private circle to access rare editions, cultural insights, and private events.",
    "newsletter.button": "Join the Majlis",
    "footer.boutique": "FARAN Flagship Boutique",
    "footer.address": "The Dubai Mall, Fashion Avenue",
    "footer.location": "Dubai, United Arab Emirates",
    "footer.tagline": "A scent that remembers. A brand for those who lead.",
    "footer.explore": "Explore",
    "footer.legacy": "Our Legacy",
    "footer.shop": "Shop Oud"
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "عن فران",
    "nav.collection": "المجموعة",
    "nav.legacy": "الإرث",
    "nav.craftsmanship": "الحرفية",
    "nav.contact": "اتصل بنا",
    "hero.tagline": "عبق الأجداد",
    "hero.description": "إرثٌ معطر ينتقل من يد إلى يد، من خيمة إلى قصر. فران لا يُرتدى فحسب، بل يُورَّث.",
    "hero.cta1": "ادخل إلى عالم فران",
    "hero.cta2": "اكتشف العود",
    "about.title": "عن فران",
    "about.p1": "فران هو بيت الذكريات. بيت الإتقان. وُلد من رياح الصحراء وطرق التجارة القديمة، ويقطر أثمن أنواع العود إلى جوهر عطري خالد.",
    "about.p2": "عطرٌ ليس للجميع، بل لمن يفهم. لمن يُدرك أن العطر هو شرف، وهوية، وحضور.",
    "about.p3": "من معابد الهند إلى غابات كمبوديا، كل تركيبة من فران تحمل في طياتها طقساً قديماً وتفاخراً إماراتياً أصيلاً.",
    "about.tagline": "جدير بالتخليد",
    "collection.title": "مجموعات العطور",
    "collection.subtitle": "مصنوعة بعناية. معتّقة بالصبر. ومصممة لتُحفظ في الذاكرة.",
    "collection.royal.title": "مجموعة العود الملكي",
    "collection.royal.subtitle": "أصيل. نقي. مهيب.",
    "collection.royal.description": "رقائق عود فاخرة مأخوذة من أشجار تزيد أعمارها عن مئة عام، من أعماق الغابات الكمبودية النقية. إرث نقي في صورته الخام.",
    "collection.royal.type": "النوع: خشبي شرقي",
    "collection.amber.title": "إكسير العنبر",
    "collection.amber.subtitle": "روعة الزمن المقطّر.",
    "collection.amber.description": "معتّق لمدة 12 عامًا قبل التعبئة. يتحدث هذا العطر بلغة الطبقات—دفء التوابل وعمق الزمن وصمت الذكرى.",
    "collection.amber.type": "النوع: شرقي حار",
    "collection.desert.title": "وردة الصحراء",
    "collection.desert.subtitle": "روح الطائف.",
    "collection.desert.description": "مفعم بورود الطائف النادرة المقطوفة عند الفجر فقط. أنثوي وحازم في آنٍ واحد—كالزهور التي تنبت بعد المطر.",
    "collection.desert.type": "النوع: زهري خشبي",
    "collection.sultan.title": "طقم هدية السلطان",
    "collection.sultan.subtitle": "هدية تليق بالملوك.",
    "collection.sultan.description": "أفخر زيوتنا ورقائقنا، داخل صندوق خشبي منحوت يدويًا ومبطن بالحرير. هدية ليست مجرد فخامة، بل توقير.",
    "collection.sultan.type": "النوع: عرض فاخر",
    "collection.cta": "استكشف جميع المجموعات",
    "craftsmanship.title": "جوهر العود",
    "craftsmanship.subtitle": "دليل العود النادر والموقر",
    "craftsmanship.intro": "الفخامة تبدأ بالمعرفة. العود الحقيقي لا يروي حكايةً عبر الرائحة فحسب، بل من خلال الأرض، والعمر، والشعائر. في فران، نُجِلُّ كل نوع من العود كأنه كائنٌ حي.",
    "craftsmanship.assam.title": "عود آسام",
    "craftsmanship.assam.origin": "المصدر: شمال شرق الهند",
    "craftsmanship.assam.profile": "الرائحة: حلو • بلسم • فواكه ناعمة",
    "craftsmanship.assam.description": "من غابات آسام المغطاة بالضباب، يتميز بنعومةٍ معقدة وحلاوةٍ مقدسة تنبع من عمق التاريخ.",
    "craftsmanship.assam.ideal": "مثالي لـ: أصحاب الذوق الرفيع الذين يفضلون الرقة والأصالة.",
    "craftsmanship.cambodian.title": "العود الكمبودي",
    "craftsmanship.cambodian.origin": "المصدر: غرب كمبوديا",
    "craftsmanship.cambodian.profile": "الرائحة: ترابي • ناعم • دافئ ملكي",
    "craftsmanship.cambodian.description": "يُفضل من قبل نُخبة الخليج، العود الكمبودي متوازن وفاخر، يهمس بهدوءٍ مهيب.",
    "craftsmanship.cambodian.ideal": "مثالي لـ: عشّاق الكلاسيكيات الأصيلة.",
    "craftsmanship.indonesian.title": "كِيارا الإندونيسي",
    "craftsmanship.indonesian.origin": "المصدر: كاليمانتان – إندونيسيا",
    "craftsmanship.indonesian.profile": "الرائحة: دخانه نقي • تأملي • متعدد الطبقات",
    "craftsmanship.indonesian.description": "الأندر والأرقى، وكان يُهدى للأباطرة في العصور القديمة. روحانية عالية تتكشف على مدى الساعات كصلاةٍ خافتة.",
    "craftsmanship.indonesian.ideal": "مثالي لـ: المقتنين، النخبة، وأهل الذوق الصوفي.",
    "craftsmanship.aged.title": "العود المعتّق",
    "craftsmanship.aged.profile": "الرائحة: عميق • غني بالراتنج • متغير",
    "craftsmanship.aged.description": "نقوم بتعتيق أفخر زيوتنا لمدة تصل إلى 15 عامًا، لتحرير طبقاتٍ لا يملكها العود الطازج.",
    "craftsmanship.aged.ideal": "مثالي لـ: المناسبات الخاصة، والهدايا الرسمية، ومجموعات الإرث.",
    "craftsmanship.cta": "تعرف على مصادرنا وعملية التعتيق",
    "gifting.title": "ثقافة الإهداء",
    "gifting.description": "إهداء فران هو إهداء للحضور، والاحترام، والاستمرارية. في الثقافة العربية، العطر ليس فقط رمزاً للجمال، بل تجسيدٌ للكرم، والذكرى، والروابط الأبدية.",
    "gifting.subtitle": "هدايانا مصممة بعناية فائقة، لتليق بأرقى المناسبات وأكثرها مكانة.",
    "gifting.cta": "استكشف مجموعات الهدايا",
    "legacy.title": "إرث فران",
    "legacy.subtitle": "عبر الزمن والعبير",
    "legacy.ancient.title": "الأصول القديمة",
    "legacy.ancient.description": "في خيام البدو، كان العطر رمزاً للضيافة والكرم.",
    "legacy.royal.title": "القرن السابع عشر – البلاطات الملكية",
    "legacy.royal.description": "كان أسلاف فران من عطارين السلاطين والملوك. إرثهم لا يزال حيًا في كل زجاجة.",
    "legacy.revival.title": "السبعينيات – عودة المجالس",
    "legacy.revival.description": "عاد العود كرمز للفخامة والرجولة في المجالس الخليجية.",
    "legacy.today.title": "اليوم",
    "legacy.today.description": "فران يحيا في البنتهاوس والقصور. من المجلس إلى ناطحات السحاب—أصالة لا تُنسى.",
    "testimonials.title": "أصوات النخبة",
    "testimonials.royal": ""أحسست وكأن جدي دخل الغرفة. فران ليس مجرد عطر، بل تراث حي."",
    "testimonials.royal.person": "ح.أ، أحد أفراد العائلة الحاكمة",
    "testimonials.executive": ""الهدية الوحيدة التي أعتمد عليها لإبهار دبلوماسي إماراتي. فران لا يُقارن."",
    "testimonials.executive.person": "س.م، رجل أعمال دولي",
    "testimonials.collector": ""مع كل تجربة لفران، أكتشف طبقة جديدة. كأنه كتاب يتحدث مع الزمن."",
    "testimonials.collector.person": "ك.ج، جامع عطور نادرة",
    "newsletter.title": "انضم إلى المجلس",
    "newsletter.description": "كن قريبًا من عبق الإرث. انضم إلى دائرتنا الخاصة لتلقي الدعوات الحصرية، والإصدارات المحدودة، والقصص الخفية وراء العطور.",
    "newsletter.button": "انضم إلى المجلس",
    "footer.boutique": "المتجر الرئيسي – فران",
    "footer.address": "دبي مول، فاشن أفنيو",
    "footer.location": "دبي، الإمارات العربية المتحدة",
    "footer.tagline": "عطرٌ يتذكّر. وعلامةٌ لأهل السيادة.",
    "footer.explore": "استكشف",
    "footer.legacy": "الإرث",
    "footer.shop": "تسوّق العود"
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
