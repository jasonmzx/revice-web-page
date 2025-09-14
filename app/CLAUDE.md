# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (Vite dev server with HMR)
- **Build for production**: `npm run build`
- **Lint code**: `npm run lint` (ESLint)
- **Preview production build**: `npm run preview`

## Project Architecture

This is a React + Vite single-page application for the Revice app landing page. The project follows a standard React Router setup with:

### Core Structure
- **Main entry**: `src/main.jsx` - React app entry point
- **App component**: `src/App.jsx` - Main router component with background gradient orbs
- **Navigation**: `src/components/Navigation.jsx` - Responsive navbar with mobile menu
- **Pages**: `src/pages/` - Route components (Home, About, Features, PrivacyPolicy, TermsOfService, GetSupport)
- **Styles**: `src/index.css` - Global CSS styles

### Routing
Uses React Router DOM with these routes:
- `/` - Home page
- `/about` - About page
- `/features` - Features page
- `/privacy-policy` - Privacy Policy
- `/terms-of-service` - Terms of Service
- `/get-support` - Support page (note: Contact.jsx was deleted, use GetSupport.jsx)

### Navigation Component Details
- Implements responsive navigation with mobile slide-out menu
- Has scroll-based styling changes (`scrolled` class)
- Includes app store download buttons (Apple/Google Play)
- Mobile menu includes footer links and download buttons
- **Bug to note**: Desktop navigation links to `/get-support` but mobile menu links to `/contact` (line 130-135 in Navigation.jsx)

### Assets
- Logo: `/REVICE_DARK_LOGO.png`
- App store buttons: `/apple_store_download_01.webp`, `/android_store_download.png`
- Currently has untracked file: `public/dashboard_0.png`

### Current State
The project has uncommitted changes across most components. The Contact page was deleted and replaced with GetSupport, but navigation routing inconsistencies remain.