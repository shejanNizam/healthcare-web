# C.E.N.M. Healthcare Web

Frontend application for the C.E.N.M. Healthcare public website. The app presents healthcare staffing services, job listings, saved jobs, blog content, contact forms, legal pages, and multi-step job application flows.

## Tech Stack

- Next.js 15 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Ant Design 5
- Redux Toolkit and RTK Query
- Framer Motion
- SweetAlert2
- next-sitemap for sitemap and robots generation

## Features

- Public marketing pages for staffing, workforce, international, and client services
- Job listing, job detail, saved jobs, and job application pages
- Blog listing and blog detail pages
- Contact form integration
- About, terms, and privacy content from the API
- Local saved-jobs state persisted in browser storage
- SEO metadata, Open Graph metadata, sitemap, and robots support

## Project Structure

```text
src/
  app/                  App Router pages, layouts, and providers
  assets/               Imported images, logos, and page artwork
  components/           Shared UI components
  context/              React context providers
  fonts/                Local font files
  redux/                Store, slices, RTK Query base API, and feature APIs
  services/             Server-side data fetching helpers
  utils/                Shared utilities and theme helpers
public/                 Static public assets, robots, and generated sitemap files
```

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
| `/all-jobs/[id]` | Job details |
| `/saved-jobs` | Saved job list |
| `/saved-jobs/[id]` | Saved job details |
| `/apply-jobs` | Application personal information step |
| `/apply-jobs/edu-info` | Application education step |
| `/apply-jobs/emp-history` | Application employment history step |
| `/blogs` | Blog listing |
| `/blogs/[id]` | Blog details |
| `/contact` | Contact page |
| `/privacy` | Privacy policy |
| `/terms` | Terms and conditions |

## Requirements

- Node.js 20 LTS or newer is recommended
- npm, because this repository includes `package-lock.json`
- A running backend API that supports the configured public API URL

## Environment Variables

Create a local environment file such as `.env.local` and provide these values:

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_IMAGE_URL=https://api.example.com
```

`NEXT_PUBLIC_API_URL` is used by RTK Query and server-side fetch helpers as the API base URL. `NEXT_PUBLIC_IMAGE_URL` is used to build image URLs returned from the API.

Environment files are intentionally ignored by Git. Do not commit real API URLs, credentials, tokens, or deployment secrets.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Next.js development server with Turbopack |
| `npm run build` | Create a production build and run `next-sitemap` afterward |
| `npm start` | Start the production server after a successful build |
| `npm run lint` | Run the configured Next.js lint command |
| `npm run postbuild` | Generate sitemap and robots files with `next-sitemap` |

## API Layer

The shared RTK Query base API lives in `src/redux/api/baseApi/baseApi.ts` and uses `NEXT_PUBLIC_API_URL` as its `baseUrl`. Feature API modules are grouped under `src/redux/api` and `src/redux/features`.

Current API areas include:

- Authentication and user profile endpoints
- Jobs and job details
- Job application form submissions
- Blogs and blog categories
- Contact form submission
- About, terms, privacy, value, and settings content

## State Management

Global state is configured in `src/redux/store.ts`. The app uses:

- Redux Toolkit for the auth slice and API middleware
- RTK Query for remote data fetching and mutations
- `SavedJobsContext` for saved jobs persisted to `localStorage`

## Styling

Global styles and Tailwind theme tokens are defined in `src/app/globals.css`. The app also uses Ant Design components with the custom theme helper in `src/utils/antTheme.ts`.

## SEO and Sitemap

Global metadata is configured in `src/app/layout.tsx`. Sitemap and robots generation are configured in `next-sitemap.config.js` with `https://cenmhealthcare.com` as the production site URL.

Production builds run `next-sitemap` automatically through the `postbuild` script.

## Build and Deployment

Create a production build:

```bash
npm run build
```

Start the production server locally:

```bash
npm start
```

For deployment, configure the same environment variables in the hosting platform and make sure the backend API allows requests from the deployed site domain.
