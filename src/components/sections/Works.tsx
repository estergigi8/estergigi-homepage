import { logos, posters, works } from "../../data/content";

// Section 4 – "חלק מהעבודות שלי..." Original: 9206c40 (desktop + tablet), d701c6d (mobile).
// On tablet/mobile the original rows are wider than the screen (135% / 200vw) and get cut off;
// here all three rows (cards, logos, posters) auto-scroll in an endless loop instead.
export default function Works() {
  return (
    <section className="flex min-h-screen flex-col bg-black text-white">
      <div className="mb-[50px] mt-[30px] flex justify-center">
        <h2 className="mx-[30px] mt-[30px] text-center font-dak text-[9vw] font-normal leading-none md:text-[7vw] lg:text-[4.4vw]">
          חלק מהעבודות שלי...
        </h2>
      </div>

      {/* Project cards – infinite auto-scroll. The list is rendered twice and the track slides by half its width, then loops. */}
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max flex-row flex-nowrap bg-black">
          {[...works, ...works].map((w, i) => (
            <article
              key={i}
              aria-hidden={i >= works.length}
              className="me-[30px] flex min-h-[20vh] w-[60vw] shrink-0 flex-col items-start gap-[10px] rounded-br-[20px] rounded-tl-[20px] border-2 border-white md:min-h-[25vh] md:w-[40vw] lg:me-[60px] lg:min-h-[50vh] lg:w-[24vw]"
            >
              <img src={w.image} alt={w.alt} width={900} height={600} className="w-full rounded-tl-[18px]" loading="lazy" />
              <h3 className="px-[12px] pb-[5px] text-start font-beinoni text-[4vw] font-normal leading-[1.4em] md:px-[15px] md:text-[2.4vw] lg:text-[1.7vw] lg:leading-[37px]">
                <span className="md:hidden">{w.titleMobile}</span>
                <span className="hidden md:inline">{w.title}</span>
              </h3>
              <p className="whitespace-pre-line px-[12px] pb-[12px] font-dak text-[3vw] font-normal leading-[25px] text-white md:px-[15px] md:text-[1.5vw] lg:text-[1.1vw]">
                <span className="md:hidden">{w.textMobile}</span>
                <span className="hidden md:inline">{w.text}</span>
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Client logos – infinite auto-scroll, same technique as the cards but moving left */}
      <div className="my-5 overflow-hidden md:my-[50px]">
        <div className="animate-marquee flex w-max flex-row flex-nowrap" style={{ animationDuration: "18s", animationDirection: "reverse" }}>
          {[...logos, ...logos].map((l, i) => (
            <img
              key={i}
              src={l.src}
              alt={i < logos.length ? l.alt : ""}
              width={229}
              height={219}
              className="me-[20px] w-[40vw] shrink-0 md:w-[229px] lg:me-[40px]"
            />
          ))}
        </div>
      </div>

      {/* Posters – infinite auto-scroll */}
      <div className="my-[50px] overflow-hidden">
        <div className="animate-marquee flex w-max flex-row flex-nowrap" style={{ animationDuration: "28s" }}>
          {[...posters, ...posters].map((p, i) => (
            <img key={i} src={p} alt="" className="me-5 w-[35vw] shrink-0 object-contain md:w-[22vw] lg:me-[60px] lg:w-[15vw]" />
          ))}
        </div>
      </div>
    </section>
  );
}
