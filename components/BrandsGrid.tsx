'use client';

import { useI18n } from '@/i18n';
import ScrollReveal from './ScrollReveal';

export default function BrandsGrid() {
  const { t } = useI18n();
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs tracking-widest text-brand-400 uppercase">{t.brands.label}</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">{t.brands.title}</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {t.brands.items.map((b, i) => (
            <ScrollReveal key={b.name} delay={i * 0.06}>
              <div className="glass rounded-2xl p-6 aspect-square flex flex-col items-center justify-center gap-3 hover:border-brand-700/30 transition-all duration-500 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img src={b.img} alt={b.name} loading="lazy" className="w-8 h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-xs text-white/50 text-center leading-tight">{b.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
