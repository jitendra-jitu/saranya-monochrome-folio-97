import HeroSection from "@/components/HeroSection";
import ObjectiveSection from "@/components/ObjectiveSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import SoftSkillsSection from "@/components/SoftSkillsSection";
import LanguagesSection from "@/components/LanguagesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <HeroSection />
      <ObjectiveSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <AchievementsSection />
      <SoftSkillsSection />
      <LanguagesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
