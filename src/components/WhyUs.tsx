"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/translations/en";
import { hi } from "@/translations/hi";

const icons = ["🏭", "💰", "🚀", "🎨", "✅", "📞", "🚛", "🔄"];

export default function WhyUs() {
  const { language } = useLanguage();
  const t = language === "en" ? en : hi;

  return (
    <section className="py-24" id="why-us">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-saffron text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            {t.whyUs.tag}
          </div>
          <h2 className="font-display text-[40px] font-extrabold text-navy mb-3">
            {t.whyUs.heading}
          </h2>
          <p className="text-[17px] text-gray-500 max-w-[600px] mx-auto">
            {t.whyUs.description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyUs.items.map((r, i) => (
            <div
              key={r.title}
              className="bg-white border border-gray-200 rounded-[16px] p-8 text-center transition-all hover:border-saffron hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-cream rounded-4xl flex items-center justify-center text-[28px] mx-auto mb-5">
                {icons[i]}
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
