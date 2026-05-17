export default function DownloadResume() {
  return (
    <a
      href="/resume.pdf"
      download="Jan_Lloyd_Cagoco_Resume.pdf"
      className="flex items-center gap-1.5 text-sm font-medium text-black dark:text-white glass-btn rounded-xl px-3 py-2 hover-outline transition-all duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-black dark:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
      Download Resume
    </a>
  );
}