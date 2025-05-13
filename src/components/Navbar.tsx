
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="text-white">
              <img
                src="/lovable-uploads/a2fc9b9f-ca33-4c87-9f2e-6e1b87665806.png"
                alt="FARAN"
                className="h-10 md:h-12"
              />
            </a>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["Home", "About", "Collection", "Legacy", "Craftsmanship", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-faran-gold transition-colors duration-300 text-sm uppercase tracking-wider"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="flex items-center">
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-faran-black">
          <ul className="px-4 pt-2 pb-4 space-y-4">
            {["Home", "About", "Collection", "Legacy", "Craftsmanship", "Contact"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="block text-white hover:text-faran-gold px-3 py-2 text-base uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
