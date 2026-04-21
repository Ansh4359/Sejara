"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/translations/en";
import { hi } from "@/translations/hi";

export default function Process() {
  const { language } = useLanguage();
  const t = language === "en" ? en : hi;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-saffron text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            {t.process.tag}
          </div>
          <h2 className="font-display text-[40px] font-extrabold text-navy mb-3">
            {t.process.heading}
          </h2>
          <p className="text-[17px] text-gray-500 max-w-[600px] mx-auto">
            {t.process.description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block process-connector" />
          {t.process.steps.map((step, i) => (
            <div key={step.title} className="text-center relative z-[1]">
              <div className="w-14 h-14 bg-saffron text-white rounded-full flex items-center justify-center text-xl font-extrabold font-display mx-auto mb-4 shadow-[0_4px_12px_rgba(255,107,43,0.3)]">
                {i + 1}
              </div>
              <h4 className="text-base font-bold text-navy mb-2">{step.title}</h4>
              <p className="text-[13px] text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
