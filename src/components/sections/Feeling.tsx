import { useRef } from "react";
import { useWordReveal } from "../../hooks/useWordReveal";

// Section 2 – "אני יודעת איך את מרגישה עכשיו."
// Original: 633a8af (desktop + tablet), 9347f97 (mobile). The mobile version has its own line breaks and punctuation.
export default function Feeling() {
  const desktopRef = useRef<HTMLParagraphElement>(null);
  const mobileRef = useRef<HTMLParagraphElement>(null);
  useWordReveal(desktopRef);
  useWordReveal(mobileRef);

  return (
    <section className="relative z-[1] flex min-h-screen flex-col justify-center gap-[30px] bg-black px-0 py-[75px] text-center text-white md:min-h-[70vh] md:gap-[70px] md:p-[75px] lg:min-h-screen">
      <h2 className="font-beinoni text-[9vw] font-black leading-none md:text-[7vw] lg:text-[4vw]">אני יודעת איך את מרגישה עכשיו.</h2>

      {/* Mobile copy */}
      <p ref={mobileRef} className="px-5 font-dak text-[4.5vw] font-thin leading-[1.3em] [&_b]:font-bold tracking-[0.7px] md:hidden">
        <b>את רוצה שהעסק שלך יראה מקצועי באינטרנט.</b>
        <br /> כזה שמושך לקוחות איכותיים שמבינים בדיוק מה את מציעה. <br />
        <br /> <b>את מנסה לעשות הכל לבד,</b>
        <br /> לבנות אתר בכל מיני פלטפורמות חינמיות, לכתוב תוכן עם GPT… <br />
        <br /> <b>אבל התוצאה?</b>
        <br /> האתר לא מושך מספיק, הטקסטים לא מדויקים, והלקוחות פשוט לא מגיעים. <br />
        <br />{" "}
        <b>
          אולי כבר חשבת על לבנות אתר מקצועי,
          <br />
          אבל זה מרגיש כמו משימה בלתי אפשרית!
        </b>
        <br /> <br /> מאיפה מתחילים, כמה זה עולה, <br />
        והאם בכלל תקבלי את התוצאה שאת רוצה.. <br />
        <br />{" "}
        <b>
          {" "}
          ורק לחשוב על כמות הלקוחות שמחפשים את <br />
          השירות שלך באינטרנט ברגע זה ולא מוצאים אותך.
        </b>
      </p>

      {/* Desktop + tablet copy */}
      <p
        ref={desktopRef}
        className="mx-auto hidden max-w-[100vw] font-dak text-[3.3vw] font-thin leading-none [&_b]:font-bold tracking-[0.7px] md:block lg:max-w-[65%] lg:text-[1.5vw]"
      >
        <b>את רוצה שהעסק שלך יראה מקצועי באינטרנט.</b>
        <br /> כזה שמושך לקוחות איכותיים שמבינים בדיוק מה את מציעה. <br />
        <br /> <b>את מנסה לעשות הכל לבד,</b>
        <br /> לבנות אתר בכל מיני פלטפורמות חינמיות, לכתוב תוכן עם GPT… <br />
        <br /> <b>אבל התוצאה?</b>
        <br /> האתר לא מושך מספיק, הטקסטים לא מדויקים, והלקוחות פשוט לא מגיעים. <br />
        <br /> <b>אולי כבר חשבת על לבנות אתר מקצועי אבל זה מרגיש כמו משימה בלתי אפשרית -</b>
        <br /> מאיפה מתחילים, כמה זה עולה, והאם בכלל תקבלי את התוצאה שאת רוצה.. <br />
        <br /> <b> ורק לחשוב על כמות הלקוחות שמחפשים את השירות שלך באינטרנט ברגע זה ולא מוצאים אותך.</b>
      </p>

      <h2 className="font-ava text-[8vw] font-bold leading-none md:text-[5.1vw] lg:text-[3.4vw]">אבל זה לא חייב להיות ככה.</h2>
    </section>
  );
}
