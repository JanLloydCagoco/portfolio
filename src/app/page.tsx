import HeroSection from "@/components/home/HeroSection";
import TechStacksSection from "@/components/home/TechStacksSection";
import TimelineSection from "@/components/home/TimelineSection";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import GallerySection from "@/components/home/GallerySection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    // Mobile (<768): no card — sections sit directly on gradient
    // Tablet (768–1023): glass card ON, p-1.5 wrapper, rounded-xl
    // Desktop (≥1024): glass card ON, p-2 wrapper, rounded-xl
    <div className="glass min-h-[calc(100vh-120px)] p-2 shadow-sm flex flex-col gap-2 rounded-xl">
      {/* Hero — no inner card, just padded content */}
      <div className="p-6">
        <HeroSection />
      </div>

      <div className="bg-card rounded-xl p-6">
        <TechStacksSection />
      </div>

      <div className="bg-card rounded-xl p-6">
        <TimelineSection title="Work" type="work" />
      </div>

      <div className="bg-card rounded-xl p-6">
        <TimelineSection title="Education" type="education" />
      </div>

      <div className="bg-card rounded-xl p-6">
        <TimelineSection title="Achievements" type="achievements" />
      </div>

      <div className="bg-card rounded-xl p-6">
        <ProjectsPreview />
      </div>

      <div className="bg-card rounded-xl p-6">
        <GallerySection />
      </div>

      <div className="bg-card rounded-xl p-4">
        <Footer />
      </div>
    </div>
  );
}