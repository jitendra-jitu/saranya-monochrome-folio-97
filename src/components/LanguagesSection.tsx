import { Globe } from 'lucide-react';

const LanguagesSection = () => {
  const languages = [
    { name: "English", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Fluent" },
    { name: "Telugu", proficiency: "Native" }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Globe className="w-8 h-8 text-primary mr-3" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Languages
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {languages.map((language, index) => (
            <div
              key={index}
              className="bg-card-gradient px-8 py-6 rounded-xl shadow-subtle hover:shadow-glow-hover transition-all duration-300 border border-border group hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2">
                  {language.name}
                </h3>
                <span className="font-body text-primary text-sm bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  {language.proficiency}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;