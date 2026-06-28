'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { useI18n } from '@/i18n';
import ScrollReveal from '@/components/ScrollReveal';
import BrandsGrid from '@/components/BrandsGrid';
import GallerySection from '@/components/GallerySection';
import { ChevronLeft, Star, ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Home() {
  const { t } = useI18n();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 100, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power4.out', delay: 0.3 });
    }
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.querySelectorAll('.float-el'), { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.8 });
    }
    if (bgRef.current && !matchMedia('(pointer: coarse)').matches) {
      const onMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        gsap.to(bgRef.current, { x, y, duration: 1, ease: 'power2.out' });
      };
      window.addEventListener('mousemove', onMove, { passive: true });
      return () => window.removeEventListener('mousemove', onMove);
    }
  }, []);

  return (
    <>
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div ref={bgRef} className="absolute inset-0 bg-gradient-to-b from-surface via-surface-light to-surface" />
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,112,243,0.15) 0%, transparent 50%)', transform: 'translateZ(0)' }} />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-6 float-el">
            <span className="inline-block px-4 py-1.5 text-xs font-medium bg-brand-700/20 text-brand-400 border border-brand-700/30 rounded-full">
              {t.about.label}
            </span>
          </div>
          <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 text-shadow-glow">
            <span className="gradient-text">{t.hero.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 float-el">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 float-el">
            <Link href="/contact" className="px-8 py-3.5 bg-brand-700 hover:bg-brand-600 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-brand-700/30">
              {t.hero.cta}
            </Link>
            <Link href="/about" className="px-8 py-3.5 border border-white/20 text-white/80 hover:text-white hover:border-white/50 rounded-full font-medium transition-all">
              {t.common.about}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronLeft className="w-6 h-6 text-white/30 rotate-90" />
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-widest text-brand-400 uppercase">{t.about.label}</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">{t.about.title}</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <p className="text-white/60 leading-relaxed text-lg">{t.about.description}</p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {t.about.stats.map(s => (
                  <div key={s.label} className="glass p-6 rounded-2xl text-center hover:border-brand-700/30 transition-all duration-500">
                    <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
                    <div className="text-sm text-white/50">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-widest text-brand-400 uppercase">{t.services.label}</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">{t.services.title}</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.services.items.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="glass p-8 rounded-2xl h-full group hover:border-brand-700/40 hover:bg-white/5 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-brand-700/20 flex items-center justify-center mb-5 group-hover:bg-brand-700/30 transition-all">
                    <div className="w-5 h-5 rounded-full bg-brand-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-widest text-brand-400 uppercase">{t.products.label}</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">{t.products.title}</h2>
              <p className="text-white/50 mt-4 max-w-2xl mx-auto">{t.products.desc}</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.products.items.slice(0, 6).map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <Link href={`/products/${p.slug}`} className="block">
                  <div className="glass rounded-2xl overflow-hidden group hover:border-brand-700/40 transition-all duration-500">
                    <div className="aspect-video overflow-hidden">
                      <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-brand-400">{p.cat}</span>
                      <h3 className="font-semibold mt-1">{p.title}</h3>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link href="/products" className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors">
                {t.products.cta} <ArrowUpRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-widest text-brand-400 uppercase">{t.testimonials.label}</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">{t.testimonials.title}</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4">
            {t.testimonials.items.map((tm, i) => (
              <ScrollReveal key={tm.author} delay={i * 0.1}>
                <div className="glass p-8 rounded-2xl h-full hover:border-brand-700/30 transition-all duration-500">
                  <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, j) => <Star key={j} size={14} className="fill-brand-400 text-brand-400" />)}</div>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">"{tm.quote}"</p>
                  <div>
                    <p className="font-semibold text-sm">{tm.author}</p>
                    <p className="text-xs text-white/40">{tm.role}, {tm.company}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-widest text-brand-400 uppercase">{t.blog.label}</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">{t.blog.title}</h2>
              <p className="text-white/50 mt-4 max-w-xl mx-auto">{t.blog.desc}</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {t.blog.articles.slice(0, 3).map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 0.1}>
                <Link href={`/blog/${a.slug}`} className="block">
                  <article className="glass rounded-2xl overflow-hidden group hover:border-brand-700/40 transition-all duration-500 h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img src={a.img} alt={a.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-brand-700/20 text-brand-400">{a.cat}</span>
                        <span className="text-xs text-white/30">{a.date}</span>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-brand-400 transition-colors">{a.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed flex-1">{a.excerpt}</p>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link href="/blog" className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors">
                {t.blog.label} <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BrandsGrid />
      <GallerySection />

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold mb-4">{t.contact.title}</p>
              <p className="text-white/50 mb-8">{t.contact.subtitle}</p>
              <Link href="/contact" className="inline-flex px-8 py-3.5 bg-brand-700 hover:bg-brand-600 text-white rounded-full font-medium transition-all">
                {t.common.contact}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
