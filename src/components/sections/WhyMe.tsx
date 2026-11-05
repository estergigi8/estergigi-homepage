import { useState } from "react";

// Section 7 – "למה לבחור בי…". Original: 3c12149 (desktop) and cd97236 (tablet + mobile).
// Each card shows a title; hovering (or tapping) reveals the text behind it.
const cards = [
  {
    title: "כל השירותים במקום אחד",
    color: "#F392BF",
    minH: "lg:min-h-[60vh]",
    text: (
      <>
        ישנם לא מעט <strong>פרויקטים שמסתבכים</strong> בגלל עבודה מול <strong>כמה גורמים במקביל - </strong>קופירייטר, מתכנת, מעצב
        ועוד.. - מה שיוצר חוסר אחידות <strong>ומאריך תהליכים.</strong> אחד היתרונות המשמעותיים בעבודה איתי הוא{" "}
        <strong>שכל התהליך מתבצע במקום אחד: </strong>משלב הקופי ועד העלאת האתר לאוויר ברמה הכי גבוהה שיש ובסוף מתקבל{" "}
        <strong>אתר שלא רק נראה טוב, אלא משאיר חותם.</strong>
      </>
    ),
  },
  {
    title: "אתרים חיים",
    color: "#FF75B5",
    minH: "lg:min-h-[60vh]",
    text: (
      <>
        תמיד כשהייתי רואה <strong>אתרים מעוצבים ואינטראקטיביים</strong>, הייתי חושבת לעצמי - <strong>זה אתר חי.</strong> אלה
        האתרים <strong>שתמיד רציתי לבנות</strong>. מעולם לא התחברתי לאתרים שנראים כמו תמונה מודבקת. אני{" "}
        <strong>מאוד אוהבת עיצוב</strong>, <strong>ואפשר ממש לראות את זה בעבודות שלי</strong>. ובגלל זה כבר בגיל צעיר התחלתי
        לבנות וליצור אתרים <strong>ברמה גבוהה</strong>, עם <strong>חשיבה אחרת וירידה לפרטים הקטנים</strong>.
      </>
    ),
  },
  {
    title: "כרטיס ביקור דיגיטלי במתנה",
    color: "#D93782",
    minH: "lg:min-h-[60vh]",
    text: (
      <>
        <strong>כשתרצי לתת ללקוחות שלך הסבר קצר ומהיר על העסק שלך, לפעמים האתר הראשי זה יותר מידי.</strong> ולכן אני מעניקה
        לכל לקוחה שלי בנוסף לאתר, דף של כרטיס ביקור דיגיטלי אישי, עם כל הקישורים{" "}
        <strong>לרשתות החברתיות + הסבר קצר עלייך ועל העסק. </strong>
      </>
    ),
  },
];

export default function WhyMe() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="flex flex-col items-center justify-center bg-black px-0 py-0 text-white md:py-[70px]">
      <div className="flex w-full flex-col items-center justify-evenly gap-0 md:w-auto md:gap-[60px] lg:min-h-screen lg:w-full lg:gap-0">
        <div className="flex flex-col items-center">
          <h2 className="pb-5 pt-[30px] text-center font-dak text-[10vw] font-normal leading-[1.2em] md:p-[30px] md:text-[7vw] md:leading-none lg:p-0 lg:text-[4.4vw]">
            למה לבחור בי לבניית האתר <strong>שמגשים את החזון שלך?</strong>
          </h2>
          {/* Tablet / mobile only */}
          <p className="mb-[30px] text-center font-beinoni text-[4.5vw] font-normal leading-none text-brand-pink md:mb-0 md:text-[2.5vw] lg:hidden">
            לחצי על ריבוע וגלי את התוכן שמסתתר מאחוריו (:
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-0 md:gap-[60px] lg:flex-row lg:gap-[10px]">
          {cards.map((c, i) => {
            const shown = open === i;
            return (
              <button
                key={c.title}
                type="button"
                onClick={() => setOpen(shown ? null : i)}
                onMouseEnter={() => setOpen(i)}
                onMouseLeave={() => setOpen(null)}
                aria-expanded={shown}
                className={`relative mt-5 flex min-h-[50vh] w-full flex-col items-center justify-center rounded-lg shadow-glow transition-colors duration-300 first:mt-0 md:mt-0 md:min-h-[60vh] md:w-[80vw] lg:w-1/3 ${c.minH}`}
                style={{ background: shown ? "#fff" : c.color }}
              >
                {/* Outer span centers; inner block keeps the text and <strong>s flowing as normal lines. */}
                <span
                  className={`absolute inset-0 z-[2] flex items-center justify-center transition-all duration-300 ${
                    shown ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                >
                  <span className="block max-w-[80%] text-center font-dak text-[5vw] font-normal leading-[1.6em] text-black md:text-[3.7vw] lg:text-[1.5vw] lg:leading-[1.6em]">
                    {c.text}
                  </span>
                </span>
                <span
                  className={`text-center font-beinoni text-[8vw] font-bold leading-none md:text-[6vw] lg:text-[3vw] ${
                    // White fails contrast on the two light pink cards, so their titles are black.
                    i < 2 ? "text-black" : "text-white [text-shadow:2px_2px_1px_rgba(0,0,0,0.32)]"
                  } ${shown ? "opacity-0" : "opacity-100"}`}
                >
                  {c.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
