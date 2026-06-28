'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import { LangProvider, useI18n } from '@/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';
import QuickContact from '@/components/QuickContact';
import './globals.css';

gsap.registerPlugin(ScrollTrigger);

function ScrollRestore() {
  const pathname = usePathname();
  useEffect(() => { window.scrollTo(0, 0); ScrollTrigger.refresh(); }, [pathname]);
  return null;
}

function BodyInner({ children }: { children: React.ReactNode }) {
  const { lang, dir, t } = useI18n();
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.style.fontFamily = lang === 'en'
      ? "'Inter', 'Vazirmatn', system-ui, sans-serif"
      : "'Vazirmatn', 'Inter', system-ui, sans-serif";
    document.title = t.site.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t.site.description);
  }, [lang, dir, t]);
  return <>{children}</>;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="واردات و صادرات تجهیزات برق صنعتی، اتوماسیون، ابزار دقیق" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0a0a0f" />
        <meta name="google-site-verification" content="" />
        <link rel="canonical" href="https://surinsf-site.task-malt-juvenile.workers.dev" />
        <link rel="alternate" href="/rss.xml" type="application/rss+xml" title="RSS" />
        <meta property="og:title" content="سورین صنعت فرزان | واردات تجهیزات برق صنعتی" />
        <meta property="og:description" content="واردات و صادرات تجهیزات برق صنعتی، اتوماسیون، ابزار دقیق" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://surinsf-site.task-malt-juvenile.workers.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="سورین صنعت فرزان" />
        <meta name="twitter:description" content="واردات و صادرات تجهیزات برق صنعتی، اتوماسیون، ابزار دقیق" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'سورین صنعت فرزان',
            alternateName: 'Surin Sanat Farzan',
            url: 'https://surinsf-site.task-malt-juvenile.workers.dev',
            logo: 'https://surinsf-site.task-malt-juvenile.workers.dev/images/p1.jpg',
            contactPoint: { '@type': 'ContactPoint', telephone: '+982122201734', contactType: 'customer service' },
            address: { '@type': 'PostalAddress', addressLocality: 'Tehran', addressCountry: 'IR' },
          }),
        }} />
      </head>
      <body className="font-sans">
        <LangProvider>
          <BodyInner>
            <ScrollRestore />
            <ThreeBackground />
            <Navbar />
            <main className="relative z-10 pt-16">{children}</main>
            <QuickContact />
            <Footer />
          </BodyInner>
        </LangProvider>
      </body>
    </html>
  );
}
