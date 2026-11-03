import { useState, type ReactNode } from "react";
import Glow from "../Glow";

// Section 9 – "שאלות נפוצות". Original: d7cf283 with an Elementor nested accordion styled as chat bubbles.
// The first item starts open; only one item can be open at a time.
const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "למה שלא אבנה לעצמי אתר בחינם עם הAI?",
    a: (
      <>
        <p>
          <strong>מסכימה איתך לגמרי.</strong> אני הכי בעד לבנות עם AI. אבל הבעיה היא שהפיתרון הזה{" "}
          <strong>מתאים למי שרוצה אתר שנראה כמו תמונה מודבקת. </strong>כמו אנשי עסקים שרוצים כרטיס ביקור קטן בלי להשקיע.
          <strong> הAI עדיין לא יודע</strong> ליצור אנימציות אינטראקטיביות ומיוחדות. <strong>ובכללי, לחשוב מעבר לנורמה.</strong>
        </p>
        <p>
          <strong>מי שרוצה אתר אמיתי </strong>שלא רואים בכל מקום, שמשדר רמה ומקצועיות. <strong>ושאומרים עליו "וואו"</strong> – חד
          משמעית <strong>לא יכול לעשות את זה בחינם.</strong>
        </p>
      </>
    ),
  },
  {
    q: "כמה זמן לוקח לך לבנות אתר?",
    a: (
      <p>
        <strong>זה תלוי בהמון גורמים</strong>, כמו רמת המורכבות, שיתוף הפעולה ביני לבינך וכמובן אם את כבר מוכנה על{" "}
        <strong>כיוון מסוים</strong> <strong>מראש. </strong>
        <strong>אם באת עם קופי או עיצוב מראש זה הבדל משמעותי לתהליך.</strong> אבל בדרך כלל לוקח בין שבוע לחודש,{" "}
        <strong>ורמת התוצאה שווה את הסבלנות😊.</strong>
      </p>
    ),
  },
  {
    q: "מה המחיר?",
    a: (
      <p>
        משתנה מאוד מפרויקט לפרויקט ותלוי <strong>בהמון גורמים</strong>, אבל אפשר לומר 4000 פלוס מינוס.
      </p>
    ),
  },
  {
    q: "את מקבלת בקשות מיוחדות?",
    a: (
      <p>
        <strong>כן בוודאי!</strong> תמיד פתוחה לבקשות מיוחדות (לדוג' אתר חנות עם מערכת תשלום, סרטון עסקי, או בכלל עיצוב ומיתוג
        וכדו').
      </p>
    ),
  },
  {
    q: "את תחברי אותי גם למערכת אחסון ודומיין?",
    a: (
      <p>
        <strong>כן</strong>, אלווה אותך בע"ה מההתחלה עד הסוף.
      </p>
    ),
  },
  {
    q: "מה אם אני לא אוהבת את התוצאה?",
    a: (
      <p>
        מכיוון שאני מבקשת את <strong>המשוב שלך על כל פרט בתהליך עצמו וכבר בהתחלה</strong>, התוצאה יוצאת{" "}
        <strong>בדיוק כמו שרצית.</strong>
      </p>
    ),
  },
  {
    q: "מה אם ארצה לשנות דברים באתר לאחר כמה חודשים?",
    a: (
      <p>
        <strong>מפה והלאה המחיר בדר"כ עובד על שעות עבודה.</strong> אם זה שינויים קטנים כמו טקסטים וכדומה,{" "}
        <strong>זה ללא עלות.</strong>
      </p>
    ),
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative flex min-h-screen flex-col items-center gap-[5vw] overflow-hidden bg-black p-[5vw] text-white lg:flex-row">
      {/* Decorative line + blurred pink glow */}
      <img src="/media/faq-line.svg" alt="" width={1440} height={806} className="absolute left-0 right-0 top-0 z-0 w-full" />
      <Glow color="#F562A6" size="23vw" blur={190} className="absolute left-[-267px] top-[38vh] -translate-x-1/2 -translate-y-1/2" />

      <h2 className="relative z-[2] self-center text-center font-ava text-[10vw] font-black leading-none lg:text-[7.6vw]">שאלות נפוצות</h2>

      <div className="relative z-[1] flex min-h-[50vh] w-full flex-1 items-center justify-center rounded-[36px] border border-white p-5 backdrop-blur-[12px] backdrop-saturate-[.99] md:py-[91px] md:pl-[40px] md:pr-[91px]">
        <div className="z-[2] flex w-full flex-col gap-4 font-beinoni font-bold">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="group flex flex-col items-end">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-[2.1vw] text-start md:gap-[1vw]"
                >
                  <span
                    className={`rounded-[25px_25px_0px_25px] px-[15px] py-[10px] text-[4vw] leading-none transition-all duration-300 group-hover:bg-brand-pink-2 group-hover:text-white md:rounded-[5vw_5vw_0vw_5vw] md:px-[2vw] md:py-[1vw] md:text-[2.5vw] lg:px-[1.4vw] lg:py-[0.6vw] lg:text-base ${
                      isOpen ? "bg-brand-pink-2 text-white" : "bg-white text-black"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full p-[5vw] transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand-pink-2 md:h-[5vw] md:w-[5vw] md:p-0 lg:h-[2vw] lg:w-[2vw] ${
                      isOpen ? "rotate-45 bg-brand-pink-2 fill-white" : "bg-white fill-black"
                    } group-hover:fill-white`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 448 512" className="w-[4vw] shrink-0 fill-inherit md:w-[2vw] lg:w-[1vw]">
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </span>
                </button>

                {/* Answer bubble */}
                <div
                  className={`grid transition-[grid-template-rows] duration-[400ms] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <div className="m-5 flex max-w-[78vw] flex-row rounded-[25px_25px_25px_0px] bg-white p-[4.5vw] md:m-[1vw] md:ml-[5vw] md:max-w-[55vw] md:rounded-[3vw_1.8vw_1.8vw_0vw] md:p-[1.8vw] lg:m-[1.5vw] lg:ml-[3.5vw] lg:max-w-[55vw] lg:p-[1.3vw]">
                      <div className="flex-1 space-y-4 font-dak text-[4vw] font-normal leading-[1.85] text-black md:text-[2.5vw] lg:text-base">
                        {f.a}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
