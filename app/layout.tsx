import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://topnas-web.araing.id"),
  title: "Topnas Paint",
  description:
    "Topnas Paint menghadirkan cat berkualitas tinggi dengan daya tutup maksimal, warna tahan lama, dan telah tersertifikasi SNI untuk perlindungan sempurna dinding Anda.",
  openGraph: {
    title: "Topnas Paint",
    description:
      "Tingkatkan margin keuntungan toko bangunan Anda dengan produk cat berdaya tutup tinggi dan bersertifikat SNI dari Topnas PaintTopnas Paint menghadirkan cat berkualitas tinggi dengan daya tutup maksimal, warna tahan lama, dan telah tersertifikasi SNI untuk perlindungan sempurna dinding Anda.",
    url: "https://topnas-web.araing.id",
    siteName: "Topnas Paint",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Topnas Paint Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          href='https://unpkg.com/maplibre-gl@5/dist/maplibre-gl.css'
          rel='stylesheet'
        />
      </head>
      <body className='min-h-full flex flex-col'>
        {children}
        <Script
          src='https://unpkg.com/maplibre-gl@5/dist/maplibre-gl.js'
          strategy='lazyOnload'
        />
      </body>
    </html>
  );
}
