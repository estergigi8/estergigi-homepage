import { forwardRef, type CSSProperties } from "react";

// A blurred solid circle – the original uses Font Awesome "circle" icons with a CSS blur filter.
type GlowProps = { color: string; size: string; blur: number; className?: string; style?: CSSProperties };

const Glow = forwardRef<HTMLDivElement, GlowProps>(({ color, size, blur, className = "", style }, ref) => (
  <div
    ref={ref}
    aria-hidden="true"
    className={`pointer-events-none rounded-full ${className}`}
    style={{ width: size, height: size, background: color, filter: `blur(${blur}px)`, ...style }}
  />
));

export default Glow;
