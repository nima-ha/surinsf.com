'use client';

import { useState, useRef } from 'react';
import { useI18n } from '@/i18n';
import ScrollReveal from '@/components/ScrollReveal';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const message = data.get('message') as string;
    const phone = data.get('phone') as string;

    const subject = encodeURIComponent(`تماس از سایت - ${name}`);
    const body = encodeURIComponent(
      `نام: ${name}\nایمیل: ${email}\nتلفن: ${phone}\n\nپیام:\n${message}`
    );
    window.open(`mailto:info@surinsf.com?subject=${subject}&body=${body}`, '_blank');
    setSent(true);
  }

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest text-brand-400 uppercase">{t.contact.label}</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3">{t.contact.title}</h1>
            <p className="text-white/50 mt-4">{t.contact.subtitle}</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              {[
                { icon: MapPin, label: t.contact.info.address },
                { icon: Phone, label: t.contact.info.phone, href: 'tel:+982122201734' },
                { icon: Mail, label: t.contact.info.email, href: 'mailto:info@surinsf.com' },
                { icon: Clock, label: t.contact.info.hours },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-700/20 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-brand-400" />
                  </div>
                  <div>
                    {item.href ? (
                      <a href={item.href} className="text-white/70 hover:text-brand-400 transition-colors" dir="ltr">{item.label}</a>
                    ) : (
                      <p className="text-white/70" dir={i === 0 ? undefined : 'ltr'}>{item.label}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            {sent ? (
              <div className="glass p-8 rounded-2xl text-center flex flex-col items-center gap-4">
                <CheckCircle size={48} className="text-green-400" />
                <p className="text-lg text-brand-400">{t.contact.form.success}</p>
                <p className="text-sm text-white/50">ایمیل شما در برنامه ایمیل باز خواهد شد.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder={t.contact.form.name} className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-brand-500 transition-colors" required />
                <input type="email" name="email" placeholder={t.contact.form.email} className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-brand-500 transition-colors" required />
                <input type="tel" name="phone" placeholder={t.contact.form.phone} className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-brand-500 transition-colors" />
                <textarea name="message" placeholder={t.contact.form.message} rows={4} className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-brand-500 transition-colors resize-none" required />
                <button type="submit" className="w-full px-8 py-3.5 bg-brand-700 hover:bg-brand-600 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2">
                  <Send size={16} /> {t.contact.form.submit}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
