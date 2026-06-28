'use client';

import { useI18n } from '@/i18n';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

export default function ProductsPage() {
  const { t } = useI18n();
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest text-brand-400 uppercase">{t.products.label}</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3">{t.products.title}</h1>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">{t.products.desc}</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.products.items.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08}>
              <Link href={`/products/${p.slug}`} className="block">
                <div className="glass rounded-2xl overflow-hidden group hover:border-brand-700/40 transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-brand-400 uppercase tracking-wider">{p.cat}</span>
                    <h3 className="font-semibold mt-1 text-lg">{p.title}</h3>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
