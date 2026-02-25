import React from 'react';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} bg-neutral-50`}>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    )
  }