
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AspectRatio } from "./ui/aspect-ratio";
import { motion } from "framer-motion";

interface IngredientTabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const IngredientTab: React.FC<IngredientTabProps> = ({ title, isActive, onClick }) => {
  return (
    <button
      className={`py-4 px-5 text-left border-b-2 transition-all duration-500 ${
        isActive 
          ? "border-faran-gold text-faran-gold" 
          : "border-gray-700/50 text-gray-400 hover:text-gray-300 hover:border-gray-600"
      } focus:outline-none`}
      onClick={onClick}
    >
      <span className="relative overflow-hidden block">
        {title}
        <span 
          className={`absolute left-0 bottom-0 w-full h-px bg-faran-gold transform ${
            isActive ? 'scale-x-100' : 'scale-x-0'
          } transition-transform duration-300 origin-left`} 
        />
      </span>
    </button>
  );
};

const CraftsmanshipSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { isRTL } = useLanguage();
  
  const ingredients = [
    {
      title: "Indian Agarwood (Salla)",
      description: "From the misty forests of Northeast India, our Assam Agarwood is known for its sweet, deep, and balsamic notes with subtle hints of fruit. We select only the most resinous Salla pieces, considering the forest's altitude and the tree's age for optimal fragrance profile.",
      image: "/lovable-uploads/768d9e31-d35e-4bb8-8c88-8e9112e78243.png"
    },
    {
      title: "Baby Salla",
      description: "A more delicate variant of Salla, Baby Salla offers a lighter but equally complex aroma. Our sustainable harvesting practices ensure we honor both the trees and the communities who tend them, preserving this precious resource for future generations.",
      image: "/lovable-uploads/b72b6a85-a668-400f-a309-075b90893a22.png"
    },
    {
      title: "Mouri Agarwood",
      description: "Mouri Agarwood presents a distinctive character with rich earthy undertones and a subtle sweetness that evolves over time. Each carefully selected piece undergoes meticulous examination by our master perfumers before being included in our exclusive collection.",
      image: "/lovable-uploads/c48f1a88-7037-4300-a003-68466e33f22f.png"
    },
    {
      title: "Joura Agarwood",
      description: "The rarest of our Indian varieties, Joura offers complex notes of spice, honeyed fruits, and a distinctive vanillic sweetness that evolves over time. Each piece is carefully aged for at least a decade before use, ensuring unparalleled olfactory depth.",
      image: "/lovable-uploads/35481a9f-335c-43ab-b469-521047880516.png"
    }
  ];

  return (
    <section id="craftsmanship" className="section bg-gradient-to-b from-faran-black to-faran-charcoal">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-faran-gold mb-3 font-light tracking-wide">Craftsmanship & Ingredients</h2>
          <div className="w-24 h-px mx-auto bg-faran-gold/40 mb-5"></div>
          <p className="text-white/80 max-w-2xl mx-auto font-light">
            Our Agarwood is not merely harvested. It is honored. Discover the exceptional materials that form the heart of FARAN.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className={isRTL ? 'order-2' : 'order-1'}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mb-12 border-b border-gray-700/40 flex overflow-x-auto hide-scrollbar">
              {ingredients.map((ingredient, index) => (
                <IngredientTab
                  key={index}
                  title={ingredient.title}
                  isActive={index === activeTab}
                  onClick={() => setActiveTab(index)}
                />
              ))}
            </div>
            
            <motion.div 
              className="pl-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              key={activeTab} // Re-render on tab change
            >
              <h3 className="text-faran-gold text-xl mb-6 font-serif font-light">
                {ingredients[activeTab].title}
              </h3>
              <p className="text-white/80 leading-relaxed mb-10 font-light">
                {ingredients[activeTab].description}
              </p>
              
              <div className="flex items-center mb-10">
                <div className="w-10 h-px bg-faran-gold/70 mr-4"></div>
                <span className="text-faran-gold text-sm uppercase tracking-wider font-light">Ethically Sourced</span>
              </div>
              
              <a href="#" className="btn-luxury-outline">Learn About Our Process</a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={`relative gold-border ${isRTL ? 'order-1' : 'order-2'}`}
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="gold-border-content">
              <div className="aspect-[4/5] bg-faran-beige/5 relative overflow-hidden">
                <motion.img 
                  src={ingredients[activeTab].image} 
                  alt={ingredients[activeTab].title} 
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  key={activeTab}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-faran-black to-transparent opacity-30"></div>
              </div>
            </div>
            
            <div className="absolute bottom-5 right-5 z-10">
              <div className="bg-black/70 backdrop-blur-sm p-2 border border-faran-gold/20">
                <img 
                  src="/lovable-uploads/a2fc9b9f-ca33-4c87-9f2e-6e1b87665806.png" 
                  alt="FARAN Seal of Authenticity" 
                  className="w-14 h-14 object-contain opacity-90"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-faran-beige/5 aspect-square relative overflow-hidden group">
              <img 
                src="/lovable-uploads/74f39662-0486-4685-8439-e0f8d2343a16.png" 
                alt="Authentic Agarwood" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-faran-black/80 via-transparent to-transparent"></div>
            </div>
            <div className="bg-faran-beige/5 aspect-square relative overflow-hidden group">
              <img 
                src="/lovable-uploads/c3d22462-b827-4392-aa31-52651e0b2b19.png" 
                alt="Premium Agarwood" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-faran-black/80 via-transparent to-transparent"></div>
            </div>
            <div className="bg-faran-beige/5 aspect-square relative overflow-hidden group">
              <img 
                src="/lovable-uploads/528e54d7-7ac0-459b-9ad0-e2989ef086e9.png" 
                alt="Rare Agarwood Collection" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-faran-black/80 via-transparent to-transparent"></div>
            </div>
            <div className="bg-faran-beige/5 aspect-square relative overflow-hidden group">
              <img 
                src="/lovable-uploads/a7a7fd34-ff28-451e-ad1d-d4ceeb0e9d3b.png" 
                alt="Exclusive Agarwood Selection" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-faran-black/80 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
