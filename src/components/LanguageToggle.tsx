import { useI18n } from "@/i18n";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { toggleLang, t } = useI18n();

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border border-border hover:bg-exvia-subtle dark:hover:bg-exvia-base-black transition-colors"
      aria-label="Toggle language"
    >
      <Languages size={16} />
      <span>{t.common.languageSwitch}</span>
    </button>
  );
}
