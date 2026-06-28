'use client';

import Link from 'next/link';
import { useI18n } from '@/i18n';

export default function NotFound() {
  const { t } = useI18n();
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl font-black gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold mb-4">{t.notFound.title}</h1>
        <p className="text-white/50 mb-8">{t.notFound.desc}</p>
        <Link href="/" className="inline-flex px-8 py-3.5 bg-brand-700 hover:bg-brand-600 text-white rounded-full font-medium transition-all">
          {t.common.home}
        </Link>
      </div>
    </div>
  );
}
