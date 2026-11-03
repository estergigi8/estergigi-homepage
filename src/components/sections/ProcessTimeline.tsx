import { useEffect, useRef, useState } from "react";
import { timeline } from "../../data/content";

// Section 6 – "איך האתר שלך יוולד?" Original: a460e9a with a custom HTML widget (a8871c7).
// A vertical line fills as you scroll; each numbered step lights up when the line reaches it.
const ROSE = "#d4537e";

export default function ProcessTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [nodeTops, setNodeTops] = useState<number[]>([]);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const track = trackRef.current;
      if (!track) return;
      const trackRect = track.getBoundingClientRect();
      const tops = itemRefs.current.map((item) => (item ? item.getBoundingClientRect().top - trackRect.top + 26 : 0));
      const lastTop = tops[tops.length - 1] || trackRect.height;
      const p = Math.max(0, Math.min(1, (window.innerHeight * 0.5 - trackRect.top) / lastTop));
      setNodeTops(tops);
      setFill(p * lastTop);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", update);
    const t = setTimeout(update, 100);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      clearTimeout(t);
    };
  }, []);

  const lastTop = nodeTops[nodeTops.length - 1] ?? 0;
  const isActive = (i: number) => nodeTops.length > 0 && fill + 8 >= (nodeTops[i] ?? 0) - 26;

  return (
    <section className="flex min-h-screen flex-col bg-black p-5 text-white md:min-h-0 md:p-0">
      <h2 className="mb-[30px] mt-5 text-center font-dak text-[10vw] font-normal leading-none md:mx-[30px] md:mb-0 md:mt-[30px] md:text-[7vw] lg:text-[4.4vw]">
        איך האתר שלך<strong> יוולד?</strong>
      </h2>

      <div className="mx-auto mt-5 flex w-full max-w-[1140px] flex-row items-start gap-10 pr-6 font-dak md:p-[10px] md:pr-6">
        {/* Track */}
        <div
          ref={trackRef}
          className="relative mt-[26px] w-[3px] shrink-0"
          style={{ background: "rgba(212,83,126,0.2)", height: lastTop ? lastTop + 26 : undefined }}
        >
          <div className="absolute left-0 top-0 w-full" style={{ height: fill, background: ROSE }} />
          {timeline.map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 z-[2] flex h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2"
              style={{
                top: nodeTops[i] ?? 0,
                background: isActive(i) ? ROSE : "#1a1a1a",
                borderColor: isActive(i) ? ROSE : "rgba(212,83,126,0.25)",
              }}
            >
              <span className="text-[18px] font-bold" style={{ color: isActive(i) ? "#000000" : "rgba(212,83,126,0.4)" }}>
                {i + 1}
              </span>
            </div>
          ))}
          <div className="absolute left-1/2 z-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ top: fill, background: ROSE }} />
        </div>

        {/* Steps */}
        <div className="flex flex-1 flex-col">
          {timeline.map((step, i) => (
            <div
              key={step.title}
              ref={(el) => (itemRefs.current[i] = el)}
              className="flex flex-col justify-start pb-20 transition-opacity last:pb-0"
              style={{ opacity: isActive(i) ? 1 : 0.15 }}
            >
              <h3 className="mb-4 text-[32px] font-bold leading-[1.2]" style={{ color: ROSE }}>
                {step.title}
              </h3>
              <p className="m-0 max-w-[520px] text-[18px] leading-[1.9] text-[#cccccc]">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
