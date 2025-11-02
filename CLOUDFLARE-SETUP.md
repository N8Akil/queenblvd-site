# Cloudflare Pages Setup for queenblvd.net

## ✅ Completed
- [x] GitHub repository created: https://github.com/N8Akil/queenblvd-site
- [x] Code pushed to master branch
- [x] GitHub Actions workflow configured
- [x] Build system working (9.74KB CSS, 1.63KB JS gzipped)

## 🚀 Next Steps (Complete in Cloudflare Dashboard)

### Step 1: Connect GitHub to Cloudflare Pages

1. **Go to Cloudflare Pages:**
   - Visit: https://dash.cloudflare.com/
   - Click **Pages** in the left sidebar
   - Click **"Connect to Git"**

2. **Authorize GitHub:**
   - Select **GitHub** as provider
   - Click **"Authorize Cloudflare Pages"** (if prompted)
   - Grant access to the `queenblvd-site` repository

3. **Configure build settings:**
   ```
   Production branch: master
   Build command: npm run build
   Build output directory: dist
   Root directory: (leave empty)
   ```

4. **Environment variables:**
   ```
   NODE_ENV = production
   NEXT_TELEMETRY_DISABLED = 1
   ```

5. **Click "Save and Deploy"**

### Step 2: Connect Custom Domain

1. **After first deployment completes:**
   - Go to **Pages** → **queenblvd** project
   - Click **Custom domains** tab
   - Click **"Set up a custom domain"**

2. **Add queenblvd.net:**
   - Enter: `queenblvd.net`
   - Click **"Continue"**
   - Cloudflare will auto-configure DNS (CNAME record)
   - SSL certificate will auto-provision (1-2 minutes)

3. **Optional: Add www subdomain:**
   - Click **"Set up a custom domain"** again
   - Enter: `www.queenblvd.net`
   - Click **"Continue"**

### Step 3: Verify Deployment

1. **Check deployment status:**
   - Should show "Success" with green checkmark
   - View deployment at: `https://queenblvd.pages.dev`

2. **Check custom domain:**
   - Visit: https://queenblvd.net
   - Should show Queen Blvd hero section
   - SSL should be active (🔒 icon in browser)

3. **Run performance test:**
   - Open browser DevTools
   - Run Lighthouse audit
   - Should see 95+ scores across all metrics

---

## Alternative: Quick Deploy via Cloudflare Dashboard (No GitHub)

If you prefer manual deployment:

1. **Build locally:**
   ```bash
   cd /mnt/extreme-pro/enclave-economy/queenblvd-site
   npm run build
   ```

2. **Go to Cloudflare Pages:**
   - https://dash.cloudflare.com/ → **Pages**
   - Click **"Upload assets"**
   - Drag `/dist` folder contents
   - Project name: `queenblvd`
   - Deploy!

3. **Connect domain:**
   - Same as Step 2 above

---

## Automated Deployments (After Cloudflare Setup)

Once Cloudflare Pages is connected to GitHub:

- **Every push to master** → Auto-deploys to queenblvd.net
- **Pull requests** → Get preview URLs
- **Rollback anytime** → Click previous deployment

---

## Troubleshooting

### "Build failed on Cloudflare"
Check build logs in Pages dashboard. Common issues:
- Node version mismatch (ensure 18+)
- Missing dependencies (check package.json)

### "Domain not resolving"
- Wait 5-10 minutes for DNS propagation
- Check DNS records in Cloudflare DNS tab
- Ensure nameservers point to Cloudflare

### "SSL certificate pending"
- Takes 1-2 minutes to provision
- Refresh page and check again

---

## Current Status

- **GitHub Repo:** https://github.com/N8Akil/queenblvd-site ✅
- **Build Working:** Yes (15KB total) ✅
- **Cloudflare Pages:** Awaiting connection ⏳
- **Custom Domain:** Awaiting configuration ⏳

---

## Support

Need help? Check:
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- GitHub Actions Status: https://github.com/N8Akil/queenblvd-site/actions
