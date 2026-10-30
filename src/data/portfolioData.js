/**
 * =========================================================================
 * PORTFOLIO & SERVICE CONFIGURATION
 * =========================================================================
 * 
 * You can edit all your personal details, services, sample projects, pricing,
 * contact details, and social links right here in this single file.
 */

export const personalInfo = {
  // Brand name displayed in navbar and footer
  brandName: "AlexMorgan",
  brandExtension: ".dev", // styled with primary color
  fullName: "Alex Morgan",
  title: "Freelance Web Developer & UI Specialist",
  tagline: "Helping small businesses, startups, and individuals build high-converting, professional websites.",
  
  // Contact details
  email: "contact@alexmorgan.dev",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210", // International format without + or spaces
  location: "Mumbai, India (Available Worldwide)",
  availability: "Available for new projects",
  
  // Default WhatsApp message triggered when visitor clicks WhatsApp buttons
  defaultWhatsAppMessage: "Hi, I'm interested in getting a website for my business. I would like to know more about your services.",
  
  // Social links (replace '#' with your actual profile links)
  socialLinks: {
    whatsapp: "https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20getting%20a%20website%20for%20my%20business.%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
    instagram: "https://instagram.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    github: "https://github.com/yourhandle",
    twitter: "https://x.com/yourhandle",
  }
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Me", href: "#why-me" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const heroData = {
  badge: "Freelance Web Developer For Small Businesses & Startups",
  headline: "Professional Websites That Help Your Business Grow",
  subheading: "I design and develop modern, responsive, and user-friendly websites for small businesses, startups, professionals, and individuals.",
  primaryCtaText: "Get a Free Quote",
  primaryCtaLink: "#contact",
  secondaryCtaText: "View My Work",
  secondaryCtaLink: "#portfolio",
  trustStatement: "Responsive • Modern • Fast • Mobile-Friendly",
  stats: [
    { label: "Projects Completed", value: "25+" },
    { label: "Client Satisfaction", value: "100%" },
    { label: "Average Delivery", value: "3–7 Days" },
    { label: "Support & Guidance", value: "Included" },
  ]
};

export const servicesData = [
  {
    id: "business-websites",
    title: "Business Websites",
    description: "Professional websites for small businesses, local services, and companies.",
    icon: "Building2",
    features: [
      "Responsive design",
      "Multiple pages (Home, About, Services, Contact)",
      "Contact & lead forms",
      "Business information & Google Maps",
      "Mobile optimization & fast loading",
    ],
    ctaText: "Get Started",
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    description: "Personal portfolio websites for students, professionals, freelancers, and creators.",
    icon: "UserCheck",
    features: [
      "Showcase projects, resume & skills",
      "Custom layout matching your personal brand",
      "Interactive project previews",
      "Direct contact & social links",
      "Fast & lightweight performance",
    ],
    ctaText: "Build My Portfolio",
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "High-converting landing pages designed to promote your product, service, or campaign.",
    icon: "Rocket",
    features: [
      "Conversion-focused layouts & copy structure",
      "Strong call-to-action buttons",
      "Speed optimized for ad campaigns (Google/Meta)",
      "Lead capture forms & WhatsApp direct buttons",
      "Analytics & pixel ready",
    ],
    ctaText: "Launch Landing Page",
  },
  {
    id: "ecommerce-websites",
    title: "E-Commerce Websites",
    description: "Modern online stores with product listings, categories, shopping functionality, and customer-friendly interfaces.",
    icon: "ShoppingCart",
    features: [
      "Product catalog with categories & search",
      "Shopping cart & checkout experience",
      "Secure payment gateway integration",
      "Order management & notifications",
      "Mobile-first shopping interface",
    ],
    ctaText: "Start Selling Online",
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description: "Modernize an outdated website with a cleaner design, better usability, and responsive layout.",
    icon: "RefreshCw",
    features: [
      "Fresh, modern, clean aesthetic",
      "Fix mobile responsiveness issues",
      "Improve page load speed & Core Web Vitals",
      "Simplified navigation & visitor journeys",
      "Retain your current content & SEO ranking",
    ],
    ctaText: "Modernize My Site",
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    description: "Updates, content changes, bug fixes, and ongoing website support.",
    icon: "Wrench",
    features: [
      "Regular content, text & image updates",
      "Speed optimization & security checks",
      "Form & link health monitoring",
      "Hosting & domain management assistance",
      "Fast turnaround on emergency fixes",
    ],
    ctaText: "Request Support",
  },
];

export const whyChooseMeData = {
  heading: "Why Work With Me?",
  subheading: "Partnering with an independent developer means personalized attention, transparent communication, and no agency overhead.",
  cards: [
    {
      title: "Mobile Responsive",
      description: "Over 70% of web traffic comes from smartphones. Every website is built mobile-first, ensuring an effortless experience on phones, tablets, and desktops.",
      icon: "Smartphone",
    },
    {
      title: "Clean & Modern Design",
      description: "Simple, uncluttered designs that look credible and high-end. No tacky templates or visual clutter—just crisp typography and intuitive navigation.",
      icon: "Sparkles",
    },
    {
      title: "Fast Delivery",
      description: "Clear milestones with rapid turnaround times (usually 3 to 7 days for standard websites) so you can launch your business without endless waiting.",
      icon: "Clock",
    },
    {
      title: "Affordable Pricing",
      description: "Transparent, flexible packages starting from ₹2,000. Premium quality without the inflated agency markup, tailored specifically for small budgets.",
      icon: "Coins",
    },
  ],
  deepDive: {
    title: "Built Around Your Business",
    description: "No two businesses are identical, which is why I don't use rigid one-size-fits-all templates. Every website is customized around your business goals, target audience, and brand personality.",
    bulletPoints: [
      "Direct 1-on-1 collaboration with the developer (no middlemen or account managers)",
      "Clear, honest guidance on what features your business actually needs",
      "Clean, maintainable code that you own 100%—no vendor lock-in",
      "Realistic promises focused on user trust, speed, and clean conversion paths",
    ],
  },
};

export const portfolioCategories = [
  "All",
  "Business",
  "E-Commerce",
  "Portfolio",
  "Web Apps",
  "Landing Pages",
];

export const portfolioProjects = [
  {
    id: 1,
    title: "Smart Business Automation Platform",
    category: "Business",
    categoryDisplay: "Business / SaaS",
    description: "A business management platform for managing employees, tasks, workflows, and communication.",
    longDescription: "Designed for a growing regional consultancy to streamline internal task assignment, customer inquiries, and milestone reporting. Features responsive dashboards, automated status badges, and simplified data entry.",
    tags: ["React", "Tailwind CSS", "Dashboard", "Workflow"],
    isPlaceholder: true,
    placeholderLabel: "Sample Project (Replace in portfolioData.js)",
    features: [
      "Responsive workflow kanban board",
      "Team task assignment & progress tracking",
      "Client communication portal",
      "Exportable summary reports",
    ],
    accentColor: "from-blue-600 to-indigo-700",
    previewType: "dashboard",
  },
  {
    id: 2,
    title: "Jewellery E-Commerce Website",
    category: "E-Commerce",
    categoryDisplay: "E-Commerce",
    description: "A modern jewellery shopping experience with product categories and responsive design.",
    longDescription: "An elegant, minimalist boutique storefront created for an artisan jewellery brand. Focused on high-res product galleries, filtering by precious metals, and streamlined mobile checkout.",
    tags: ["React", "E-Commerce", "Cart System", "Responsive"],
    isPlaceholder: true,
    placeholderLabel: "Sample Project (Replace in portfolioData.js)",
    features: [
      "Curated product catalog & category filters",
      "Interactive image zoom & detail previews",
      "Seamless cart drawer & checkout funnel",
      "WhatsApp direct order inquiry option",
    ],
    accentColor: "from-amber-600 to-orange-700",
    previewType: "ecommerce",
  },
  {
    id: 3,
    title: "SmartMart",
    category: "Web Apps",
    categoryDisplay: "Inventory Management",
    description: "Sales and inventory management system for small businesses.",
    longDescription: "A lightweight cloud-ready web application helping local retail shops manage incoming stock, track daily billing, monitor expiring inventory, and generate digital receipts.",
    tags: ["React", "Web App", "Analytics", "Inventory"],
    isPlaceholder: true,
    placeholderLabel: "Sample Project (Replace in portfolioData.js)",
    features: [
      "Quick barcode & SKU search",
      "Low-stock alert thresholds",
      "Daily revenue & profit margin breakdown",
      "Printable invoice & receipt generator",
    ],
    accentColor: "from-emerald-600 to-teal-700",
    previewType: "webapp",
  },
  {
    id: 4,
    title: "Gourmet Haven Restaurant",
    category: "Business",
    categoryDisplay: "Business Website",
    description: "An appetizing, responsive website for a boutique culinary restaurant with table booking and digital menu.",
    longDescription: "Created to help a local dining destination elevate its digital impression, showcase seasonal menus, capture table reservations, and display Google review highlights.",
    tags: ["UI/UX", "Restaurant", "Table Booking", "Mobile First"],
    isPlaceholder: true,
    placeholderLabel: "Sample Project (Replace in portfolioData.js)",
    features: [
      "Interactive digital menu with dietary tags",
      "Online table reservation request form",
      "Direct Google Maps & one-tap calling",
      "High-speed loading with optimized food imagery",
    ],
    accentColor: "from-rose-600 to-red-700",
    previewType: "restaurant",
  },
  {
    id: 5,
    title: "Personal Portfolio & Brand",
    category: "Portfolio",
    categoryDisplay: "Portfolio",
    description: "A minimalist personal portfolio for a creative freelancer showcasing case studies and services.",
    longDescription: "A clean, typography-led portfolio designed for a freelance consultant to win enterprise design contracts. Emphasizes case study outcomes, testimonials, and clear call-to-actions.",
    tags: ["Portfolio", "Minimalist", "Case Studies", "SEO"],
    isPlaceholder: true,
    placeholderLabel: "Sample Project (Replace in portfolioData.js)",
    features: [
      "Distraction-free case study format",
      "Interactive work gallery with filters",
      "Integrated contact & quote booking form",
      "Fast 100/100 Lighthouse performance score",
    ],
    accentColor: "from-purple-600 to-indigo-800",
    previewType: "portfolio",
  },
  {
    id: 6,
    title: "Product Launch Landing Page",
    category: "Landing Pages",
    categoryDisplay: "Landing Page",
    description: "A high-converting SaaS product waitlist and feature showcase landing page.",
    longDescription: "Engineered specifically for maximum signups and conversion rates for a tech startup launch. Includes interactive feature breakdown, comparison matrix, and instant email capture.",
    tags: ["Landing Page", "Lead Gen", "High Conversion", "Analytics"],
    isPlaceholder: true,
    placeholderLabel: "Sample Project (Replace in portfolioData.js)",
    features: [
      "Hero section with dynamic preview mockup",
      "Clear value proposition & objection busters",
      "Social proof & client trust badges",
      "Validated lead generation form",
    ],
    accentColor: "from-cyan-600 to-blue-700",
    previewType: "landing",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Tell Me What You Need",
    description: "Share your business details, goals, and website requirements through the contact form or a quick WhatsApp chat.",
    duration: "Day 1",
  },
  {
    step: "02",
    title: "Get a Plan & Quote",
    description: "I'll suggest the right website structure, timeline, and provide a clear, transparent quote with zero hidden charges.",
    duration: "Day 1–2",
  },
  {
    step: "03",
    title: "Design & Development",
    description: "I'll design and build the website according to your requirements, sharing working previews for your feedback.",
    duration: "Day 3–5",
  },
  {
    step: "04",
    title: "Launch",
    description: "After final approval, your website is tested, optimized, connected to your domain, and prepared for launch.",
    duration: "Ready to launch!",
  },
];

export const pricingPackages = [
  {
    id: "starter",
    name: "Starter",
    badge: "Basic Online Presence",
    isPopular: false,
    startingPrice: "₹2,000",
    pricePrefix: "Starting from",
    bestFor: "Simple personal or basic business websites.",
    features: [
      "Responsive design (mobile & desktop)",
      "Up to 3 custom pages / sections",
      "Contact section & WhatsApp button",
      "Mobile optimization",
      "Fast delivery (3–4 days)",
      "1 round of revisions",
    ],
    ctaText: "Choose Starter",
  },
  {
    id: "business",
    name: "Business",
    badge: "Most Popular",
    isPopular: true,
    startingPrice: "₹3,000",
    pricePrefix: "Starting from",
    bestFor: "Small businesses that need a professional online presence.",
    features: [
      "Up to 5 custom designed pages",
      "Custom design tailored to your branding",
      "Interactive contact & lead capture form",
      "Fully responsive on all devices",
      "Basic SEO structure & meta tags",
      "Google Maps & Social media links",
      "Fast delivery (4–6 days)",
      "2 rounds of revisions",
    ],
    ctaText: "Choose Business",
  },
  {
    id: "custom",
    name: "Custom",
    badge: "Advanced Features",
    isPopular: false,
    startingPrice: "Let's Discuss",
    pricePrefix: "Tailored Quote",
    bestFor: "E-commerce websites, dashboards, web applications, and custom requirements.",
    features: [
      "Custom features & tailored workflows",
      "Backend & database integration",
      "Payment gateway setup (Razorpay/Stripe)",
      "Admin dashboard or content management",
      "Advanced filtering & catalog systems",
      "Priority maintenance & ongoing support",
    ],
    ctaText: "Get Custom Quote",
  },
];

export const testimonialsData = [
  {
    id: 1,
    quote: "Great communication and a clean website design. The process was simple from start to finish. Our customer inquiries increased within two weeks of launching.",
    name: "Rajesh Sharma",
    role: "Small Business Owner",
    company: "Sharma Traders",
    rating: 5,
    placeholderNote: "Placeholder Testimonial - Easily replace with your genuine client review in portfolioData.js",
  },
  {
    id: 2,
    quote: "Delivered our landing page right on schedule. Our customers love how fast and clean it looks on phones. The contact form goes straight to our WhatsApp, which is super convenient.",
    name: "Priya Patel",
    role: "Startup Founder",
    company: "Aura Essentials",
    rating: 5,
    placeholderNote: "Placeholder Testimonial - Easily replace with your genuine client review in portfolioData.js",
  },
  {
    id: 3,
    quote: "Helped me build my personal portfolio website for my consulting practice. Very professional, responsive, and great attention to detail. Highly recommended for freelancers!",
    name: "Amit Verma",
    role: "Independent Consultant",
    company: "Verma Advisory",
    rating: 5,
    placeholderNote: "Placeholder Testimonial - Easily replace with your genuine client review in portfolioData.js",
  },
];

export const faqData = [
  {
    question: "How much does a website cost?",
    answer: "Pricing starts from ₹2,000 for simple starter websites and ₹3,000 for standard business websites with multiple pages. For custom web applications, e-commerce stores, or complex dashboards, pricing is quoted based on your exact requirements. There are no surprise fees—you get a clear quote before work begins.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most starter and small business websites are completed in 3 to 7 business days, provided content and requirements are ready. Custom applications or larger e-commerce stores usually take 1 to 3 weeks depending on the complexity.",
  },
  {
    question: "Can you build an e-commerce website?",
    answer: "Yes! I build modern e-commerce stores with product catalogs, shopping carts, WhatsApp ordering systems, and payment gateway integrations (such as Razorpay or Stripe) so you can sell products online seamlessly.",
  },
  {
    question: "Will the website work on mobile phones?",
    answer: "Absolutely. Every website is built with a mobile-first philosophy. Your website will be 100% responsive and look great on iPhones, Android smartphones, iPads/tablets, laptops, and desktop screens.",
  },
  {
    question: "Can I request changes?",
    answer: "Yes. Every project includes review rounds so you can request changes to text, colors, layouts, or imagery before final launch. My goal is to ensure you are 100% satisfied with the outcome.",
  },
  {
    question: "Do you provide website maintenance?",
    answer: "Yes! I offer ongoing maintenance support for content updates, security checks, bug fixes, speed improvements, and technical changes whenever you need them.",
  },
  {
    question: "Can you connect a domain and hosting?",
    answer: "Yes, I will guide you through purchasing your domain name (.com, .in, etc.) and assist in deploying your website to reliable, cost-effective or free hosting platforms (like Vercel, Netlify, or Hostinger).",
  },
  {
    question: "Can you build a website based on my design/reference?",
    answer: "Yes, if you already have a Figma design, an existing website you want to emulate, or reference websites you admire, I can develop a customized site matching that aesthetic and functional style.",
  },
];

export const contactOptions = {
  websiteTypes: [
    "Business Website",
    "Portfolio",
    "E-Commerce",
    "Landing Page",
    "Web Application",
    "Website Redesign",
    "Other",
  ],
  budgetRanges: [
    "Under ₹2,000",
    "₹2,000 – ₹5,000",
    "₹5,000 – ₹10,000",
    "₹10,000+",
    "Not sure",
  ],
};
