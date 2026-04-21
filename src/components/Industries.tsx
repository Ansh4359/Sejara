"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/translations/en";
import { hi } from "@/translations/hi";

const emojis = ["🍛", "🎪", "🏪", "🏫", "🛒", "🚀"];

export default function Industries() {
  const { language } = useLanguage();
  const t = language === "en" ? en : hi;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-saffron text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            {t.industries.tag}
          </div>
          <h2 className="font-display text-[40px] font-extrabold text-navy mb-3">
            {t.industries.heading}
          </h2>
          <p className="text-[17px] text-gray-500 max-w-[600px] mx-auto">
            {t.industries.description}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {t.industries.items.map((ind, i) => (
            <div
              key={ind.name}
              className="bg-white rounded-xl p-7 text-center border border-gray-100 transition-all hover:border-saffron hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-[36px] mb-3">{emojis[i]}</div>
              <h4 className="text-sm font-semibold text-navy mb-1">{ind.name}</h4>
              <p className="text-xs text-gray-500">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
