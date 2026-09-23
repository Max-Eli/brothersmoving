"use client";

import { useId, useState } from "react";
import { Icon } from "./Icons";

/**
 * Answers stay in the DOM whether or not the item is expanded, so crawlers and
 * AI readers get the full text regardless of interaction state.
 */
export default function FAQAccordion({
  faqs,
  defaultOpen = 0,
}: {
  faqs: { q: string; a: string }[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  // A page can render several accordions (the FAQ page renders one per
  // category), so panel ids must be unique per instance or the duplicate ids
  // break the aria-controls association for assistive technology.
  const uid = useId();

  return (
    <div className="divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-200 bg-white">
      {faqs.map((faq, i) => {
        const expanded = open === i;
        return (
          <div key={faq.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(expanded ? null : i)}
                aria-expanded={expanded}
                aria-controls={`${uid}-panel-${i}`}
                className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition hover:bg-navy-50 sm:px-6"
              >
                <span className="text-[16px] font-semibold text-navy-950 sm:text-[17px]">{faq.q}</span>
                <span
                  className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-navy-100 text-navy-700 transition-transform duration-200 ${
                    expanded ? "rotate-90 bg-amber-brand-100 text-amber-brand-900" : ""
                  }`}
                >
                  <Icon.chevron className="size-3.5" strokeWidth={2.4} />
                </span>
              </button>
            </h3>
            <div
              id={`${uid}-panel-${i}`}
              hidden={!expanded}
              className="px-5 pb-6 text-[16px] leading-[1.7] text-navy-600 sm:px-6"
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
