import { useState } from "react";
import LeadForm from "../LeadForm";

// Section 10 – quiz + lead form. Original: 5566245 (desktop + tablet), 564fc10 (mobile).
// Three steps stacked on top of each other that fade between them.
const questions = [
  { title: <>איזה <strong> עסק </strong> יש לך?</>, options: ["עסק קטן", "חברה גדולה"] },
  { title: <>איזה אתר <strong>את צריכה?</strong></>, options: ["אתר גדול", "1-2 דפי נחיתה"] },
];

const titleCls = "text-center font-dak text-[10vw] font-normal leading-none text-white md:text-[7vw] lg:text-[4.1vw]";

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const choose = (answer: string) => {
    setAnswers((a) => ({ ...a, [`step_${step + 1}`]: answer }));
    setStep((s) => s + 1);
  };

  const stepCls = (i: number) =>
    `absolute inset-x-0 top-0 flex min-h-[70vh] w-full flex-col items-center justify-center gap-5 transition-opacity duration-[400ms] ${
      step === i ? "opacity-100" : "pointer-events-none opacity-0"
    }`;

  return (
    <section className="relative flex min-h-[70vh] flex-col bg-black">
      {questions.map((q, i) => (
        <div key={i} className={stepCls(i)} aria-hidden={step !== i}>
          <div className="flex flex-col items-center gap-5">
            <h2 className={titleCls}>{q.title}</h2>
            <p className="m-0 text-center font-beinoni text-[4vw] font-normal leading-none text-brand-pink-3 md:m-[2px] md:text-[2.4vw] lg:text-[1.3vw]">
              בחרי את הנכון לך ביותר
            </p>
          </div>
          <div className="flex min-h-[10vh] w-full flex-row flex-nowrap items-center justify-center gap-[10px] md:gap-[60px]">
            {q.options.map((o) => (
              <button
                key={o}
                type="button"
                onClick={() => choose(o)}
                className="flex min-h-[18vh] w-[40vw] cursor-pointer items-center justify-center rounded-full border-[3px] border-white bg-black transition-colors hover:bg-brand-pink-2 md:min-h-[25vh] md:w-[32vw] md:border-4 lg:min-h-[40vh] lg:w-[20%]"
              >
                <span className="text-center font-beinoni text-[7vw] font-medium leading-none text-white md:text-[4.5vw] lg:text-[2.6vw]">{o}</span>
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className={stepCls(2)} aria-hidden={step !== 2}>
        <h2 className={titleCls}>
          השאירי פרטים ואחזור אלייך <strong>בהקדם </strong>
        </h2>
        <LeadForm answers={answers} />
      </div>
    </section>
  );
}
