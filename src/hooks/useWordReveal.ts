import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Port of the original ".gsap-title" script: words fade from 0.2 opacity to full as you scroll.
export function useWordReveal(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      // Words only: splitting into lines wraps each line in a block and loses the <br> gaps and <b> weights,
      // and breaks completely when the element is hidden (e.g. the mobile copy at desktop width) while splitting.
      const split = new SplitText(el, { type: "words" });
      gsap.from(split.words, {
        opacity: 0.2,
        stagger: 0.5,
        scrollTrigger: { trigger: el, start: "top 80%", end: "top 30%", scrub: 1 },
      });
    });
    return () => ctx.revert();
  }, [ref]);
}
