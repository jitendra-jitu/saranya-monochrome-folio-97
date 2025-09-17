import { 
  Calculator, 
  FileText, 
  Shield, 
  Monitor, 
  Building, 
  TrendingUp 
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: Calculator,
      title: "Accounting",
      items: ["Journal entries", "Ledger posting", "Trial balance", "Finalization basics"],
      color: "text-primary"
    },
    {
      icon: FileText,
      title: "Taxation",
      items: ["GST filing", "TDS compliance", "Income Tax returns"],
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Audit",
      items: ["Vouching", "Verification", "Compliance checking", "Reconciliation"],
      color: "text-primary"
    },
    {
      icon: Monitor,
      title: "Software",
      items: ["Tally ERP", "MS Excel (VLOOKUP, Pivot Tables)", "MS Word"],
      color: "text-primary"
    },
    {
      icon: Building,
      title: "Corporate Knowledge",
      items: ["Financial Reporting", "Corporate Law"],
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Analytical Skills",
      items: ["Problem-solving", "Data analysis", "Attention to detail"],
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Core Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="bg-card-gradient p-6 rounded-xl shadow-subtle hover:shadow-glow-hover transition-all duration-300 border border-border group hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-secondary/50 mr-4 group-hover:bg-primary/10 transition-colors duration-300">
                    <IconComponent className={`w-6 h-6 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-card-foreground">
                    {skill.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="font-body text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;