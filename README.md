# Tech Blog System

A modern, full-stack technical blog system built with **NestJS** (Backend) and **React** (Frontend).

## Features

- **Cyberpunk UI Design**: Immersive dark mode interface with neon accents.
- **Full-Stack TypeScript**: Shared types between client and server.
- **Modern Tech Stack**:
  - **Backend**: NestJS, Fastify (optional), TypeORM (planned)
  - **Frontend**: React 18, Vite, MUI v5
  - **Monorepo**: Managed by pnpm workspaces

## Project Structure

- `packages/client`: React frontend application (Vite)
- `packages/server`: NestJS backend API
- `packages/domain`: Shared interfaces and types
- `packages/lib`: Shared utility functions

## Getting Started

### Prerequisites

- Node.js (v16+)
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Build shared packages
pnpm build:common
```

### Development

Start the development servers (Client + Server):

```bash
pnpm start:common
# or manually:
# pnpm --filter @nest-react/server start:dev
# pnpm --filter @nest-react/client-vite start:dev
```

- **Frontend**: [http://localhost:8000](http://localhost:8000)
- **Backend API**: [http://localhost:4000](http://localhost:4000)

## Deployment

Build Docker images:

```bash
pnpm build-push:server
pnpm build-push:client
```

## License

LGPL-3.0-or-later
