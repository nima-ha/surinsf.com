'use client';

import { useI18n } from '@/i18n';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight, Rss } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const { t } = useI18n();
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest text-brand-400 uppercase">{t.blog.label}</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3">{t.blog.title}</h1>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">{t.blog.desc}</p>
            <Link href="/rss.xml" className="inline-flex items-center gap-2 mt-4 text-sm text-brand-400 hover:text-brand-300 transition-colors" target="_blank" rel="noopener noreferrer">
              <Rss size={14} /> RSS
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {t.blog.articles.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.1}>
              <Link href={`/blog/${a.slug}`} className="block">
                <article className="glass rounded-2xl overflow-hidden group hover:border-brand-700/40 transition-all duration-500 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-brand-700/20 text-brand-400">{a.cat}</span>
                      <span className="text-xs text-white/30">{a.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-400 transition-colors">{a.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed flex-1">{a.excerpt}</p>
                    <div className="mt-4 flex items-center gap-1 text-sm text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {t.blog.label} <ArrowRight size={14} />
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
