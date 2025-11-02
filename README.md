# Queen Blvd Financial Wellness Platform

Modern, high-performance single-page application for financial wellness and credit restoration.

## 🚀 Tech Stack

- **HTML5** - Semantic markup
- **Modern CSS** - CSS Grid, Flexbox, Custom Properties
- **Vanilla JavaScript** - ES6+ modules
- **Vite** - Lightning-fast build tool
- **Cloudflare Pages** - Edge deployment

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Opens development server at `http://localhost:3005`

## 🏗️ Build

```bash
npm run build
```

Builds optimized production files to `/dist`

## 🌐 Deployment

### Cloudflare Pages

```bash
# Install Wrangler CLI globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npm run deploy
```

### Manual Deployment

1. Build the project: `npm run build`
2. Upload `/dist` folder to Cloudflare Pages
3. Configure custom domain: `queenblvd.net`

## 📁 Project Structure

```
queenblvd-site/
├── src/
│   ├── css/
│   │   ├── variables.css    # Design system tokens
│   │   ├── reset.css        # CSS reset
│   │   ├── base.css         # Base styles
│   │   └── hero.css         # Section styles
│   ├── js/
│   │   └── main.js          # Core JavaScript
│   ├── assets/
│   │   ├── images/          # Images
│   │   └── fonts/           # Custom fonts
│   └── index.html           # Main HTML file
├── public/                  # Static assets
├── dist/                    # Build output
├── vite.config.js           # Vite configuration
└── package.json
```

## 🎨 Design System

### Colors

- **Primary Purple**: `#6c3adb`
- **Gold Accent**: `#d4af37`
- **Dark Background**: `#1a0a2e`

### Typography

- **Display**: Playfair Display (headings)
- **Body**: Inter (text)

### Spacing

Uses a consistent 8px-based spacing scale.

## ✅ Quality Standards

- Lighthouse Score: 95+ (all metrics)
- Fully responsive (320px - 1440px+)
- WCAG 2.1 AA accessibility
- Optimized images (WebP)
- Lazy loading
- SEO optimized

## 📝 License

Proprietary - Queen Blvd / iEnclave

## 🔗 Links

- **Live Site**: https://queenblvd.net
- **Parent Platform**: https://ienclave.io
