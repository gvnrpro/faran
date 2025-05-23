
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Shield, Award, Users, Clock } from "lucide-react";

const LuxuryExperience = () => {
  const { language, isRTL } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: { en: "Authentic Heritage", ar: "تراث أصيل" },
      description: { 
        en: "Every drop carries centuries of Arabian perfumery tradition, sourced from the finest agarwood regions.",
        ar: "كل قطرة تحمل قروناً من تقاليد العطور العربية، مصدرها أرقى مناطق العود."
      }
    },
    {
      icon: Award,
      title: { en: "Master Craftmanship", ar: "حرفية متقنة" },
      description: { 
        en: "Hand-distilled by master perfumers using traditional methods passed down through generations.",
        ar: "مقطر يدوياً من قبل خبراء العطور باستخدام طرق تقليدية موروثة عبر الأجيال."
      }
    },
    {
      icon: Users,
      title: { en: "Trusted by Royalty", ar: "موثوق من الملوك" },
      description: { 
        en: "FARAN has been the choice of royalty and discerning collectors across the Middle East for decades.",
        ar: "فاران كان خيار الملوك وجامعي العطور المميزين في الشرق الأوسط لعقود."
      }
    },
    {
      icon: Clock,
      title: { en: "Aged to Perfection", ar: "معتق للكمال" },
      description: { 
        en: "Our premium ouds are aged for 15-20+ years, developing unparalleled complexity and richness.",
        ar: "عودنا الممتاز معتق لأكثر من 15-20 سنة، مما يطور تعقيداً وثراءً لا مثيل له."
      }
    }
  ];

  return (
    <section className="py-20 bg-faran-beige">
      <div className="container-custom">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/e1969beb-317c-40fe-8a64-610474e345c6.png" 
                alt={isRTL ? "تجربة فاران الفاخرة" : "FARAN Luxury Experience"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-faran-brown/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-serif text-faran-gold mb-1">25+</div>
                <div className="text-sm text-faran-brown">
                  {isRTL ? "سنة من الخبرة" : "Years of Excellence"}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-faran-brown mb-6">
              {isRTL ? "إرث من الفخامة" : "A Legacy of Luxury"}
            </h2>
            
            <div className="w-20 h-[1px] bg-faran-gold mb-6"></div>
            
            <p className="text-lg text-faran-brown/80 mb-8 leading-relaxed">
              {isRTL 
                ? "فاران ليس مجرد عطر، بل إرث يُورث من جيل إلى جيل. منذ عقود، نحن نحافظ على تقاليد العطور العربية الأصيلة، مقدمين أرقى أنواع العود المقطر بعناية فائقة."
                : "FARAN is not merely a fragrance—it is an inheritance passed from generation to generation. For decades, we have preserved the authentic traditions of Arabian perfumery, offering the finest hand-distilled ouds with uncompromising care."}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-faran-gold rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-faran-brown mb-1">
                    {isRTL ? "مصادر أصيلة" : "Authentic Sourcing"}
                  </h4>
                  <p className="text-faran-brown/70">
                    {isRTL 
                      ? "نختار أرقى أنواع العود من آسام والهند وكمبوديا"
                      : "We source the finest agarwood from Assam, India, and Cambodia"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-faran-gold rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-faran-brown mb-1">
                    {isRTL ? "تقطير تقليدي" : "Traditional Distillation"}
                  </h4>
                  <p className="text-faran-brown/70">
                    {isRTL 
                      ? "طرق التقطير التقليدية محفوظة منذ قرون"
                      : "Ancient distillation methods preserved for centuries"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-faran-gold rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-faran-brown mb-1">
                    {isRTL ? "ضمان الجودة" : "Quality Guarantee"}
                  </h4>
                  <p className="text-faran-brown/70">
                    {isRTL 
                      ? "كل منتج يخضع لفحص دقيق لضمان أعلى معايير الجودة"
                      : "Every product undergoes rigorous testing for the highest quality standards"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif text-faran-brown mb-4">
              {isRTL ? "لماذا تختار فاران؟" : "Why Choose FARAN?"}
            </h3>
            <div className="w-16 h-[1px] bg-faran-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-faran-gold/10 rounded-full mb-4">
                    <Icon size={24} className="text-faran-gold" />
                  </div>
                  <h4 className="font-serif text-lg text-faran-brown mb-3">
                    {feature.title[language]}
                  </h4>
                  <p className="text-faran-brown/70 text-sm leading-relaxed">
                    {feature.description[language]}
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

export default LuxuryExperience;
