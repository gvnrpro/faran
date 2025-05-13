
import React from "react";

interface ProductCardProps {
  image: string;
  name: string;
  family: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, family, description }) => {
  return (
    <div className="group relative">
      <div className="overflow-hidden">
        <div className="aspect-[3/4] bg-faran-beige/10 relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-faran-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-white text-sm">{description}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <span className="text-xs uppercase tracking-wider text-faran-gold">{family}</span>
        <h3 className="text-lg font-medium mt-1">{name}</h3>
      </div>
    </div>
  );
};

const CollectionSection = () => {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&q=80",
      name: "Royal Oud Collection",
      family: "Woody Oriental",
      description: "Our premium oud chips, carefully selected from 100-year-old Agarwood trees cultivated in the most pristine forests of Cambodia."
    },
    {
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=600&q=80",
      name: "Amber Elixir",
      family: "Spicy Oriental",
      description: "This essence was aged for 12 years before bottling, capturing the rich depth that only time can bestow."
    },
    {
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
      name: "Desert Rose",
      family: "Floral Woody",
      description: "Infused with rare rose petals harvested only at dawn from the valleys of Taif, creating an unparalleled delicacy."
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
      name: "Sultan's Gift Set",
      family: "Premium Collection",
      description: "The ultimate expression of heritage and craftsmanship, presented in a handcrafted wooden chest lined with silk."
    }
  ];

  return (
    <section id="collection" className="section bg-gradient-to-b from-faran-brown to-faran-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-faran-gold mb-3">Shop Our Collection</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore our carefully curated fragrances, each telling a story of tradition, craftsmanship, and timeless elegance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="btn btn-secondary">View All Collections</a>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
