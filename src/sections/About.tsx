import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { useI18n } from '@/i18n';

export function About() {
  const { t } = useI18n();
  const { about } = t;
  if (!about.description && about.stats.length === 0 && about.images.length === 0) return null;

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef: imagesRef, visibleItems } = useStaggerAnimation(about.images.length || 4, 150);

  return (
    <section id="about" className="w-full py-24 lg:py-32 bg-background">
      <div className="container-large px-6 lg:px-12">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-8">
            {about.label && (
              <div className={cn('transition-all duration-800 ease-out-quart', sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
                <span className="text-xs font-geist-mono uppercase tracking-widest text-foreground/50">{about.label}</span>
              </div>
            )}
            {about.description && (
              <div className={cn('transition-all duration-800 ease-out-quart', sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')} style={{ transitionDelay: '100ms' }}>
                <p className="text-xl lg:text-2xl text-foreground leading-relaxed">{about.description}</p>
              </div>
            )}
            {about.experienceValue && (
              <div className={cn('flex items-end gap-3 pt-4 transition-all duration-800 ease-out-quart', sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')} style={{ transitionDelay: '200ms' }}>
                <span className="text-7xl lg:text-8xl font-black text-foreground leading-none">{about.experienceValue}</span>
                {about.experienceLabel && <span className="text-sm text-foreground/60 pb-3">{about.experienceLabel}</span>}
              </div>
            )}
            {about.stats.length > 0 && (
              <div className={cn('grid grid-cols-3 gap-8 pt-8 border-t border-border transition-all duration-800 ease-out-quart', sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')} style={{ transitionDelay: '300ms' }}>
                {about.stats.map((stat, index) => (
                  <div key={index}>
                    <span className="block text-3xl font-semibold text-foreground">{stat.value}</span>
                    <span className="text-sm text-foreground/60">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {about.images.length > 0 && (
            <div ref={imagesRef} className="grid grid-cols-2 gap-4">
              {about.images.map((image, index) => (
                <div key={index} className={cn('relative overflow-hidden transition-all duration-700 ease-out-quart', index % 2 === 1 ? 'mt-8' : '', visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
                  <div className="aspect-[4/5] relative group cursor-pointer">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 ease-out-quad group-hover:scale-105" />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
