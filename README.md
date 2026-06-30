# C.E.N.M. Healthcare Web

Frontend application for the **C.E.N.M. Healthcare** public website. The app presents healthcare staffing services, job listings, saved jobs, blog content, contact forms, legal pages, and multi-step job application flows.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Ant Design](https://img.shields.io/badge/Ant_Design-5-0170FE?logo=antdesign)

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Main Routes](#main-routes)
- [Requirements](#requirements)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Architecture](#architecture)
  - [API Layer](#api-layer)
  - [State Management](#state-management)
  - [Styling](#styling)
  - [SEO and Sitemap](#seo-and-sitemap)
- [Build and Deployment](#build-and-deployment)

---

## Tech Stack

| Package | Version | Purpose |
| --- | --- | --- |
| Next.js | 15 | App Router, SSR, and routing |
| React | 19 | UI rendering |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Utility-first styling |
| Ant Design | 5 | UI component library |
| Redux Toolkit | 2 | Global state and RTK Query |
| Framer Motion | 12 | Animations and transitions |
| React Icons | 5 | Icon library |
| SweetAlert2 | 11 | Alert and modal dialogs |
| next-sitemap | 4 | Sitemap and robots.txt generation |

---

## Features

- Public marketing pages for staffing, workforce, international, and client services
- Job listing, job detail, saved jobs, and multi-step job application pages
- Blog listing and blog detail pages
- Contact form integration
- About, terms, and privacy content fetched from the API
- Saved-jobs state persisted in browser `localStorage`
- SEO metadata, Open Graph metadata, sitemap, and robots.txt support

---

## Project Structure

```text
healthcare-web/
├── public/                   Static assets, robots.txt, and generated sitemap files
├── src/
│   ├── app/                  App Router pages, layouts, and providers
│   │   ├── about/
│   │   ├── all-jobs/
│   │   ├── apply-jobs/
│   │   ├── blogs/
│   │   ├── client-services/
│   │   ├── contact/
│   │   ├── international/
│   │   ├── privacy/
│   │   ├── saved-jobs/
│   │   ├── services/
│   │   ├── staffing_solutions/
│   │   ├── terms/
│   │   ├── workforce_solutions/
│   │   └── providers/        Redux and Ant Design registry providers
│   ├── assets/               Imported images, logos, and page artwork
│   ├── components/           Shared UI components
│   ├── context/              React context providers (e.g. SavedJobsContext)
│   ├── fonts/                Local font files
│   ├── redux/                Store, slices, RTK Query base API, and feature APIs
│   ├── services/             Server-side data fetching helpers
│   └── utils/                Shared utilities and Ant Design theme helpers
├── next.config.ts
├── next-sitemap.config.js
└── package.json
```

---

## Main Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page |
| `/about` | Company information |
| `/services` | Services overview |
| `/staffing_solutions` | Staffing solutions page |
| `/workforce_solutions` | Workforce solutions page |
| `/international` | International services page |
| `/client-services` | Client services page |
| `/all-jobs` | Job listings |
| `/all-jobs/[id]` | Job detail |
| `/saved-jobs` | Saved job list |
| `/saved-jobs/[id]` | Saved job detail |
| `/apply-jobs` | Application — personal information step |
| `/apply-jobs/edu-info` | Application — education step |
| `/apply-jobs/emp-history` | Application — employment history step |
| `/blogs` | Blog listing |
| `/blogs/[id]` | Blog detail |
| `/contact` | Contact page |
| `/privacy` | Privacy policy |
| `/terms` | Terms and conditions |

---

## Requirements

- **Node.js** 20 LTS or newer
- **npm** (the repository includes `package-lock.json`)
- A running backend API reachable at the configured `NEXT_PUBLIC_API_URL`

---

## Environment Variables

Create a `.env` file in the project root and provide the following values:

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_IMAGE_URL=https://api.example.com
```

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | Base URL for RTK Query and server-side fetch helpers |
| `NEXT_PUBLIC_IMAGE_URL` | Base URL used to construct image URLs returned from the API |

> **Note:** The `.env` file is intentionally excluded from Git. Never commit real API URLs, credentials, tokens, or deployment secrets.

---

## Getting Started

**1. Install dependencies**

```bash
npm install
```

**2. Configure environment variables**

Copy the example values into `.env` and replace with real values:

```bash
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_IMAGE_URL=https://your-image-url.com
```

**3. Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Next.js development server with Turbopack |
| `npm run build` | Create a production build and run `next-sitemap` afterward |
| `npm start` | Start the production server after a successful build |
| `npm run lint` | Run the configured Next.js ESLint check |
| `npm run postbuild` | Generate sitemap and robots files with `next-sitemap` (runs automatically after build) |

---

## Architecture

### API Layer

The shared RTK Query base API lives in `src/redux/api/baseApi/baseApi.ts` and uses `NEXT_PUBLIC_API_URL` as its `baseUrl`. Feature API modules are grouped under `src/redux/api` and `src/redux/features`.

Current API areas include:

- Authentication and user profile endpoints
- Jobs and job details
- Job application form submissions
- Blogs and blog categories
- Contact form submission
- About, terms, privacy, value, and settings content

### State Management

Global state is configured in `src/redux/store.ts`. The app uses:

- **Redux Toolkit** — auth slice and API middleware
- **RTK Query** — remote data fetching and mutations
- **SavedJobsContext** — saved jobs persisted to `localStorage`

### Styling

Global styles and Tailwind theme tokens are defined in `src/app/globals.css`. Ant Design components use a custom theme configured in `src/utils/antTheme.ts`.

### SEO and Sitemap

Global metadata is configured in `src/app/layout.tsx`. Sitemap and robots.txt generation are configured in `next-sitemap.config.js` with `https://cenmhealthcare.com` as the production site URL.

Production builds run `next-sitemap` automatically through the `postbuild` script.

---

## Build and Deployment

**Build for production:**

```bash
npm run build
```

**Start the production server locally:**

```bash
npm start
```

**Deploying to a hosting platform:**

1. Set `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_IMAGE_URL` in the platform's environment settings.
2. Ensure the backend API allows requests from the deployed site's domain (CORS).
3. Run `npm run build` as the build command and `npm start` as the start command.
