
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for joining",
      description: "You have successfully joined the FARAN Majlis.",
    });
  };

  return (
    <section className="py-20 bg-faran-charcoal border-t border-faran-gold/20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-faran-gold mb-4">Join the Majlis</h2>
          <p className="text-white/80 mb-8">
            Stay close to the scent of legacy. Join our community for exclusive insights, early access to limited editions, and invitations to private FARAN events.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Input 
              type="text" 
              placeholder="Your name" 
              className="bg-transparent border-faran-gold/50 text-white"
              required
            />
            <Input 
              type="email" 
              placeholder="Your email" 
              className="bg-transparent border-faran-gold/50 text-white"
              required
            />
            <Button type="submit" className="bg-faran-gold hover:bg-faran-darkGold text-black">
              Join the Majlis
            </Button>
          </form>
          
          <p className="text-white/50 text-xs mt-6">
            By joining, you agree to receive communications from FARAN. We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
