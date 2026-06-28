import { useI18n } from "@/i18n";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { PenTool, Monitor, Cpu, Wrench } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  PenTool: <PenTool size={32} />,
  Monitor: <Monitor size={32} />,
  Cpu: <Cpu size={32} />,
  Wrench: <Wrench size={32} />,
};

export default function ServicesPage() {
  const { t } = useI18n();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();

  const { pages, services } = t;

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
            {services.label}
          </span>
          <h1 className="text-h2 mt-4 mb-6">{pages.services.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {pages.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {services.items.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 text-exvia-blue">{icons[item.iconName] || <PenTool size={32} />}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          ref={processRef}
          className={cn("anim-hidden", processVisible && "anim-visible")}
        >
          <h2 className="text-h3 text-center mb-12">فرآیند کاری ما</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {pages.services.process.map((step, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl border border-border bg-card"
              >
                <div className="w-10 h-10 rounded-full bg-exvia-blue text-white flex items-center justify-center mx-auto mb-3 font-bold">
                  {i + 1}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
