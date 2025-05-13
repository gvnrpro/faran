
import React from "react";

const GiftingSection = () => {
  return (
    <section className="py-16 bg-faran-beige/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="relative">
            <div className="aspect-[4/5] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80" 
                alt="FARAN being gifted" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-10 -right-10 w-40 h-40 border-2 border-faran-gold z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border-2 border-faran-gold z-0"></div>
          </div>
          
          <div>
            <div className="mb-6">
              <div className="w-16 h-px bg-faran-gold mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Gifting Culture</h2>
            </div>
            
            <p className="text-lg mb-6 leading-relaxed">
              When you gift FARAN, you're offering presence. Respect. Memory. In the Arabian tradition, 
              the giving of fragrance transcends mere gesture—it conveys honor between individuals.
            </p>
            
            <p className="text-lg mb-8 leading-relaxed">
              Our fragrances are meticulously crafted not only for personal pleasure but as vessels of 
              connection, packaged in presentations worthy of the most dignified occasions.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#collection" className="btn btn-primary">
                Explore Gift Sets
              </a>
              <a href="#" className="btn btn-secondary">
                Custom Packaging
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftingSection;
