import { Trophy, Users } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "CMA Inter Cleared",
      description: "First attempt success",
      highlight: true
    },
    {
      icon: Users,
      title: "ICMAI Seminars",
      description: "Taxation & Corporate Law workshops",
      highlight: false
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-8 h-8 text-primary mr-3" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Achievements
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className={`bg-card-gradient p-6 rounded-xl shadow-subtle hover:shadow-glow-hover transition-all duration-300 border border-border group hover:scale-105 animate-fade-in ${
                  achievement.highlight ? 'ring-1 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center">
                  <div className={`inline-flex p-3 rounded-full mb-4 ${
                    achievement.highlight ? 'bg-primary/20 animate-glow-pulse' : 'bg-secondary/50'
                  } group-hover:bg-primary/10 transition-colors duration-300`}>
                    <IconComponent className={`w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  
                  <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                    {achievement.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                  
                  {achievement.highlight && (
                    <div className="mt-3">
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                        First Attempt
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;