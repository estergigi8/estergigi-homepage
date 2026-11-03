// Section 12 – copyright line. Original: 393626f.
export default function Copyright() {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 bg-black p-[10px]">
      <p className="font-dak text-[4vw] font-normal leading-none text-white md:text-[2vw] lg:text-[1vw]">
        © נכתב, עוצב ונבנה ע"י אסתר גיגי כל הזכויות שמורות
      </p>
      {/* Links required on every page: accessibility statement (Israeli regulations) and privacy policy */}
      <p className="flex gap-4 font-dak text-[3.5vw] leading-none text-white/70 md:text-[1.6vw] lg:text-[0.9vw]">
        <a href="/הצהרת-נגישות" className="hover:text-brand-pink">
          הצהרת נגישות
        </a>
        <a href="/מדיניות-פרטיות" className="hover:text-brand-pink">
          מדיניות פרטיות
        </a>
      </p>
    </footer>
  );
}
