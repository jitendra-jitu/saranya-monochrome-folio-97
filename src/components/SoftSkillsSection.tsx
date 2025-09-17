import { Users, Clock, Lightbulb, MessageCircle } from 'lucide-react';

const SoftSkillsSection = () => {
  const softSkills = [
    {
      icon: Users,
      title: "Teamwork",
      description: "Strong collaboration"
    },
    {
      icon: Clock,
      title: "Time Management", 
      description: "Meet deadlines"
    },
    {
      icon: Lightbulb,
      title: "Adaptability",
      description: "Quick learner"
    },
    {
      icon: MessageCircle,
      title: "Communication",
      description: "Clear & effective"
    }
  ];

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soft Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="bg-card-gradient p-6 rounded-xl shadow-subtle hover:shadow-glow-hover transition-all duration-300 border border-border group hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-primary/10 mr-4 flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                      {skill.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;