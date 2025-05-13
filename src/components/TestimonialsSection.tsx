
import React from "react";

interface TestimonialCardProps {
  initials: string;
  quote: string;
  position: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ initials, quote, position }) => {
  return (
    <div className="bg-faran-charcoal p-8 relative">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-faran-brown/50 flex items-center justify-center text-faran-gold font-serif text-lg">
          {initials}
        </div>
      </div>
      <blockquote className="text-white/90 text-lg font-serif italic mb-6">"{quote}"</blockquote>
      <div className="text-sm text-faran-gold">{position}</div>
      <div className="absolute top-6 right-6 opacity-20">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 11H6.21C6.7 8.83 8.13 8 10 8V6C7 6 4 8.2 4 13V17H10V11ZM20 11H16.21C16.7 8.83 18.13 8 20 8V6C17 6 14 8.2 14 13V17H20V11Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      initials: "H.A.",
      quote: "It felt like my grandfather walked into the room. FARAN captures not just a scent, but a heritage that speaks to the soul.",
      position: "Royal Family Member, UAE"
    },
    {
      initials: "S.M.",
      quote: "The only gift I trust to impress an Emirati diplomat. FARAN stands out in a world where true luxury has become increasingly rare.",
      position: "International Business Executive"
    },
    {
      initials: "K.J.",
      quote: "Each time I experience FARAN, I discover something new—layers of complexity that evolve and tell a story with each passing hour.",
      position: "Fragrance Collector"
    }
  ];

  return (
    <section className="section bg-gradient-to-b from-faran-brown to-faran-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-faran-gold mb-3">Esteemed Voices</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            The experiences of those who understand the profound language of exceptional fragrance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initials={testimonial.initials}
              quote={testimonial.quote}
              position={testimonial.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
