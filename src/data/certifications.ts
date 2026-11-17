import { CertificationCategory, CertificationItem } from "@/types";

export const certificationCategories: CertificationCategory[] = [
  {
    name: "Artificial Intelligence",
    certifications: [
      {
        id: "cert-google-ai",
        title: "Google AI Essentials",
        issuer: "Google",
        year: "2025",
        verifyUrl:
          "https://www.credly.com/badges/44ce867f-ecf7-4649-a530-e7b0d24b1f48/public_url",
        isPlaceholder: false,
        category: "Artificial Intelligence",
        description:
          "Foundational applied artificial intelligence, prompt engineering, generative AI tools, and workplace productivity workflows.",
      },
    ],
  },
];

export const allCertifications: CertificationItem[] = certificationCategories.flatMap(
  (category) => category.certifications
);

export const certifications: CertificationItem[] = allCertifications;
