# Mike Walsh — Portfolio

Personal portfolio of Mike Walsh — a product manager who builds his own products. Built with **Next.js (App Router)** and **Tailwind CSS**.

🔗 **Live:** _add your Vercel URL here_

## Highlights

- **Server Components** — the NFL and NCAA pages fetch live data from the ESPN API
  on the server (cached + revalidated every 60s), so there's no client-side loading
  flash and the markup ships pre-rendered.
- **API route handler** — the contact form posts to `app/api/contact`, which validates
  the input and sends email via [Resend](https://resend.com).
- **Tailwind** dark theme, `next/image` optimization, and `framer-motion` page transitions.

## Tech stack

Next.js 15 · React 19 · Tailwind CSS · Resend · Framer Motion · deployed on Vercel.

## Project structure

```
app/
  layout.jsx / template.jsx   # shell + page transitions
  page.jsx                    # home
  projects, resume, contact, thank-you
  nfl, ncaa                   # async Server Components (ESPN)
  api/contact/route.js        # Resend handler
components/                   # Navigation, Footer, Card, Scoreboard
lib/espn.js                   # ESPN fetch helper
data/projects.js              # static project content
```

## Local development

```bash
npm install
cp .env.local.example .env.local   # fill in Resend values
npm run dev                         # http://localhost:3000
```

### Environment variables

| Variable             | Purpose                                            |
| -------------------- | -------------------------------------------------- |
| `RESEND_API_KEY`     | Resend API key                                     |
| `CONTACT_FROM_EMAIL` | Sender (a domain verified in Resend)               |
| `CONTACT_TO_EMAIL`   | Where contact submissions are delivered            |

## Build

```bash
npm run build && npm run start
```

## Deploy

Deployed on [Vercel](https://vercel.com). Set the three environment variables above
in the project settings, then connect the repo — pushes build and deploy automatically.
