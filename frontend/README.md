# SteelCore Industries - Professional Steel Manufacturing Website

## Project Overview

Complete, modern, professional website for **SteelCore Industries** - a premium international steel manufacturing, fabrication, and engineering company. The website is built with React, Vite, Framer Motion, and Lucide React.

## ✅ Completed Components & Features

### ✨ Core Components Created
- ✅ **Navbar** - Sticky responsive navigation with smooth transitions
- ✅ **Hero** - Full-screen hero with video background and animations
- ✅ **Stats** - Animated statistics counter section
- ✅ **About** - Company information component with highlights
- ✅ **ProductCard** - Reusable product display component
- ✅ **ServiceCard** - Reusable service grid component
- ✅ **ProjectCard** - Professional project showcase
- ✅ **Process** - Manufacturing process timeline (8 steps)
- ✅ **Services** - Full service gallery with Lucide icons
- ✅ **Industries** - Industry showcase with overlay effects
- ✅ **Certifications** - Certification cards grid
- ✅ **QuoteCTA** - Call-to-action section
- ✅ **Footer** - Comprehensive footer with links

### 📄 Pages Created
- ✅ **HomePage** - Full homepage with all major sections
- ✅ **ProductsPage** - Product catalog page
- ✅ **ProductDetails** - Individual product detail page with routing
- ✅ **ServicesPage** - Services showcase page
- ✅ **ProjectsPage** - Project portfolio with filtering
- ✅ **ProjectDetails** - Individual project case study
- ✅ **AboutPage** - Company history with timeline
- ✅ **ContactPage** - Contact form with company info
- ✅ **RequestQuote** - Featured quote request form
- ✅ **Resources** - Technical resources and downloads

### 📊 Data Structure
- ✅ **products.js** - 6 product types with full specifications
- ✅ **services.js** - 8 services with icons
- ✅ **projects.js** - 6 completed projects with details
- ✅ **industries.js** - 8 industry segments
- ✅ **certifications.js** - 6 certification types
- ✅ **company.js** - Company info, stats, timeline, manufacturing process

### 🎨 Professional Styling
- ✅ **index.css** - Comprehensive 1000+ line professional stylesheet
- ✅ Color Palette: Premium industrial theme with orange accents
- ✅ Responsive Design: Mobile, tablet, desktop optimized
- ✅ Animations: Smooth transitions and hover effects throughout
- ✅ Typography: Professional font hierarchy with clear readability
- ✅ Accessibility: Semantic HTML, proper contrast, keyboard navigation

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation Steps

1. **Navigate to frontend directory:**
```bash
cd c:\Users\ASUS\OneDrive\Desktop\webweb\frontend
```

2. **Install dependencies:**
```bash
npm install
```
This will install:
- React 18.3.1
- React Router DOM 7.18.3
- Framer Motion 10.16.4
- Lucide React 0.263.1
- Vite 5.4.10

3. **Start development server:**
```bash
npm run dev
```

4. **Access the website:**
Open browser and navigate to: http://localhost:5173

## 📁 Project Structure

```
frontend/src/
├── components/
│   ├── Navbar.jsx          (Navigation with scroll detection)
│   ├── Hero.jsx            (Full-screen hero with animations)
│   ├── Stats.jsx           (Animated statistics)
│   ├── About.jsx           (Company about section)
│   ├── ProductCard.jsx     (Product card component)
│   ├── ServiceCard.jsx     (Service card with icons)
│   ├── ProjectCard.jsx     (Project showcase card)
│   ├── Services.jsx        (Services grid)
│   ├── Process.jsx         (Manufacturing process timeline)
│   ├── Industries.jsx      (Industries grid)
│   ├── Certifications.jsx  (Certifications display)
│   ├── QuoteCTA.jsx        (Call-to-action)
│   ├── Footer.jsx          (Footer section)
│   └── CountUp.jsx         (Utility - number counter)
│
├── pages/
│   ├── HomePage.jsx        (Main landing page)
│   ├── ProductsPage.jsx    (All products catalog)
│   ├── ProductDetails.jsx  (Individual product detail)
│   ├── ServicesPage.jsx    (Services overview)
│   ├── ProjectsPage.jsx    (Project portfolio with filters)
│   ├── ProjectDetails.jsx  (Project case study)
│   ├── AboutPage.jsx       (Company history & timeline)
│   ├── ContactPage.jsx     (Contact form)
│   ├── RequestQuote.jsx    (Quote request form)
│   └── Resources.jsx       (Technical resources)
│
├── data/
│   ├── products.js         (Product catalog data)
│   ├── services.js         (Services data)
│   ├── projects.js         (Project portfolio data)
│   ├── industries.js       (Industries data)
│   ├── certifications.js   (Certifications data)
│   └── company.js          (Company info, stats, timeline)
│
├── App.jsx                 (Main app with routing)
├── main.jsx                (Entry point)
└── index.css               (Professional styling)
```

## 🌐 Routes

| Route | Page | Purpose |
|-------|------|---------|
| `/` | HomePage | Main landing page |
| `/products` | ProductsPage | All steel products |
| `/products/:id` | ProductDetails | Product specifications |
| `/services` | ServicesPage | Service offerings |
| `/projects` | ProjectsPage | Project portfolio |
| `/projects/:id` | ProjectDetails | Project case study |
| `/about` | AboutPage | Company history |
| `/contact` | ContactPage | Contact form |
| `/request-quote` | RequestQuote | Quote request form |
| `/resources` | Resources | Technical documents |

## 🎨 Color Palette

- **Primary Dark:** #0B0F14
- **Dark Steel:** #151B23
- **Secondary Steel:** #252B33
- **Steel Gray:** #64748B
- **Accent (Orange):** #F97316
- **Accent Light:** #FDA74F
- **White:** #F8FAFC
- **Light Gray:** #E2E8F0

## 🔧 Technology Stack

### Frontend
- **React** 18.3.1 - UI library
- **React Router** 7.18.3 - Routing and navigation
- **Framer Motion** 10.16.4 - Animations and transitions
- **Lucide React** 0.263.1 - Professional icons
- **Vite** 5.4.10 - Build tool
- **CSS3** - Professional styling with media queries

## ⚙️ Customization Guide

### Update Company Information
Edit `src/data/company.js`:
```javascript
export const companyInfo = {
  name: 'Your Company Name',
  tagline: 'Your tagline',
  founded: 2024,
  // ... more fields
};
```

### Add/Modify Products
Edit `src/data/products.js`:
```javascript
export const products = [
  {
    id: 1,
    name: 'Product Name',
    category: 'Category',
    description: 'Description',
    image: 'image-url',
    // ... more fields
  }
];
```

### Update Colors
Edit `src/index.css` CSS custom properties:
```css
:root {
  --accent: #YourColor;
  --primary-dark: #YourColor;
  /* ... */
}
```

## ✨ Key Features

### Professional Design Elements
- ✅ Premium industrial + modern engineering + corporate styling
- ✅ High-quality imagery with responsive handling
- ✅ Smooth animations with Framer Motion
- ✅ Professional color scheme with strategic accent usage
- ✅ Clear information hierarchy
- ✅ Generous spacing and typography
- ✅ Mobile-first responsive design

### Functionality
- ✅ Sticky navigation with scroll detection
- ✅ Smooth page transitions
- ✅ Project/Product filtering
- ✅ Contact forms with validation
- ✅ Animated counters
- ✅ Responsive images and videos
- ✅ Accessibility-compliant HTML

### Performance
- ✅ Lazy loading with intersection observer
- ✅ Optimized images
- ✅ Efficient React component structure
- ✅ Vite for fast build and HMR

## 📝 Placeholder Information

The following are placeholder values that should be replaced:

- **Company Name:** "SteelCore Industries"
- **Company Email:** "sales@steelcore.com"
- **Company Phone:** "+1 (800) 555-STEEL"
- **Company Location:** "Industrial District, Global Hub"
- **Statistics:** All numbers (30+, 250+, etc.)
- **Project Details:** All project information
- **Product Specifications:** All technical details
- **Certifications:** Listed certifications
- **Timeline Dates:** Company history dates
- **Images:** All product/project/industry images (currently using Unsplash placeholder URLs)

## 🔗 API Integration Ready

The frontend is structured for future backend integration:
- Forms are ready to connect to API endpoints
- Data fetching structure in place
- Clear separation of UI and data logic
- Ready for Node.js/Express.js/MySQL integration

## 🚀 Build for Production

```bash
npm run build
```

Outputs optimized production build to `dist/` folder.

## 💡 Next Steps

1. **Replace Placeholder Images:** Update image URLs in data files
2. **Update Company Information:** Customize company details
3. **Add Contact Form Backend:** Connect to email service
4. **Implement Quote Request Backend:** Add database storage
5. **Add Admin Dashboard:** For content management
6. **Setup Analytics:** Add tracking and SEO
7. **Deploy:** To hosting platform (Vercel, Netlify, etc.)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✅ Checklist for Completion

- [x] Component structure created
- [x] All pages implemented
- [x] Professional CSS styling
- [x] Responsive design
- [x] Animations with Framer Motion
- [x] Data organization
- [x] Routing setup
- [x] Forms with validation
- [x] Accessibility features
- [ ] Backend API integration (next phase)
- [ ] Admin dashboard (next phase)
- [ ] Deployment (next phase)

## 📞 Support

For issues or questions during development, refer to:
- React Documentation: https://react.dev
- Framer Motion: https://www.framer.com/motion/
- Lucide Icons: https://lucide.dev
- Vite: https://vitejs.dev

---

**Status:** ✅ Complete - Professional frontend ready for deployment
