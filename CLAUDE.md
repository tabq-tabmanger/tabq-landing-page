# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TabQ is a landing page for a Chrome extension tab manager built with Next.js 14. It provides information about the TabQ browser extension which helps users organize their tabs into beautiful, customizable workspaces.

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Architecture

### Tech Stack
- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS with Shadcn UI, Magic UI, Aceternity UI
- **Forms:** React Hook Form + Zod
- **State:** TanStack React Query

### Route Structure
- `src/app/(marketing)/` - Public pages (landing, features, terms, privacy, etc.)

### Key Directories
- `src/components/ui/` - Shadcn/Magic UI primitives
- `src/components/navigation/` - Navbar and Footer components
- `src/utils/constants/` - App constants (links, animations)
- `src/utils/functions/` - Utility functions (cn, metadata)

### Path Alias
Uses `@/*` to reference `./src/*` for imports.

## Environment Variables

```
NEXT_PUBLIC_APP_DOMAIN=
NEXT_PUBLIC_APP_NAME=TabQ
```
