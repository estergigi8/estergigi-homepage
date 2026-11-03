import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

// Full-screen black preloader with a looping Lottie, slides down after 5.5s (as on the original site).
// The original loads the animation from lottie.host – here it is served locally from /public/lottie.
export default function Preloader() {
  const lottieRef = useRef<HTMLDivElement>(null);
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lottie/preloader.json",
    });
    const t1 = setTimeout(() => setLeaving(true), 5500);
    const t2 = setTimeout(() => setHidden(true), 6000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      anim.destroy();
    };
  }, []);

  if (hidden) return null;
  return (
    <div
      className={`fixed inset-0 z-[99999] flex h-screen w-screen items-center justify-center bg-black transition-transform duration-500 ease-in-out ${
        leaving ? "translate-y-full" : ""
      }`}
    >
      <div ref={lottieRef} className="w-[250px] lg:w-[30vw]" />
    </div>
  );
}
