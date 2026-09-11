import { useId } from "react";

type Variant = "core" | "power" | "lumen" | "blend" | "bundle-power" | "bundle-pro";

function BaseIcon({ variant, cy }: { variant: Variant; cy: number }) {
  switch (variant) {
    case "power":
    case "bundle-power":
      return (
        <path
          d={`M132 ${cy - 22} L118 ${cy + 2} L128 ${cy + 2} L120 ${cy + 22} L142 ${cy - 6} L130 ${cy - 6} Z`}
          className="fill-[var(--accent-foreground)] opacity-90"
        />
      );
    case "lumen":
      return (
        <g className="stroke-[var(--accent-foreground)] opacity-90" strokeWidth="3" strokeLinecap="round">
          <circle cx="120" cy={cy} r="10" className="fill-[var(--accent-foreground)]" stroke="none" />
          <line x1="120" y1={cy - 20} x2="120" y2={cy - 28} />
          <line x1="138" y1={cy} x2="146" y2={cy} />
          <line x1="102" y1={cy} x2="94" y2={cy} />
          <line x1="132" y1={cy - 12} x2="138" y2={cy - 18} />
          <line x1="108" y1={cy - 12} x2="102" y2={cy - 18} />
          <line x1="132" y1={cy + 12} x2="138" y2={cy + 18} />
          <line x1="108" y1={cy + 12} x2="102" y2={cy + 18} />
        </g>
      );
    case "blend":
      return (
        <g className="stroke-[var(--accent-foreground)] opacity-90" strokeWidth="3" strokeLinecap="round" fill="none">
          <circle cx="120" cy={cy} r="12" />
          <line x1="112" y1={cy - 8} x2="128" y2={cy + 8} />
          <line x1="128" y1={cy - 8} x2="112" y2={cy + 8} />
        </g>
      );
    case "bundle-pro":
      return (
        <g className="fill-[var(--accent-foreground)] opacity-90">
          <circle cx="100" cy={cy} r="6" />
          <path d={`M118 ${cy - 8} L112 ${cy + 6} L118 ${cy + 6} L114 ${cy + 18} L128 ${cy} L120 ${cy} Z`} />
          <circle cx="140" cy={cy} r="6" />
        </g>
      );
    default:
      return <circle cx="120" cy={cy} r="4" className="fill-[var(--accent-foreground)] opacity-60" />;
  }
}

export function BottleArt({
  variant,
  folded = false,
  className,
}: {
  variant: Variant;
  folded?: boolean;
  className?: string;
}) {
  const uid = useId();
  const pleatCount = folded ? 10 : 7;
  const bodyTop = 52;
  const bodyBottom = folded ? 158 : 260;
  const bodyHeight = bodyBottom - bodyTop;
  const pleats = Array.from({ length: pleatCount }, (_, i) => bodyTop + ((i + 1) * bodyHeight) / (pleatCount + 1));

  return (
    <svg viewBox="0 0 240 340" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${uid}-body`} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.75" />
        </linearGradient>
        <filter id={`${uid}-shadow`} x="-40%" y="-100%" width="180%" height="300%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* ground shadow */}
      <ellipse
        cx="120"
        cy={bodyBottom + 48}
        rx="46"
        ry="7"
        className="fill-[var(--foreground)] opacity-15"
        filter={`url(#${uid}-shadow)`}
      />

      {/* cap */}
      <rect x="102" y="8" width="36" height="18" rx="6" className="fill-[var(--foreground)] opacity-75" />
      <rect x="106" y="11" width="6" height="12" rx="3" className="fill-[var(--background)] opacity-25" />
      {/* neck */}
      <rect x="109" y="26" width="22" height="12" className="fill-[var(--foreground)] opacity-45" />
      {/* twist-lock seam ring */}
      <rect x="103" y="38" width="34" height="5" rx="2.5" className="fill-[var(--accent)]" />

      {/* body */}
      <rect x="60" y={bodyTop} width="120" height={bodyHeight} rx="28" fill={`url(#${uid}-body)`} />
      {/* pleat lines */}
      {pleats.map((y, i) => (
        <line
          key={i}
          x1="67"
          y1={y}
          x2="173"
          y2={y}
          className="stroke-[var(--primary-foreground)] opacity-20"
          strokeWidth="2"
        />
      ))}
      {/* highlight streak */}
      <rect
        x="73"
        y={bodyTop + 10}
        width="13"
        height={bodyHeight - 20}
        rx="6.5"
        className="fill-[var(--primary-foreground)] opacity-20"
      />

      {/* base attachment */}
      <rect x="60" y={bodyBottom - 4} width="120" height="46" rx="17" className="fill-[var(--accent)]" />
      <rect
        x="60"
        y={bodyBottom - 4}
        width="120"
        height="10"
        rx="5"
        className="fill-[var(--foreground)] opacity-10"
      />
      <BaseIcon variant={variant} cy={bodyBottom + 19} />
    </svg>
  );
}
