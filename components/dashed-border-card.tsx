import { cn } from "@/lib/utils";

interface DashedBorderCardProps {
  children: React.ReactNode;
  className?: string;
  /** Length of each dash in pixels */
  dashLength?: number;
  /** Gap between dashes in pixels */
  gapLength?: number;
  /** Border radius in pixels */
  borderRadius?: number;
  /** Stroke width in pixels */
  strokeWidth?: number;
  /**
   * Tailwind class(es) for the stroke color, applied to the outer wrapper.
   * Uses `currentColor` so any `text-*` class works — including hover states:
   *
   * "text-border"
   * "text-primary hover:text-primary/80"
   * "text-blue-500 hover:text-blue-600"
   * "text-muted-foreground hover:text-foreground"
   *
   * Defaults to "text-border".
   */
  strokeClassName?: string;
}

export function DashedBorderCard({
  children,
  className,
  dashLength = 12,
  gapLength = 8,
  borderRadius = 10,
  strokeWidth = 1,
  strokeClassName = "text-border",
}: DashedBorderCardProps) {
  return (
    <div
      className={cn("relative transition-colors", strokeClassName, className)}
    >
      {/* SVG dashed border overlay — uses currentColor so it inherits the wrapper's color (incl. hover) */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x={strokeWidth / 2}
          y={strokeWidth / 2}
          width="100%"
          height="100%"
          style={{
            width: `calc(100% - ${strokeWidth}px)`,
            height: `calc(100% - ${strokeWidth}px)`,
          }}
          rx={borderRadius}
          ry={borderRadius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={`${dashLength} ${gapLength}`}
        />
      </svg>
      {/* Reset color for children so they don't inherit the stroke color */}
      <div className="text-foreground">{children}</div>
    </div>
  );
}
