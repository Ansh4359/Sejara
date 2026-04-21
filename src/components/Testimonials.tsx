"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/translations/en";
import { hi } from "@/translations/hi";

const avatars = ["👨", "👨", "👩"];

export default function Testimonials() {
  const { language } = useLanguage();
  const t = language === "en" ? en : hi;

  return (
    <section className="py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-saffron text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            {t.testimonials.tag}
          </div>
          <h2 className="font-display text-[40px] font-extrabold text-navy mb-3">
            {t.testimonials.heading}
          </h2>
          <p className="text-[17px] text-gray-500 max-w-[600px] mx-auto">
            {t.testimonials.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <article
              key={item.name}
              className="bg-white border border-gray-200 rounded-[16px] p-8 transition-all hover:shadow-lg hover:border-gold"
            >
              <div className="text-[#FFC107] text-base mb-4">★★★★★</div>
              <blockquote className="text-[15px] text-gray-700 leading-[1.7] mb-5 italic">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-cream rounded-full flex items-center justify-center text-xl">
                  {avatars[i]}
                </div>
                <div>
                  <strong className="block text-sm text-navy">{item.name}</strong>
                  <span className="text-xs text-gray-500">{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
