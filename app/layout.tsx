import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Petersen Portfolio | Chotikorn Sittakornkowit",
  description: "Computer Science Student at Phetchabun Rajabhat University. Full Stack Developer passionate about creating innovative web solutions.",
  keywords: ["Petersen", "Chotikorn Sittakornkowit", "Portfolio", "Web Developer", "Computer Science", "Full Stack Developer"],
  authors: [{ name: "Chotikorn Sittakornkowit" }],
  openGraph: {
    title: "Petersen Portfolio",
    description: "Computer Science Student | Full Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${kanit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
