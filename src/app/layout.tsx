import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-en" });
const notoSansJp = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "大地塾 | 暗号資産を学ぶオンラインスクール",
  description: "暗号資産を基礎から学べるオンラインスクール大地塾。ビットコイン・仮想通貨・資産防衛を初心者でも理解できるように解説します。",
  metadataBase: new URL("https://www.daichijuku.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "大地塾 | 暗号資産スクール",
    description: "暗号資産を正しく学ぶオンラインスクール",
    url: "https://www.daichijuku.com",
    siteName: "大地塾",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "大地塾 OGP Image",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "大地塾 | 暗号資産スクール",
    description: "暗号資産を正しく学ぶオンラインスクール",
    images: ["/ogp.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScriptRunner from "./components/ScriptRunner";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJp.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.daichijuku.com/#website",
                  "url": "https://www.daichijuku.com/",
                  "name": "大地塾",
                  "description": "暗号資産を初心者から学べるオンラインスクール",
                  "publisher": {
                    "@id": "https://www.daichijuku.com/#organization"
                  }
                },
                {
                  "@type": "EducationalOrganization",
                  "@id": "https://www.daichijuku.com/#organization",
                  "name": "大地塾",
                  "url": "https://www.daichijuku.com/",
                  "description": "暗号資産を初心者から学べるオンラインスクール",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.daichijuku.com/public/ogp.png"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Script src="/script.js" strategy="lazyOnload" />
        <ScriptRunner />
        <Analytics />
      </body>
    </html >
  );
}
