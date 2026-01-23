# Petersen Portfolio | Chotikorn Sittakornkowit

A modern, high-performance, and visually stunning portfolio website built with **Next.js 16**, **Tailwind CSS**, and **Framer Motion**. Featuring a sleek dark-themed design with Glassmorphism effects, interactive animations, and a smooth user experience.

## 🚀 Features

- **Responsive Design**: Optimized for all devices—mobile, tablet, and desktop.
- **Glassmorphism UI**: Beautiful semi-transparent layouts with backdrop blur effects.
- **Dynamic Animations**: Powered by Framer Motion for scroll-triggered entrances and hover interactions.
- **Interactive Particles**: Subtle background animations using `react-tsparticles`.
- **Custom Cursor**: A unique, interactive cursor that follows the user.
- **Contact Form**: Integrated with **EmailJS** for direct messaging functionality.
- **Smooth Navigation**: One-page smooth scrolling with auto-hiding navbar.

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (App Router), [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts**: [Google Fonts (Kanit)](https://fonts.google.com/specimen/Kanit)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## 📂 Project Structure

```text
app/
├── assets/         # Images and icons
├── components/     # Reusable UI components (Navbar, Particles, etc.)
├── sections/       # Main website sections (Home, About, Projects, etc.)
├── globals.css     # Global styles and Tailwind variants
└── layout.tsx      # Main layout and metadata
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Petersenz/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
# or
bun install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root directory and add your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Run the development server

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.

## 🚢 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).
When deploying, make sure to add the environment variables listed in the **Setup** section to your Vercel project settings.

## 👤 Author

**Chotikorn Sittakornkowit (Petersen)**

- Computer Science Student at Phetchabun Rajabhat University
- GitHub: [@Petersenz](https://github.com/Petersenz)
- Instagram: [@wintrv.pxtr](https://www.instagram.com/wintrv.pxtr/)
- Email: [chotikorn.works@gmail.com](mailto:chotikorn.works@gmail.com)

---

_Created by Petersen_
