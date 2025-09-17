import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vallamsettysaranya6@email.com",
      href: "mailto:vallamsettysaranya6@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 76000 77727",
      href: "tel:+917600077727"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "#"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Guntur, Andhra Pradesh",
      href: "#"
    }
  ];

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
          <p className="font-body text-muted-foreground mt-6 max-w-xl mx-auto text-sm">
            Ready to join your team • Available immediately
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            const isClickable = contact.href !== "#";
            
            const content = (
              <div className="bg-card-gradient p-6 rounded-xl shadow-subtle hover:shadow-glow-hover transition-all duration-300 border border-border group hover:scale-105 animate-fade-in">
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-card-foreground mb-1">
                      {contact.label}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </div>
            );

            return (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {isClickable ? (
                  <a href={contact.href} className="block">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-8">
          <div className="bg-card-gradient p-6 rounded-xl shadow-subtle border border-border">
            <p className="font-body text-sm text-card-foreground mb-4">
              Available immediately • Open to relocate
            </p>
            <a
              href="mailto:vallamsettysaranya6@email.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-body font-semibold shadow-glow hover:shadow-glow-hover"
            >
              <Mail size={18} />
              <span>Send Message</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;