
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { language, setLanguage, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false); // Close the menu when the route changes
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Create the toggleLanguage function since it's not provided by the context
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navItems = [
    { name: isRTL ? "الرئيسية" : "Home", path: "/" },
    { name: isRTL ? "من نحن" : "About", path: "/about" },
    { name: isRTL ? "المتجر" : "Shop", path: "/shop" },
    { name: isRTL ? "الإرث" : "Legacy", path: "/legacy" },
    { name: isRTL ? "الحرفية" : "Craftsmanship", path: "/craftsmanship" },
    { name: isRTL ? "طلبات مخصصة" : "Custom Orders", path: "/custom-orders" },
    { name: isRTL ? "اتصل بنا" : "Contact", path: "/contact" }
  ];

  return (
    <nav className="bg-faran-black py-4 fixed top-0 left-0 w-full z-50">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          <img src="/lovable-uploads/a206e9b1-f855-4dae-bf84-b9e4a1e92871.png" alt="FARAN Logo" className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          <button onClick={toggleLanguage} className="text-gray-300 hover:text-white transition-colors duration-300">
            {language === 'en' ? 'عربي' : 'English'}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-faran-black text-white">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>
                  Explore FARAN
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 block py-2"
                    onClick={() => setIsMenuOpen(false)} // Close menu on item click
                  >
                    {item.name}
                  </Link>
                ))}
                <button onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false); // Also close after language toggle
                }} className="text-gray-300 hover:text-white transition-colors duration-300 block py-2">
                  {language === 'en' ? 'عربي' : 'English'}
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
