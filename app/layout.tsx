import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
      <head>
        {/* Meta Pixel kodingiz */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '965053919207704');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Noscript qismi (rasm ko'rinishida) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=965053919207704&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
