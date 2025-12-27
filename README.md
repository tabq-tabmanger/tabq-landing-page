# TabQ - Tab Manager for Chrome

A modern landing page for TabQ, a Chrome extension that helps you organize tabs into beautiful, customizable workspaces.

## Features

- **Workspace Organization** - Create beautiful workspaces to organize your tabs
- **Smart Tab Management** - Easily manage, access, and organize all your browser tabs
- **Clean New Tab Page** - Transform your new tab page into a powerful command center
- **Free to Use** - All core features are completely free

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI, Magic UI, Aceternity UI
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tabq-tabmanger/tabq-landing-page.git
   cd tabq-landing-page
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Run the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   └── (marketing)/     # Public pages (landing, features, privacy, etc.)
├── components/
│   ├── ui/              # UI primitives (Shadcn/Magic UI)
│   ├── navigation/      # Navbar and Footer
│   └── global/          # Shared components
├── utils/
│   ├── constants/       # App constants
│   └── functions/       # Utility functions
└── styles/              # Global styles
```

## Links

- [Chrome Web Store](https://chromewebstore.google.com/detail/tabq-tab-manager/bbackfjoenepphijbngcjlafamkenbef)

## License

MIT License - see [LICENSE](LICENSE) for details.
