"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/translations/en";
import { hi } from "@/translations/hi";

export default function Footer() {
  const { language } = useLanguage();
  const t = language === "en" ? en : hi;

  return (
    <footer className="bg-navy text-white py-14 px-0">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 mb-10">
          <div>
            <div className="font-display text-2xl font-extrabold text-white mb-3">
              Sejara <span className="text-saffron">Industries</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed mb-4">
              {t.footer.description}
            </p>
            <div className="flex gap-2.5">
              {["📘", "📸", "▶️", "💼"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-base hover:bg-saffron transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-base font-bold mb-4 text-gold">{t.footer.productsTitle}</h4>
            {t.footer.products.map((item) => (
              <a
                key={item}
                href="#products"
                className="block text-sm opacity-70 py-1 hover:opacity-100 hover:text-saffron transition-all"
              >
                {item}
              </a>
            ))}
          </div>
          <div>
            <h4 className="text-base font-bold mb-4 text-gold">{t.footer.companyTitle}</h4>
            {t.footer.company.map((item) => (
              <a
                key={item}
                href="#"
                className="block text-sm opacity-70 py-1 hover:opacity-100 hover:text-saffron transition-all"
              >
                {item}
              </a>
            ))}
          </div>
          <div>
            <h4 className="text-base font-bold mb-4 text-gold">{t.footer.contactTitle}</h4>
            <div className="flex gap-2.5 mb-3.5 text-sm opacity-80">
              <span className="text-lg shrink-0">📍</span>
              <span>Plot 42, GIDC Industrial Estate, Halol, Gujarat 389350</span>
            </div>
            <div className="flex gap-2.5 mb-3.5 text-sm opacity-80">
              <span className="text-lg shrink-0">📞</span>
              <span>
                +91 98765 43210
                <br />
                +91 76543 21098
              </span>
            </div>
            <div className="flex gap-2.5 mb-3.5 text-sm opacity-80">
              <span className="text-lg shrink-0">📧</span>
              <span>sales@sejaraindustries.in</span>
            </div>
            <div className="flex gap-2.5 mb-3.5 text-sm opacity-80">
              <span className="text-lg shrink-0">🕐</span>
              <span>{t.footer.hours}</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex justify-between items-center text-[13px] opacity-60 flex-col sm:flex-row gap-2 text-center">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.links}</span>
        </div>
      </div>
    </footer>
  );
}
