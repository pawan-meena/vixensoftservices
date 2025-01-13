import type { Metadata } from "next";
import { Bai_Jamjuree as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Vixensoft Services - Top Hosting & Digital Solutions",
  description:
    "Vixensoft Services offers premium hosting, web development, CMS, ORM integration, software development, and security management. Our expert team delivers innovative digital solutions to elevate your business.",
  keywords:
    "Vixensoft Services, hosting provider, website development, CMS development, ORM integration, software development, security management, digital solutions, web hosting, software tools",
  authors: [{ name: "Vixensoft Services" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    url: "https://www.vixensoftservices.com",
    title: "Vixensoft Services - Top Hosting & Digital Solutions",
    description:
      "Explore premium hosting, web development, CMS solutions, ORM integration, software development, and advanced security management with Vixensoft Services. Elevate your business with our cutting-edge solutions.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Vixensoft Services Logo",
      },
    ],
    siteName: "Vixensoft Services",
  },
  twitter: {
    card: "summary_large_image",
    site: "@VixensoftServices",
    title: "Vixensoft Services - Top Hosting & Digital Solutions",
    description:
      "Vixensoft Services provides premium hosting, web development, CMS, ORM integration, software development, and security management. Elevate your business with our expert digital solutions.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Vixensoft Services Logo",
      },
    ],
  },
  robots: "index, follow",
  themeColor: "#0056D2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[#FAF9F6] font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
