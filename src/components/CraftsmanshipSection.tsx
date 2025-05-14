
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AspectRatio } from "./ui/aspect-ratio";

interface IngredientTabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const IngredientTab: React.FC<IngredientTabProps> = ({ title, isActive, onClick }) => {
  return (
    <button
      className={`py-3 px-4 text-left border-b-2 transition-colors duration-300 ${
        isActive ? "border-faran-gold text-faran-gold" : "border-transparent text-gray-400 hover:text-gray-300"
      }`}
      onClick={onClick}
    >
      {title}
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
    <section id="craftsmanship" className="section bg-faran-black">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-faran-gold mb-3">Craftsmanship & Ingredients</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Our Agarwood is not harvested. It is honored. Discover the exceptional materials that form the heart of FARAN.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={isRTL ? 'order-2' : 'order-1'}>
            <div className="mb-8 border-b border-gray-700">
              {ingredients.map((ingredient, index) => (
                <IngredientTab
                  key={index}
                  title={ingredient.title}
                  isActive={index === activeTab}
                  onClick={() => setActiveTab(index)}
                />
              ))}
            </div>
            
            <div className="pl-1">
              <h3 className="text-faran-gold text-xl mb-4 font-serif">
                {ingredients[activeTab].title}
              </h3>
              <p className="text-white/80 leading-relaxed mb-8">
                {ingredients[activeTab].description}
              </p>
              
              <div className="flex items-center mb-10">
                <div className="w-8 h-px bg-faran-gold mr-4"></div>
                <span className="text-faran-gold text-sm uppercase tracking-wider">Ethically Sourced</span>
              </div>
              
              <a href="#" className="btn btn-secondary">Learn About Our Process</a>
            </div>
          </div>
          
          <div className={`relative ${isRTL ? 'order-1' : 'order-2'}`}>
            <div className="aspect-[4/5] bg-faran-beige/5 p-4">
              <AspectRatio ratio={4/5} className="overflow-hidden">
                <img 
                  src={ingredients[activeTab].image} 
                  alt={ingredients[activeTab].title} 
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                />
              </AspectRatio>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-faran-black to-transparent opacity-30"></div>
            <div className="absolute bottom-4 right-4 flex items-center">
              <span className="bg-black/70 text-faran-gold text-xs px-3 py-1 rounded-sm">FARAN Seal of Authenticity</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-faran-beige/5 p-3 aspect-square">
            <img 
              src="/lovable-uploads/74f39662-0486-4685-8439-e0f8d2343a16.png" 
              alt="Authentic Agarwood" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-faran-beige/5 p-3 aspect-square">
            <img 
              src="/lovable-uploads/c3d22462-b827-4392-aa31-52651e0b2b19.png" 
              alt="Premium Agarwood" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-faran-beige/5 p-3 aspect-square">
            <img 
              src="/lovable-uploads/528e54d7-7ac0-459b-9ad0-e2989ef086e9.png" 
              alt="Rare Agarwood Collection" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-faran-beige/5 p-3 aspect-square">
            <img 
              src="/lovable-uploads/a7a7fd34-ff28-451e-ad1d-d4ceeb0e9d3b.png" 
              alt="Exclusive Agarwood Selection" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
