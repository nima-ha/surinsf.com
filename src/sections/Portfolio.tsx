import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { ArrowUpRight } from 'lucide-react';
import { useI18n } from '@/i18n';
import { Link } from 'react-router-dom';

function ProjectCard({ project, index, isVisible }: { project: { title: string; category: string; year: string; image: string; featured?: boolean }; index: number; isVisible: boolean }) {
  return (
    <div className={cn('group cursor-pointer transition-all duration-700 ease-out-quart', project.featured ? 'lg:col-span-2' : '', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="relative overflow-hidden bg-muted">
        <div className={cn('aspect-[4/3]', project.featured && 'lg:aspect-[16/9]')}>
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 ease-out-cubic group-hover:scale-105" />
        </div>
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1.5 text-xs font-geist-mono bg-background/90 backdrop-blur-sm rounded-full text-foreground">{project.year}</span>
        </div>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-foreground" />
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors">{project.title}</h3>
        <p className="text-sm text-foreground/50">{project.category}</p>
      </div>
    </div>
  );
}

export function Portfolio() {
  const { t } = useI18n();
  const { products } = t;
  if (!products.heading && products.items.length === 0) return null;

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef: gridRef, visibleItems } = useStaggerAnimation(products.items.length + 1, 120);

  return (
    <section id="portfolio" className="w-full py-24 lg:py-32 bg-muted/30">
      <div className="container-large px-6 lg:px-12">
        <div ref={headerRef} className="max-w-3xl mb-16">
          {products.label && (
            <div className={cn('transition-all duration-800 ease-out-quart', headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
              <span className="text-xs font-geist-mono uppercase tracking-widest text-foreground/50">{products.label}</span>
            </div>
          )}
          {products.heading && (
            <h2 className={cn('text-h2 font-semibold text-foreground mt-4 transition-all duration-800 ease-out-quart', headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')} style={{ transitionDelay: '100ms' }}>
              {products.heading}
            </h2>
          )}
          {products.description && (
            <p className={cn('mt-6 text-lg text-foreground/60 leading-relaxed transition-all duration-800 ease-out-quart', headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')} style={{ transitionDelay: '200ms' }}>
              {products.description}
            </p>
          )}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.items[0] && (
            <div className="lg:col-span-2 md:col-span-1">
              <ProjectCard project={products.items[0]} index={0} isVisible={visibleItems[0]} />
            </div>
          )}
          {products.items[1] && <ProjectCard project={products.items[1]} index={1} isVisible={visibleItems[1]} />}
          {products.items[2] && <ProjectCard project={products.items[2]} index={2} isVisible={visibleItems[2]} />}
          {products.items[3] && <ProjectCard project={products.items[3]} index={3} isVisible={visibleItems[3]} />}

          {products.cta.heading && (
            <div className={cn('relative overflow-hidden bg-foreground rounded-lg p-8 flex flex-col justify-between transition-all duration-700 ease-out-quart aspect-[4/3]', visibleItems[products.items.length] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '400ms' }}>
              <div>
                {products.cta.label && <span className="text-xs font-geist-mono uppercase tracking-widest text-white/50">{products.cta.label}</span>}
                <h3 className="text-2xl font-semibold text-white mt-3 leading-tight">{products.cta.heading}</h3>
              </div>
              {products.cta.linkText && (
                <Link to={products.cta.linkHref || '#contact'} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer group">
                  <span className="text-sm font-medium">{products.cta.linkText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              )}
              <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/5" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
            </div>
          )}

          {products.items[4] && (
            <div className="lg:col-span-3 md:col-span-2">
              <ProjectCard project={products.items[4]} index={5} isVisible={visibleItems[4]} />
            </div>
          )}
        </div>

        {products.viewAllLabel && (
          <div className={cn('mt-16 text-center transition-all duration-800 ease-out-quart', visibleItems[products.items.length] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')} style={{ transitionDelay: '600ms' }}>
            <Link to="/products" className="group inline-flex items-center gap-2 text-sm font-geist-mono text-foreground hover:text-foreground/70 transition-colors">
              <span>{products.viewAllLabel}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
