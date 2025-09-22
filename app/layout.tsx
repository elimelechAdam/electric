import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { CookieConsent } from "@/components/cookie-consent";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin", "hebrew"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});


export const metadata: Metadata = {
  title: "MS Electrical Solutions",
  description: "אני מציע פתרונות חשמל חכמים ושירותי Handyman לכל בית או משרד, עם מענה מהיר ועבודה מוקפדת עד הפרט האחרון",
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
        <Analytics />
        <SiteFooter />
        <BackToTop />
        <CookieConsent />
        {/* @ts-ignore */}
        <Script src="/nagishli.js?v=2.3" nl_pos = "br" charSet="utf-8" defer></Script>
      </body>
    </html>
  );
}
