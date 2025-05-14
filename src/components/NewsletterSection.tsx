
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const NewsletterSection = () => {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isRTL ? "شكراً للانضمام" : "Thank you for joining",
      description: isRTL ? "لقد انضممت بنجاح إلى مجلس فران." : "You have successfully joined the FARAN Majlis.",
    });
  };

  return (
    <section id="contact" className={`py-20 bg-faran-charcoal border-t border-faran-gold/20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-faran-gold mb-4">{t("newsletter.title")}</h2>
          <p className="text-white/80 mb-8">
            {t("newsletter.description")}
          </p>
          
          <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Input 
              type="text" 
              placeholder={isRTL ? "الاسم" : "Your name"} 
              className="bg-transparent border-faran-gold/50 text-white"
              required
            />
            <Input 
              type="email" 
              placeholder={isRTL ? "البريد الإلكتروني" : "Your email"}
              className="bg-transparent border-faran-gold/50 text-white"
              required
            />
            <Button type="submit" className="bg-faran-gold hover:bg-faran-darkGold text-black">
              {t("newsletter.button")}
            </Button>
          </form>
          
          <p className="text-white/50 text-xs mt-6">
            {isRTL 
              ? "بالانضمام، أنت توافق على تلقي رسائل من فران. نحترم خصوصيتك ولن نشارك معلوماتك أبدًا."
              : "By joining, you agree to receive communications from FARAN. We respect your privacy and will never share your information."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
