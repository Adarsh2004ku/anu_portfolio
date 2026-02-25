import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Kumari Anuradha | Fresher Web Developer",
  description:
    "Portfolio website of Kumari Anuradha, a fresher web developer passionate about building clean, responsive web experiences."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50">
        {children}
      </body>
    </html>
  );
}
