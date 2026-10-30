# Freelance Web Developer Portfolio & Lead Generation Website

A modern, simple, professional, and responsive personal portfolio and service website designed specifically for a freelance web developer who provides website development services to small businesses, startups, students, and individuals.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
Run the following command in your terminal:
```bash
npm install
```

### 2. Start Local Development Server
To launch the website on your local machine:
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the URL shown in your terminal).

### 3. Build for Production
To create an optimized production build ready for deployment (e.g. Vercel, Netlify, GitHub Pages, or Hostinger):
```bash
npm run build
```

---

## 🛠️ How to Customize Your Website

All your personal details, services, portfolio projects, pricing packages, contact numbers, and social links are centralized in a single configuration file:

📁 **`src/data/portfolioData.js`**

### What You Can Edit:
1. **Brand & Personal Details (`personalInfo`)**:
   - `brandName`: e.g. `"YourName"`
   - `fullName`: Your name
   - `email`: Your business email address
   - `phone`: Your contact phone number
   - `whatsappNumber`: Your phone number in international format without `+` or spaces (e.g. `"919876543210"`).
   - `socialLinks`: Your WhatsApp, Instagram, LinkedIn, and GitHub profile URLs.

2. **Hero Section (`heroData`)**:
   - Headline, subheading, trust statement, and stats.

3. **Services (`servicesData`)**:
   - Service titles, descriptions, included feature bullet points, and CTA text.

4. **Why Choose Me (`whyChooseMeData`)**:
   - 4 core benefit cards and "Built Around Your Business" highlights.

5. **Portfolio Projects (`portfolioProjects`)**:
   - 6 sample projects included out-of-the-box.
   - Replace project titles, descriptions, categories, tech tags, and feature lists with your own client work.

6. **How It Works (`processSteps`)**:
   - 4-step client onboarding and delivery process.

7. **Pricing Packages (`pricingPackages`)**:
   - Starter (`₹2,000`), Business (`₹3,000`), and Custom packages with "Starting from" pricing and feature checklists.

8. **Testimonials (`testimonialsData`)**:
   - 3 realistic placeholder testimonials that can be replaced with genuine reviews as you finish projects.

9. **FAQ (`faqData`)**:
   - 8 comprehensive accordion questions and answers addressing client concerns.

---

## 📱 Features Included

- **Sticky Navigation Bar**: Smooth scrolling links, prominent "Get a Free Quote" CTA, and responsive mobile hamburger menu.
- **Conversion Hero Section**: Crisp headline, dual CTAs, trust statement, and a simulated browser mockup.
- **Service Cards**: 6 services with clean icons and detailed deliverables.
- **Why Choose Me**: 4 benefit cards and realistic value proposition.
- **Filterable Portfolio**: Category tabs (All, Business, E-Commerce, Portfolio, Web Apps, Landing Pages) with interactive project preview modal.
- **Step-by-Step Process**: 4-step workflow (Tell Me What You Need -> Plan & Quote -> Design & Dev -> Launch).
- **Flexible Pricing**: Starter, Business, and Custom tiers with "Starting from" clarity.
- **Interactive FAQ Accordion**: 8 essential questions.
- **Lead Generation Contact Form**:
  - Fields for Name, Email, Phone/WhatsApp, Business Name, Website Type, Budget Range, and Project Description.
  - Client-side validation and responsive error feedback.
  - Clean confirmation message with instant "Continue to WhatsApp" pre-filled inquiry.
- **Direct Contact Options**: Quick access to WhatsApp, Email, Instagram, and LinkedIn.
- **Floating WhatsApp Button**: Bottom-right floating button with pre-filled lead message.
- **Accessible & Semantic HTML**: Proper tags, ARIA attributes, and keyboard navigation.

---

## 🔌 Connecting The Contact Form

The contact form in `src/components/Contact.jsx` is structured so you can connect it to:
- **Email**: via [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/)
- **Google Sheets**: via Sheet Monkey or Google Apps Script
- **WhatsApp**: Pre-filled direct WhatsApp redirection is built in
- **CRM / Webhook**: Easy `fetch()` POST endpoint
