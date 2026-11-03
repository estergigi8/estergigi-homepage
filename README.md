# דף הבית – estergigi.com (React + Tailwind)

בנייה מחדש של דף הבית בלבד, מחוץ לוורדפרס, בעברית ובכיוון RTL. מבוסס על הייצוא ב-`../homepage-export`.

## הרצה

```bash
npm install
npm run dev
```

האתר רץ על http://localhost:8080. לבנייה לפרודקשן: `npm run build`.

## מבנה

| קובץ | סקשן |
|---|---|
| `src/components/Preloader.tsx` | מסך טעינה עם Lottie |
| `src/components/sections/Hero.tsx` | פתיח – "בניית אתרים שמשאירים" |
| `src/components/sections/Feeling.tsx` | "אני יודעת איך את מרגישה עכשיו." |
| `src/components/sections/Intro.tsx` | "כי כאן אני נכנסת לתמונה." |
| `src/components/sections/Works.tsx` | "חלק מהעבודות שלי..." + לוגואים + פוסטרים |
| `src/components/sections/ServicesPuzzle.tsx` | "השירותים שלי" – פאזל גרירה |
| `src/components/sections/ProcessTimeline.tsx` | "איך האתר שלך יוולד?" – ציר זמן |
| `src/components/sections/WhyMe.tsx` | "למה לבחור בי…" – כרטיסים |
| `src/components/sections/GrowthGraph.tsx` | "ואיך האתר שלך יזנק אצלי" – גרף Lottie |
| `src/components/sections/Faq.tsx` | שאלות נפוצות |
| `src/components/sections/Quiz.tsx` + `src/components/LeadForm.tsx` | קוויז וטופס לידים (**לא מחובר**, ראו TODO) |
| `src/components/sections/Contact.tsx` | יצירת קשר |
| `src/components/sections/Copyright.tsx` | זכויות יוצרים |
| `src/data/content.ts` | טקסטים ותמונות של העבודות, הלוגואים, הפוסטרים וציר הזמן |

- **Breakpoints** (`tailwind.config.ts`): טלפון = ברירת מחדל, `md` = טאבלט (768px), `lg` = מחשב (1025px), כמו ב-Elementor.
- **צבעים וגופנים:** מוגדרים ב-`tailwind.config.ts` (`brand-*`, `font-dak` / `font-beinoni` / `font-ava`).
- **מדיה:** כל התמונות, הגופנים וקובצי ה-Lottie נמצאים ב-`public/` ונטענים מקומית, לא מהאתר בוורדפרס.

מה שונה מהמקור או לא הושלם: ראו [DIFFERENCES.md](DIFFERENCES.md).
