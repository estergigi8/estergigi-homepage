// Section 11 – "יצירת קשר" with three round buttons. Original: 68d921d.
const MAIL =
  "mailto:ESTERGIGI8@GMAIL.COM?subject=%D7%A4%D7%A0%D7%99%D7%99%D7%94%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8&body=%D7%94%D7%99%D7%99%20%D7%90%D7%A1%D7%AA%D7%A8,%20%D7%91%D7%90%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%20%D7%A9%D7%9C%D7%9A%20%D7%A7%D7%95%D7%A8%D7%90%D7%99%D7%9D%20%D7%9C%D7%99%20";

const btn =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border-2 text-white no-underline transition-colors duration-200 hover:bg-transparent md:h-14 md:w-14";

export default function Contact() {
  return (
    <section className="flex flex-row flex-wrap items-center gap-5 self-center bg-black pr-[11px] md:w-full md:pr-[50px]">
      <a className={`${btn} border-brand-email bg-brand-email hover:text-brand-email`} href={MAIL} aria-label="שלח מייל">
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3,5 12,13 21,5" />
        </svg>
      </a>
      <a className={`${btn} border-brand-phone bg-brand-phone hover:text-brand-phone`} href="tel:0544857740" aria-label="התקשר">
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.74a16 16 0 0 0 6.29 6.29l1.1-1.1a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
      <a
        className={`${btn} border-brand-whatsapp bg-brand-whatsapp hover:text-brand-whatsapp`}
        href="https://wa.me/972544857740"
        target="_blank"
        rel="noopener"
        aria-label="שלח הודעה בוואטסאפ"
      >
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
      <h2 className="self-center text-center font-dak text-[8vw] font-normal leading-none text-white md:text-[4.2vw] lg:text-[2.9vw]">יצירת קשר</h2>
    </section>
  );
}
