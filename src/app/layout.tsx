import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/shared/header';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Vijay Shukla | Data Analyst',
  description: 'Data Analyst portfolio for Vijay Shukla, specializing in Quick Commerce operations analytics, inventory management, and creating dashboards that drive business decisions.',
  openGraph: {
    title: 'Vijay Shukla | Data Analyst Portfolio',
    description: 'Data-driven professional converting supply chain data into actionable dashboards.',
    url: 'https://your-domain.com',
    siteName: 'Vijay Shukla Portfolio',
    images: [
      {
        url: 'https://your-domain.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijay Shukla | Data Analyst Portfolio',
    description: 'Data-driven professional converting supply chain data into actionable dashboards.',
    images: ['https://your-domain.com/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: 'hsl(224 71% 4%)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn('min-h-screen font-sans antialiased', inter.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
