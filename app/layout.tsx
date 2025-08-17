import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vixensoftservices - Professional Technology Solutions & Development',
  description: 'Vixensoftservices offers professional web development, app development, TV apps, and tech consulting services to help businesses thrive in the digital landscape. Our expert team delivers tailored solutions to meet your unique needs.',
  keywords: 'web development, app development, tech consulting, digital solutions, Vixensoftservices, software development, TV app development, mobile apps, enterprise solutions, IT consulting, custom software, digital transformation, technology partner',
  viewport: 'width=device-width, initial-scale=1.0',
  authors: [{ name: 'Vixensoftservices' }],
  creator: 'Vixensoftservices',
  publisher: 'Vixensoftservices',
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vixensoftservices.com',
    title: 'Vixensoftservices - Professional Technology Solutions & Development',
    description: 'Expert web, mobile & TV app development services. Transform your business with our custom software solutions and tech consulting.',
    siteName: 'Vixensoftservices',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vixensoftservices - Professional Technology Solutions',
    description: 'Expert web, mobile & TV app development services. Transform your business with our custom software solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}