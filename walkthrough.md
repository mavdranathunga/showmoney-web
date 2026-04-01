# ShowMoney Pro — Deployment & Launch Guide

## 🎉 What Was Built

Your professional **ShowMoney Pro** website is complete and running locally at `http://localhost:3000`.

### Pages Created
| Page | URL | Purpose |
|---|---|---|
| Home | `/` | Hero, services, how-it-works, testimonials, FAQ, CTA |
| Services | `/services` | Detailed service breakdown |
| How It Works | `/how-it-works` | 4-step process with timelines |
| Visa Types | `/visa-types` | 50+ countries by region |
| FAQ | `/faq` | Categorized Q&A + FAQ schema |
| About | `/about` | Story, values, stats |
| Contact | `/contact` | Form + WhatsApp + Messenger |
| Blog | `/blog` | SEO article hub (6 posts) |
| Blog Posts | `/blog/[slug]` | Individual articles |
| Privacy Policy | `/privacy-policy` | Legal page |
| Terms of Service | `/terms-of-service` | Legal page |

---

## 🌐 Step 1: Buy a Domain

### Recommended: Namecheap
1. Go to **[namecheap.com](https://namecheap.com)**
2. Search for your desired domain — suggestions:
   - `showmoneypro.com`
   - `showmoneyphilippines.com`
   - `showmoneyagency.ph`
   - `trustedfunds.ph`
3. Add to cart, choose **1 year** (or more for discount)
4. At checkout, enable **WhoisGuard** (privacy protection — it's free)
5. Complete purchase (~$10–15 USD/year)

---

## 🚀 Step 2: Deploy to Vercel (Free)

### A. Push to GitHub First

1. Create a free account at **[github.com](https://github.com)**
2. Create a new repository called `showmoney-web` (private or public)
3. In your project terminal, run:

```bash
cd d:\Projects\ShowMoney_WEB
git init
git add .
git commit -m "Initial commit: ShowMoney Pro website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/showmoney-web.git
git push -u origin main
```

### B. Deploy on Vercel

1. Go to **[vercel.com](https://vercel.com)** and sign up with your GitHub account
2. Click **"Add New Project"**
3. Select your `showmoney-web` repository
4. Vercel will auto-detect it's a Next.js project
5. Click **"Deploy"** — done! You'll get a URL like `showmoney-web.vercel.app`

> **Future deployments are automatic** — every time you push to GitHub, Vercel redeploys instantly.

---

## 🔗 Step 3: Connect Your Domain to Vercel

### On Vercel:
1. Go to your project → **Settings → Domains**
2. Add your domain: `showmoneypro.com`
3. Vercel will show you nameservers to use (e.g., `ns1.vercel-dns.com`)

### On Namecheap:
1. Go to **Account → Domain List → Manage** (for your domain)
2. Click **Nameservers** → select **Custom DNS**
3. Enter the Vercel nameservers provided
4. Save — DNS propagates in 10–30 minutes

> **HTTPS/SSL is automatic** — Vercel handles it for free.

---

## 🔍 Step 4: Set Up Google Search Console

1. Go to **[search.google.com/search-console](https://search.google.com/search-console)**
2. Add your domain property
3. Verify ownership via the DNS TXT record method (Vercel supports this)
4. Submit your sitemap: `https://yourdomainhere.com/sitemap.xml`
5. Wait 2–7 days for Google to start indexing

---

## 📊 Step 5: Google Analytics 4 (Optional)

1. Go to **[analytics.google.com](https://analytics.google.com)**
2. Create a new GA4 property for your domain
3. Get your **Measurement ID** (format: `G-XXXXXXXXXX`)
4. Add it to your `app/layout.tsx`:

```tsx
{/* Add inside <head> in layout.tsx */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<script dangerouslySetInnerHTML={{__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
`}} />
```

---

## ✏️ Step 6: Customize Before Launch

Before going live, update these placeholders:

| File | What to Update |
|---|---|
| `app/layout.tsx` | Replace `yourdomainhere.com` with your real domain |
| `app/sitemap.ts` | Replace `yourdomainhere.com` with your real domain |
| `app/robots.ts` | Replace `yourdomainhere.com` with your real domain |
| `components/Footer.tsx` | Update phone number, email, Facebook/Instagram handles |
| `components/FloatingChat.tsx` | Update WhatsApp number and Messenger username |
| `app/contact/page.tsx` | Update WhatsApp number and Messenger link |
| `components/sections/CTABanner.tsx` | Update WhatsApp link |
| All pages | Replace `ShowMoney Pro` with your actual agency name |

---

## 💡 SEO Checklist Before Launch

- [ ] All pages have unique titles and meta descriptions ✅ (done)
- [ ] sitemap.xml is submitted to Google Search Console
- [ ] robots.txt is accessible at `/robots.txt` ✅ (done)
- [ ] FAQ Schema markup is active ✅ (done)
- [ ] LocalBusiness JSON-LD schema active ✅ (done)
- [ ] OG images configured (add a `/public/og-image.jpg` — 1200×630px)
- [ ] Real phone number and address added to footer
- [ ] Google Analytics connected
- [ ] Google Search Console verified

---

## 📱 Going Viral: Social Sharing Tip

Create an OG image (1200×630px) with your logo and tagline, save it as `/public/og-image.jpg`. This makes your link look beautiful when shared on Facebook, Viber, and WhatsApp.

---

## 🆘 Need Help?

If anything breaks, check:
1. `npm run build` in your terminal — shows any TypeScript errors
2. Vercel dashboard → Deployments → check build logs
3. On Vercel, environment variables can be set under Settings → Environment Variables
