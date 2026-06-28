import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { SupportedLang, Translations } from "./types";
import { fa } from "./fa";
import { en } from "./en";

interface I18nContextType {
  lang: SupportedLang;
  t: Translations;
  setLang: (lang: SupportedLang) => void;
  toggleLang: () => void;
  dir: "rtl" | "ltr";
}

const I18nContext = createContext<I18nContextType | null>(null);

const translations: Record<SupportedLang, Translations> = { fa, en };

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<SupportedLang>("fa");

  const setLang = useCallback((l: SupportedLang) => {
    setLangState(l);
    document.documentElement.lang = l;
    document.documentElement.dir = l === "fa" ? "rtl" : "ltr";
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "fa" ? "en" : "fa");
  }, [lang, setLang]);

  const value: I18nContextType = {
    lang,
    t: translations[lang],
    setLang,
    toggleLang,
    dir: lang === "fa" ? "rtl" : "ltr",
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
