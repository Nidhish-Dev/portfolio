// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // ← adjust path if your Navbar is somewhere else

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Nidhish's Portfolio",
  description: "Personal portfolio of Nidhish – showcasing projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${jetbrainsMono.variable} antialiased bg-[#030712] text-slate-100 min-h-screen selection:bg-emerald-500/20 selection:text-emerald-400`}>
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}