'use client';

import Link from 'next/link';
import { useI18n } from '@/i18n';
import { Linkedin, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative z-10 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-3">{t.nav.logo}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{t.footer.desc}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 text-white/70">{t.common.services}</h4>
            <div className="flex flex-col gap-2">
              {t.services.items.map(s => (
                <Link key={s.title} href="/services" className="text-sm text-white/40 hover:text-brand-400 transition-colors">{s.title}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 text-white/70">{t.common.contact}</h4>
              <div className="flex flex-col gap-2 text-sm text-white/40">
                <div className="flex items-center gap-2"><MapPin size={14} /> {t.contact.info.address}</div>
                <a href="tel:+982122201734" className="flex items-center gap-2 hover:text-brand-400 transition-colors" dir="ltr"><Phone size={14} /> {t.contact.info.phone}</a>
                <a href="mailto:info@surinsf.com" className="flex items-center gap-2 hover:text-brand-400 transition-colors" dir="ltr"><Mail size={14} /> {t.contact.info.email}</a>
              <div className="flex items-center gap-1 mt-2">
                <a href="https://linkedin.com/company/surinsf" className="p-2 rounded-full hover:bg-white/10 transition-colors"><Linkedin size={16} /></a>
                <a href="https://wa.me/989121234567" className="p-2 rounded-full hover:bg-white/10 transition-colors"><MessageCircle size={16} /></a>
                <a href="mailto:info@surinsf.com" className="p-2 rounded-full hover:bg-white/10 transition-colors"><Mail size={16} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-white/5 text-center text-xs text-white/30">{t.footer.rights}</div>
      </div>
    </footer>
  );
}
