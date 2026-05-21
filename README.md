# Theravada Buddha Sasana Organization (TBSO) Website

Non-profit Buddhist organization website built with pure HTML, CSS, and JavaScript. Deployed via GitHub Pages.

## 🌟 Features

- **6 Pages**: Home, About, Events, Services, Support Us, Calendar
- **Mobile-Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **WCAG Accessible**: Semantic HTML, ARIA labels, keyboard navigation
- **Calm Design**: Warm earth tones, generous whitespace, soft typography
- **No Build Process**: Pure static files for easy maintenance
- **Google Calendar Integration**: Embedded calendar for upcoming events
- **YouTube Videos**: Embedded dhamma teachings

## 📁 Project Structure

```
tbso/
├── index.html              # Home page
├── about.html              # About TBSO, monk bio & management team
├── events.html             # Events (upcoming & past)
├── services.html           # Weekly services, calendar & videos
├── support-us.html         # Donations, donor lists & contact form
├── calendar.html           # 12-month calendar (2026)
├── css/
│   ├── normalize.css       # CSS reset
│   ├── variables.css       # Design tokens
│   ├── base.css            # Global styles
│   ├── layout.css          # Header/footer/grid
│   ├── components.css      # Reusable components
│   └── utilities.css       # Helper classes
├── js/
│   └── main.js             # Mobile menu & animations
├── assets/
│   └── images/
│       ├── 2026calendar/   # Monthly calendar images
│       └── *.png, *.webp   # Hero, events, QR codes
└── .nojekyll               # GitHub Pages config
```

## 🎨 Design System

### Colors
- **Warm Cream** (#FAF6EE) - Primary background
- **Ivory** (#F5F0E6) - Alternating sections
- **Earth Brown** (#2C1F12) - Headers, primary text
- **Saffron Gold** (#D4AF37) - Accent, links
- **Muted Gold** (#C9A84C) - Hover states
- **Monk Robe Orange** (#C67A2E) - Cultural accent

### Typography
- **Headings**: Cormorant Garamond (serif, weights 300-600)
- **Body**: Lato (sans-serif, weights 300/400/700)
- **Spacing**: 8-level scale (0.5rem to 8rem)

### Responsive Breakpoints
- Mobile: 0-640px (default)
- Medium: 641px-1024px
- Large: 1025px+

## 🚀 Deployment

### Current Hosting Setup

**Platform**: Vercel (Hobby Plan - Free)
- **Repository**: https://github.com/michelleaint/tbsousa
- **Branch**: `main`
- **Plan**: [Hobby Plan](https://vercel.com/docs/plans/hobby) (free tier)
- **Status**: No need to upgrade to Pro Plan yet

**Domain Management**:
- **Domain Registrar**: Bluehost (http://bluehost.com)
- **DNS Configuration**: DNS entries updated in Bluehost to point to Vercel
- **Previous Host**: Bluehost (migrated to Vercel for better performance)

### How Deployment Works

1. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```

2. **Automatic Deployment**:
   - Vercel automatically detects changes to `main` branch
   - Builds and deploys within seconds
   - No manual configuration needed

3. **Vercel Dashboard**:
   - View deployments: https://vercel.com/dashboard
   - Monitor build logs and preview deployments
   - Configure custom domain settings

## 📝 Content Updates

### How to Update Content

All content is in HTML files. Edit directly:

**Update Events** (events.html):
```html
<article class="event-card">
  <div class="event-date">
    <span class="event-date-day">23</span>
    <span class="event-date-month">May</span>
  </div>
  <div class="event-details">
    <h3 class="event-title">Your Event Title</h3>
    <!-- Update description -->
  </div>
</article>
```

**Update Contact Info** (all pages footer):
```html
<address>
  <p>
    <strong>Theravada Buddha Sasana Organization</strong><br>
    [Your Address]<br>
    City, State ZIP
  </p>
</address>
```

**Update Calendar** (calendar.html):
Replace calendar images in `assets/images/` folder annually.

### Forms Configuration

Forms use Formspree (free tier, 50 submissions/month).

**Current Setup**:
- Form ID: `xqewwokz`
- Email: `tbsomahasi@gmail.com`
- Form location: `support-us.html` (Send Us a Message section)

**To update**:
```html
<form action="https://formspree.io/f/xqewwokz" method="POST">
```

## 🛠️ Development

### Local Testing

Open `index.html` in browser directly, or use local server:

```bash
# Python 3
python3 -m http.server 8000

# Visit http://localhost:8000
```

### Browser Support

Tested on:
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari iOS 12+
- Chrome Android (last 2 versions)

## ♿ Accessibility

Features:
- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Skip-to-content link
- Focus indicators
- Color contrast: 4.5:1 minimum
- Alt text for all images
- Form labels properly associated

Test with:
- WAVE tool: https://wave.webaim.org/
- Lighthouse (Chrome DevTools)
- Screen readers (NVDA, JAWS, VoiceOver)

## 📦 Assets

### Images Included
- Hero backgrounds (hero-monk-robes.png, section-temple-garden.png)
- Monk photo (pannobhasa.webp)
- Event images (event-vesak-celebration.png)
- QR codes: Venmo (@A-Panno), Zelle ((360) 348-6666), PayPal
- Calendar images: 12 months in assets/images/2026calendar/

### Image Optimization
All images optimized for web. To further optimize:
- Use TinyPNG: https://tinypng.com/
- Or Squoosh: https://squoosh.app/

## 📄 License

© 2026 Theravada Buddha Sasana Organization. All rights reserved.

TBSO is a registered 501(c)(3) non-profit organization.

## 📞 Contact

**Theravada Buddha Sasana Organization**
- Address: 17730 Broadway Ave, Snohomish, WA 98296
- Phone: (360) 243-3468
- Email: tbsomahasi@gmail.com
- Facebook: https://www.facebook.com/tbsomahasi
- YouTube: https://www.youtube.com/@tbsomahasi1810

---

**Built with ❤️ and 🪷 for the TBSO community**

*May all beings be happy and free from suffering. Sādhu Sādhu Sādhu*
