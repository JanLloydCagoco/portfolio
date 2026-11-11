"use client";

import { Project } from "@/types";
import OpticalPlateCanvas, {
  PlateVariant,
} from "@/components/studio/OpticalPlateCanvas";

interface LotDetailPlatesProps {
  project: Project;
}

export default function LotDetailPlates({ project }: LotDetailPlatesProps) {
  const items: {
    variant: PlateVariant;
    caption: string;
  }[] = [
    {
      variant: "B",
      caption: "Design System & Foundations",
    },
    {
      variant: "C",
      caption: "Product Flow & Architecture",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item) => (
        <figure key={item.variant} className="flex flex-col space-y-2.5">
          <OpticalPlateCanvas
            project={project}
            plateVariant={item.variant}
            interactive={false}
            className="w-full min-h-[260px] sm:min-h-[280px]"
          />
          <figcaption className="flex items-center justify-between text-[13px] text-secondary">
            <span className="text-primary font-medium">{item.caption}</span>
            <span className="text-[11px] text-muted tabular-nums">
              SYNTHETIC STAND-IN
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
