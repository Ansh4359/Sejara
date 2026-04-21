"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/translations/en";
import { hi } from "@/translations/hi";

const certIcons = ["🌿", "♻️", "🧪", "🇮🇳"];

export default function EcoFriendly() {
  const { language } = useLanguage();
  const t = language === "en" ? en : hi;

  return (
    <section
      className="py-20 bg-gradient-to-br from-[#E8F5E9] to-[#F1F8E9]"
      id="eco"
    >
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="font-display text-[32px] md:text-[38px] font-extrabold text-navy mb-4">
            {t.eco.headline1}{" "}
            <span className="text-green">{t.eco.headlineHighlight}</span>
          </h2>
          <p className="text-[17px] text-gray-700 mb-6">{t.eco.description}</p>
          <div className="flex gap-4 flex-wrap">
            {t.eco.certs.map((cert, i) => (
              <div
                key={cert}
                className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-[10px] text-[13px] font-semibold text-green-dark shadow-sm"
              >
                {certIcons[i]} {cert}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-green text-white rounded-[16px] p-6 text-center shadow-md">
            <div className="text-[40px] mb-2">🌿</div>
            <h4 className="text-base font-bold mb-1">{t.eco.cards[0].title}</h4>
            <p className="text-[13px] opacity-80 m-0">{t.eco.cards[0].desc}</p>
          </div>
          <div className="bg-white rounded-[16px] p-6 text-center shadow-md">
            <div className="text-[40px] mb-2">📄</div>
            <h4 className="text-base font-bold mb-1 text-navy">{t.eco.cards[1].title}</h4>
            <p className="text-[13px] opacity-80 m-0">{t.eco.cards[1].desc}</p>
          </div>
          <div className="bg-white rounded-[16px] p-6 text-center shadow-md">
            <div className="text-[40px] mb-2">🥢</div>
            <h4 className="text-base font-bold mb-1 text-navy">{t.eco.cards[2].title}</h4>
            <p className="text-[13px] opacity-80 m-0">{t.eco.cards[2].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
