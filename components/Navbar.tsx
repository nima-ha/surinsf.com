'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/i18n';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { t, lang, toggleLang } = useI18n();
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-white hover:text-brand-400 transition-colors">
          {t.nav.logo}
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {t.nav.links.slice(0, 5).map(l => (
            <Link key={l.href} href={l.href} className={`text-sm transition-colors hover:text-brand-400 ${pathname === l.href ? 'text-brand-400' : 'text-white/70'}`}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button onClick={toggleLang} className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-all">
            {t.common.langSwitch}
          </button>
          <Link href="/contact" className="hidden md:inline-flex px-5 py-2 text-sm font-medium bg-brand-700 hover:bg-brand-600 text-white rounded-full transition-all">
            {t.nav.contactLabel}
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white/70 hover:text-white transition-colors" aria-label="Menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </>
              ) : (
                <>
                  <line x1="3" y1="5" x2="17" y2="5" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="15" x2="17" y2="15" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 glass">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
            {t.nav.links.map(l => (
              <Link key={l.href} href={l.href} className={`px-4 py-3 rounded-xl text-sm transition-all ${pathname === l.href ? 'text-brand-400 bg-brand-700/10' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 px-5 py-3 text-sm font-medium bg-brand-700 hover:bg-brand-600 text-white rounded-xl text-center transition-all">
              {t.nav.contactLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
