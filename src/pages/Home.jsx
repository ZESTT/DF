import { ThemeToggle } from "../components/ThemeToggle";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}

      {/* Navbar */}
      {/* Main Content */}
      <main>
      <ProjectsSection />

        <SkillsSection />
      </main>

      {/* Footer */}
    </div>
  );
};
