import { useI18n } from "@/i18n";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export default function ProductsPage() {
  const { t } = useI18n();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <main className="pt-28 pb-20">
      <div className="container-large px-6">
        <div
          ref={titleRef}
          className={cn(
            "text-center mb-16 anim-hidden",
            titleVisible && "anim-visible"
          )}
        >
          <span className="text-xs font-geist-mono tracking-widest text-exvia-blue uppercase">
            {t.products.label}
          </span>
          <h1 className="text-h2 mt-4 mb-6">{t.pages.products.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.pages.products.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.products.items.map((product, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-exvia-subtle to-muted flex items-center justify-center">
                <span className="text-4xl font-bold text-muted-foreground/20">
                  {product.year}
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs font-geist-mono text-exvia-blue uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-lg font-semibold mt-1">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
