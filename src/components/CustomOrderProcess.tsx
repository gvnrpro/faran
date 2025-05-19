
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { package_open, file_pen, clipboard_check } from "lucide-react";

const CustomOrderProcess = () => {
  const { isRTL } = useLanguage();

  const processSteps = [
    {
      icon: file_pen,
      title: isRTL ? "استشارة متخصصة" : "Personalized Consultation",
      description: isRTL 
        ? "نبدأ بجلسة استشارية متعمقة لفهم تفضيلاتك وذكرياتك العطرية والمشاعر التي ترغب في استحضارها."
        : "We begin with an in-depth consultation to understand your preferences, olfactory memories, and the emotions you wish to evoke."
    },
    {
      icon: package_open,
      title: isRTL ? "إبداع متقن" : "Artisanal Creation",
      description: isRTL 
        ? "يقوم حرفيونا باختيار وتشكيل أجود أنواع العود وفق رؤيتك، مع إرسال عينات للتذوق والتعديل."
        : "Our master craftsmen select and shape the finest oud according to your vision, with samples sent for tasting and refinement."
    },
    {
      icon: clipboard_check,
      title: isRTL ? "إرث استثنائي" : "Exclusive Legacy",
      description: isRTL 
        ? "تستلم إبداعًا عطريًا فريدًا مع شهادة أصالة وتوثيق للعملية الكاملة وتاريخ العود المستخدم."
        : "You receive a unique olfactory creation with a certificate of authenticity and documentation of the entire process and wood provenance."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="py-24 bg-faran-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            {isRTL ? "عملية إبداع العود المخصص" : "The Bespoke Oud Journey"}
          </h2>
          
          <div className="w-20 h-[1px] bg-faran-gold mx-auto mb-8"></div>
          
          <p className="text-gray-300 max-w-3xl mx-auto">
            {isRTL 
              ? "رحلة تحويل رؤيتك إلى عطر فريد يعكس هويتك ويحمل بصمتك الخاصة."
              : "The journey of transforming your vision into a unique fragrance that reflects your identity and carries your personal signature."}
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {processSteps.map((step, index) => (
            <motion.div 
              key={index} 
              className="luxury-card p-8 text-center flex flex-col items-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-faran-darkGold/10 rounded-full mb-6 text-faran-gold">
                <step.icon strokeWidth={1.5} size={32} />
              </div>
              
              <h3 className="text-xl font-serif mb-4">{step.title}</h3>
              
              <div className="w-12 h-[1px] bg-faran-gold/30 mb-4"></div>
              
              <p className="text-gray-400 font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-16">
          <p className="italic text-faran-gold/80 mb-6">
            {isRTL 
              ? "\"نحن لا نصنع عطرًا فحسب، بل نصوغ إرثًا شخصيًا سيُروى عبر الأجيال.\""
              : "\"We don't just craft a fragrance; we compose a personal legacy that will be told across generations.\""}
          </p>
          
          <p className="text-sm text-gray-500">
            {isRTL ? "- فريق فاران" : "- The FARAN Team"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomOrderProcess;
