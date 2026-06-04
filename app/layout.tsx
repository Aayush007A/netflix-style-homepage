import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netflix Redesign | Home",
  description: "A Netflix-style homepage built with Next.js, Tailwind CSS, and Shadcn/UI.",
};


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={plusJakartaSans.className + " font-sans bg-background text-foreground min-h-screen"}>
        {children}
      </body>
    </html>
  );
}
