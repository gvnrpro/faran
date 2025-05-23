
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  context: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, location, quote, context, rating = 5 
}) => {
  return (
    <div className="bg-faran-sandstone p-8 relative shadow-lg border border-faran-brass/20 hover:border-faran-brass/40 transition-all duration-300">
      {/* Decorative quote mark */}
      <div className="absolute top-6 right-6 opacity-20">
        <Quote size={32} className="text-faran-brass" />
      </div>
      
      {/* Rating stars */}
      <div className="flex items-center mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="text-faran-brass fill-current" />
        ))}
      </div>
      
      <blockquote className="text-faran-charcoal text-lg font-light italic mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      
      <div className="text-sm text-faran-brass font-medium mb-1">{context}</div>
      
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium text-faran-night">{name}</div>
          <div className="text-sm text-faran-charcoal/70">{location}</div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const { isRTL, language } = useLanguage();

  const testimonials = [
    {
      name: "Ahmad Al-Mansouri",
      location: "Dubai, UAE",
      quote: "This scent is the fragrance of Eid morning in my family home. It carries the warmth of my grandmother's embrace and the dignity of our traditions.",
      context: "Heritage Collector"
    },
    {
      name: "Fatima Al-Zahra", 
      location: "Riyadh, KSA",
      quote: "I presented FARAN as a gift to visiting dignitaries, and it was received with the highest appreciation. It spoke of respect before I said a word.",
      context: "Cultural Ambassador"
    },
    {
      name: "Mohammed bin Rashid",
      location: "Abu Dhabi, UAE", 
      quote: "In our majlis, when FARAN fills the air, conversations deepen and hearts open. This is the true spirit of Arabian hospitality.",
      context: "Business Leader"
    },
    {
      name: "Aisha Al-Thani",
      location: "Doha, Qatar",
      quote: "Each time I experience FARAN, I discover a new story—layers of memory that connect me to my roots and my ancestors' wisdom.",
      context: "Fragrance Connoisseur"
    },
    {
      name: "Khalid Al-Sabah",
      location: "Kuwait City, Kuwait",
      quote: "This is not perfume; this is liquid heritage. My children will inherit bottles of FARAN just as they inherit our family's gold.",
      context: "Family Patriarch"
    },
    {
      name: "Noura Al-Maktoum",
      location: "Dubai, UAE",
      quote: "When I wear FARAN to important gatherings, I carry the confidence of my lineage. It is my invisible crown, my signature of authenticity.",
      context: "Royal Family Member"
    }
  ];

  return (
    <section className="py-24 bg-desert-gradient">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-faran-night mb-6">
            {isRTL ? "همسات التقدير" : "Whispers of Esteem"}
          </h2>
          <div className="text-sm uppercase tracking-widest text-faran-brass mb-8">
            {isRTL ? "شهادات من القلب" : "Testimonies from the Heart"}
          </div>
          <div className="w-24 h-px bg-brass-gradient mx-auto mb-8"></div>
          <p className="text-lg text-faran-charcoal max-w-3xl mx-auto leading-relaxed">
            {isRTL 
              ? "كلمات من قلوب تفهم لغة العطر الأصيل، وتقدر قيمة الإرث والتراث في عالم يسعى للأصالة."
              : "Words from hearts that understand the profound language of authentic fragrance, and appreciate the value of heritage in a world seeking authenticity."}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard
                name={testimonial.name}
                location={testimonial.location}
                quote={testimonial.quote}
                context={testimonial.context}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-night-gradient text-faran-sandstone p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-faran-brass opacity-30"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-faran-brass opacity-30"></div>
            
            <h3 className="text-2xl md:text-3xl font-serif text-faran-gold mb-6">
              {isRTL ? "انضم إلى عائلة فاران" : "Join the FARAN Legacy"}
            </h3>
            <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              {isRTL 
                ? "كن جزءاً من قصة تتجاوز العطر إلى الإرث. اكتشف عطرك المثالي واصنع ذكريات تدوم للأبد."
                : "Become part of a story that transcends fragrance to become legacy. Discover your perfect scent and create memories that last forever."}
            </p>
            <a 
              href="https://wa.me/971557993441" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-faran-brass hover:bg-faran-gold text-faran-night px-12 py-4 uppercase tracking-wider text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isRTL ? "ابدأ محادثتك" : "Begin Your Conversation"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
