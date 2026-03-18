import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "UzFIN School | Samarqanddagi Kuchli Ingliz Tili Muhiti",
  description: "UzFIN School - Farzandingiz ishonchli qo'llarda. 0-11 sinflar uchun sifatli ta'lim, AQSH bitiruvchilari bo'lgan ustozlar va 100% Halol standartlari.",
  keywords: ["UzFIN School", "Samarqand maktablari", "xususiy maktab", "ingliz tili maktabi", "Shuhratjon Ochilov"],
  authors: [{ name: "UzFIN School Team" }],
  
  // Brauzer va Chrome qidiruv natijalari uchun ikonka
  icons: {
    icon: [
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
  },

  // Ijtimoiy tarmoqlar (Telegram, Instagram) uchun (Open Graph)
  openGraph: {
    title: "UzFIN School - Kelajak yetakchilari maktabi",
    description: "Samarqandda AQSH standartlari asosida ta'lim oling.",
    url: "https://uzfin.uz",
    siteName: "UzFIN School",
    images: [
      {
        url: "/og-image.jpg", // Sayt ulashilganda chiqadigan katta rasm (1200x630 tavsiya etiladi)
        width: 1200,
        height: 630,
        alt: "UzFIN School Samarqand",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
