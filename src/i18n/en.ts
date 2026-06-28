import type { Translations } from "./types";

export const en: Translations = {
  site: {
    title: "Surin Sanat Farzan | Industrial Electrical Equipment",
    description:
      "Import and export of industrial electrical equipment, automation, switchboards, instrumentation, and electrical products",
  },
  nav: {
    logo: "Surin Sanat Farzan",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
    contactLabel: "Contact Us",
  },
  hero: {
    name: "Surin Sanat Farzan",
    roles: [
      "Industrial Equipment Import",
      "Electrical Products Export",
      "Industrial Automation & PLC",
      "Electrical Project Design & Execution",
    ],
    backgroundImage: "/images/hero-bg.jpg",
  },
  about: {
    label: "About Us",
    description:
      "Surin Sanat Farzan with over 7 years of experience in importing and exporting industrial electrical equipment, automation, instrumentation, and electrical products is one of the most reliable suppliers for industries in Iran and the region. Registered under number 543981 and national ID 14008464719, led by Mohsen Farzan Manesh, we provide engineering services, consulting, design, execution, and equipment supply to various industries with a team of 52 specialized personnel.",
    experienceValue: "7+",
    experienceLabel: "Years of\nExperience",
    stats: [
      { value: "52+", label: "Specialists\non Team" },
      { value: "98%", label: "Client\nSatisfaction" },
      { value: "12+", label: "Target\nCountries" },
    ],
    images: [
      { src: "/images/about-1.jpg", alt: "Industrial Electrical Equipment" },
      { src: "/images/about-2.jpg", alt: "International Shipping" },
      { src: "/images/about-3.jpg", alt: "Warehouse Storage" },
      { src: "/images/about-4.jpg", alt: "Engineering Team" },
    ],
  },
  services: {
    label: "Services",
    heading: "Our Services",
    items: [
      {
        iconName: "PenTool",
        title: "Design, Consulting & Execution",
        description:
          "Design, technical consulting, and turn-key execution of electrical and industrial automation projects using the latest global standards",
        image: "/images/service-1.jpg",
      },
      {
        iconName: "Monitor",
        title: "Monitoring & Networking",
        description:
          "Design and implementation of monitoring systems, industrial communication networks, and centralized control of production processes",
        image: "/images/service-2.jpg",
      },
      {
        iconName: "Cpu",
        title: "Parts Support",
        description:
          "Up-to-date technical proposals for legacy and obsolete parts, replacement parts supply, and specialized technical consulting",
        image: "/images/service-3.jpg",
      },
      {
        iconName: "Wrench",
        title: "Equipment Supply",
        description:
          "Import and supply of industrial electrical equipment, automation, instrumentation, and spare parts from world-renowned brands",
        image: "/images/service-4.jpg",
      },
    ],
  },
  products: {
    label: "Products",
    heading: "Products & Equipment",
    description:
      "Supply of industrial electrical equipment, automation, instrumentation, and cables from world-renowned brands",
    items: [
      {
        title: "Industrial Electrical Equipment",
        category: "Switches, Contactors, Fuses, Relays",
        year: "Electrical",
        image: "/images/portfolio-1.jpg",
        featured: true,
      },
      {
        title: "Industrial Automation",
        category: "Siemens PLC, Delta, HMI, VFD Drives",
        year: "Automation",
        image: "/images/portfolio-2.jpg",
      },
      {
        title: "Power Plant Equipment",
        category: "Diesel Generators, UPS, Transformers",
        year: "Power",
        image: "/images/portfolio-3.jpg",
      },
      {
        title: "Instrumentation",
        category: "Pressure Gauges, Thermometers, Flow Meters, Transmitters",
        year: "Instrumentation",
        image: "/images/portfolio-4.jpg",
      },
      {
        title: "Industrial Cables & Wires",
        category: "Power Cables, Instrumentation, Network",
        year: "Cables",
        image: "/images/portfolio-5.jpg",
      },
    ],
    cta: {
      label: "Work With Us",
      heading: "Contact us for pricing and expert consultation",
      linkText: "Request Quote",
      linkHref: "#contact",
    },
    viewAllLabel: "View All Products",
  },
  testimonials: {
    label: "Testimonials",
    heading: "What Our Clients Say",
    items: [
      {
        quote:
          "Working with Surin Sanat Farzan for supplying automation equipment for our projects has resulted in excellent quality and on-time delivery.",
        author: "Eng. Reza Mohammadi",
        role: "Project Manager",
        company: "Pars Electrical Industries",
        image: "/images/testimonial-1.jpg",
        rating: 5,
      },
      {
        quote:
          "Surin's professional team is very precise and timely in supplying switchboard equipment and instrumentation. Their international connections are unparalleled.",
        author: "Dr. Samira Ahmadi",
        role: "Supply Manager",
        company: "Petro Sanat Shargh",
        image: "/images/testimonial-2.jpg",
        rating: 5,
      },
      {
        quote:
          "Surin Sanat Farzan's technical consulting and parts support services have played an effective role in optimizing our production line.",
        author: "Eng. Ali Kazemi",
        role: "Technical Manager",
        company: "Western Cable Industries",
        image: "/images/testimonial-3.jpg",
        rating: 5,
      },
    ],
  },
  cta: {
    tags: ["Import", "Export", "Industrial Equipment", "Automation"],
    heading: "Contact us for pricing and expert consultation",
    description:
      "Our engineering team is ready to answer your questions and provide expert consultation on supplying industrial electrical equipment and automation.",
    buttonText: "Request Consultation",
    buttonHref: "mailto:info@surinsf.com",
    email: "info@surinsf.com",
    backgroundImage: "/images/cta-bg.jpg",
  },
  footer: {
    logo: "Surin Sanat Farzan",
    description:
      "Surin Sanat Farzan, a reliable supplier of industrial electrical equipment, automation, and instrumentation in Iran and the region",
    columns: [
      {
        title: "Quick Links",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Products", href: "/products" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Design & Consulting", href: "/services" },
          { label: "Monitoring & Network", href: "/services" },
          { label: "Parts Support", href: "/services" },
          { label: "Equipment Supply", href: "/services" },
        ],
      },
      {
        title: "Contact Info",
        links: [
          { label: "info@surinsf.com", href: "mailto:info@surinsf.com" },
          { label: "Tel: +982122201734", href: "tel:+982122201734" },
          { label: "WhatsApp: +989121234567", href: "https://wa.me/989121234567" },
          { label: "Tehran, Jannatabad Markazi", href: "#" },
        ],
      },
    ],
    socialLinks: [
      {
        iconName: "Linkedin",
        href: "https://linkedin.com/company/surinsf",
        label: "LinkedIn",
      },
      {
        iconName: "MessageCircle",
        href: "https://wa.me/989121234567",
        label: "WhatsApp",
      },
      { iconName: "Mail", href: "mailto:info@surinsf.com", label: "Email" },
      {
        iconName: "MapPin",
        href: "https://www.openstreetmap.org/?mlat=35.7605&mlon=51.3665#map=14/35.7605/51.3665",
        label: "Location",
      },
    ],
    newsletterHeading: "Newsletter",
    newsletterDescription:
      "Subscribe to receive the latest news and prices.",
    newsletterButtonText: "Subscribe",
    newsletterPlaceholder: "Enter your email",
    copyright: "© 2025 Surin Sanat Farzan. All rights reserved.",
    credit: "Designed & built with professionalism",
  },
  pages: {
    about: {
      title: "About Surin Sanat Farzan",
      subtitle: "Trusted supplier of industrial electrical equipment in Iran and the region",
      history:
        "Surin Sanat Farzan started its activities in 2017 with the goal of supplying industrial electrical and automation equipment for domestic industries. By leveraging an experienced team and connections with world-renowned brands, we have become a key supplier to the oil, gas, petrochemical, steel, and automotive industries.",
      mission:
        "Providing the highest quality industrial electrical and automation equipment at the best price and delivery time, along with expert consulting and full technical support.",
      vision:
        "To become one of the top three suppliers of industrial electrical equipment in the Middle East by 2031.",
      team: "Our expert team consists of 52 of the best engineers and specialists in the electrical and automation industry, working with passion and commitment alongside you.",
      values: [
        {
          title: "Quality",
          desc: "All our products meet the highest global standards with authenticity guarantees.",
        },
        {
          title: "Trust",
          desc: "Our success is built on client trust, earned through transparency and honesty.",
        },
        {
          title: "Expertise",
          desc: "Our engineering team provides the best solutions for your industry with the latest technical knowledge.",
        },
        {
          title: "Commitment",
          desc: "We are committed to delivery schedules, service quality, and after-sales support.",
        },
      ],
    },
    services: {
      title: "Our Services",
      subtitle:
        "Offering a complete range of engineering, consulting, supply, and execution services in industrial electrical and automation",
      process: [
        {
          title: "Consulting & Needs Assessment",
          desc: "Detailed review of project technical requirements and providing optimal solutions",
        },
        {
          title: "Technical Design",
          desc: "Design of electrical and automation systems according to global standards",
        },
        {
          title: "Equipment Supply",
          desc: "Import and supply of equipment from world-renowned brands",
        },
        {
          title: "Installation & Commissioning",
          desc: "Equipment installation and commissioning by experienced technical team",
        },
        {
          title: "Support & Maintenance",
          desc: "Providing periodic support and maintenance services",
        },
      ],
    },
    products: {
      title: "Products & Equipment",
      subtitle:
        "Supply of industrial electrical equipment, automation, instrumentation, and cables from world-renowned brands",
    },
    blog: {
      title: "Technical Blog",
      subtitle:
        "Latest articles, news, and educational content on industrial electrical and automation",
      readMore: "Read More",
    },
    contact: {
      title: "Contact Us",
      subtitle:
        "Get in touch for quotes, expert consultation, and collaboration",
      form: {
        name: "Full Name",
        email: "Email",
        phone: "Phone Number",
        message: "Your Message",
        submit: "Send Message",
        success:
          "Your message has been sent successfully. Our team will contact you shortly.",
      },
      info: {
        address: "Tehran, Jannatabad Markazi, Golestan Street",
        phone: "+982122201734",
        email: "info@surinsf.com",
        workingHours:
          "Sat-Wed 8:00-17:00 | Thu 8:00-13:00",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to the most common questions about our services and products",
      items: [
        {
          question: "Do your products come with authenticity guarantees?",
          answer:
            "Yes, all products supplied by Surin Sanat Farzan come with authenticity guarantees and valid warranties. We source directly from official representatives of world-renowned brands.",
        },
        {
          question: "What is the delivery time for orders?",
          answer:
            "Delivery time depends on the product type and country of origin. In-stock items from our Tehran warehouse are delivered within 1-3 business days, while import orders take 2-6 weeks.",
        },
        {
          question: "Do you offer technical consulting services?",
          answer:
            "Yes, our engineering team provides free technical consulting to help you select the right equipment for your project. Just contact us.",
        },
        {
          question: "What payment methods are available?",
          answer:
            "Payment can be made via bank transfer, check, and for large projects, on credit with a formal contract.",
        },
        {
          question: "Is there a return policy?",
          answer:
            "In case of technical discrepancy or manufacturing defect, products can be returned or exchanged. Exact return conditions are stated in the product warranty.",
        },
        {
          question: "Which brands do you represent?",
          answer:
            "We work directly with world-renowned brands including Siemens, Schneider Electric, ABB, Delta, Omron, Seko Fox, and many others.",
        },
      ],
    },
    notFound: {
      title: "Page Not Found",
      description: "Sorry, the page you are looking for does not exist.",
      button: "Back to Home",
    },
  },
  common: {
    languageSwitch: "فارسی",
    themeToggle: "Toggle Theme",
    loading: "Loading...",
    home: "Home",
    about: "About",
    services: "Services",
    products: "Products",
    blog: "Blog",
    contact: "Contact",
    faq: "FAQ",
  },
};
