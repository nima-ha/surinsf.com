import { useState } from "react";
import { useI18n } from "@/i18n";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const { t } = useI18n();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="pt-28 pb-20">
      <div className="container-large px-6">
        <div
          ref={titleRef}
          className={cn("text-center mb-16 anim-hidden", titleVisible && "anim-visible")}
        >
          <span className="text-xs font-geist-mono tracking-widest text-exvia-blue uppercase">
            FAQ
          </span>
          <h1 className="text-h2 mt-4 mb-6">{t.pages.faq.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.pages.faq.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {t.pages.faq.items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium">{item.question}</span>
                <ChevronDown
                  size={20}
                  className={cn(
                    "transition-transform duration-300",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  openIndex === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
