import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FallingStickers from '@/components/FallingStickers';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Maitrayee Keskar | EECS Ph.D. Student Portfolio',
  description: 'Academic portfolio of Maitrayee Keskar, Ph.D. student in EECS at UC Merced. Research interests include multi-agent reinforcement learning, computer vision, and dynamic robot control systems.',
  keywords: 'Maitrayee Keskar, UC Merced, UC San Diego, MARL, Computer Vision, Autonomous Vehicles, Robotics, Balbix',
  authors: [{ name: 'Maitrayee Keskar' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased relative">
        <FallingStickers />
        <Navbar />
        <main className="main-content container flex-1 flex flex-col justify-start" style={{ position: 'relative', zIndex: 10 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
