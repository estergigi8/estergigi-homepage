import type { ReactNode } from "react";
import Copyright from "../components/sections/Copyright";

// /מדיניות-פרטיות – text copied as-is from the original WordPress page (post 1241, updated 29.8.25).
// Restyled: black background, white text, pink accents. The original header (logo + "הרשמה לקורס" button) was removed.

const contact = (
  <>
    במייל:{" "}
    <a href="mailto:estergigi8@gmail.com" className="text-brand-pink underline-offset-4 hover:underline">
      estergigi8@gmail.com
    </a>{" "}
    או בטלפון:{" "}
    <a href="tel:0544857740" className="text-brand-pink underline-offset-4 hover:underline" dir="ltr">
      054-4857740
    </a>
  </>
);

const sections: { title: string; body: ReactNode }[] = [
  {
    title: "איסוף מידע",
    body: (
      <>
        <p>בעת שימוש באתר, אנו עשויים לאסוף את המידע הבא:</p>
        <ul>
          <li>שם פרטי ושם משפחה</li>
          <li>כתובת דוא”ל</li>
          <li>מספר טלפון (במידה ונמסר)</li>
          <li>פרטי חשבון משתמש באתר (שם משתמש, סיסמה)</li>
          <li>מידע טכני (כתובת IP, סוג דפדפן, מערכת הפעלה)</li>
          <li>מידע על שימוש באתר (באמצעות Google Analytics וקובצי Cookies)</li>
        </ul>
      </>
    ),
  },
  {
    title: "מטרות השימוש במידע",
    body: (
      <>
        <p>המידע נאסף ומשמש ל:</p>
        <ul>
          <li>ניהול חשבונות המשתמשים באתר</li>
          <li>אספקת הקורסים והשירותים שרכשת או שאליהם נרשמת</li>
          <li>שיפור חוויית המשתמש והתאמת התכנים</li>
          <li>שליחת עדכונים, הודעות על קורסים ומבצעים – רק אם המשתמש נתן הסכמה</li>
          <li>ניתוח נתונים ושיפור השירות באמצעות Google Analytics</li>
        </ul>
      </>
    ),
  },
  {
    title: "ניהול המידע ואבטחתו",
    body: (
      <ul>
        <li>המידע נשמר במסדי נתונים מאובטחים ומנוהל על-פי אמצעי אבטחה סבירים ומקובלים.</li>
        <li>במקרה של פרצת אבטחה, יבוצע שחזור מגיבוי, חיזוק מערך ההגנה, ובמידת הצורך פנייה למומחה אבטחה.</li>
        <li>המידע נשמר כל עוד הוא נדרש לצורך תפעול האתר ולרבות למתן שירות למשתמשים, אלא אם המשתמש מבקש את מחיקתו.</li>
      </ul>
    ),
  },
  {
    title: "שיתוף מידע עם צדדים שלישיים",
    body: (
      <>
        <p>המידע אינו נמכר או מועבר לצדדים שלישיים, למעט שיתופים הנדרשים לצורך הפעלת האתר:</p>
        <ul>
          <li>
            <strong>PayPal / כרטיסי אשראי</strong> – לניהול רכישות ותשלומים
          </li>
          <li>
            <strong>WhatsApp</strong> – תמיכה והעברת קורסים, קבוצות למידה
          </li>
          <li>כל השירותים מופעלים ומנוהלים על-ידי הנהלת האתר בלבד או ספקים מורשים.</li>
        </ul>
      </>
    ),
  },
  {
    title: "זכויות המשתמשים",
    body: (
      <>
        <p>בהתאם לחוק, המשתמש זכאי/ת:</p>
        <ul>
          <li>לקבל עותק מהמידע שנשמר עליו</li>
          <li>לבקש תיקון או עדכון של המידע</li>
          <li>לבקש את מחיקת המידע האישי</li>
        </ul>
        <p>למימוש זכויותיך ניתן לפנות לאסתר גיגי {contact}</p>
      </>
    ),
  },
  {
    title: "Cookies וטכנולוגיות מעקב",
    body: (
      <p>
        האתר עושה שימוש בקובצי Cookies ובכלים סטטיסטיים (כגון Google Analytics) לצורך תפעול, ניתוח ושיפור השירות. ניתן
        לחסום או למחוק Cookies באמצעות הגדרות הדפדפן, אולם ייתכן שחלק מהפונקציות באתר לא יעבדו כראוי.
      </p>
    ),
  },
  {
    title: "שימוש על-ידי קטינים",
    body: <p>האתר מיועד לילדים ומבוגרים כאחד. משתמשים מתחת לגיל 18 רשאים להשתמש באתר רק באישור הורה או אפוטרופוס.</p>,
  },
  {
    title: "שינויים במדיניות",
    body: <p>מדיניות זו עשויה להתעדכן מעת לעת. תאריך העדכון האחרון מצוין בראש המסמך.</p>,
  },
  {
    title: "יצירת קשר",
    body: (
      <>
        <p>לשאלות, בירורים או בקשות בקשר למדיניות זו, ניתן לפנות אל אסתר גיגי {contact}</p>
        <p>אנו עושים הכל כדי לשמור על שקיפות מלאה והגנה על המידע שלכם, ונשמח להתייחס לכל בקשה או הערה בנושא.</p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <main className="min-h-screen bg-black px-5 py-16 text-white md:px-[8vw] md:py-24">
        <div className="mx-auto max-w-3xl">
          <a href="/" className="font-beinoni text-sm text-white/60 transition-colors hover:text-brand-pink">
            → חזרה לדף הבית
          </a>

          <header className="mt-10 border-b border-white/15 pb-10">
            <h1 className="font-ava text-[12vw] font-black leading-none md:text-[6vw] lg:text-[4.5vw]">מדיניות פרטיות</h1>
            <p className="mt-4 font-dak text-lg text-white/60">
              estergigi.com · עודכנה לאחרונה: <span className="text-brand-pink">29.8.25</span>
            </p>
            <p className="mt-8 font-dak text-lg leading-[1.85] text-white/85 md:text-xl">
              אתר <strong className="font-bold text-white">estergigi.com</strong> (להלן: “האתר”) מופעל ומנוהל על-ידי אסתר גיגי,
              ומציע קורסים דיגיטליים ותכנים חינמיים ומסחריים. אנו מחויבים לשמירה על פרטיות המשתמשים בהתאם לדין, לרבות חוק
              הגנת הפרטיות, התשמ”א-1981 ותיקון 13.
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
                  <div className="mt-4 space-y-4 font-dak text-lg leading-[1.85] text-white/85 [&_li]:relative [&_li]:pr-6 [&_li]:before:absolute [&_li]:before:right-0 [&_li]:before:top-[0.8em] [&_li]:before:h-2 [&_li]:before:w-2 [&_li]:before:-translate-y-1/2 [&_li]:before:rounded-full [&_li]:before:bg-brand-pink [&_li]:before:content-[''] [&_strong]:font-bold [&_strong]:text-white [&_ul]:space-y-2">
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
