import type { ReactNode } from "react";
import Copyright from "../components/sections/Copyright";

// /הצהרת-נגישות – required by the Israeli accessibility regulations (תקנה 35). Same look as the privacy page.
// Keep "last updated" and the list of adjustments in sync with what the site actually does.

const contact = (
  <>
    <a href="mailto:estergigi8@gmail.com" className="text-brand-pink underline-offset-4 hover:underline">
      estergigi8@gmail.com
    </a>{" "}
    · טלפון:{" "}
    <a href="tel:0544857740" className="text-brand-pink underline-offset-4 hover:underline" dir="ltr">
      054-4857740
    </a>
  </>
);

const sections: { title: string; body: ReactNode }[] = [
  {
    title: "מחויבות לנגישות",
    body: (
      <p>
        אנו רואים חשיבות רבה במתן שירות שוויוני לכלל הגולשים, ובכלל זה לאנשים עם מוגבלות. האתר נבנה מתוך כוונה לעמוד בהוראות
        תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013, ובהנחיות התקן הישראלי ת"י 5568, המבוסס על
        הנחיות WCAG 2.0 ברמה AA.
      </p>
    ),
  },
  {
    title: "התאמות שבוצעו באתר",
    body: (
      <ul>
        <li>תפריט נגישות זמין בכל עמודי האתר (הכפתור הוורוד בפינת המסך).</li>
        <li>הגדלת טקסט, ריווח שורות ומעבר לגופן קריא.</li>
        <li>מצב ניגודיות גבוהה ומצב גווני אפור.</li>
        <li>הדגשת קישורים.</li>
        <li>עצירת אנימציות ותנועה במסך.</li>
        <li>סימון ברור של הרכיב הפעיל בעת ניווט במקלדת.</li>
        <li>האתר בנוי בעברית ובכיוון קריאה מימין לשמאל, ומותאם לצפייה במחשב, בטאבלט ובטלפון.</li>
        <li>ההגדרות שנבחרו בתפריט הנגישות נשמרות בדפדפן לביקור הבא.</li>
      </ul>
    ),
  },
  {
    title: "חלקים שאינם נגישים במלואם",
    body: (
      <>
        <p>אנו ממשיכים לשפר את נגישות האתר. ייתכן שחלקים מסוימים עדיין אינם נגישים במלואם, ובהם:</p>
        <ul>
          <li>חלק מהאנימציות באתר מופעלות בגלילה ואינן נעצרות במלואן גם במצב "עצירת אנימציות".</li>
          <li>משחק הפאזל ("השירותים שלי") מבוסס גרירה בעכבר או במגע.</li>
          <li>שאלון "איזה אתר העסק שלי צריך" מוצג מתוך שירות חיצוני.</li>
        </ul>
      </>
    ),
  },
  {
    title: "פנייה בנושא נגישות",
    body: (
      <>
        <p>
          נתקלת בקושי בגלישה באתר, או שיש לך הצעה לשיפור? נשמח לשמוע ולטפל בהקדם. ניתן לפנות לרכזת הנגישות, אסתר גיגי:{" "}
          {contact}
        </p>
        <p>כדי שנוכל לטפל בפנייה, כדאי לציין את העמוד שבו נתקלת בבעיה, תיאור קצר של הקושי, והדפדפן או המכשיר שבהם השתמשת.</p>
      </>
    ),
  },
];

export default function AccessibilityStatement() {
  return (
    <>
      <main className="min-h-screen bg-black px-5 py-16 text-white md:px-[8vw] md:py-24">
        <div className="mx-auto max-w-3xl">
          <a href="/" className="font-beinoni text-sm text-white/60 transition-colors hover:text-brand-pink">
            → חזרה לדף הבית
          </a>

          <header className="mt-10 border-b border-white/15 pb-10">
            <h1 className="font-ava text-[12vw] font-black leading-none md:text-[6vw] lg:text-[4.5vw]">הצהרת נגישות</h1>
            <p className="mt-4 font-dak text-lg text-white/60">
              estergigi.com · עודכנה לאחרונה: <span className="text-brand-pink">3.11.26</span>
            </p>
          </header>

          <ol className="divide-y divide-white/10">
            {sections.map((s, i) => (
              <li key={s.title} className="grid gap-4 py-10 md:grid-cols-[4rem_1fr]">
                <span className="font-ava text-4xl font-black leading-none text-brand-pink md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <section>
                  <h2 className="font-beinoni text-2xl font-bold leading-tight md:text-3xl">{s.title}</h2>
                  <div className="mt-4 space-y-4 font-dak text-lg leading-[1.85] text-white/85 [&_li]:relative [&_li]:pr-6 [&_li]:before:absolute [&_li]:before:right-0 [&_li]:before:top-[0.8em] [&_li]:before:h-2 [&_li]:before:w-2 [&_li]:before:-translate-y-1/2 [&_li]:before:rounded-full [&_li]:before:bg-brand-pink [&_li]:before:content-[''] [&_ul]:space-y-2">
                    {s.body}
                  </div>
                </section>
              </li>
            ))}
          </ol>
        </div>
      </main>
      <Copyright />
    </>
  );
}
