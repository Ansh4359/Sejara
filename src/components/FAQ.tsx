"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/translations/en";
import { hi } from "@/translations/hi";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { language } = useLanguage();
  const t = language === "en" ? en : hi;

  return (
    <section className="py-24" id="faq">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-saffron text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            {t.faq.tag}
          </div>
          <h2 className="font-display text-[40px] font-extrabold text-navy mb-3">
            {t.faq.heading}
          </h2>
          <p className="text-[17px] text-gray-500 max-w-[600px] mx-auto">
            {t.faq.description}
          </p>
        </div>
        <div className="max-w-[800px] mx-auto">
          {t.faq.items.map((faq, i) => (
            <div
              key={faq.q}
              className={`border rounded-xl mb-3 overflow-hidden transition-colors ${
                openIndex === i ? "border-saffron" : "border-gray-200 hover:border-saffron"
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between cursor-pointer bg-transparent border-none text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className="font-semibold text-base text-navy">{faq.q}</span>
                <span
                  className={`text-saffron text-xl shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
              <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                <div className="px-6 pb-5 text-[15px] text-gray-500 leading-[1.7]">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
