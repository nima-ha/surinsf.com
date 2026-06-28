'use client';

import { useI18n } from '@/i18n';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ServicesPage() {
  const { t } = useI18n();
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="text-xs tracking-widest text-brand-400 uppercase">{t.services.label}</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-6">{t.services.title}</h1>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-white/50 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            {t.about.description}
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {t.services.items.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="glass p-10 rounded-2xl hover:border-brand-700/40 hover:bg-white/5 transition-all duration-500 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-brand-700/20 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 rounded-full bg-brand-400" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">{s.title}</h2>
                <p className="text-white/50 leading-relaxed flex-1">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="glass p-12 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">{t.contact.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-3.5 bg-brand-700 hover:bg-brand-600 text-white rounded-full font-medium transition-all">
                {t.nav.contactLabel}
              </Link>
              <Link href="/products" className="px-8 py-3.5 border border-white/20 text-white/80 hover:text-white hover:border-white/50 rounded-full font-medium transition-all inline-flex items-center gap-2">
                {t.products.label} <ArrowLeft size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
