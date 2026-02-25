'use client';

import React from 'react';
import Link from 'next/link';

const PeoplePage: React.FC = () => {
  const items = [
    {
      id: 1,
      title: 'Portrait 01',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
    },
    {
      id: 2,
      title: 'Portrait 02',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    },
    {
      id: 3,
      title: 'Portrait 03',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80',
    },
    {
      id: 4,
      title: 'Portrait 04',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
    },
    {
      id: 5,
      title: 'Portrait 05',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
    },
    {
      id: 6,
      title: 'Portrait 06',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80',
    }
  ];

  return (
    <div className="w-full min-h-screen pt-24 px-8 md:px-16 pb-16">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-neutral-600 hover:text-black transition-colors mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">People</h1>
          <p className="text-lg text-neutral-600">Portrait photography collection</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-3/4 overflow-hidden mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-medium group-hover:opacity-70 transition-opacity">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;

