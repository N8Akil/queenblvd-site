# Deployment Guide: Queen Blvd → queenblvd.net

## Quick Deploy (Manual - 5 minutes)

### Step 1: Build the site
```bash
cd /mnt/extreme-pro/enclave-economy/queenblvd-site
npm run build
```

Build output is in `/dist` folder.

### Step 2: Deploy to Cloudflare Pages

1. **Go to Cloudflare Dashboard:**
   - Visit: https://dash.cloudflare.com/
   - Navigate to **Pages** in the left sidebar

2. **Create new project:**
   - Click **"Create a project"**
   - Choose **"Upload assets"** (Direct Upload)

3. **Upload build:**
   - Drag and drop the entire `/dist` folder
   - Or click to browse and select `/dist` contents
   - Project name: `queenblvd`
   - Click **"Deploy site"**

4. **Connect custom domain:**
   - After deployment, go to project **Settings** → **Custom domains**
   - Click **"Set up a custom domain"**
   - Enter: `queenblvd.net`
   - Click **"Add domain"** (DNS will auto-configure)
   - Repeat for `www.queenblvd.net` (optional)

5. **Done!**
   - Site will be live at `https://queenblvd.net` in ~60 seconds
   - SSL certificate auto-provisioned

---

## Automated Deploy via GitHub (Recommended for continuous deployment)

### One-Time Setup

1. **Push to GitHub:**
```bash
cd /mnt/extreme-pro/enclave-economy/queenblvd-site
git remote add origin https://github.com/N8Akil/queenblvd-site.git
git branch -M master
git push -u origin master
```

2. **Get Cloudflare API Token:**
   - Visit: https://dash.cloudflare.com/profile/api-tokens
   - Click **"Create Token"**
   - Use template: **"Edit Cloudflare Workers"**
   - Or create custom token with permissions:
     - Account → Cloudflare Pages → Edit
   - Copy the token

3. **Get Cloudflare Account ID:**
   - Visit: https://dash.cloudflare.com/
   - Click on any site
   - Scroll to bottom right → **Account ID**
   - Copy the ID

4. **Add GitHub Secrets:**
   - Go to: https://github.com/N8Akil/queenblvd-site/settings/secrets/actions
   - Add two secrets:
     - Name: `CLOUDFLARE_API_TOKEN`, Value: (paste token)
     - Name: `CLOUDFLARE_ACCOUNT_ID`, Value: (paste account ID)

5. **Enable GitHub Actions:**
   - Go to: https://github.com/N8Akil/queenblvd-site/actions
   - Enable workflows if prompted

### How it works

Every time you push to `master` branch:
1. GitHub Actions builds the site
2. Deploys to Cloudflare Pages automatically
3. Site updates at `queenblvd.net` within 1-2 minutes

---

## Alternative: Direct Upload via Wrangler CLI

If you complete the OAuth login in your browser:

```bash
# Login (opens browser)
wrangler login

# Create Pages project
wrangler pages project create queenblvd

# Deploy
wrangler pages deploy dist --project-name=queenblvd

# Connect custom domain (via Cloudflare dashboard)
```

---

## Verify Deployment

After deployment, check:

1. **Primary domain:** https://queenblvd.net
2. **WWW redirect:** https://www.queenblvd.net
3. **SSL certificate:** Should show 🔒 in browser
4. **Performance:** Run Lighthouse test (should be 95+)

---

## Troubleshooting

### "Domain not resolving"
- Wait 5-10 minutes for DNS propagation
- Check DNS records in Cloudflare dashboard
- Ensure nameservers point to Cloudflare

### "Build failed"
- Check Node.js version (need 18+)
- Delete `node_modules` and run `npm install`
- Ensure all dependencies installed

### "Custom domain not working"
- Verify domain is in same Cloudflare account as Pages project
- Check DNS records include CNAME to `queenblvd.pages.dev`
- SSL certificate can take 1-2 minutes to provision

---

## Current Build Stats

- **CSS:** 9.74 kB (2.82 kB gzipped)
- **JavaScript:** 1.63 kB (0.82 kB gzipped)
- **HTML:** 4.02 kB (1.21 kB gzipped)
- **Total:** ~15 kB initial load
- **Lighthouse Score:** Expected 95+ (all metrics)

---

## Support

- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Cloudflare Support: https://dash.cloudflare.com/?to=/:account/support
