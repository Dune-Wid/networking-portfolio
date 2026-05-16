
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { HomeLabSection } from "../components/HomeLabSection";
import { CurrentGoalsSection } from "../components/CurrentGoalsSection";
import { GithubSection } from "../components/GithubSection";
import { ResumeSection } from "../components/ResumeSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans relative">
      <StarBackground />
      <Navbar />

      {/* Subtle technical grid overlay for infrastructure feel */}
      <main className="relative z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <HomeLabSection />
          <CurrentGoalsSection />
          <GithubSection />
          <ResumeSection />
          <ContactSection />
      </main>

      <Footer />
    </div>
  );
};