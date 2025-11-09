# 🚀 Quick Start Guide

Get the Saptrishi Foundation website running in **5 minutes**!

## ⚡ Prerequisites

You need:
- **Node.js 18+** ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)

Check if installed:
```bash
node --version  # Should show v18.x.x or higher
npm --version   # Should show 9.x.x or higher
```

## 📦 Installation

### Step 1: Navigate to Project
```bash
cd saptarishi-foundation
```

### Step 2: Install Dependencies
```bash
npm install
```
⏱️ *This takes 2-3 minutes*

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open Browser
Visit: **http://localhost:3000**

## ✅ That's It!

You should see:
- ✨ Yellow loading screen with animated dots
- 🎨 Beautiful hero section
- 📋 Three service cards
- 📱 Responsive design

## 🎯 What You Can Do Now

### View Pages
- **Home**: http://localhost:3000/
- **Login**: http://localhost:3000/login
- **Register**: http://localhost:3000/register

### Test Responsive Design
1. Open browser DevTools (F12)
2. Click device toggle (Ctrl+Shift+M)
3. Select different devices

### Make Changes
Edit files and see instant updates:
- `app/page.tsx` - Home page content
- `components/HeroSection.tsx` - Hero section
- `app/globals.css` - Global styles

## 🏗️ Build for Production

```bash
npm run build
npm start
```

Visit: **http://localhost:3000** (production mode)

## 🚢 Deploy to Internet

### Easiest Way (Vercel):
```bash
npm install -g vercel
vercel
```

Follow prompts. Your site goes live in ~2 minutes!

## 🆘 Having Issues?

### Port Already in Use?
```bash
PORT=3001 npm run dev
```

### Installation Fails?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Still Stuck?
Check `INSTALLATION.md` for detailed troubleshooting.

## 📚 Next Steps

1. Read `README.md` for full feature list
2. Check `PROJECT_OVERVIEW.md` for architecture
3. See `DEPLOYMENT.md` for production deployment
4. Review `INSTALLATION.md` for advanced setup

## 🎨 Customize Your Site

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    yellow: '#YOUR_COLOR',
    orange: '#YOUR_COLOR',
  }
}
```

### Update Content
Edit component files in `components/` folder:
- `HeroSection.tsx` - Landing section
- `ServicesSection.tsx` - Services cards
- `AboutSection.tsx` - About content
- `Footer.tsx` - Footer links

### Add New Pages
Create files in `app/` folder:
```
app/
  new-page/
    page.tsx
```

Access at: `http://localhost:3000/new-page`

## 💡 Pro Tips

1. **Hot Reload**: Changes appear instantly (no refresh needed)
2. **TypeScript**: Get code hints in VS Code
3. **Tailwind**: Use utility classes for quick styling
4. **Components**: Reuse components across pages

## 🎓 Learning Resources

- [Next.js Tutorial](https://nextjs.org/learn) - 2 hours
- [Tailwind CSS](https://tailwindcss.com/docs) - Reference
- [TypeScript Basics](https://www.typescriptlang.org/docs/handbook/intro.html) - 1 hour

## 📊 Project Stats

- **Files**: 20+ source files
- **Components**: 8 reusable components
- **Pages**: 3 routes (Home, Login, Register)
- **Dependencies**: 5 production packages
- **Code Quality**: TypeScript strict mode ✅

## ⚡ Performance

Out of the box:
- ⚡ **Fast**: < 2s load time
- 📱 **Mobile**: 100% responsive
- ♿ **Accessible**: WCAG AA ready
- 🎨 **Animated**: Smooth transitions
- 🔒 **Type-safe**: TypeScript

## 🎉 You're Ready!

Start building your amazing website. The codebase is production-ready and fully documented.

**Happy coding!** 💻✨

---

**Need Help?** Check the detailed guides:
- 📖 Full features: `README.md`
- 🔧 Advanced setup: `INSTALLATION.md`
- 🏗️ Architecture: `PROJECT_OVERVIEW.md`
- 🚀 Go live: `DEPLOYMENT.md`
