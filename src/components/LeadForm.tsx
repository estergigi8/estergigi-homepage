import { useState, type FormEvent } from "react";

/*
 * Lead form – saves each submission as a row in the Supabase table `public.leads`
 * (project "estergigi-homepage"). RLS allows the browser to INSERT only; leads are read in the Supabase dashboard.
 * Quiz answers are stored too (`quiz_answers`).
 *
 * Email: a database trigger (public.notify_new_lead) emails every new lead to estergigi8@gmail.com through Resend,
 * like the original Elementor form did. The Resend key is stored in Supabase Vault (resend_api_key), not in this code.
 */
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type Props = { answers?: Record<string, string> };

export default function LeadForm({ answers = {} }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
        method: "POST",
        headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json", Prefer: "return=minimal" },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          phone: String(data.get("phone") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          privacy_consent: data.get("privacy") === "on",
          quiz_answers: answers,
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };
  const sent = status === "sent";

  const field =
    "w-full border-0 border-b border-white bg-transparent px-0 py-2 font-dak text-white placeholder:text-white/70 focus:outline-none focus:ring-0";

  if (sent) {
    return (
      <p role="status" className="font-dak text-[5vw] text-white md:text-[2.5vw] lg:text-[1.3vw]">
        הטופס נשלח בהצלחה.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-[90vw] max-w-[700px] flex-col gap-[10px] text-white" noValidate={false}>
      {/* Visually the placeholder is the label (original design); the real labels are for screen readers. */}
      <label htmlFor="lead-name" className="sr-only">
        שם
      </label>
      <input id="lead-name" name="name" type="text" placeholder="שם" autoComplete="name" required className={field} />
      <label htmlFor="lead-phone" className="sr-only">
        טלפון
      </label>
      <input id="lead-phone" name="phone" type="tel" placeholder="טלפון" autoComplete="tel" required className={field} />
      <label htmlFor="lead-email" className="sr-only">
        אימייל
      </label>
      <input id="lead-email" name="email" type="email" placeholder="אימייל" autoComplete="email" required className={field} />
      <label className="flex items-center gap-2 font-beinoni text-sm">
        <input name="privacy" type="checkbox" required className="h-4 w-4 accent-brand-pink-2" />
        <span>
          *קראתי ואישרתי את{" "}
          <a href="/מדיניות-פרטיות" className="underline">
            מדיניות הפרטיות.
          </a>
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 w-full border border-[#020101] bg-brand-pink-2 px-6 py-3 font-dak text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "שולחת..." : "קדימה אני רוצה לקדם את העסק שלי!"}
      </button>
      {status === "error" && (
        <p role="alert" className="font-dak text-sm text-white">
          משהו השתבש בשליחה, נסי שוב בעוד רגע.
        </p>
      )}
    </form>
  );
}
