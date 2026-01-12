# Andi Asyraful Portfolio

[![Deploy to Vercel](https://github.com/asrapul/portfolionext/actions/workflows/deploy.yml/badge.svg)](https://github.com/asrapul/portfolionext/actions/workflows/deploy.yml)

A simple dark-themed portfolio website built with Next.js.

## 🚀 Live Demo

- **Production**: [portfolionext.vercel.app](https://portfolionext.vercel.app)

## ✨ Features

- Dark theme design
- Responsive layout
- Smooth scroll navigation
- Auto-deploy via GitHub Actions + Vercel

## 🛠️ Tech Stack

- Next.js 16
- React
- TypeScript
- Vercel (Hosting)
- GitHub Actions (CI/CD)

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## 🔄 CI/CD

This project uses GitHub Actions for continuous deployment:
- **Push to main** → Auto-deploy to production
- **Pull Request** → Auto-deploy to preview

## 📁 Project Structure

```
├── .github/workflows/deploy.yml  # CI/CD workflow
├── src/app/
│   ├── page.tsx                  # Main portfolio page
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
└── package.json
```

## 📝 License

© 2025 Andi Asyraful. All rights reserved.
