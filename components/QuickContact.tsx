'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, Phone, ChevronUp } from 'lucide-react';

export default function QuickContact() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3" dir="ltr">
      <a
        href="https://wa.me/989121234567"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a
        href="tel:+982122201734"
        className="w-14 h-14 rounded-full bg-brand-700 hover:bg-brand-600 text-white flex items-center justify-center shadow-lg shadow-brand-700/30 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Phone"
      >
        <Phone size={20} />
      </a>
      {showScroll && (
        <button
          onClick={scrollTop}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white/60 flex items-center justify-center backdrop-blur-sm transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp size={18} />
        </button>
      )}
    </div>
  );
}
