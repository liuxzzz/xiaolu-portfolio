'use client';

import React from 'react';
import Link from 'next/link';

const InteriorsPage: React.FC = () => {
  const items = [
    {
      id: 1,
      title: 'Modern Living Room',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    },
    {
      id: 2,
      title: 'Minimalist Kitchen',
      image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80',
    },
    {
      id: 3,
      title: 'Scandinavian Bedroom',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    },
    {
      id: 4,
      title: 'Contemporary Office',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    },
    {
      id: 5,
      title: 'Luxury Bathroom',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    },
    {
      id: 6,
      title: 'Industrial Loft',
      image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&q=80',
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
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Interiors</h1>
          <p className="text-lg text-neutral-600">Interior design showcase</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-4/3 overflow-hidden mb-3">
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

export default InteriorsPage;

