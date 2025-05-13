
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-faran-black text-white/70 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img 
              src="/lovable-uploads/a2fc9b9f-ca33-4c87-9f2e-6e1b87665806.png" 
              alt="FARAN" 
              className="h-10 mb-6" 
            />
            <p className="mb-6">
              FARAN is not merely worn. It is honored, shared, remembered. A luxury oud and fragrance house rooted in Arabian tradition.
            </p>
            <div className="text-faran-gold">For Those Who Were Always Meant to Lead</div>
          </div>
          
          <div>
            <h3 className="text-faran-gold font-serif text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Our Collection", "Legacy", "Craftsmanship", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-faran-gold transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-faran-gold font-serif text-lg mb-6">Collections</h3>
            <ul className="space-y-4">
              {["Oud Oils", "Premium Chips", "Exclusive Perfumes", "Gift Sets", "Custom Orders", "Limited Editions"].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="hover:text-faran-gold transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-faran-gold font-serif text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>FARAN Flagship Boutique</li>
              <li>The Dubai Mall, Fashion Avenue</li>
              <li>Dubai, United Arab Emirates</li>
              <li className="pt-2">
                <a href="tel:+97100000000" className="hover:text-faran-gold">+971 0 000 0000</a>
              </li>
              <li>
                <a href="mailto:inquiries@faran.com" className="hover:text-faran-gold">inquiries@faran.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FARAN Luxury Fragrances. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-faran-gold">Privacy Policy</a>
            <a href="#" className="hover:text-faran-gold">Terms of Service</a>
            <a href="#" className="hover:text-faran-gold">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
