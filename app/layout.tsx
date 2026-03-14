import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { CookieConsent } from "@/components/cookie-consent";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { DocumentTitle } from "@/components/document-title";
import { StructuredData } from "@/components/structured-data";

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
        <StructuredData />
        <DocumentTitle />
        {children}
        <Analytics />
        <SiteFooter />
        <BackToTop />
        <CookieConsent />
        <div dangerouslySetInnerHTML={{ __html: "<nagishli></nagishli>" }} suppressHydrationWarning />
        <Script src="https://code.jquery.com/jquery-1.8.0.min.js" strategy="beforeInteractive" />
        <Script src="/nagishli.js?v=2.3" strategy="afterInteractive" />
      </body>
    </html>
  );
}