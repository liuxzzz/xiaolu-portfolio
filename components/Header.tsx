'use client';
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-white">
      <Link href="/" className="group">
        <h1 className="text-2xl md:text-3xl font-bold text-black transition-opacity hover:opacity-70">
          Your Site Title
        </h1>
      </Link>

      <div className="flex items-center gap-8 md:gap-12">
        <Link 
          href="/work" 
          className="text-base md:text-lg text-black hover:opacity-70 transition-opacity"
        >
          Work
        </Link>
        <Link 
          href="/contact" 
          className="text-base md:text-lg text-black hover:opacity-70 transition-opacity"
        >
          Contact
        </Link>
        <Link 
          href="/login" 
          className="text-base md:text-lg text-black hover:opacity-70 transition-opacity"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Header;