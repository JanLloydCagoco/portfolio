import Image from "next/image";
import SectionCard from "@/components/ui/SectionCard";
import SectionLabel from "@/components/ui/SectionLabel";
import AvailableBadge from "@/components/ui/AvailableBadge";
import CopyEmailClient from "./CopyEmailClient";

export default function HeroSection() {
  return (
    <>
      {/* Top Row — Label + Available Badge */}
      <div className="flex items-center justify-between mb-4">
        <SectionLabel text="Product Designer" />
        <AvailableBadge />
      </div>

      {/* Main Row — Text + Avatar */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-primary mb-2">
            I'm Jan Lloyd
          </h1>
          <p className="text-lg text-secondary mb-5">
            Product designer from Caloocan, PH.
            <br />
            Currently designing at Rectangle.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <CopyEmailClient />

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-[#2b2b2b] dark:border dark:border-zinc-600 hover-outline transition-all duration-200"
            >
              <svg
                className="w-5 h-5 text-black dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-[#2b2b2b] dark:border dark:border-zinc-600 hover-outline transition-all duration-200"
            >
              <svg
                className="w-5 h-5 text-black dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-[#2a2a2a]">
          <Image
            src="/avatar.png"
            alt="Jan Lloyd Cagoco"
            width={80}
            height={80}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </>
  );
}