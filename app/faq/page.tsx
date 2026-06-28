'use client';

import { useState } from 'react';
import { useI18n } from '@/i18n';
import ScrollReveal from '@/components/ScrollReveal';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest text-brand-400 uppercase">{t.faq.label}</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3">{t.faq.title}</h1>
          </div>
        </ScrollReveal>
        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="glass rounded-xl overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 hover:bg-white/5 transition-colors">
                  <span className="font-medium">{item.q}</span>
                  <ChevronDown size={18} className={`text-white/40 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-white/50 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
