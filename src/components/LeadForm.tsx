import { useState, type FormEvent } from "react";

/*
 * Lead form – UI only, NOT connected yet.
 *
 * TODO (connect): on the original site this is an Elementor Pro form ("טופס חדש", form_id eba510b / 7a6919d on page 1306).
 *   It submits via AJAX to https://estergigi.com/wp-admin/admin-ajax.php (action "elementor_pro_forms_send_form").
 *   Action after submit (read from the page's Elementor data): EMAIL ONLY – no webhook, CRM or mailing-list integration.
 *     To:        estergigi8@gmail.com
 *     Subject:   הודעה חדשה מאת "אסתר גיגי"
 *     Body:      [all-fields]  (every field of the form)
 *     From:      email@estergigi.com, name "אסתר גיגי - לימוד יסודות התכנות"
 *   "submit_actions" is not saved on the form, so Elementor uses its default (email only). A second email
 *   (to dhygigi@gmail.com) is configured too, but it is not active unless "Email 2" is added as an action.
 *   Fields sent by the original: form_fields[name], form_fields[message] (= phone), form_fields[email],
 *   form_fields[field_b4746b0] (privacy checkbox), plus post_id=1306, form_id, queried_id=1306.
 *   The quiz answers are NOT sent by the original either (they are only logged to the console) – pass `answers` along if wanted.
 */
type Props = { answers?: Record<string, string> };

export default function LeadForm({ answers: _answers }: Props) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO (connect): send new FormData(e.currentTarget) + _answers to the chosen destination.
    setSent(true);
  };

  const field =
    "w-full border-0 border-b border-white bg-transparent px-0 py-2 font-dak text-white placeholder:text-white/70 focus:outline-none focus:ring-0";

  if (sent) {
    return <p className="font-dak text-[5vw] text-white md:text-[2.5vw] lg:text-[1.3vw]">הטופס נשלח בהצלחה.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="flex w-[90vw] max-w-[700px] flex-col gap-[10px] text-white" noValidate={false}>
      <input name="name" type="text" placeholder="שם" required className={field} />
      <input name="phone" type="tel" placeholder="טלפון" required className={field} />
      <input name="email" type="email" placeholder="אימייל" required className={field} />
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
        className="mt-2 w-full border border-[#020101] bg-brand-pink-2 px-6 py-3 font-dak text-white transition-opacity hover:opacity-90"
      >
        קדימה אני רוצה לקדם את העסק שלי!
      </button>
    </form>
  );
}
