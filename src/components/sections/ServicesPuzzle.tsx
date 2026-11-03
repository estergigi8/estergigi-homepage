import { useEffect, useRef, type CSSProperties } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

// Section 5 – "השירותים שלי": drag the service pieces into the dashed slots. Original: 914ca36.
// Unlike the original (free movement only), a piece dropped near its own slot flashes green and snaps in.

// Slots and pieces are exported at the same scale (a piece's shape has the same path coordinates as its
// slot, just offset by padding). So both are sized as natural SVG width × one shared factor --k,
// which keeps every piece the exact size of its slot at every breakpoint.

// Dashed outline slots, in grid order (RTL: the first item sits on the right).
const slots = [
  { src: "/media/Vector-6.svg", w: 244, h: 202 },
  { src: "/media/Vector-5.svg", w: 259, h: 257 },
  { src: "/media/Vector-2.svg", w: 227, h: 240 },
  { src: "/media/Vector-11.svg", w: 179, h: 295 },
  { src: "/media/Vector-3.svg", w: 250, h: 246 },
  { src: "/media/Vector-4.svg", w: 256, h: 275 },
  { src: "/media/Vector-7.svg", w: 210, h: 204 },
  { src: "/media/Vector-12.svg", w: 316, h: 207 },
];

// Draggable pieces. Start positions were measured on the live site (percent of the grid box: left, top).
// `slot` is the outline this piece fits; `off` is where that shape sits inside the piece's SVG (SVG units),
// measured from the path bounding boxes.
const pieces = [
  { src: "/media/Frame-14.svg", w: 371, h: 407, d: [75, 32.1], m: [44.4, 63.5], slot: "/media/Vector-7.svg", off: [78.5, 150.1] },
  { src: "/media/Frame-13.svg", w: 311, h: 286, d: [66, 59], m: [-2.8, 74.4], slot: "/media/Vector-3.svg", off: [24.1, 26.6] },
  { src: "/media/Frame-12.svg", w: 410, h: 363, d: [52.1, 49.6], m: [43.7, 70.5], slot: "/media/Vector-4.svg", off: [82.8, 43.6] },
  { src: "/media/Frame-11.svg", w: 308, h: 359, d: [43.5, 51.1], m: [-2.7, 64.9], slot: "/media/Vector-2.svg", off: [61.1, 38.4] },
  { src: "/media/Frame-10.svg", w: 454, h: 353, d: [29.7, 51.8], m: [41.9, 72], slot: "/media/Vector-12.svg", off: [41.1, 89.5] },
  { src: "/media/Frame-9.svg", w: 377, h: 434, d: [14.2, 51.3], m: [-2.7, 60.4], slot: "/media/Vector-6.svg", off: [109, 75.7] },
  { src: "/media/Frame-8.svg", w: 375, h: 401, d: [2, 41.7], m: [43.6, 62.6], slot: "/media/Vector-11.svg", off: [106.8, 66.8] },
  { src: "/media/Frame-7.svg", w: 341, h: 445, d: [3.9, 38.6], m: [23.9, 60.2], slot: "/media/Vector-5.svg", off: [45.9, 135.4] },
];

// How close (as a share of the slot's width) a dropped piece must be to snap in.
const SNAP_RADIUS = 0.35;
const GREEN = "drop-shadow(0 0 10px #22c55e) drop-shadow(0 0 4px #22c55e)";

export default function ServicesPuzzle() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const draggables = Draggable.create(section.querySelectorAll(".drag"), {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: section,
      onDragEnd() {
        const el = this.target as HTMLImageElement;
        const p = pieces.find((pc) => pc.src === el.dataset.src)!;
        const slot = section.querySelector<HTMLImageElement>(`img[data-slot="${p.slot}"]`)!;
        const s = slot.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        const unit = r.width / p.w; // CSS px per SVG unit (same scale for slot and piece)
        // Where the piece's top-left must be so its shape lands exactly on the slot outline.
        const dx = s.left - p.off[0] * unit - r.left;
        const dy = s.top - p.off[1] * unit - r.top;
        if (Math.hypot(dx, dy) > s.width * SNAP_RADIUS) return;

        this.disable();
        el.style.cursor = "default";
        gsap.set([el, slot], { filter: GREEN });
        gsap.to(el, { x: `+=${dx}`, y: `+=${dy}`, duration: 0.3, ease: "power2.out" });
        gsap.to([el, slot], { filter: "drop-shadow(0 0 0px #22c55e) drop-shadow(0 0 0px #22c55e)", duration: 0.3, delay: 0.3 });
      },
    });
    return () => draggables.forEach((d) => d.kill());
  }, []);

  return (
    <section ref={sectionRef} className="flex min-h-screen flex-col bg-black text-center text-white">
      <h2 className="mx-[30px] mt-[30px] font-dak text-[9vw] font-normal leading-none md:text-[7vw] lg:text-[4.4vw]">השירותים שלי</h2>
      <p className="mx-[30px] mb-[50px] mt-[10px] font-beinoni text-[3vw] font-normal leading-none text-brand-pink md:text-[2vw] lg:text-[1.3vw]">
        גררו את החלקים למקום המתאים
      </p>

      <div className="relative mb-0 grid min-h-[49vh] w-full grid-cols-2 items-center justify-items-center gap-[10px] [--k:0.13vw] md:mb-[100px] md:min-h-[50vh] md:grid-cols-4 md:gap-5 md:[--k:0.068vw] lg:mb-0 lg:px-[150px] lg:pb-[30px] lg:[--k:0.055vw]">
        {slots.map((s) => (
          <img
            key={s.src}
            src={s.src}
            alt=""
            width={s.w}
            height={s.h}
            data-slot={s.src}
            className="h-auto max-w-none"
            style={{ width: `calc(${s.w} * var(--k))` }}
          />
        ))}

        {pieces.map((p) => (
          <img
            key={p.src}
            src={p.src}
            alt=""
            width={p.w}
            height={p.h}
            draggable={false}
            data-src={p.src}
            className="drag absolute left-[var(--mx)] top-[var(--my)] z-[1] h-auto max-w-none cursor-grab touch-none md:left-[var(--dx)] md:top-[var(--dy)]"
            style={
              {
                width: `calc(${p.w} * var(--k))`,
                "--mx": `${p.m[0]}%`,
                "--my": `${p.m[1]}%`,
                "--dx": `${p.d[0]}%`,
                "--dy": `${p.d[1]}%`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </section>
  );
}
