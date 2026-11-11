import { CertificationCategory, CertificationItem } from "@/types";

export const certificationCategories: CertificationCategory[] = [
  {
    name: "Artificial Intelligence & Machine Learning",
    certifications: [
      {
        id: "cert-google-ai",
        title: "Google AI Essentials",
        issuer: "Coursera · Google",
        year: "2025",
        verifyUrl: "https://www.coursera.org/account/accomplishments/verify/",
        isPlaceholder: false,
        category: "Artificial Intelligence & Machine Learning",
        description: "Foundational applied artificial intelligence, prompting techniques, and productivity workflows.",
      },
      {
        id: "cert-google-genai",
        title: "Generative AI Fundamentals",
        issuer: "Google Cloud",
        year: "2025",
        verifyUrl: "https://www.cloudskillsboost.google",
        isPlaceholder: false,
        category: "Artificial Intelligence & Machine Learning",
        description: "Large language models, generative AI principles, attention mechanisms, and ethical AI deployment.",
      },
      {
        id: "cert-azure-ai",
        title: "Azure AI Fundamentals",
        issuer: "Microsoft",
        year: "2024",
        verifyUrl: "https://learn.microsoft.com/certifications",
        isPlaceholder: true,
        category: "Artificial Intelligence & Machine Learning",
        description: "Machine learning workloads, computer vision, natural language processing, and conversational AI.",
      },
    ],
  },
  {
    name: "Frontend & Web Engineering",
    certifications: [
      {
        id: "cert-meta-frontend",
        title: "Meta Front-End Developer",
        issuer: "Coursera · Meta",
        year: "2025",
        verifyUrl: "https://www.coursera.org/account/accomplishments/professional-cert/",
        isPlaceholder: false,
        category: "Frontend & Web Engineering",
        description: "Advanced React, client-side routing, accessibility patterns, and production web engineering.",
      },
      {
        id: "cert-meta-react-adv",
        title: "Meta React Advanced Specialization",
        issuer: "Coursera · Meta",
        year: "2025",
        verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/",
        isPlaceholder: false,
        category: "Frontend & Web Engineering",
        description: "Custom hooks, component architecture, state management with Redux and Context, and performance optimization.",
      },
      {
        id: "cert-google-ux",
        title: "Google UX Design Professional",
        issuer: "Coursera · Google",
        year: "2024",
        verifyUrl: "https://www.coursera.org/account/accomplishments/professional-cert/",
        isPlaceholder: true,
        category: "Frontend & Web Engineering",
        description: "Design systems, wireframing, high-fidelity Figma prototyping, and user-centered usability testing.",
      },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    certifications: [
      {
        id: "cert-aws-cloud",
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        year: "2025",
        verifyUrl: "https://aws.amazon.com/verification",
        isPlaceholder: false,
        category: "Cloud & Infrastructure",
        description: "Cloud architecture principles, security, compute infrastructure, and serverless architectures.",
      },
      {
        id: "cert-gcp-foundations",
        title: "Google Cloud Computing Foundations",
        issuer: "Google Cloud",
        year: "2024",
        verifyUrl: "https://www.cloudskillsboost.google",
        isPlaceholder: true,
        category: "Cloud & Infrastructure",
        description: "Cloud computing basics, big data, infrastructure as code, and containerized microservices.",
      },
      {
        id: "cert-azure-fundamentals",
        title: "Microsoft Azure Fundamentals",
        issuer: "Microsoft",
        year: "2024",
        verifyUrl: "https://learn.microsoft.com/certifications",
        isPlaceholder: true,
        category: "Cloud & Infrastructure",
        description: "Core Azure architectural components, cloud storage services, security governance, and compliance.",
      },
    ],
  },
];

/** Flat catalog of all certifications across categories */
export const allCertifications: CertificationItem[] = certificationCategories.flatMap(
  (category) => category.certifications
);

/** Featured certifications displayed in the 3D tactile card stack on the Overview page */
export const certifications: CertificationItem[] = [
  certificationCategories[0].certifications[0], // Google AI Essentials
  certificationCategories[1].certifications[0], // Meta Front-End Developer
  certificationCategories[2].certifications[0], // AWS Certified Cloud Practitioner
];
