"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/translations/en";
import { hi } from "@/translations/hi";

const emojis = ["🍽️", "☕", "🥣", "📦", "🍱", "🎉"];
const bgClasses = [
  "bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2]",
  "bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9]",
  "bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]",
  "bg-gradient-to-br from-[#FFF8E1] to-[#FFECB3]",
  "bg-gradient-to-br from-[#FCE4EC] to-[#F8BBD0]",
  "bg-gradient-to-br from-[#F3E5F5] to-[#E1BEE7]",
];
const ecoFlags = [true, true, true, false, false, false];

export default function Products() {
  const { language } = useLanguage();
  const t = language === "en" ? en : hi;

  return (
    <section className="py-24 bg-gray-50" id="products">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-saffron text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            {t.products.tag}
          </div>
          <h2 className="font-display text-[40px] font-extrabold text-navy mb-3">
            {t.products.heading}
          </h2>
          <p className="text-[17px] text-gray-500 max-w-[600px] mx-auto">
            {t.products.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.products.items.map((product, i) => (
            <article
              key={product.name}
              className="bg-white rounded-[16px] overflow-hidden shadow-md border border-gray-100 transition-all hover:-translate-y-1.5 hover:shadow-xl hover:border-saffron group"
            >
              <div
                className={`h-[220px] flex items-center justify-center text-[80px] relative ${bgClasses[i]}`}
              >
                {ecoFlags[i] && (
                  <span className="absolute top-3 left-3 bg-green text-white px-2.5 py-1 rounded-md text-[11px] font-bold">
                    {t.products.eco}
                  </span>
                )}
                {"badge" in product && (
                  <span className="absolute top-3 right-3 bg-saffron text-white px-2.5 py-1 rounded-md text-[11px] font-bold">
                    {(product as unknown as { badge: string }).badge}
                  </span>
                )}
                {emojis[i]}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">
                  {product.name}
                </h3>
                <p className="text-[13px] text-gray-500 mb-3">
                  {product.hindi}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="bg-gray-100 px-2.5 py-1 rounded-md text-xs text-gray-700"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <p className="text-[13px] text-gray-500 mb-4">
                  <strong className="text-navy">{t.products.sizes}</strong>{" "}
                  {product.sizes}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-[22px] font-extrabold text-saffron font-display">
                    {product.price}{" "}
                    <span className="text-[13px] text-gray-500 font-normal">
                      {product.unit}
                    </span>
                  </div>
                  <a
                    href="#bulk"
                    className="bg-saffron text-white px-4 py-2 rounded-lg text-[13px] font-semibold hover:bg-saffron-dark transition-colors"
                  >
                    {t.products.enquire}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
