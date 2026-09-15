'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: FaqItem[];
  id?: string;
}

export default function FaqAccordion({ items, id = 'faq-accordion' }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4" id={id}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm">
            <button
              type="button"
              aria-expanded={isOpen}
              className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">{item.question}</span>
              <span
                className="material-symbols-outlined text-primary text-[24px] transition-transform duration-200"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                expand_more
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
