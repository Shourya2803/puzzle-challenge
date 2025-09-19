// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Playfair_Display, Lora } from 'next/font/google';

// Playfair Display supports 400,500,600,700
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

// Lora supports 300,400,500,600
const lora = Lora({
  subsets: ['latin'],
  weight: [ '400', '500', '600'],
  variable: '--font-lora',
});

export const metadata: Metadata = {
  title: 'PuzzleChallenge - Daily Skill-Based Contest',
  description: 'Compete in daily puzzles and win prizes based on skill and accuracy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-ivory to-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
