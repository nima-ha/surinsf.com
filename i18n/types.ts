export type Lang = "fa" | "en";

export interface T {
  site: { title: string; description: string };
  nav: { logo: string; links: { label: string; href: string }[]; contactLabel: string };
  hero: { name: string; subtitle: string; cta: string };
  about: { label: string; title: string; description: string; images: string[]; stats: { value: string; label: string }[] };
  services: { label: string; title: string; items: { icon: string; title: string; desc: string }[] };
  products: { label: string; title: string; desc: string; items: { title: string; cat: string; img: string; slug: string; desc_detail: string }[]; cta: string };
  testimonials: { label: string; title: string; items: { quote: string; author: string; role: string; company: string }[] };
  contact: { label: string; title: string; subtitle: string; form: { name: string; email: string; phone: string; message: string; submit: string; success: string }; info: { address: string; phone: string; email: string; hours: string } };
  faq: { label: string; title: string; items: { q: string; a: string }[] };
  blog: { label: string; title: string; desc: string; articles: { title: string; excerpt: string; content: string; date: string; cat: string; img: string; slug: string }[] };
  footer: { desc: string; rights: string };
  notFound: { title: string; desc: string };
  common: { langSwitch: string; loading: string; home: string; about: string; services: string; products: string; blog: string; contact: string; faq: string };
}
