"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/translations/en";
import { hi } from "@/translations/hi";

export default function BulkOrder() {
  const { language } = useLanguage();
  const t = language === "en" ? en : hi;
  const f = t.bulkOrder.form;

  return (
    <section className="bulk-bg relative overflow-hidden py-20 text-white" id="bulk">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-[1]">
        <div>
          <h2 className="font-display text-[32px] md:text-[38px] font-extrabold mb-4">
            {t.bulkOrder.headline1}{" "}
            <span className="text-gold">{t.bulkOrder.headlineHighlight}</span>
            <br />
            {t.bulkOrder.headline2}
          </h2>
          <p className="text-[17px] opacity-85 mb-8">{t.bulkOrder.description}</p>
          <div className="grid grid-cols-2 gap-4">
            {t.bulkOrder.features.map((feat) => (
              <div key={feat} className="flex items-center gap-2.5 text-[15px]">
                <span className="w-7 h-7 bg-[rgba(45,139,78,0.2)] rounded-full flex items-center justify-center text-[#4CAF50] text-sm shrink-0">
                  ✓
                </span>
                {feat}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-radius-xl p-9 backdrop-blur-sm">
          <h3 className="text-[22px] font-bold mb-1.5">{f.title}</h3>
          <p className="text-sm opacity-70 mb-6">{f.subtitle}</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(f.alertMsg);
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-[13px] font-medium mb-1.5 opacity-80">
                  {f.fullName}
                </label>
                <input
                  type="text"
                  placeholder={f.fullNamePlaceholder}
                  required
                  className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-lg text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-saffron transition-colors"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1.5 opacity-80">
                  {f.mobile}
                </label>
                <input
                  type="tel"
                  placeholder={f.mobilePlaceholder}
                  required
                  className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-lg text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-saffron transition-colors"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[13px] font-medium mb-1.5 opacity-80">
                {f.businessName}
              </label>
              <input
                type="text"
                placeholder={f.businessPlaceholder}
                className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-lg text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-saffron transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-[13px] font-medium mb-1.5 opacity-80">
                  {f.city}
                </label>
                <input
                  type="text"
                  placeholder={f.cityPlaceholder}
                  required
                  className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-lg text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-saffron transition-colors"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1.5 opacity-80">
                  {f.product}
                </label>
                <select
                  required
                  className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-lg text-white text-sm focus:outline-none focus:border-saffron transition-colors appearance-none"
                >
                  <option value="" className="bg-navy text-white">
                    {f.selectProduct}
                  </option>
                  {f.productOptions.map((opt) => (
                    <option key={opt} className="bg-navy text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-[13px] font-medium mb-1.5 opacity-80">
                  {f.quantity}
                </label>
                <select className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-lg text-white text-sm focus:outline-none focus:border-saffron transition-colors appearance-none">
                  <option value="" className="bg-navy text-white">
                    {f.selectQuantity}
                  </option>
                  {f.quantityOptions.map((opt) => (
                    <option key={opt} className="bg-navy text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1.5 opacity-80">
                  {f.timeline}
                </label>
                <select className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-lg text-white text-sm focus:outline-none focus:border-saffron transition-colors appearance-none">
                  <option value="" className="bg-navy text-white">
                    {f.selectTimeline}
                  </option>
                  {f.timelineOptions.map((opt) => (
                    <option key={opt} className="bg-navy text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[13px] font-medium mb-1.5 opacity-80">
                {f.details}
              </label>
              <textarea
                rows={3}
                placeholder={f.detailsPlaceholder}
                className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-lg text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-saffron transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-saffron text-white border-none rounded-[10px] text-base font-bold cursor-pointer transition-all hover:bg-saffron-dark hover:-translate-y-px mt-2"
            >
              {f.submit}
            </button>
            <p className="text-center text-xs opacity-50 mt-3">{f.note}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
