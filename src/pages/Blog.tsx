import { useI18n } from "@/i18n";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const articles = [
  {
    title: "راهنمای جامع انتخاب PLC صنعتی",
    excerpt: "در این مقاله به بررسی انواع PLCهای موجود در بازار و نکات مهم در انتخاب مناسب‌ترین گزینه برای صنعت خود می‌پردازیم.",
    date: "۱۴۰۴/۰۳/۱۵",
    category: "اتوماسیون",
  },
  {
    title: "اتوماسیون صنعتی و اینترنت اشیاء (IIoT)",
    excerpt: "تحول دیجیتال در صنعت با ترکیب اتوماسیون سنتی و فناوری‌های نوین اینترنت اشیاء صنعتی.",
    date: "۱۴۰۴/۰۲/۲۰",
    category: "فناوری",
  },
  {
    title: "استانداردهای بین‌المللی تجهیزات برق صنعتی",
    excerpt: "آشنایی با مهم‌ترین استانداردهای IEC، NEMA و ISO در حوزه تجهیزات برق صنعتی و تابلو برق.",
    date: "۱۴۰۴/۰۱/۱۰",
    category: "استانداردها",
  },
];

export default function Blog() {
  const { t } = useI18n();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <main className="pt-28 pb-20">
      <div className="container-large px-6">
        <div
          ref={titleRef}
          className={cn("text-center mb-16 anim-hidden", titleVisible && "anim-visible")}
        >
          <span className="text-xs font-geist-mono tracking-widest text-exvia-blue uppercase">
            Blog
          </span>
          <h1 className="text-h2 mt-4 mb-6">{t.pages.blog.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.pages.blog.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <article
              key={i}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-exvia-blue/10 to-muted" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-geist-mono text-exvia-blue uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-exvia-blue transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
