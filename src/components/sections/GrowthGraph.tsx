import { useEffect, useRef } from "react";
import lottie, { type AnimationItem } from "lottie-web";

// Section 8 – "ואיך האתר שלך יזנק אצלי". Original: 2838408.
// The Lottie graph plays once, over 1 second after a 1 second delay, when it scrolls into view (not tied to scroll position).
const DURATION_S = 1;
const DELAY_MS = 1000;

export default function GrowthGraph() {
  const lottieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = lottieRef.current!;
    const anim: AnimationItem = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "/lottie/growth-graph.json",
    });

    let loaded = false;
    let inView = false;
    let timer: number | undefined;
    const play = () => {
      if (!loaded || !inView) return;
      observer.disconnect();
      timer = window.setTimeout(() => {
        anim.setSpeed(anim.getDuration() / DURATION_S);
        anim.goToAndPlay(0, true);
      }, DELAY_MS);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        play();
      },
      { threshold: 0.5 },
    );
    observer.observe(container);
    anim.addEventListener("DOMLoaded", () => {
      loaded = true;
      play();
    });

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      anim.destroy();
    };
  }, []);

  return (
    <section className="flex flex-col bg-black pb-[50px] text-white md:pb-0 lg:min-h-screen">
      <div className="flex min-h-[20vh] items-center justify-center self-center">
        <h2 className="text-center font-dak text-[10vw] font-normal leading-none md:text-[7vw] lg:text-[4.1vw]">
          ואיך האתר שלך <strong> יזנק אצלי</strong>
        </h2>
      </div>
      <div ref={lottieRef} className="mx-auto w-full max-w-full md:w-[71%] lg:w-1/2" />
    </section>
  );
}
