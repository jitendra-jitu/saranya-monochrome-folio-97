import { Mail, Phone, Linkedin } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 px-4 py-16">
      <div className="container mx-auto max-w-4xl text-center animate-fade-in">
        <div className="mb-8 animate-float">
          <img
            src={profileImage}
            alt="Saranya Vallamsetty - CMA Inter Candidate"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-glow hover:shadow-glow-hover transition-all duration-300"
          />
        </div>
        
        <h1 className="font-heading text-[28px] md:text-6xl font-bold mb-4 animate-fade-in-delay">
          <span className="text-foreground">Saranya</span>
          <span className="text-primary ml-2">Vallamsetty</span>
        </h1>
        
        <h2 className="font-heading text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in-delay">
          CMA Inter Candidate
        </h2>
        
        <p className="font-body text-base md:text-lg max-w-xl mx-auto mb-8 text-muted-foreground animate-fade-in-delay">
          Accounting • Taxation • Audit Expert
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-delay">
          <a
            href="mailto:vallamsettysaranya6@email.com"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-body text-sm"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
          
          <a
            href="tel:+917600077727"
            className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-secondary text-foreground rounded-lg hover:shadow-glow transition-all duration-300 font-body text-sm"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">+91 76000 77727</span>
            <span className="sm:hidden">Call</span>
          </a>
          
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-secondary text-foreground rounded-lg hover:shadow-glow transition-all duration-300 font-body text-sm"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;