# Installation Guide - Saptrishi Foundation Website

This guide will walk you through the complete installation process for the Saptrishi Foundation website recreation.

## 📋 System Requirements

- **Node.js**: Version 18.17 or later
- **Package Manager**: npm (comes with Node.js), yarn, pnpm, or bun
- **Operating System**: Windows, macOS, or Linux
- **RAM**: Minimum 4GB recommended
- **Disk Space**: At least 500MB free space

## 🔍 Check Node.js Installation

Before starting, verify Node.js is installed:

```bash
node --version
```

If not installed, download from [nodejs.org](https://nodejs.org/)

## 📦 Step-by-Step Installation

### Step 1: Extract/Navigate to Project Directory

```bash
cd saptarishi-foundation
```

### Step 2: Install Dependencies

Choose one of the following package managers:

**Using npm (recommended):**
```bash
npm install
```

**Using yarn:**
```bash
yarn install
```

**Using pnpm:**
```bash
pnpm install
```

**Using bun:**
```bash
bun install
```

This process may take 2-5 minutes depending on your internet connection.

### Step 3: Verify Installation

Check if all dependencies are installed:

```bash
npm list --depth=0
```

You should see all the required packages listed.

## 🚀 Running the Application

### Development Mode

Start the development server with hot-reload:

```bash
npm run dev
```

The application will start at `http://localhost:3000`

You should see output like:
```
  ▲ Next.js 14.2.0
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

### Production Build

To create an optimized production build:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

## 🧪 Testing the Installation

1. **Open your browser** and navigate to `http://localhost:3000`
2. **Check the following:**
   - Home page loads with yellow background
   - Animated loader appears and disappears
   - Navigation menu works
   - All sections render correctly
   - Login page accessible at `/login`
   - Register page accessible at `/register`
   - Responsive design works (resize browser)

## 🔧 Troubleshooting

### Issue: Port 3000 Already in Use

**Solution:** Use a different port:
```bash
PORT=3001 npm run dev
```

### Issue: Module Not Found Errors

**Solution:** Delete node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript Errors

**Solution:** Ensure TypeScript is properly installed:
```bash
npm install --save-dev typescript @types/react @types/node
```

### Issue: Tailwind CSS Not Working

**Solution:** Rebuild the CSS:
```bash
npm run build
```

### Issue: Framer Motion Animations Not Working

**Solution:** Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

## 🌐 Changing the Port

To run on a different port, modify the dev script in `package.json`:

```json
"scripts": {
  "dev": "next dev -p 3001"
}
```

Or use environment variable:
```bash
PORT=3001 npm run dev
```

## 📝 Environment Variables (Optional)

Create a `.env.local` file in the root directory for environment-specific configuration:

```env
# App Configuration
NEXT_PUBLIC_APP_NAME=Saptrishi Foundation
NEXT_PUBLIC_APP_URL=http://localhost:3000

# API Configuration (if needed)
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 🚢 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

### Docker (Optional)

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t saptarishi-foundation .
docker run -p 3000:3000 saptarishi-foundation
```

## 📊 Performance Optimization

After installation, optimize for production:

1. **Enable compression:**
   Already configured in Next.js

2. **Image optimization:**
   Use Next.js Image component (already implemented)

3. **Bundle analysis:**
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```

## 🔐 Security Checklist

- [ ] Keep dependencies updated: `npm audit`
- [ ] Use environment variables for sensitive data
- [ ] Enable HTTPS in production
- [ ] Implement CSP headers
- [ ] Sanitize user inputs

## 📱 Testing on Different Devices

### Desktop Testing
- Chrome DevTools (F12 → Toggle Device Toolbar)
- Firefox Responsive Design Mode
- Safari Web Inspector

### Mobile Testing
- Use browser developer tools
- Test on actual devices
- Use ngrok for external access:
  ```bash
  npx ngrok http 3000
  ```

## 💡 IDE Setup (Optional)

### VS Code Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)

### VS Code Settings
Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 🆘 Getting Help

If you encounter issues:

1. Check the troubleshooting section above
2. Review Next.js documentation
3. Check GitHub issues
4. Search Stack Overflow

## ✅ Installation Complete!

Your Saptrishi Foundation website is now ready to use. Visit `http://localhost:3000` to see it in action.

Happy coding! 🎉
