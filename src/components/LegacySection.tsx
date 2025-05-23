
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Crown, Heart, Gift, Users } from "lucide-react";

const LegacySection = () => {
  const { isRTL, language } = useLanguage();

  const legacyPillars = [
    {
      icon: Crown,
      title: { en: "Sharaf - Honor", ar: "شرف - الشرف" },
      description: { 
        en: "Every drop of FARAN carries the honor of our forefathers. Our craft is our bond, our quality our word.",
        ar: "كل قطرة من فاران تحمل شرف أجدادنا. حرفتنا هي عهدنا، وجودتنا هي كلمتنا."
      }
    },
    {
      icon: Heart,
      title: { en: "Turath - Heritage", ar: "تراث - التراث" },
      description: { 
        en: "The ancient wisdom of Arabian perfumery flows through our veins. We are guardians of a sacred art.",
        ar: "حكمة العطور العربية القديمة تجري في عروقنا. نحن حراس فن مقدس."
      }
    },
    {
      icon: Gift,
      title: { en: "Karam - Generosity", ar: "كرم - الكرم" },
      description: { 
        en: "True to Arabian spirit, we share not just fragrance, but joy, memory, and connection.",
        ar: "وفاءً للروح العربية، نشارك ليس فقط العطر، بل الفرح والذكريات والتواصل."
      }
    },
    {
      icon: Users,
      title: { en: "Diyafa - Hospitality", ar: "ضيافة - الضيافة" },
      description: { 
        en: "From our house to yours, every FARAN fragrance is an invitation to experience Arabian warmth.",
        ar: "من بيتنا إلى بيتكم، كل عطر فاران هو دعوة لتجربة الدفء العربي."
      }
    }
  ];

  return (
    <section className="py-24 bg-night-gradient text-faran-sandstone relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-faran-brass rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-faran-brass/20 rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-32 bg-faran-gold rotate-12"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-faran-gold">
            {isRTL ? "أصلنا شرفنا" : "Our Roots, Our Honor"}
          </h2>
          <div className="text-sm uppercase tracking-widest text-faran-brass mb-8">
            {isRTL ? "أسلنا شرفنا" : "Asluna Sharafuna"}
          </div>
          <div className="w-24 h-px bg-brass-gradient mx-auto mb-8"></div>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto text-faran-sandstone/90">
            {isRTL 
              ? "في قلب الجزيرة العربية، حيث تلتقي الرمال الذهبية بالسماء اللامحدودة، وُلدت قصة فاران. قصة عائلة حملت وعداً مقدساً عبر القرون: أن تحافظ على إرث العطور العربية الأصيلة، وأن تشاركه مع العالم بكل فخر وشرف."
              : "In the heart of Arabia, where golden sands meet infinite skies, the story of FARAN was born. A family's sacred promise carried across centuries: to preserve the authentic heritage of Arabian perfumery and share it with the world with pride and honor."}
          </p>
        </motion.div>

        {/* Legacy Story Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <div className="relative">
            <div className="aspect-[4/3] bg-faran-sandstone/10 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/e1969beb-317c-40fe-8a64-610474e345c6.png" 
                alt={isRTL ? "تراث فاران" : "FARAN Heritage"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-faran-night/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-faran-gold text-lg italic">
                  {isRTL ? "\"العطر ذاكرة الروح\"" : "\"Fragrance is the memory of the soul\""}
                </p>
                <p className="text-faran-sandstone/80 text-sm mt-2">
                  {isRTL ? "- جدنا الراحل" : "- Our Late Grandfather"}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-faran-gold mb-4">
                {isRTL ? "الوعد المقدس" : "The Sacred Promise"}
              </h3>
              <p className="text-faran-sandstone/90 leading-relaxed mb-6">
                {isRTL 
                  ? "في ليلة مقمرة من ليالي رمضان، جمع جدنا أولاده تحت سماء الصحراء المرصعة بالنجوم. بين يديه دالة من النحاس المصقول وكؤوس القهوة العربية، نقل إليهم سر العائلة: فن صناعة العود الأصيل."
                  : "On a moonlit Ramadan night, our grandfather gathered his children beneath the star-studded desert sky. With a burnished brass dallah and cups of Arabic coffee in hand, he passed down the family secret: the art of crafting authentic oud."}
              </p>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-faran-brass rounded-full mt-3"></div>
                <div>
                  <h4 className="font-medium text-faran-gold mb-1">
                    {isRTL ? "الأمانة" : "The Trust"}
                  </h4>
                  <p className="text-faran-sandstone/80">
                    {isRTL 
                      ? "\"احملوا هذا الإرث كأمانة. كل عطر تصنعونه يجب أن يحمل روح أجدادكم وشرف عائلتكم.\""
                      : "\"Carry this heritage as a sacred trust. Every fragrance you create must carry the soul of your ancestors and the honor of your family.\""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Four Pillars of FARAN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif text-faran-gold mb-4">
              {isRTL ? "أركان فاران الأربعة" : "The Four Pillars of FARAN"}
            </h3>
            <div className="w-16 h-px bg-faran-brass mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legacyPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-faran-brass/20 rounded-full mx-auto flex items-center justify-center group-hover:bg-faran-brass/30 transition-all duration-300">
                      <Icon size={32} className="text-faran-brass" />
                    </div>
                    <div className="absolute -inset-4 border border-faran-brass/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <h4 className="font-serif text-xl text-faran-gold mb-4">
                    {pillar.title[language]}
                  </h4>
                  <p className="text-faran-sandstone/80 leading-relaxed text-sm">
                    {pillar.description[language]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegacySection;
