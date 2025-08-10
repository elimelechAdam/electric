import type { Metadata } from "next";
import { Assistant, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin", "hebrew"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MS Electrical Solutions",
  description: "שירותי תיקון חשמל מקצועיים עם יותר מעשור של ניסיון. עבודה איכותית ופתרונות אמינים לכל צרכי החשמל שלכם.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${assistant.variable} antialiased font-assistant`}
      >
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
