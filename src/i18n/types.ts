export type SupportedLang = "fa" | "en";

export interface NavLink {
  label: string;
  href: string;
}

export interface Translations {
  site: {
    title: string;
    description: string;
  };
  nav: {
    logo: string;
    links: NavLink[];
    contactLabel: string;
  };
  hero: {
    name: string;
    roles: string[];
    backgroundImage: string;
  };
  about: {
    label: string;
    description: string;
    experienceValue: string;
    experienceLabel: string;
    stats: { value: string; label: string }[];
    images: { src: string; alt: string }[];
  };
  services: {
    label: string;
    heading: string;
    items: {
      iconName: string;
      title: string;
      description: string;
      image: string;
    }[];
  };
  products: {
    label: string;
    heading: string;
    description: string;
    items: {
      title: string;
      category: string;
      year: string;
      image: string;
      featured?: boolean;
    }[];
    cta: {
      label: string;
      heading: string;
      linkText: string;
      linkHref: string;
    };
    viewAllLabel: string;
  };
  testimonials: {
    label: string;
    heading: string;
    items: {
      quote: string;
      author: string;
      role: string;
      company: string;
      image: string;
      rating: number;
    }[];
  };
  cta: {
    tags: string[];
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    email: string;
    backgroundImage: string;
  };
  footer: {
    logo: string;
    description: string;
    columns: {
      title: string;
      links: { label: string; href: string }[];
    }[];
    socialLinks: { iconName: string; href: string; label: string }[];
    newsletterHeading: string;
    newsletterDescription: string;
    newsletterButtonText: string;
    newsletterPlaceholder: string;
    copyright: string;
    credit: string;
  };
  pages: {
    about: {
      title: string;
      subtitle: string;
      history: string;
      mission: string;
      vision: string;
      team: string;
      values: { title: string; desc: string }[];
    };
    services: {
      title: string;
      subtitle: string;
      process: { title: string; desc: string }[];
    };
    products: {
      title: string;
      subtitle: string;
    };
    blog: {
      title: string;
      subtitle: string;
      readMore: string;
    };
    contact: {
      title: string;
      subtitle: string;
      form: {
        name: string;
        email: string;
        phone: string;
        message: string;
        submit: string;
        success: string;
      };
      info: {
        address: string;
        phone: string;
        email: string;
        workingHours: string;
      };
    };
    faq: {
      title: string;
      subtitle: string;
      items: { question: string; answer: string }[];
    };
    notFound: {
      title: string;
      description: string;
      button: string;
    };
  };
  common: {
    languageSwitch: string;
    themeToggle: string;
    loading: string;
    home: string;
    about: string;
    services: string;
    products: string;
    blog: string;
    contact: string;
    faq: string;
  };
}
