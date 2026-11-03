import { useRef } from "react";
import { useWordReveal } from "../../hooks/useWordReveal";

// Section 3 – "כי כאן אני נכנסת לתמונה." Original: f354f98 (all devices).
export default function Intro() {
  const textRef = useRef<HTMLParagraphElement>(null);
  useWordReveal(textRef);

  return (
    <section className="flex min-h-[70vh] flex-col border-[10px] border-white bg-black">
      <div
        className="flex min-h-[70vh] flex-col justify-center gap-[35px] bg-brand-intro-bg bg-cover bg-center bg-no-repeat p-0 text-center md:p-[30px]"
        style={{ backgroundImage: "url(/media/intro-bg.png)" }}
      >
        {/* Animated headline: the word "אני" gets a hand-drawn double underline */}
        <h2 className="mt-[30px] w-full font-dak text-[9vw] font-normal leading-none text-brand-olive md:mt-0 md:text-[7vw] lg:text-[3.7vw]">
          כי כאן{" "}
          <span className="relative inline-block font-beinoni">
            אני
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="underline-draw absolute left-1/2 top-[90%] h-[calc(100%_+_20px)] w-[calc(100%_+_20px)] -translate-x-1/2 -translate-y-1/2 overflow-visible"
              aria-hidden="true"
            >
              <path
                d="M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6"
                fill="none"
                stroke="#8BA404"
                strokeWidth="4"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4"
                fill="none"
                stroke="#8BA404"
                strokeWidth="4"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </span>{" "}
          נכנסת לתמונה.
        </h2>

        {/* The original source stores "elcarO מגיל 21" with a right-to-left override, so it displays as "Oracle מגיל 12". */}
        <p
          ref={textRef}
          className="m-[10px] px-[10px] font-dak text-[4.5vw] font-normal leading-[1.9em] tracking-[0.8px] text-brand-olive md:m-0 md:px-0 md:text-[3.3vw] lg:text-[1.5vw]"
        >
          נעים מאוד שמי אסתר גיגי, בכיתה י׳ ומתכנתת 7 שנים,
          <br /> בונה ומעצבת אתרים, וכל מה שבניהם.
          <br /> בוגרת כיתת ממר״ם, <br /> בעלת תעודת הסמכה של Oracle מגיל 12, <br /> וידע טכנולוגי רחב מאוד ב"ה
          <br /> <b> ואני בונה אתרים שמשאירים חותם. </b>
        </p>
      </div>
    </section>
  );
}
