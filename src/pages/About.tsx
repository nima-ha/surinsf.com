import { useI18n } from "@/i18n";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const { t } = useI18n();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const { pages } = t;
  const { about } = pages;

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
            {t.about.label}
          </span>
          <h1 className="text-h2 mt-4 mb-6">{about.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {about.subtitle}
          </p>
        </div>

        <div
          ref={contentRef}
          className={cn(
            "grid md:grid-cols-2 gap-12 items-start anim-hidden",
            contentVisible && "anim-visible"
          )}
        >
          <div>
            <h2 className="text-h4 mb-4">تاریخچه</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {about.history}
            </p>
            <h2 className="text-h4 mb-4">ماموریت</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {about.mission}
            </p>
            <h2 className="text-h4 mb-4">چشم‌انداز</h2>
            <p className="text-muted-foreground leading-relaxed">
              {about.vision}
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {about.values.map((value, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-border bg-card"
                >
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
            <h2 className="text-h4 mb-4">تیم ما</h2>
            <p className="text-muted-foreground leading-relaxed">
              {about.team}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
