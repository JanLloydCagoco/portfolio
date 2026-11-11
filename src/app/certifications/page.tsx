import type { Metadata } from "next";
import { certificationCategories } from "@/lib/certifications";
import {
  ArrowUpRight01Icon,
  CourseraLogo,
  GoogleLogo,
  MetaLogo,
  AwsLogo,
  MicrosoftLogo,
} from "@/lib/icons";

export const metadata: Metadata = {
  title: "Certifications — Jan Lloyd Cagoco",
  description: "Verified credentials, professional certifications, and technical accreditations of Jan Lloyd Cagoco.",
};

export default function CertificationsPage() {
  const getIssuerIcon = (issuer: string) => {
    if (issuer.includes("Google")) {
      return <GoogleLogo className="w-9 h-9 sm:w-11 sm:h-11 shrink-0" />;
    }
    if (issuer.includes("Meta")) {
      return <MetaLogo className="w-9 h-9 sm:w-11 sm:h-11 shrink-0 text-primary" />;
    }
    if (issuer.includes("Amazon") || issuer.includes("AWS")) {
      return <AwsLogo className="w-9 h-9 sm:w-11 sm:h-11 shrink-0 text-primary" />;
    }
    if (issuer.includes("Microsoft") || issuer.includes("Azure")) {
      return <MicrosoftLogo className="w-9 h-9 sm:w-11 sm:h-11 shrink-0" />;
    }
    return <CourseraLogo className="w-9 h-9 sm:w-11 sm:h-11 shrink-0" />;
  };

  return (
    <div className="w-full space-y-10">
      {/* Page Header */}
      <div className="space-y-8">
        <h1 className="font-pixel text-[26px] sm:text-[28px] leading-none text-primary lowercase">
          certifications
        </h1>
        <p className="text-[15px] sm:text-[16px] text-secondary leading-relaxed">
          A curated directory of verified credentials, professional certifications, and technical accreditations issued by industry organizations.
        </p>
      </div>

      {/* Categorized Certifications: Overview tactile cards grouped by domain like in the Stack */}
      <div className="space-y-8">
        {certificationCategories.map((category) => (
          <section key={category.name} aria-label={category.name} className="space-y-3">
            <h2 className="text-[13px] font-medium text-secondary uppercase tracking-wider">
              {category.name}
            </h2>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-[540px]">
              {category.certifications.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full aspect-square rounded-[8px] border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[0_4px_16px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-center p-2.5 sm:p-3.5 gap-2 sm:gap-2.5 transition-all duration-150 hover:border-[var(--border-strong)] hover:shadow-md group select-none"
                >
                  {/* 1. Platform Logo */}
                  <div className="flex items-center justify-center">
                    {getIssuerIcon(cert.issuer)}
                  </div>

                  {/* 2. Cert Name Below Logo */}
                  <h3 className="text-[12px] sm:text-[14px] font-bold text-primary font-grotesk tracking-tight leading-snug line-clamp-3">
                    {cert.title}
                  </h3>

                  {/* 3. Below is Verify Link */}
                  <div className="pt-0.5">
                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-[13px] font-medium text-primary underline-offset-4 decoration-[var(--border-strong)] transition-colors">
                      <span className="group-hover:underline">Verify</span>
                      <ArrowUpRight01Icon
                        size={11}
                        className="shrink-0 text-primary"
                      />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
