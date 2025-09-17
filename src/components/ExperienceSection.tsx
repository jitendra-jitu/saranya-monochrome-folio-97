import { Briefcase, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Financial Statements",
      description: "Draft financial statements during CMA training",
      skills: ["Financial Reporting", "Documentation"]
    },
    {
      title: "GST Filing",
      description: "GST computation & returns (GSTR-3B, GSTR-1)",
      skills: ["GST Returns", "Tax Compliance"]
    },
    {
      title: "Audit Work",
      description: "Mock audit assignments & reconciliations",
      skills: ["Vouching", "Compliance", "Reconciliation"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="w-8 h-8 text-primary mr-3" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Practical Exposure
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card-gradient p-4 rounded-xl shadow-subtle hover:shadow-glow-hover transition-all duration-300 border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-primary/10 mr-4 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                    {exp.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground mb-3 text-sm">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-body border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;