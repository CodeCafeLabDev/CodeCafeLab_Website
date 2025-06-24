import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Cubic Dot - Percolated Software with AI Precision',
    template: '%s | Cubic Dot',
  },
  description: 'Cubic Dot: Blending innovation, AI, and creativity in software solutions. We build custom software, mobile apps, and AI/ML integrations.',
  keywords: ['software development', 'ai solutions', 'mobile apps', 'tech consultancy', 'Cubic Dot'],
  openGraph: {
    title: 'Cubic Dot',
    description: 'Percolated Software with AI Precision.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.codecafe.lab', // Replace with actual URL
    siteName: 'Cubic Dot',
    // images: [ // Add a default OG image
    //   {
    //     url: 'https://www.codecafe.lab/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Cubic Dot Logo',
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
