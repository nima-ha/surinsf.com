'use client';

import { useI18n } from '@/i18n';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BlogArticleClient({ slug }: { slug: string }) {
  const { t } = useI18n();
  const article = t.blog.articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="py-24 text-center">
        <div className="text-6xl font-black gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold mb-4">{t.notFound.title}</h1>
        <p className="text-white/50 mb-8">{t.notFound.desc}</p>
        <Link href="/blog" className="inline-flex px-8 py-3.5 bg-brand-700 hover:bg-brand-600 text-white rounded-full font-medium">{t.blog.label}</Link>
      </div>
    );
  }

  const paragraphs = article.content.split('\n\n');

  return (
    <div className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-brand-400 hover:text-brand-300 transition-colors mb-6">
              <ArrowRight size={14} /> {t.blog.label}
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs px-3 py-1 rounded-full bg-brand-700/20 text-brand-400">{article.cat}</span>
              <span className="text-xs text-white/30">{article.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{article.title}</h1>
          </div>
        </ScrollReveal>
        <div className="aspect-video rounded-2xl overflow-hidden mb-10">
          <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
        </div>
        <ScrollReveal>
          <div className="space-y-6">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-white/60 leading-relaxed text-lg">{p}</p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
