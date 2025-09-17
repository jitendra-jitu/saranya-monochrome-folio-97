import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "CMA Inter (ICMAI)",
      status: "Cleared",
      year: "2024",
      institution: "Institute of Cost Accountants of India",
      highlight: true
    },
    {
      degree: "B.Com",
      status: "2nd Year (Ongoing)",
      year: "Ongoing",
      institution: "Nagarjuna University",
      highlight: false
    },
    {
      degree: "Intermediate",
      status: "Completed",
      year: "2022",
      institution: "Sri Medha College, Guntur",
      highlight: false
    },
    {
      degree: "10th (CBSE)",
      status: "Completed",
      year: "2020",
      institution: "Bhashyam Blooms School",
      highlight: false
    }
  ];

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-primary mr-3" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Education
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border"></div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary ${
                  edu.highlight ? 'bg-primary animate-glow-pulse' : 'bg-background'
                }`}></div>
                
                {/* Content card */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                } md:w-1/2`}>
                  <div className={`bg-card-gradient p-6 rounded-xl shadow-subtle hover:shadow-glow-hover transition-all duration-300 border border-border ${
                    edu.highlight ? 'ring-1 ring-primary/20' : ''
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex items-center gap-2 text-primary font-body font-semibold">
                        <Calendar size={16} />
                        {edu.year}
                      </span>
                      {edu.highlight && (
                        <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                          CLEARED
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2">
                      {edu.degree}
                    </h3>
                    
                    <p className="font-body text-muted-foreground mb-3">
                      {edu.status}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      <span className="font-body">{edu.institution}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;