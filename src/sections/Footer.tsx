import { type ElementType } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowUpRight } from 'lucide-react';
import { useI18n } from '@/i18n';
import * as LucideIcons from 'lucide-react';

function getIcon(iconName: string): ElementType {
  const icons = LucideIcons as unknown as Record<string, ElementType>;
  return icons[iconName] || LucideIcons.Circle;
}

export function Footer() {
  const { t } = useI18n();
  const { footer } = t;
  if (!footer.logo && footer.columns.length === 0 && footer.socialLinks.length === 0) return null;

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <footer ref={ref} className="w-full bg-foreground text-background py-16 lg:py-24">
      <div className="container-large px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className={cn('lg:col-span-4 space-y-6 transition-all duration-800 ease-out-quart', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')}>
            {footer.logo && (
              <Link to="/" className="inline-block">
                <span className="text-2xl font-semibold tracking-tight">{footer.logo}</span>
              </Link>
            )}
            {footer.description && <p className="text-sm text-background/60 max-w-xs leading-relaxed">{footer.description}</p>}
            {footer.socialLinks.length > 0 && (
              <div className="flex gap-3 pt-2">
                {footer.socialLinks.map((social) => {
                  const Icon = getIcon(social.iconName);
                  return (
                    <a key={social.label} href={social.href} className="w-10 h-10 border border-background/20 rounded-full flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-300" aria-label={social.label}>
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {footer.columns.map((column, colIndex) => (
            <div key={column.title} className={cn('lg:col-span-2 transition-all duration-800 ease-out-quart', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')} style={{ transitionDelay: `${(colIndex + 1) * 100}ms` }}>
              <h4 className="text-xs font-geist-mono uppercase tracking-widest text-background/40 mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-background/70 hover:text-background transition-colors inline-flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {footer.newsletterHeading && (
            <div className={cn('lg:col-span-2 transition-all duration-800 ease-out-quart', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')} style={{ transitionDelay: '400ms' }}>
              <h4 className="text-xs font-geist-mono uppercase tracking-widest text-background/40 mb-4">{footer.newsletterHeading}</h4>
              {footer.newsletterDescription && <p className="text-sm text-background/60 mb-4">{footer.newsletterDescription}</p>}
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder={footer.newsletterPlaceholder || "your@email.com"} className="w-full px-4 py-3 bg-background/5 border border-background/10 rounded-lg text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-background/30 transition-colors" />
                {footer.newsletterButtonText && (
                  <button type="submit" className="w-full px-4 py-3 bg-background text-foreground text-sm font-medium rounded-lg hover:bg-background/90 transition-colors">
                    {footer.newsletterButtonText}
                  </button>
                )}
              </form>
            </div>
          )}
        </div>

        {(footer.copyright || footer.credit) && (
          <div className={cn('mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-800 ease-out-quart', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')} style={{ transitionDelay: '500ms' }}>
            {footer.copyright && <p className="text-xs text-background/40">{footer.copyright}</p>}
            {footer.credit && <p className="text-xs text-background/40">{footer.credit}</p>}
          </div>
        )}
      </div>
    </footer>
  );
}
