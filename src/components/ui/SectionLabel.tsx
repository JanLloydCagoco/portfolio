interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 inline-block" />
      <span className="text-[13px] text-secondary dark:text-gray-500 font-semibold uppercase tracking-wider">{text}</span>
    </div>
  );
}