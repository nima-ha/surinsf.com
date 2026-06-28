import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

export function Navigation() {
  const { t } = useI18n();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-circ",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4",
          isScrolled
            ? "bg-white/90 dark:bg-exvia-black/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="w-full px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <span
                className={cn(
                  "text-2xl font-semibold tracking-tight transition-colors duration-500",
                  isScrolled || !isHome
                    ? "text-exvia-black dark:text-white"
                    : "text-white"
                )}
              >
                {t.nav.logo}
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-6">
                {t.nav.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={handleNavClick}
                    className={cn(
                      "text-base transition-colors duration-500 relative group",
                      isScrolled || !isHome
                        ? "text-exvia-black/80 dark:text-white/80 hover:text-exvia-black dark:hover:text-white"
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full",
                        isScrolled || !isHome
                          ? "bg-exvia-black dark:bg-white"
                          : "bg-white"
                      )}
                    />
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-8 h-6 flex flex-col justify-between"
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "w-full h-0.5 transition-all duration-500 ease-out-quad origin-center",
                  isScrolled || !isHome
                    ? "bg-exvia-black dark:bg-white"
                    : "bg-white",
                  isMenuOpen && "translate-y-[10px] rotate-[-45deg]"
                )}
              />
              <span
                className={cn(
                  "w-full h-0.5 transition-all duration-300 ease-out-quad",
                  isScrolled || !isHome
                    ? "bg-exvia-black dark:bg-white"
                    : "bg-white",
                  isMenuOpen && "scale-0 opacity-0"
                )}
              />
              <span
                className={cn(
                  "w-full h-0.5 transition-all duration-500 ease-out-quad origin-center",
                  isScrolled || !isHome
                    ? "bg-exvia-black dark:bg-white"
                    : "bg-white",
                  isMenuOpen && "-translate-y-[10px] rotate-[45deg]"
                )}
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-white dark:bg-exvia-black transition-all duration-500 ease-out-cubic lg:hidden",
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {t.nav.links.map((link, index) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={handleNavClick}
              className={cn(
                "text-3xl font-semibold text-exvia-black dark:text-white transition-all duration-500 ease-out-quart",
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{
                transitionDelay: isMenuOpen ? `${index * 80}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div
            className={cn(
              "flex items-center gap-4 mt-4 transition-all duration-500 ease-out-quart",
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: isMenuOpen ? "600ms" : "0ms" }}
          >
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
