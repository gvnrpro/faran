
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-faran-black text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-faran-gold mb-6">About FARAN</h2>
            <p className="text-lg mb-6 leading-relaxed">
              FARAN is not merely worn. It is honored, shared, remembered. Rooted in the sands of Arabian 
              trade routes and the tents of Bedouin tribes, FARAN distills rare Agarwood into bottled legacy.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              It is scent—not for the masses—but for those who understand subtle power. Each essence carries 
              the weight of ancestral memories, the depth of Agarwood from India to Cambodia, and honors the 
              traditions of Emirati gifting.
            </p>
            <div className="flex items-center">
              <div className="w-12 h-px bg-faran-gold mr-4"></div>
              <span className="text-faran-gold italic font-serif">Worthy of Remembrance</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[3/4] relative">
              <img 
                src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=900&q=80" 
                alt="Vintage oud market" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-faran-black/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 p-4 bg-faran-brown flex items-center justify-center">
              <img 
                src="/lovable-uploads/a2fc9b9f-ca33-4c87-9f2e-6e1b87665806.png" 
                alt="FARAN logo" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
