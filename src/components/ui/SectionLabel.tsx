interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-2 h-2 rounded-full bg-gray-400 inline-block" />
      <span className="text-lg text-secondary dark:text-gray-500 font-semibold">{text}</span>
    </div>
  );
}