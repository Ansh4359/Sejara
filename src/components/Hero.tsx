"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/translations/en";
import { hi } from "@/translations/hi";

export default function Hero() {
  const { language } = useLanguage();
  const t = language === "en" ? en : hi;

  return (
    <section className="hero-bg relative overflow-hidden py-20 pb-24">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-[1]">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-green-light text-green-dark px-4 py-1.5 rounded-full text-[13px] font-semibold mb-5">
            <span className="w-2 h-2 bg-green rounded-full animate-pulse-dot" />
            {t.hero.badge}
          </div>
          <h1 className="font-display text-[32px] md:text-[40px] lg:text-[52px] font-extrabold leading-[1.15] text-navy mb-5">
            {t.hero.line1}
            <br />
            <span className="gradient-text">{t.hero.highlight}</span>
            <br />
            {t.hero.line2}
          </h1>
          <p className="text-lg text-gray-500 italic mb-6">
            {t.hero.hindiLine}
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-[520px] mx-auto lg:mx-0">
            {t.hero.description}
          </p>
          <div className="flex gap-4 flex-wrap mb-10 justify-center lg:justify-start">
            <a
              href="#bulk"
              className="inline-flex items-center gap-2 bg-saffron text-white px-7 py-3.5 rounded-[10px] text-base font-semibold shadow-[0_4px_14px_rgba(255,107,43,0.35)] hover:bg-saffron-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(255,107,43,0.4)] transition-all"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-white text-navy px-7 py-3.5 rounded-[10px] text-base font-semibold border-2 border-gray-200 hover:border-saffron hover:text-saffron transition-all"
            >
              {t.hero.cta2}
            </a>
          </div>
          <div className="flex gap-10 justify-center lg:justify-start">
            <div>
              <strong className="block text-[28px] font-extrabold text-navy font-display">
                15+
              </strong>
              <span className="text-[13px] text-gray-500">{t.hero.stat1Label}</span>
            </div>
            <div>
              <strong className="block text-[28px] font-extrabold text-navy font-display">
                5000+
              </strong>
              <span className="text-[13px] text-gray-500">{t.hero.stat2Label}</span>
            </div>
            <div>
              <strong className="block text-[28px] font-extrabold text-navy font-display">
                28
              </strong>
              <span className="text-[13px] text-gray-500">{t.hero.stat3Label}</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-gradient-to-br from-saffron to-[#FF8F5E] rounded-[16px] p-5 text-center text-white shadow-lg transition-transform hover:-translate-y-1">
              <div className="text-[48px] mb-2">🍽️</div>
              <h4 className="text-sm font-bold mb-1">{t.hero.card1Title}</h4>
              <p className="text-xs opacity-80 m-0">{t.hero.card1Desc}</p>
            </div>
            <div className="bg-white rounded-[16px] p-5 text-center shadow-lg transition-transform hover:-translate-y-1">
              <div className="text-[48px] mb-2">🥤</div>
              <h4 className="text-sm font-bold mb-1 text-navy">{t.hero.card2Title}</h4>
              <p className="text-xs opacity-80 m-0">{t.hero.card2Desc}</p>
            </div>
            <div className="bg-white rounded-[16px] p-5 text-center shadow-lg transition-transform hover:-translate-y-1">
              <div className="text-[48px] mb-2">📦</div>
              <h4 className="text-sm font-bold mb-1 text-navy">{t.hero.card3Title}</h4>
              <p className="text-xs opacity-80 m-0">{t.hero.card3Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
