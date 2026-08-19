import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { site } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — AI Consulting & Implementation untuk UMKM dan Enterprise`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: `${site.name} — AI Consulting & Implementation`,
    description: site.description,
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — AI Consulting & Implementation`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#121715",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Header />
        <main id="main" className="min-h-[100dvh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}