# 🧑‍💻 Ansh Singh — Developer Portfolio

A minimalist, high-performance, and modern developer portfolio built using **Next.js 14 (App Router)**, **React**, **Tailwind CSS**, **Shadcn UI**, and **Magic UI**. Fully responsive and optimized with floating background particles, seamless transitions, and a timezone-agnostic GitHub contribution activity graph.

## 🌐 Live Preview

Check out the live version: [portfolio-ansh-singh.vercel.app](https://portfolio-ansh-singh.vercel.app/)

---

## ✨ Features

- ⚡ **Next.js 14 App Router** & **React** for modern server/client rendering
- 🎨 Beautiful UI styling with **Tailwind CSS** (curated palettes, blur backdrops, thin borders)
- 💎 Accessible components from **Shadcn UI**
- 🪄 Immersive animations and hover grids from **Magic UI** & **Framer Motion**
- 🌌 Floating background particles animation across all pages
- 🌙 Sleek, custom-built dark mode and light mode switcher
- 📊 Timezone-agnostic **GitHub Contribution Calendar** (utilizes a secure, tokenless scraping API fallback)
- 📱 Mobile-first responsiveness (custom-centered Bottom Navigation Dock, stacked grid elements, no horizontal overflow)

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI, Magic UI, Framer Motion
- **Icons**: Lucide React, Simple Icons

---

## 📂 Project Highlights

The portfolio showcases key end-to-end projects:
1. **YouTube Comment Sentiment Analysis**: An MLOps & ML engineering pipeline utilizing LightGBM, Flask backend, and a React (Vite) visual analytics dashboard. Versioned via DVC and tracked with MLflow.
2. **DairyDesk**: An offline-first, high-performance ledger application for dairy hubs in rural India. Built with Flutter, Dart, Drift (SQLite), Node.js, and GCP.
3. **StudyNotion**: An immersive EdTech platform built with React, Node.js, Express, MongoDB, Cloudinary, and Stripe integration.
4. **Medi Connect**: A telemedicine platform mapping patients and clinics featuring remote video consultations, booking systems, and Hugging Face API integration.
5. **MetaVote**: A decentralized, secure voting system utilizing Solidity smart contracts, Hardhat, Ethers.js, and MetaMask.

---

## 🚀 Getting Started

To run this portfolio locally on your machine, follow these steps:

### 1. Prerequisites
Ensure you have Node.js (v18+) and npm/pnpm installed on your system.

### 2. Clone the Repository
```bash
git clone https://github.com/SinghAnsh07/Portfolio.git
cd Portfolio
```

### 3. Setup Environment Variables
Copy the `.env.example` file to create your own local `.env` configuration:
```bash
cp .env.example .env
```
Open the `.env` file and insert your GitHub Personal Access Token (classic) to fetch contribution counts:
```env
GITHUB_TOKEN=your_personal_access_token_here
```
> **Note:** If the token is omitted or missing, the API route automatically falls back to scraping public data so the calendar layout remains functional.

### 4. Install Dependencies
Using npm:
```bash
npm install
```
Or using pnpm:
```bash
pnpm install
```

### 5. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 6. Build for Production
```bash
npm run build
npm run start
```

---

## ⚙️ Deployment

This project is optimized for deployment on the [Vercel Platform](https://vercel.com).
To deploy:
1. Connect your GitHub repository to Vercel.
2. Configure your Environment Variables in the project settings dashboard (add `GITHUB_TOKEN`).
3. Click **Deploy**. Vercel will build and serve the portfolio globally.
