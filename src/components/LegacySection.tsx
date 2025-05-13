
import React, { useState } from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image: string;
  isActive: boolean;
  onClick: () => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, title, description, image, isActive, onClick 
}) => {
  return (
    <div 
      className={`cursor-pointer transition-all duration-300 ${
        isActive ? 'opacity-100' : 'opacity-50 hover:opacity-70'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center mb-3">
        <div className={`w-4 h-4 rounded-full ${isActive ? 'bg-faran-gold' : 'bg-gray-400'}`}></div>
        <div className="h-px flex-1 mx-3 bg-gray-400"></div>
        <span className="text-lg font-serif">{year}</span>
      </div>
      <h3 className={`text-xl ${isActive ? 'text-faran-gold' : 'text-white'} mb-2`}>{title}</h3>
      <p className="text-sm text-white/70">{description}</p>
    </div>
  );
};

const LegacySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const timelineItems = [
    {
      year: "Ancient Origins",
      title: "Bedouin Traditions",
      description: "The use of oud in Bedouin tents, where fragrance meant hospitality and honored guests.",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=1200&q=80"
    },
    {
      year: "17th Century",
      title: "Royal Courts",
      description: "Oud became the scent of palaces, where FARAN's ancestors provided fragrances to sultans.",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=1200&q=80"
    },
    {
      year: "1970s",
      title: "Modern Evolution",
      description: "The traditional majlis scene, where FARAN fragrances became synonymous with hospitality.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1200&q=80"
    },
    {
      year: "Present Day",
      title: "Contemporary Luxury",
      description: "FARAN in modern settings, where tradition meets innovation in the skyscrapers of today.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <section id="legacy" className="section bg-faran-charcoal">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-faran-gold mb-3">The FARAN Legacy</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Our journey through time, preserving ancient traditions while embracing modern excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-16">
              {timelineItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  isActive={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-3 relative">
            <div className="aspect-[16/9] bg-faran-black/30">
              <img 
                src={timelineItems[activeIndex].image} 
                alt={timelineItems[activeIndex].title}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-faran-black/80 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl text-faran-gold font-serif mb-2">{timelineItems[activeIndex].title}</h3>
              <p className="text-white/90">{timelineItems[activeIndex].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
