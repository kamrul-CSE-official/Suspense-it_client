import { HeroSection } from "./_components/hero-section";
import { AboutSection } from "./_components/about-section";
import { ProjectsSection } from "./_components/projects-section";
import { ContactSection } from "./_components/contact-section";
import { ServicesSection } from "./_components/services-section";
import { TeamSection } from "./_components/team-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
