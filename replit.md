# Hero Digital Labs - Website Project

## Overview

Hero Digital Labs is a modern web design agency specializing in website design and redesign services for small businesses. The application is a single-page marketing website built with React and Express, featuring a SaaS-style aesthetic with dark mode support. The site positions Hero Digital Labs as a trusted agency for high-performing websites that convert visitors into clients, with a focus on the Gold Coast and Australian market.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for UI components
- Vite for build tooling and development server
- Wouter for client-side routing
- TanStack Query (React Query) for data fetching and state management
- Tailwind CSS with shadcn/ui component library for styling

**Design System:**
- Dark mode foundation with charcoal background (#0E1117) and electric blue accents (#00B7FF)
- Theme provider with localStorage persistence for light/dark mode switching
- Custom Tailwind configuration with HSL color variables for theming
- Responsive, mobile-first approach with generous whitespace
- Inter font family for typography
- Radix UI primitives for accessible component foundations

**Component Structure:**
- Page components in `/client/src/pages` (Home, NotFound)
- Reusable UI components in `/client/src/components` (Navigation, HeroSection, SolutionsSection, TestimonialsSection, AboutSection, ContactSection, Footer)
- Shared UI primitives in `/client/src/components/ui` (shadcn/ui components)
- Theme management through ThemeProvider context

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- Vite middleware integration for development HMR
- Memory-based storage implementation (MemStorage class)
- Modular route registration system

**Data Layer:**
- Drizzle ORM configured for PostgreSQL
- Schema defined in `/shared/schema.ts` with user authentication structure
- Migration system via drizzle-kit
- Currently using in-memory storage with interface for database operations

**API Design:**
- RESTful endpoints prefixed with `/api`
- Request/response logging middleware
- JSON body parsing and URL encoding support
- Error handling middleware for consistent error responses

### Build & Deployment

**Development:**
- Concurrent Vite dev server with Express backend
- Hot Module Replacement (HMR) enabled
- TypeScript type checking without emission
- ESM module system throughout

**Production:**
- Vite builds client bundle to `/dist/public`
- esbuild compiles server code to `/dist`
- Static file serving from build output
- Node.js production server

### Form Handling & Integrations

**Contact Form:**
- React Hook Form with Zod validation (@hookform/resolvers)
- Webhook integration for form submissions (n8n)
- Toast notifications for user feedback
- Form fields: name, business name, email, website URL, message

**Third-Party Integrations:**
- Voiceflow chat widget for AI assistant functionality
- Project ID: 68e36dca66acbe3e31c37cfc
- Production version deployment
- Widget loaded dynamically via CDN script

## External Dependencies

### Database & ORM
- **Drizzle ORM** (v0.39.1) - Type-safe database toolkit
- **@neondatabase/serverless** (v0.10.4) - Neon PostgreSQL serverless driver
- **drizzle-zod** (v0.7.0) - Zod schema generation from Drizzle schemas
- PostgreSQL database (configured but not yet provisioned)

### UI Component Libraries
- **Radix UI** - Comprehensive set of accessible component primitives (accordion, dialog, dropdown, select, etc.)
- **shadcn/ui** - Pre-built components using Radix UI and Tailwind CSS
- **Lucide React** - Icon library
- **React Icons** - Additional icon set (used for social media icons)

### Styling & Utilities
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Component variant management
- **clsx** & **tailwind-merge** - Class name utilities
- **cmdk** - Command menu component

### Form & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Validation resolver for React Hook Form

### State Management
- **TanStack React Query** (v5.60.5) - Data fetching and caching

### Development Tools
- **Vite** - Build tool and dev server
- **esbuild** - JavaScript bundler
- **TypeScript** - Type safety
- **@replit/vite-plugin-runtime-error-modal** - Error overlay for Replit
- **@replit/vite-plugin-cartographer** - Replit integration
- **@replit/vite-plugin-dev-banner** - Development banner

### External Services
- **Voiceflow** - AI chatbot/assistant platform
- **n8n** (webhook) - Automation platform for form submissions
- **Google Fonts** - Inter font family

### Session & Storage
- **connect-pg-simple** (v10.0.0) - PostgreSQL session store for Express
- Currently using in-memory storage with planned database integration