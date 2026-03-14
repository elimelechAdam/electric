import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { CookieConsent } from "@/components/cookie-consent";
import { Analytics } from "@vercel/analytics/next";
import { StructuredData } from "@/components/structured-data";
import { DocumentTitle } from "@/components/document-title";
import Script from "next/script";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin", "hebrew"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});

const baseUrl = "https://mses.co.il";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "חשמלאי מקצועי במרכז וראשון לציון | שירותי חשמל והנדימן – MS Electrical Solutions",
    template: "%s | MS Electrical Solutions",
  },
  description: "חשמלאי עד הבית והנדימן מקצועי במרכז, ראשון לציון וחולון. תיקוני חשמל מהירים, תחזוקת בית ומשרד, שירות 24/7. צרו קשר עכשיו.",
  keywords: ["חשמלאי מקצועי", "שירותי חשמל לבית", "שירותי חשמל למשרד", "הנדימן לבית", "תיקוני חשמל", "תחזוקת בית", "חשמלאי בראשון לציון", "חשמלאי במרכז", "שירותי הנדימן"],
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: baseUrl,
    siteName: "MS Electrical Solutions",
    title: "חשמלאי מקצועי במרכז וראשון לציון | שירותי חשמל והנדימן",
    description: "שירותי חשמל והנדימן לבית ולמשרד – תיקונים מהירים, תחזוקה שוטפת, אחריות מלאה. זמין במרכז, ראשון לציון וחולון.",
  },
  twitter: {
    card: "summary_large_image",
    title: "חשמלאי מקצועי במרכז וראשון לציון | תיקוני חשמל והנדימן 24/7",
    description: "שירותי חשמל והנדימן – תיקונים מהירים, תחזוקה, שירות 24/7. צרו קשר.",
  },
  alternates: { canonical: baseUrl },
  robots: { index: true, follow: true },
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
        <Script src="/nagishli.js?v=2.3" charSet="utf-8" defer></Script>
      </body>
    </html>
  );
}
