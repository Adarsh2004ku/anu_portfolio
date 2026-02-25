import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Kumari Anuradha | Fresher Web Developer",
  description:
    "Portfolio website of Kumari Anuradha, a fresher web developer passionate about building clean, responsive web experiences."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
