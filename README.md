## Basic Subscription Next.js Template using Convex and Clerk

A minimal Next.js 15 application demonstrating authentication with Clerk, basic plan-gated UI ("pro" plan), and a Convex client setup. The app includes a protected page that checks the user's Clerk plan and shows a Pricing Table when access is not granted. Example content is fetched from public APIs for demo purposes.

### Tech stack
- **Next.js**: 15.4.6 (App Router)
- **React**: 19
- **TypeScript**
- **Clerk**: Authentication, pricing table, middleware protection
- **Convex (client)**: Configured client provider; no Convex functions are defined in this repo
- **Tailwind CSS**: v4 (with PostCSS)
- **UI**: Lightweight components from Shadcn/ui (button, card, input, separator, skeleton) and `sonner` toasts

### Features present
- **Authentication with Clerk**: Sign-in and sign-up routes, `UserButton` in the navbar, middleware-based route protection
- **Plan-gated content**: Server-side check for Clerk plan `pro` on `/exclusive-content`
- **Pricing Table**: Renders Clerk's `<PricingTable />` when the user does not have access
- **Example content**: Fetches posts from `jsonplaceholder.typicode.com` and images from `picsum.photos` (served from `fastly.picsum.photos`)
- **Image optimization**: `next.config.ts` allows remote images from `fastly.picsum.photos`
- **Convex client provider**: Configured for use with Clerk; requires a Convex deployment URL

> Note: This repository does not define Convex server functions. The plan check relies on Clerk. Pricing UI, payment integration is provided by Clerk's component.

### Routes
- `/`: Home with navbar and two cards (free and pro). The pro card is wrapped in Clerk's `<Protect plan="pro">`.
- `/exclusive-content`: Protected page. If the user lacks `pro` plan, shows a card with a message and a `<PricingTable />`. Otherwise, shows a grid of example content.
- `/sign-in`: Clerk sign-in page.
- `/sign-up`: Clerk sign-up page.

### Middleware
`src/middleware.ts` uses Clerk middleware to protect all routes except:
- `/sign-in(.*)`
- `/sign-up(.*)`

### Environment variables
Here are the required variables for Clerk and Convex: 

```bash
# CONVEX
CONVEX_DEPLOYMENT=""
NEXT_PUBLIC_CONVEX_URL=""
# REFER to https://docs.convex.dev/auth/clerk
CLERK_FRONTEND_API_URL="" 

# CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
# FOR CUSTOM sign-in page refer to https://clerk.com/docs/references/nextjs/custom-sign-in-or-up-page
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# FOR CUSTOM sign-up page refer to https://clerk.com/docs/references/nextjs/custom-sign-up-page
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
```

### Scripts
Defined in `package.json`:
- `dev`: Run Next.js in development mode
- `dev:convex`: Start Convex dev environment (generates URLs and codegen)
- `build`: Build the Next.js app
- `start`: Start the Next.js production server
- `lint`: Lint the project

### Getting started
1. Install dependencies
   ```bash
   npm install
   ```
2. Start Convex (separate terminal)
   ```bash
   npm run dev:convex
   ```
3. Configure Clerk
   - Make sure you follow the configuration provided by convex, refer here: https://docs.convex.dev/auth/clerk
4. Run the Next.js app
   ```bash
   npm run dev
   ```
5. Open the app at `http://localhost:3000`
   - Use `/sign-in` or `/sign-up` to authenticate.
   - Visit `/exclusive-content` to see plan-gated behavior.

### Project structure (selected)
```text
convex/
  _generated/                # Convex codegen artifacts
  auth.config.ts             # Convex auth provider configuration (Clerk)
src/
  app/
    _component/
      content.tsx            # Home page content with <Protect plan="pro">
      navbar.tsx             # Navbar with Clerk <UserButton /> and logos
      pricing.tsx            # Clerk <PricingTable />
    exclusive-content/
      _components/
        ContentCard.tsx
        contents.tsx         # Fetches posts and images from public APIs
      page.tsx               # Plan check with server-side auth().has({ plan: 'pro' })
    page.tsx                 # Home page
    layout.tsx               # Root layout with <AppProvider />
    globals.css              # Tailwind v4 theme tokens and layers
    sign-in/[[...sign-in]]/page.tsx
    sign-up/[[...sign-up]]/page.tsx
  components/
    provider/
      app.tsx                # Wraps app with <ClerkProvider> and <ConvexClientProvider>
      convex-client-provider.tsx
    ui/                      # Small UI primitives (button, card, input, etc.)
  lib/
    types/
      common.ts
  middleware.ts              # Clerk route protection (public: sign-in, sign-up)
public/
  clerk.png, convex.png      # Navbar logos
next.config.ts               # remotePatterns for fastly.picsum.photos
package.json                 # Scripts and dependencies
```

### Notes
- The images for exclusive content are requested from `picsum.photos` and are served by `fastly.picsum.photos`, which is allowed in `next.config.ts`.
- If `NEXT_PUBLIC_CONVEX_URL` is missing, the app will throw at startup (see `convex-client-provider.tsx`).
- This template demonstrates plan gating and Billing Feature using Clerk and does not implement Convex server functions.
