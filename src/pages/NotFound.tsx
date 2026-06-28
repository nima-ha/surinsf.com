import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-exvia-blue mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">{t.pages.notFound.title}</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          {t.pages.notFound.description}
        </p>
        <Link
          to="/"
          className="inline-flex px-8 py-3 bg-exvia-black text-white rounded-lg hover:bg-exvia-base-black transition-colors"
        >
          {t.pages.notFound.button}
        </Link>
      </div>
    </main>
  );
}
