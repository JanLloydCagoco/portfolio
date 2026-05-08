import HeroSection from "@/components/home/HeroSection";
import TechStacksSection from "@/components/home/TechStacksSection";
import TimelineSection from "@/components/home/TimelineSection";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import GallerySection from "@/components/home/GallerySection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] dark:border dark:border-[#2a2a2a] min-h-[calc(100vh-120px)] p-2 shadow-sm flex flex-col gap-2 rounded-xl">
      <div className="p-6">
        <HeroSection />
      </div>
      <div className="bg-card rounded-xl p-6">
        <TechStacksSection />
      </div>
      <div className="bg-card rounded-xl p-6">
        <TimelineSection />
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