
import React, { useState } from "react";

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
  
  const ingredients = [
    {
      title: "Assam Agarwood",
      description: "From the misty forests of Northeast India, our Assam Agarwood is known for its sweet, deep, and balsamic notes with subtle hints of fruit. We select only the most resinous pieces, considering the forest's altitude and the tree's age.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Cambodian Oud",
      description: "The pride of our collection, Cambodian Oud offers a distinct honey-like sweetness with subtle tobacco and leather undertones. Our sustainable harvesting practices ensure we honor both the trees and the communities who tend them.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Indonesian Kyara",
      description: "The rarest of all Agarwood varieties, our Kyara offers complex notes of spice, honeyed fruits, and a distinctive vanillic sweetness that evolves over time. Each piece is carefully aged for at least a decade before use.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=900&q=80"
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
          <div>
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
          
          <div className="relative">
            <div className="aspect-[4/5]">
              <img 
                src={ingredients[activeTab].image} 
                alt={ingredients[activeTab].title} 
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-faran-black to-transparent opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
