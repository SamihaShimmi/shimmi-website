# Quick Start Guide

## Prerequisites
- Node.js (v18 or higher) - Download from https://nodejs.org/

## Installation Steps

### Option 1: Using pnpm (Recommended)

1. Install pnpm globally:
   ```bash
   npm install -g pnpm
   ```

2. Install project dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

### Option 2: Using npm

1. Install project dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Access the Website

Once the server is running, open your browser and navigate to:
- **Development**: http://localhost:3000

## Available Scripts

- `pnpm dev` or `npm run dev` - Start development server
- `pnpm build` or `npm run build` - Build for production
- `pnpm start` or `npm start` - Start production server (after building)

## Configuration

1. Update site metadata in `app/lib/config.ts`
2. Update routes in `app/sitemap.ts`
3. Add blog posts in the `/content` folder

