import HeroSection from "@/components/home/HeroSection";
import TechStacksSection from "@/components/home/TechStacksSection";
import TimelineSection from "@/components/home/TimelineSection";
import FadeIn from "@/components/ui/FadeIn";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import GallerySection from "@/components/home/GallerySection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    // Mobile (<768): no card — sections sit directly on gradient
    // Tablet (768–1023): glass card ON, p-1.5 wrapper, rounded-xl
    // Desktop (≥1024): glass card ON, p-2 wrapper, rounded-3xl
    <div className="glass min-h-[calc(100vh-100px)] p-2 shadow-sm flex flex-col gap-2 rounded-3xl">
      {/* Hero — no inner card, just padded content */}
      <FadeIn delay={0.1}>
        <div className="p-6">
          <HeroSection />
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="bg-card rounded-2xl p-6">
          <TechStacksSection />
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="bg-card rounded-2xl p-6">
          <TimelineSection title="Work" type="work" />
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="bg-card rounded-2xl p-6">
          <TimelineSection title="Education" type="education" />
        </div>
      </FadeIn>

      <FadeIn delay={0.5}>
        <div className="bg-card rounded-2xl p-6">
          <TimelineSection title="Achievements" type="achievements" />
        </div>
      </FadeIn>

      <FadeIn delay={0.6}>
        <div className="bg-card rounded-2xl p-6">
          <ProjectsPreview />
        </div>
      </FadeIn>

      <FadeIn delay={0.7}>
        <div className="bg-card rounded-2xl p-6">
          <GallerySection />
        </div>
      </FadeIn>

      <div className="glass-sm rounded-2xl py-3 px-4 mt-auto">
        <Footer />
      </div>
    </div>
  );
}