#!/bin/bash

# Queen Blvd Deployment Script
# Builds and prepares site for Cloudflare Pages deployment

set -e  # Exit on error

echo "🏗️  Building Queen Blvd site..."
npm run build

echo ""
echo "✅ Build complete!"
echo ""
echo "📦 Build output:"
ls -lh dist/

echo ""
echo "📊 Build size:"
du -sh dist/

echo ""
echo "🚀 Ready to deploy!"
echo ""
echo "Choose deployment method:"
echo ""
echo "1. Manual Upload (Fastest):"
echo "   → Go to https://dash.cloudflare.com/ → Pages → Create project"
echo "   → Upload the 'dist' folder"
echo "   → Set project name: queenblvd"
echo "   → Add custom domain: queenblvd.net"
echo ""
echo "2. Wrangler CLI:"
echo "   → Run: wrangler login"
echo "   → Then: wrangler pages deploy dist --project-name=queenblvd"
echo ""
echo "3. GitHub Actions (Automated):"
echo "   → Push to GitHub"
echo "   → Add Cloudflare secrets (see DEPLOYMENT.md)"
echo "   → Auto-deploys on every push to master"
echo ""
echo "See DEPLOYMENT.md for detailed instructions."
