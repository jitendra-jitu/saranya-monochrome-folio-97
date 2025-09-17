import { Target } from 'lucide-react';

const ObjectiveSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Target className="w-8 h-8 text-primary mr-3" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Career Objective
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
        </div>
        
        <div className="bg-card-gradient p-6 rounded-xl shadow-subtle hover:shadow-glow-hover transition-all duration-300 border border-border">
          <p className="font-body text-base text-card-foreground text-center max-w-2xl mx-auto">
            Seeking <strong className="text-primary">CA/CMA Firm Position</strong> • Gain practical experience in Accounting, Taxation & Audit
          </p>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;