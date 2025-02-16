import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "เที่ยวไหนดี",
  description: "10 สถานที่ท่องเที่ยวน่าสนใจ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansThai.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
