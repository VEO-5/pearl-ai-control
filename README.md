# Pearl AI Control

A modern AI control interface built with Next.js, TypeScript, and Tailwind CSS.

## Overview

Pearl AI Control is a web-based application for AI interaction and control, featuring a sleek dark UI with animated elements, real-time capabilities, and a comprehensive set of tools for managing AI conversations and agents.

## Features

- **Modern Dark UI** - Clean, professional dark theme with accent colors
- **Real-time AI Chat** - Interactive AI conversation interface
- **Agent Management** - Create, manage, and monitor AI agents
- **Animated Components** - Blobs, marquee, and interactive visual elements
- **Responsive Design** - Works seamlessly across mobile and desktop
- **Type-Safe** - Full TypeScript support with strict typing

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Animations**: Framer Motion, CSS animations
- **Hooks**: Custom hooks for mobile detection, etc.

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build

```bash
npm run build
# or
yarn build
# or
bun run build
```

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # UI components
│   ├── pearl/        # Pearl-themed components
│   └── ui/           # Base UI components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── routes/           # Route definitions
└── styles/           # Global styles
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start development server |
| `build` | Build for production |
| `start` | Start production server |
| `lint` | Run ESLint |
| `typecheck` | Run TypeScript type checking |

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

Built with ❤️ using modern web technologies.