import { useRef } from "react";
import Glow from "../Glow";
import { useFlashlight } from "../../hooks/useFlashlight";

// Section 1 – "פתיח". Original: 484eed3 (desktop), d73e162 (tablet), fc3718d (mobile).
export default function Hero() {
  const wrapperRef = useRef<HTMLElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  useFlashlight(wrapperRef, lightRef);

  return (
    <section
      ref={wrapperRef}
      className="relative z-0 flex min-h-[60vh] flex-col items-center justify-center bg-white md:min-h-[70vh] lg:min-h-screen"
    >
      {/* Glows. clip-path keeps the fixed-position glows inside the hero */}
      <div className="pointer-events-none absolute inset-0 -z-[1] [clip-path:inset(0)]" aria-hidden="true">
        {/* Desktop: pink glow that follows the mouse */}
        <Glow
          ref={lightRef}
          color="#FF75B5"
          size="41vw"
          blur={220}
          className="fixed left-0 top-0 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        />
        {/* Tablet / mobile: static pink glow */}
        <Glow
          color="#F562A6"
          size="60vw"
          blur={170}
          className="fixed right-[-100px] top-0 hidden -translate-x-1/2 -translate-y-1/2 md:block lg:hidden"
        />
        <Glow color="#FF7BA5" size="81vw" blur={100} className="fixed right-[-210px] top-0 -translate-x-1/2 -translate-y-1/2 md:hidden" />
      </div>

      {/* Huge background name (white, 29% opacity) */}
      <h2
        aria-hidden="true"
        className="absolute -left-[100px] -right-[100px] top-[-53px] z-0 m-[3px] pr-[100px] pt-[90px] text-start font-ava text-[40vw] font-black leading-none text-white/[0.29] md:p-[100px] md:text-[33vw] lg:p-[50px] lg:text-[20em]"
      >
        אסתר <br /> גיגי
      </h2>

      {/* Words + stamp */}
      <div className="relative z-[1] flex w-full flex-row flex-wrap items-center px-[10px] md:flex-nowrap">
        <h1 className="flex w-full flex-row flex-wrap font-ava font-black leading-none md:w-[70vw] lg:w-[60%]">
          <span className="flex w-[45%] flex-col items-start justify-center self-start md:w-1/2 md:self-center">
            <span className="stroke-always cursor-text text-[20vw] lg:text-[12vw] lg:text-brand-pink lg:[-webkit-text-stroke:0] lg:stroke-hover">
              בניית
            </span>
          </span>
          <span className="flex w-[30%] flex-col items-start justify-center self-start md:w-1/2 md:items-center md:self-center">
            <span className="stroke-hover w-full cursor-text whitespace-nowrap pr-[15px] text-[20vw] text-brand-pink md:w-auto md:self-center md:pr-[90px] lg:pr-0 lg:text-[12vw] lg:text-brand-pink">
              אתרים
            </span>
          </span>
          <span className="flex w-full flex-col items-start lg:items-stretch">
            <span className="stroke-hover cursor-text self-start py-10 pl-10 text-start text-[16vw] text-brand-pink md:pr-0 lg:self-end lg:py-10 lg:pl-0 lg:pr-10 lg:text-end lg:text-[12vw]">
              שמשאירים
            </span>
          </span>
        </h1>

        {/* Stamp. Desktop: "stamp-hit" after 8s. Tablet/mobile: bounceIn. */}
        <img
          src="/media/stamp-desktop.png"
          alt=""
          width={610}
          height={409}
          className="animate-stamp hover-grow ml-[50px] hidden w-[32%] max-w-[60%] self-end lg:block"
        />
        <img
          src="/media/stamp.png"
          alt=""
          width={610}
          height={409}
          className="animate-bounce-in hover-grow absolute bottom-[15px] left-[-11px] w-[33%] md:bottom-[29px] md:w-[40%] lg:hidden"
        />
      </div>

      {/* Rotating "scroll down" circle */}
      <div className="absolute right-[30px] top-[73%] z-[1] w-[48px] transition-transform duration-300 ease-out hover:scale-[1.15] md:right-[50px] md:w-[80px] lg:top-[75vh] lg:w-[76px]">
        <svg viewBox="0 0 250.5 250.5" className="animate-rotate-slow w-full overflow-visible" aria-hidden="true">
          <path id="hero-text-path" d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125" fill="none" />
          <text className="fill-black font-roboto uppercase" fontSize="41" letterSpacing="1.3" wordSpacing="6">
            <textPath href="#hero-text-path" startOffset="100%">
              {"  - - scroll down - - scroll down  "}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Bottom shape divider: "curve", negative, black */}
      <div dir="ltr" className="pointer-events-none absolute bottom-[-1px] left-0 z-[2] w-full overflow-hidden leading-[0]" aria-hidden="true">
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="relative left-1/2 block h-[15px] w-[calc(100%_+_1.3px)] max-w-none -translate-x-1/2 md:h-[45px] lg:h-[500px] lg:w-[calc(249%_+_1.3px)]"
        >
          <path fill="#000000" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
        </svg>
      </div>
    </section>
  );
}
