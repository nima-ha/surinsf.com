import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useI18n } from '@/i18n';

export function Testimonials() {
  const { t } = useI18n();
  const { testimonials } = t;
  if (!testimonials.heading && testimonials.items.length === 0) return null;

  const items = testimonials.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || items.length === 0) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating, items.length]);

  const nextSlide = useCallback(() => {
    if (items.length === 0) return;
    goToSlide((activeIndex + 1) % items.length);
  }, [activeIndex, goToSlide, items.length]);

  const prevSlide = useCallback(() => {
    if (items.length === 0) return;
    goToSlide((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, goToSlide, items.length]);

  useEffect(() => {
    if (items.length === 0) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, items.length]);

  if (items.length === 0) return null;

  return (
    <section id="testimonials" className="w-full py-24 lg:py-32 bg-background">
      <div ref={sectionRef} className="container-large px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          {testimonials.label && (
            <div className={cn('transition-all duration-800 ease-out-quart', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
              <span className="text-xs font-geist-mono uppercase tracking-widest text-foreground/50">{testimonials.label}</span>
            </div>
          )}
          {testimonials.heading && (
            <h2 className={cn('text-h2 font-semibold text-foreground mt-4 transition-all duration-800 ease-out-quart', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')} style={{ transitionDelay: '100ms' }}>
              {testimonials.heading}
            </h2>
          )}
        </div>

        <div className={cn('relative transition-all duration-800 ease-out-quart', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '200ms' }}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-muted rounded-lg">
              {items.map((item, index) => (
                <div key={index} className={cn('absolute inset-0 transition-all duration-1000 ease-out-cubic', index === activeIndex ? 'opacity-100 translate-y-0' : index < activeIndex ? 'opacity-0 -translate-y-full' : 'opacity-0 translate-y-full')}>
                  <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="absolute top-6 left-6">
                <div className="w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-foreground" />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn('w-5 h-5 transition-all duration-300', i < items[activeIndex].rating ? 'fill-foreground text-foreground' : 'text-border')} style={{ transitionDelay: `${i * 50}ms` }} />
                ))}
              </div>

              <div className="relative min-h-[180px]">
                {items.map((item, index) => (
                  <p key={index} className={cn('text-xl lg:text-2xl text-foreground leading-relaxed absolute inset-0 transition-all duration-700 ease-out-quart', index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none')}>
                    "{item.quote}"
                  </p>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <div className="relative min-h-[60px]">
                  {items.map((item, index) => (
                    <div key={index} className={cn('absolute inset-0 transition-all duration-500 ease-out-quart', index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none')}>
                      <p className="text-lg font-semibold text-foreground">{item.author}</p>
                      <p className="text-sm text-foreground/50 mt-1">{item.role}, {item.company}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="flex gap-2">
                  {items.map((_, index) => (
                    <button key={index} onClick={() => goToSlide(index)} className={cn('w-2 h-2 rounded-full transition-all duration-300', index === activeIndex ? 'bg-foreground w-6' : 'bg-border hover:bg-foreground/30')} aria-label={`Go to slide ${index + 1}`} />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={prevSlide} className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300" aria-label="Previous testimonial">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={nextSlide} className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300" aria-label="Next testimonial">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
