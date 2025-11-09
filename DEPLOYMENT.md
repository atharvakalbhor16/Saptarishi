# Deployment Guide - Saptrishi Foundation Website

Complete guide for deploying the Saptrishi Foundation website to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

### Option 1: Using Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
cd saptarishi-foundation
vercel
```

4. **Follow prompts:**
   - Set up and deploy? Y
   - Which scope? Select your account
   - Link to existing project? N
   - Project name? saptarishi-foundation
   - Directory? ./
   - Override settings? N

5. **Production deployment**
```bash
vercel --prod
```

### Option 2: Using GitHub Integration

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - Framework Preset: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to main = production deploy
   - Pull requests = preview deploys

## 🌐 Deploy to Netlify

### Using Netlify CLI

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Login**
```bash
netlify login
```

3. **Initialize**
```bash
netlify init
```

4. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

5. **Deploy**
```bash
netlify deploy --prod
```

### Using Git Integration

1. **Push to Git** (GitHub, GitLab, or Bitbucket)

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - New site from Git
   - Choose repository
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `.next`

3. **Add netlify.toml** (optional)
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## ☁️ Deploy to AWS

### AWS Amplify

1. **Install Amplify CLI**
```bash
npm install -g @aws-amplify/cli
```

2. **Configure Amplify**
```bash
amplify configure
```

3. **Initialize**
```bash
amplify init
```

4. **Add hosting**
```bash
amplify add hosting
```

5. **Publish**
```bash
amplify publish
```

### AWS EC2 (Manual)

1. **Launch EC2 instance** (Ubuntu 22.04 LTS)

2. **Connect via SSH**
```bash
ssh -i your-key.pem ubuntu@your-ec2-ip
```

3. **Install Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. **Clone repository**
```bash
git clone <your-repo-url>
cd saptarishi-foundation
```

5. **Install dependencies**
```bash
npm install
```

6. **Build**
```bash
npm run build
```

7. **Install PM2**
```bash
sudo npm install -g pm2
```

8. **Start application**
```bash
pm2 start npm --name "saptarishi" -- start
pm2 save
pm2 startup
```

9. **Setup Nginx**
```bash
sudo apt-get install nginx
```

Create Nginx config:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

10. **SSL with Let's Encrypt**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## 🐳 Docker Deployment

### Create Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Build and Run

```bash
# Build image
docker build -t saptarishi-foundation .

# Run container
docker run -p 3000:3000 saptarishi-foundation
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

## 🔧 Environment Variables

### Production Environment Variables

Create `.env.production`:

```env
# App Configuration
NEXT_PUBLIC_APP_NAME=Saptrishi Foundation
NEXT_PUBLIC_APP_URL=https://your-domain.com

# API Configuration (if needed)
NEXT_PUBLIC_API_URL=https://api.your-domain.com
API_SECRET=your-secret-key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Platform-Specific Setup

**Vercel:**
- Dashboard → Project → Settings → Environment Variables
- Add variables and specify environment (Production/Preview/Development)

**Netlify:**
- Site settings → Build & deploy → Environment
- Add variables as key-value pairs

**AWS Amplify:**
- App settings → Environment variables
- Add variables

## 🔒 Security Checklist

Before deploying to production:

- [ ] Update all dependencies to latest versions
- [ ] Run security audit: `npm audit fix`
- [ ] Set proper environment variables
- [ ] Enable HTTPS/SSL certificate
- [ ] Configure CORS if using API
- [ ] Set up proper CSP headers
- [ ] Enable rate limiting (if applicable)
- [ ] Configure firewall rules
- [ ] Set up monitoring and alerts
- [ ] Configure backup strategy

## 📊 Post-Deployment Configuration

### 1. Custom Domain

**Vercel:**
```bash
vercel domains add your-domain.com
```

**Netlify:**
- Site settings → Domain management → Add custom domain

### 2. SSL Certificate

Most platforms (Vercel, Netlify) auto-provision SSL.

For manual setup:
```bash
# Let's Encrypt
sudo certbot certonly --standalone -d your-domain.com
```

### 3. CDN Configuration

**Vercel/Netlify:** Automatic edge caching

**Cloudflare:**
- Add site to Cloudflare
- Update nameservers
- Enable proxy (orange cloud)

### 4. Monitoring Setup

**Vercel Analytics:**
```javascript
// Already included in Next.js
```

**Google Analytics:**
```javascript
// Add to app/layout.tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### 5. Error Tracking

**Sentry:**
```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

## 🚦 Performance Optimization

### After Deployment

1. **Run Lighthouse Audit**
```bash
npx lighthouse https://your-domain.com
```

2. **Optimize Images**
   - Use Next.js Image component
   - Compress images before upload
   - Use WebP format

3. **Enable Compression**
   - Gzip/Brotli (automatic on Vercel/Netlify)

4. **Cache Strategy**
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

## 🔄 Continuous Deployment

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm test # if tests exist
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 📱 Progressive Web App (PWA)

### Add PWA Support (Optional)

1. **Install next-pwa**
```bash
npm install next-pwa
```

2. **Configure next.config.js**
```javascript
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  // your next config
})
```

3. **Add manifest.json to public folder**

## 🎯 Rollback Strategy

### Vercel
```bash
vercel rollback
```

### Manual Rollback
```bash
# Using PM2
pm2 deploy ecosystem.config.js production revert 1

# Using Docker
docker run -p 3000:3000 saptarishi-foundation:previous-tag
```

## 📈 Scaling Considerations

### Horizontal Scaling

**Vercel/Netlify:** Automatic scaling included

**Manual (Docker Swarm):**
```bash
docker service create --replicas 3 saptarishi-foundation
```

**Kubernetes:**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: saptarishi-foundation
spec:
  replicas: 3
  # ... rest of config
```

## ✅ Deployment Checklist

- [ ] Code tested locally
- [ ] Dependencies updated
- [ ] Environment variables configured
- [ ] Build succeeds without errors
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Monitoring tools setup
- [ ] Error tracking configured
- [ ] Performance optimized
- [ ] Security headers configured
- [ ] Backup strategy in place
- [ ] Documentation updated

## 🆘 Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### 404 Errors on Routes

Ensure server/platform is configured for SPA routing:
- Vercel: Automatic
- Netlify: Add `_redirects` file
- Nginx: Configure try_files

### Environment Variables Not Working

- Check variable names (must start with `NEXT_PUBLIC_` for client-side)
- Rebuild after adding variables
- Verify in deployment platform dashboard

## 📞 Support

For deployment issues:
- Check platform documentation
- Review build logs
- Contact platform support
- Search community forums

---

**Deployment Complete! 🎉**

Your Saptrishi Foundation website is now live and accessible to users worldwide.
