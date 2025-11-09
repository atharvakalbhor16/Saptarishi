# Saptrishi Foundation Website - Next.js Recreation

A pixel-perfect recreation of the Saptrishi Foundation website built with Next.js 14+, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Responsive Design** - Mobile, Tablet, and Desktop optimized
- **SEO Optimized** with Next.js Metadata API
- **Modern UI/UX** with smooth transitions and animations
- **Accessible** components following web standards

## 📋 Pages & Components

### Pages
- **Home Page** - Hero section with animated loader, services showcase, about section, and CTA
- **About Us** - Detailed organization information, story, values, and services
- **Vision & Mission** - Strategic goals and guiding principles
- **Impact** - Statistics, achievements, and measurable outcomes
- **Testimonials** - User reviews and success stories
- **News & Events** - Latest updates, upcoming events, and newsletter
- **Contact Us** - Contact form, information, and map integration
- **Volunteer** - Comprehensive volunteer registration with all fields
- **Donate** - Donation page with Razorpay integration and 80G tax info
- **Membership** - Divyang membership enrollment form
- **Initiatives** - Our programs and projects
- **Associates** - Partner organizations and collaborators
- **Downloads** - Mobile app, forms, brochures, and resources
- **Suggestions** - Feedback and suggestions form
- **Privacy Policy** - Complete privacy and data protection policy
- **Terms & Conditions** - Comprehensive terms of service
- **Login Page** - User authentication interface
- **Register Page** - New user registration form

### Components
- **Header** - Responsive navigation with dropdown menus (mobile + desktop)
- **Footer** - Comprehensive footer with all page links and real social media URLs
- **Hero Section** - Animated landing section with bouncing dots
- **Services Section** - Six service cards (Government Schemes, Documents, Camps, Insurance, Resource, Information)
- **About Section** - Information about the foundation
- **CTA Section** - Call-to-action with app download links
- **Loader** - Animated page loader with colorful bouncing dots
- **PageHeader** - Reusable page header component
- **TestimonialCard** - Reusable testimonial display
- **NewsCard** - News article card with excerpt
- **StatCard** - Impact statistics display

## 🎨 Design Features

### Color Scheme
- Primary Yellow: `#FAEF35`
- Primary Orange: `#FF6B35`
- Accent Pink: `#FF5E5E`
- Accent Blue: `#607AFF`
- Accent Green: `#3ADC49`
- Accent Purple: `#CA5DFF`

### Typography
- Body: Open Sans
- Headings: Playfair Display

### Animations
- Loading animation with bouncing colored dots
- Fade-in animations on scroll
- Smooth hover effects on buttons and cards
- Page transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone or download the project**
   ```bash
   cd saptarishi-foundation
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
saptarishi-foundation/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── login/
│   │   └── page.tsx         # Login page
│   └── register/
│       └── page.tsx         # Register page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer component
│   ├── Loader.tsx           # Loading animation
│   ├── HeroSection.tsx      # Hero section
│   ├── ServicesSection.tsx  # Services showcase
│   ├── AboutSection.tsx     # About section
│   └── CallToActionSection.tsx  # CTA section
├── public/
│   └── (static assets)
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
└── README.md                # This file
```

## 🎯 Key Features Implementation

### 1. Animated Loader
- Bouncing dots animation matching original design
- Smooth fade-out transition
- Auto-hides after 1.5 seconds

### 2. Responsive Navigation
- Fixed header with scroll effect
- Mobile hamburger menu
- Smooth transitions

### 3. Hero Section
- Full-screen yellow background
- Animated bouncing dots
- Scroll indicator
- CTA buttons

### 4. Services Cards
- Three icon-based service cards
- Hover effects with elevation
- Responsive grid layout

### 5. Interactive Forms
- Login and Register pages
- Form validation
- Password visibility toggle
- Professional styling

## 🔧 Customization

### Updating Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    yellow: '#FAEF35',
    orange: '#FF6B35',
  },
  // ... more colors
}
```

### Modifying Content
Update component files in the `components/` directory to change text, images, or layout.

### Adding New Pages
Create new route folders in the `app/` directory following Next.js 14 App Router conventions.

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1023px`
- Desktop: `≥ 1024px`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ⚡ Performance

- Server-side rendering (SSR)
- Automatic code splitting
- Image optimization with Next.js Image component
- CSS optimization with Tailwind
- Lazy loading for better performance

## 🔒 Security Features

- TypeScript for type safety
- Input validation on forms
- Secure password handling (client-side)
- HTTPS ready

## 📝 License

This project is a recreation for demonstration purposes.

## 🤝 Contributing

This is a recreation project. For the original Saptrishi Foundation website, please visit [https://saptrishifoundation.in/](https://saptrishifoundation.in/)

## 📞 Support

For issues or questions about this recreation, please create an issue in the repository.

## 🎓 Technical Stack

- **Framework:** Next.js 14+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Open Sans, Playfair Display)

## 📊 Features Comparison

| Feature | Original | Recreation |
|---------|----------|------------|
| Responsive Design | ✅ | ✅ |
| Animated Loader | ✅ | ✅ |
| Navigation Menu | ✅ | ✅ |
| Services Section | ✅ | ✅ |
| About Section | ✅ | ✅ |
| Login/Register | ✅ | ✅ |
| Mobile App Links | ✅ | ✅ |
| SEO Optimization | ✅ | ✅ |
| Performance | Good | Excellent |

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted with PM2

## 📈 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication system
- [ ] Database integration
- [ ] Admin dashboard
- [ ] Blog section
- [ ] Donation system
- [ ] Multi-language support
- [ ] Dark mode

## 🙏 Acknowledgments

Original website: [Saptrishi Foundation](https://saptrishifoundation.in/)

---

Made with ❤️ using Next.js 14+
