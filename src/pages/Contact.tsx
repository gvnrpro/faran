
import React, { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Contact = () => {
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
    window.scrollTo(0, 0);
  }, [language, isRTL]);

  const contactMethods = [
    {
      icon: MessageCircle,
      title: { en: "WhatsApp", ar: "واتساب" },
      value: "+971 55 799 3441",
      link: "https://wa.me/971557993441",
      description: { en: "Chat with us instantly", ar: "تحدث معنا فوراً" }
    },
    {
      icon: Phone,
      title: { en: "Phone", ar: "الهاتف" },
      value: "+971 4 572 9188",
      link: "tel:+97145729188",
      description: { en: "Call us directly", ar: "اتصل بنا مباشرة" }
    },
    {
      icon: Mail,
      title: { en: "Email", ar: "البريد الإلكتروني" },
      value: "info@faran.ae",
      link: "mailto:info@faran.ae",
      description: { en: "Send us an email", ar: "أرسل لنا بريد إلكتروني" }
    },
    {
      icon: Mail,
      title: { en: "Sales Email", ar: "بريد المبيعات" },
      value: "sales@faran.ae",
      link: "mailto:sales@faran.ae",
      description: { en: "For sales inquiries", ar: "لاستفسارات المبيعات" }
    }
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={language}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-faran-cream min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}
      >
        <SEO 
          title={`${isRTL ? "اتصل بنا" : "Contact Us"} | FARAN`}
          description={isRTL 
            ? "تواصل مع فاران للعطور الفاخرة. متجرنا في دبي، الإمارات العربية المتحدة."
            : "Contact FARAN Luxury Fragrances. Our flagship store in Dubai, UAE."}
        />
        
        <Navbar />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20 bg-faran-beige">
            <div className="container-custom text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-serif text-faran-brown mb-6">
                  {isRTL ? "تواصل معنا" : "Contact Us"}
                </h1>
                <p className="text-lg text-faran-brown/80 max-w-2xl mx-auto">
                  {isRTL 
                    ? "نحن هنا لخدمتك. تواصل معنا لأي استفسارات حول منتجاتنا الفاخرة أو لطلب استشارة شخصية."
                    : "We're here to serve you. Contact us for any inquiries about our luxury products or to request a personal consultation."}
                </p>
              </motion.div>
            </div>
          </section>

          <div className="container-custom py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-serif text-faran-brown mb-8">
                  {isRTL ? "معلومات الاتصال" : "Get in Touch"}
                </h2>
                
                <div className="space-y-6 mb-12">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                        <div className="p-3 bg-faran-beige rounded-lg">
                          <Icon size={24} className="text-faran-gold" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-faran-brown mb-1">{method.title[language]}</h3>
                          <a 
                            href={method.link}
                            className="text-faran-gold hover:text-faran-darkGold transition-colors font-medium"
                          >
                            {method.value}
                          </a>
                          <p className="text-sm text-faran-brown/60 mt-1">{method.description[language]}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Store Location */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin size={24} className="text-faran-gold" />
                    <h3 className="text-xl font-serif text-faran-brown">
                      {isRTL ? "موقع المتجر" : "Store Location"}
                    </h3>
                  </div>
                  <div className="space-y-2 text-faran-brown/80">
                    <p className="font-semibold">FARAN Flagship Store</p>
                    <p>Arabilla Building</p>
                    <p>Abu Hail, Dubai</p>
                    <p>United Arab Emirates</p>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-faran-gold/20">
                    <Clock size={20} className="text-faran-gold" />
                    <div>
                      <p className="font-semibold text-faran-brown">
                        {isRTL ? "ساعات العمل" : "Store Hours"}
                      </p>
                      <p className="text-sm text-faran-brown/80">
                        {isRTL ? "السبت - الخميس: 9:00 ص - 10:00 م" : "Saturday - Thursday: 9:00 AM - 10:00 PM"}
                      </p>
                      <p className="text-sm text-faran-brown/80">
                        {isRTL ? "الجمعة: 2:00 م - 10:00 م" : "Friday: 2:00 PM - 10:00 PM"}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-serif text-faran-brown mb-8">
                  {isRTL ? "أرسل رسالة" : "Send us a Message"}
                </h2>
                
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-faran-brown mb-2">
                          {isRTL ? "الاسم الأول" : "First Name"} *
                        </label>
                        <input 
                          type="text" 
                          className="w-full p-3 border border-faran-gold/30 rounded-lg focus:border-faran-gold focus:outline-none"
                          placeholder={isRTL ? "الاسم الأول" : "First Name"}
                        />
                      </div>
                      <div>
                        <label className="block text-faran-brown mb-2">
                          {isRTL ? "اسم العائلة" : "Last Name"} *
                        </label>
                        <input 
                          type="text" 
                          className="w-full p-3 border border-faran-gold/30 rounded-lg focus:border-faran-gold focus:outline-none"
                          placeholder={isRTL ? "اسم العائلة" : "Last Name"}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-faran-brown mb-2">
                        {isRTL ? "البريد الإلكتروني" : "Email"} *
                      </label>
                      <input 
                        type="email" 
                        className="w-full p-3 border border-faran-gold/30 rounded-lg focus:border-faran-gold focus:outline-none"
                        placeholder={isRTL ? "البريد الإلكتروني" : "your@email.com"}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-faran-brown mb-2">
                        {isRTL ? "رقم الهاتف" : "Phone Number"}
                      </label>
                      <input 
                        type="tel" 
                        className="w-full p-3 border border-faran-gold/30 rounded-lg focus:border-faran-gold focus:outline-none"
                        placeholder={isRTL ? "رقم الهاتف" : "Phone Number"}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-faran-brown mb-2">
                        {isRTL ? "الموضوع" : "Subject"} *
                      </label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-faran-gold/30 rounded-lg focus:border-faran-gold focus:outline-none"
                        placeholder={isRTL ? "كيف يمكننا مساعدتك؟" : "How can we help you?"}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-faran-brown mb-2">
                        {isRTL ? "الرسالة" : "Message"} *
                      </label>
                      <textarea 
                        rows={6}
                        className="w-full p-3 border border-faran-gold/30 rounded-lg focus:border-faran-gold focus:outline-none resize-none"
                        placeholder={isRTL ? "اكتب رسالتك هنا..." : "Write your message here..."}
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn-luxury w-full">
                      {isRTL ? "إرسال الرسالة" : "Send Message"}
                    </button>
                  </form>
                </div>
                
                {/* Quick WhatsApp Contact */}
                <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle size={24} className="text-green-600" />
                    <h3 className="font-semibold text-green-800">
                      {isRTL ? "تحدث معنا الآن" : "Chat with us now"}
                    </h3>
                  </div>
                  <p className="text-green-700 mb-4">
                    {isRTL 
                      ? "احصل على إجابات فورية عبر واتساب. نحن متاحون للمساعدة!"
                      : "Get instant answers via WhatsApp. We're available to help!"}
                  </p>
                  <a 
                    href="https://wa.me/971557993441" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle size={20} />
                    <span>{isRTL ? "ابدأ المحادثة" : "Start Chat"}</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;
