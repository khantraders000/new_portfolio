<<<<<<< HEAD
# new_portfolio
=======
# Ayan Khan — Portfolio (Next.js + Express)

Two folders:

- **/frontend** — Next.js 14 (App Router, JSX), Tailwind CSS, GSAP, Lenis (smooth scroll), Framer Motion
- **/server** — Express API that handles the contact form (and can email you via SMTP)

## 1. Run the backend

```bash
cd server
cp .env.example .env      # then fill in SMTP details if you want real emails
npm install
npm run dev                # http://localhost:5000
```

Without SMTP configured, submitted messages are just printed to the server console — useful for local testing.

## 2. Run the frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev                # http://localhost:3000
```

## 3. Replace placeholders before going live

- `/frontend/public/ayan-photo.jpg` — your photo (About section)
- `/frontend/public/resume.pdf` — your resume (Resume section)
- `/frontend/src/data/content.js` — your real WhatsApp number, phone, email, GitHub/LinkedIn links, and project live/source links
- `server/.env` — your real SMTP credentials so the contact form actually emails you

## 4. Deploy

- **Frontend** → Vercel (works out of the box for Next.js). Set `NEXT_PUBLIC_API_URL` in Vercel's project settings to your deployed backend URL.
- **Backend** → Render / Railway / any Node host. Set `CORS_ORIGIN` to your deployed frontend URL, plus the SMTP env vars.

## Stack

Next.js, React, Tailwind CSS, GSAP + ScrollTrigger, Lenis, Framer Motion, Express, Nodemailer.
>>>>>>> 9626df7 (first commit portfolio)
