import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useI18n } from '@/i18n';
import { AnimatedButton } from '@/components/AnimatedButton';
import { ArrowRight, Mail } from 'lucide-react';

export function CTA() {
  const { t } = useI18n();
  const { cta } = t;
  if (!cta.heading && !cta.description) return null;

  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="contact" className="relative w-full py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0">
        <img src={cta.backgroundImage} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div ref={sectionRef} className="relative z-10 container-large px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {cta.tags.length > 0 && (
            <div className={cn('flex flex-wrap justify-center gap-3 mb-8 transition-all duration-800 ease-out-quart', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
              {cta.tags.map((tag, index) => (
                <span key={index} className="px-4 py-2 text-xs font-geist-mono text-white/80 border border-white/20 rounded-full">{tag}</span>
              ))}
            </div>
          )}
          {cta.heading && (
            <h2 className={cn('text-3xl lg:text-5xl font-semibold text-white leading-tight transition-all duration-800 ease-out-quart', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')} style={{ transitionDelay: '100ms' }}>
              {cta.heading}
            </h2>
          )}
          {cta.description && (
            <p className={cn('mt-6 text-lg text-white/70 max-w-xl mx-auto transition-all duration-800 ease-out-quart', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')} style={{ transitionDelay: '200ms' }}>
              {cta.description}
            </p>
          )}
          <div className={cn('flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 transition-all duration-800 ease-out-quart', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')} style={{ transitionDelay: '300ms' }}>
            {cta.buttonText && (
              <AnimatedButton href={cta.buttonHref} variant="primary" size="lg" showIcon className="bg-white text-foreground hover:bg-white/90">
                {cta.buttonText}
              </AnimatedButton>
            )}
            {cta.email && (
              <a href={`mailto:${cta.email}`} className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors group">
                <Mail className="w-4 h-4" />
                <span>{cta.email}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
