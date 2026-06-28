'use client';

import { useI18n } from '@/i18n';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest text-brand-400 uppercase">{t.about.label}</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3">{t.about.title}</h1>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-white/60 leading-relaxed text-lg">{t.about.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {t.about.stats.map(s => (
                  <div key={s.label} className="glass p-6 rounded-2xl text-center hover:border-brand-700/30 transition-all duration-500">
                    <div className="text-2xl font-bold gradient-text">{s.value}</div>
                    <div className="text-sm text-white/50">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-3">
              {t.about.images.map((img, i) => (
                <div key={i} className={`aspect-[4/5] rounded-2xl overflow-hidden ${i % 2 === 0 ? '' : 'mt-6'}`}>
                  <img src={img} alt={t.about.title} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
