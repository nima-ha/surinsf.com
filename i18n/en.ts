import type { T } from './types';

export const en: T = {
  site: { title: 'Surin Sanat Farzan | Industrial Electrical Equipment', description: 'Import and export of industrial electrical equipment, automation, instrumentation' },
  nav: {
    logo: 'Surin Sanat Farzan',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Products', href: '/products' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
    ],
    contactLabel: 'Contact Us',
  },
  hero: {
    name: 'Surin Sanat Farzan',
    subtitle: 'Trusted supplier of industrial electrical equipment, automation and instrumentation in Iran and the region',
    cta: 'Free Consultation',
  },
  about: {
    label: 'About Us',
    title: 'Leading Industrial Equipment Supplier',
    description: 'Surin Sanat Farzan with over 7 years of experience in importing and exporting industrial electrical equipment, automation, instrumentation and electrical products is one of the most reliable suppliers in Iran and the region. With a team of 52 specialists, we provide engineering, consulting, design, execution and equipment supply services.',
    images: ['/images/about/office.jpg', '/images/about/team.jpg', '/images/about/warehouse.jpg', '/images/about/project.jpg'],
    stats: [
      { value: '7+', label: 'Years Experience' },
      { value: '52+', label: 'Specialists' },
      { value: '98%', label: 'Satisfaction' },
      { value: '12+', label: 'Target Countries' },
    ],
  },
  services: {
    label: 'Services',
    title: 'Engineering Expertise',
    items: [
      { icon: 'PenTool', title: 'Design, Consulting & Execution', desc: 'End-to-end design, technical consulting and execution of electrical and industrial automation projects using the latest global standards' },
      { icon: 'Monitor', title: 'Monitoring & Networking', desc: 'Design and implementation of monitoring systems, industrial communication networks and centralized production control' },
      { icon: 'Cpu', title: 'Parts Support', desc: 'Technical proposals for legacy parts, replacement supply and specialized technical consulting' },
      { icon: 'Wrench', title: 'Equipment Supply', desc: 'Import and supply of industrial electrical equipment, automation, instrumentation and spare parts from world-renowned brands' },
    ],
  },
  products: {
    label: 'Products',
    title: 'Products & Equipment',
    desc: 'Supply of industrial electrical equipment, automation, instrumentation and cables from world-renowned brands',
    items: [
      { slug: 'electrical-equipment', title: 'Electrical Equipment', cat: 'Switches, Contactors, Fuses, Relays', img: '/images/p1.jpg', desc_detail: 'Industrial electrical equipment from world-renowned brands including circuit breakers, contactors, fuses, protection relays, current and voltage transformers. All products comply with IEC and NEMA standards and come with valid warranties.' },
      { slug: 'industrial-automation', title: 'Industrial Automation', cat: 'Siemens PLC, Delta, HMI, VFD Drives', img: '/images/p2.jpg', desc_detail: 'Supply and support of Siemens S7-1200 and S7-1500 PLCs, Delta DVP series PLCs, HMIs, Variable Frequency Drives (VFD), and related software. Programming and commissioning services available.' },
      { slug: 'power-plant', title: 'Power Plant Equipment', cat: 'Generators, UPS, Transformers', img: '/images/p3.jpg', desc_detail: 'Power plant and industrial electrical equipment including standby diesel generators, UPS systems, distribution and power transformers, and LV/HV switchgear.' },
      { slug: 'instrumentation', title: 'Instrumentation', cat: 'Pressure, Temperature, Flow Meters', img: '/images/p4.jpg', desc_detail: 'Instrumentation equipment including pressure and temperature transmitters, industrial flow meters, level sensors, gas analyzers, and precision calibrators from leading global brands.' },
      { slug: 'industrial-cables', title: 'Industrial Cables', cat: 'Power, Instrumentation, Network Cables', img: '/images/p5.jpg', desc_detail: 'Low and medium voltage power cables, instrumentation cables, industrial network cables, and fiber optic cables compliant with international standards.' },
      { slug: 'switchboards', title: 'Switchboards', cat: 'LV & MV Switchboards, Control Panels', img: '/images/p6.jpg', desc_detail: 'Design and manufacturing of LV and MV switchboards, control and monitoring panels, power distribution boards, and MCC panels according to IEC standards with highest quality.' },
    ],
    cta: 'View All Products',
  },
  testimonials: {
    label: 'Testimonials',
    title: 'What Our Clients Say',
    items: [
      { quote: 'Working with Surin Sanat Farzan for automation equipment supply has resulted in excellent quality and on-time delivery.', author: 'Eng. Reza Mohammadi', role: 'Project Manager', company: 'Pars Electrical Industries' },
      { quote: 'Their professional team is very precise and timely in supplying switchboard equipment and instrumentation.', author: 'Dr. Samira Ahmadi', role: 'Supply Manager', company: 'Petro Sanat Shargh' },
      { quote: 'Their technical consulting and parts support services have played an effective role in optimizing our production line.', author: 'Eng. Ali Kazemi', role: 'Technical Manager', company: 'Western Cable Industries' },
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Get In Touch',
    subtitle: 'For quotes, expert consultation and collaboration',
    form: { name: 'Full Name', email: 'Email', phone: 'Phone Number', message: 'Your Message', submit: 'Send Message', success: 'Your message has been sent successfully.' },
    info: { address: 'Tehran, Jannatabad Markazi', phone: '+982122201734', email: 'info@surinsf.com', hours: 'Sat-Wed 8-17 | Thu 8-13' },
  },
  faq: {
    label: 'FAQ',
    title: 'Frequently Asked Questions',
    items: [
      { q: 'Do your products have authenticity guarantees?', a: 'Yes, all products come with authenticity guarantees and valid warranties from official representatives.' },
      { q: 'What is the delivery time?', a: 'In-stock items: 1-3 days. Import orders: 2-6 weeks.' },
      { q: 'Do you offer free technical consulting?', a: 'Yes, our engineering team provides free technical consulting for your project needs.' },
      { q: 'What payment methods are available?', a: 'Bank transfer, check, and credit terms for large projects with formal contracts.' },
      { q: 'Which brands do you represent?', a: 'Siemens, Schneider Electric, ABB, Delta, Omron and many others.' },
    ],
  },
  blog: {
    label: 'Blog',
    title: 'Latest Articles',
    desc: 'Expert articles on industrial electrical, automation and instrumentation',
    articles: [
      { slug: 'plc-selection-guide', title: 'Complete Guide to Industrial PLC Selection', excerpt: 'Review of available PLCs and key selection criteria for your production line', content: 'Choosing the right PLC is one of the most critical decisions in industrial automation projects. This article reviews available PLCs from leading brands including Siemens, Delta, ABB and Omron.\n\nKey selection factors include I/O count, communication protocols, environmental conditions, and project budget. Siemens S7-1200 series suits small to medium projects while S7-1500 handles large-scale applications.\n\nDelta Electronics offers cost-effective DVP series PLCs with advanced capabilities. Contact our engineering team for final selection guidance.', date: '2025-06-05', cat: 'Automation', img: '/images/blog/plc.jpg' },
      { slug: 'industrial-iot', title: 'Industrial IoT and Smart Manufacturing', excerpt: 'Digital transformation combining traditional automation with IIoT technologies', content: 'Industry 4.0 combines traditional industrial automation with the Internet of Things (IoT) to create smart manufacturing environments. IIoT (Industrial Internet of Things) connects machinery, sensors and control systems via network infrastructure.\n\nBenefits include real-time production monitoring, predictive maintenance, energy optimization, and improved Overall Equipment Effectiveness (OEE).\n\nSurin Sanat Farzan provides comprehensive IIoT solutions from consulting to implementation.', date: '2025-05-20', cat: 'Technology', img: '/images/blog/iot.jpg' },
      { slug: 'electrical-standards-en', title: 'International Electrical Equipment Standards', excerpt: 'Overview of IEC, NEMA and ISO standards for industrial electrical equipment', content: 'Compliance with international standards ensures quality, safety and reliability in electrical equipment. The most important standards in industrial electrical engineering include:\n\nIEC standards published by the International Electrotechnical Commission are the most common in Europe and Asia. NEMA standards from North America have differences from IEC counterparts.\n\nISO 9001 for quality management and ISO 14001 for environmental management are also widely applied. Choosing standard-compliant equipment represents a long-term investment for industries.', date: '2025-04-10', cat: 'Standards', img: '/images/blog/standards.jpg' },
    ],
  },
  footer: {
    desc: 'Surin Sanat Farzan, a reliable supplier of industrial electrical equipment, automation and instrumentation in Iran and the region',
    rights: '© 2025 Surin Sanat Farzan. All rights reserved.',
  },
  notFound: { title: 'Page Not Found', desc: 'Sorry, the page you are looking for does not exist.' },
  common: { langSwitch: 'فارسی', loading: 'Loading...', home: 'Home', about: 'About', services: 'Services', products: 'Products', blog: 'Blog', contact: 'Contact', faq: 'FAQ' },
};
