import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Accessibility menu (Israeli standard 5568 / WCAG 2.0 AA). Each option toggles a class on <html>;
// the matching CSS is in index.css under "Accessibility menu". Choices are remembered per visitor.
const options = [
  { id: "text", label: "הגדלת טקסט" },
  { id: "contrast", label: "ניגודיות גבוהה" },
  { id: "grayscale", label: "גווני אפור" },
  { id: "links", label: "הדגשת קישורים" },
  { id: "font", label: "גופן קריא" },
  { id: "motion", label: "עצירת אנימציות" },
  { id: "spacing", label: "ריווח שורות" },
] as const;

type OptionId = (typeof options)[number]["id"];
const STORAGE_KEY = "a11y-options";

function load(): OptionId[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<OptionId[]>(load);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    options.forEach((o) => html.classList.toggle(`a11y-${o.id}`, active.includes(o.id)));
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(active));
    } catch {
      /* storage unavailable – settings just won't persist */
    }
  }, [active]);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const toggle = (id: OptionId) => setActive((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));

  return createPortal(
    <div className="a11y-widget fixed bottom-4 left-4 z-[1000] flex flex-col items-end font-sans" dir="rtl">
      {open && (
        <div
          ref={panelRef}
          id="a11y-panel"
          role="dialog"
          aria-label="תפריט נגישות"
          className="mb-3 w-[260px] max-w-[calc(100vw-2rem)] rounded-2xl border border-white/15 bg-[#111] p-4 text-white shadow-2xl"
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold">תפריט נגישות</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="סגירת תפריט הנגישות"
              className="rounded-full px-2 text-xl leading-none hover:bg-white/10"
            >
              ×
            </button>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {options.map((o) => {
              const on = active.includes(o.id);
              return (
                <li key={o.id}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(o.id)}
                    className={`h-full w-full rounded-xl border px-2 py-3 text-sm transition-colors ${
                      on ? "border-[#ff7ba5] bg-[#ff7ba5] text-black" : "border-white/20 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    {o.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={() => setActive([])}
            className="mt-3 w-full rounded-xl border border-white/20 py-2 text-sm hover:bg-white/10"
          >
            איפוס הגדרות
          </button>
          <a href="/הצהרת-נגישות" className="mt-3 block text-center text-sm text-[#ff7ba5] underline">
            הצהרת נגישות
          </a>
        </div>
      )}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="פתיחת תפריט נגישות"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff7ba5] text-black shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
        </svg>
      </button>
    </div>,
    document.body,
  );
}
