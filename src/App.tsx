import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { I18nProvider } from "@/i18n";
import { Navigation } from "@/components/Navigation";
import { PageOverlay } from "@/components/PageOverlay";
import { Footer } from "@/sections/Footer";
import { usePageLoad } from "@/hooks/usePageLoad";
import Home from "@/pages/Home";
import AboutPage from "@/pages/About";
import ServicesPage from "@/pages/Services";
import ProductsPage from "@/pages/Products";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import NotFound from "@/pages/NotFound";

function AppContent() {
  const { showOverlay } = usePageLoad(500);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageOverlay isVisible={showOverlay} />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <I18nProvider>
          <AppContent />
        </I18nProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
