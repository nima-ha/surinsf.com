'use client';

import { useI18n } from '@/i18n';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProductClient({ slug }: { slug: string }) {
  const { t } = useI18n();
  const product = t.products.items.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="py-24 text-center">
        <div className="text-6xl font-black gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold mb-4">{t.notFound.title}</h1>
        <p className="text-white/50 mb-8">{t.notFound.desc}</p>
        <Link href="/products" className="inline-flex px-8 py-3.5 bg-brand-700 hover:bg-brand-600 text-white rounded-full font-medium">{t.products.label}</Link>
      </div>
    );
  }

  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-8">
            <Link href="/products" className="inline-flex items-center gap-1 text-sm text-brand-400 hover:text-brand-300 transition-colors mb-6">
              <ArrowRight size={14} /> {t.products.label}
            </Link>
            <span className="text-xs tracking-widest text-brand-400 uppercase">{t.products.label}</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-4">{product.title}</h1>
            <p className="text-brand-400/80 text-sm">{product.cat}</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <ScrollReveal direction="left">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img src={product.img} alt={product.title} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <p className="text-white/60 leading-relaxed text-lg">{product.desc_detail}</p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="px-8 py-3.5 bg-brand-700 hover:bg-brand-600 text-white rounded-full font-medium transition-all">
                {t.contact.form.submit}
              </Link>
              <Link href="/contact" className="px-8 py-3.5 border border-white/20 text-white/80 hover:text-white hover:border-white/50 rounded-full font-medium transition-all">
                {t.contact.info.phone}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
