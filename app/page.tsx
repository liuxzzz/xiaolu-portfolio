'use client';

import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  const categories = [
    {
      id: 1,
      title: 'People',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
      link: '/category/people'
    },
    {
      id: 2,
      title: 'Interiors',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
      link: '/category/interiors'
    }
  ];

  return (
    <div className="w-full min-h-screen pt-24 px-8 md:px-16">
      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1600px] mx-auto py-12">
        {categories.map((category) => (
          <Link 
            key={category.id}
            href={category.link}
            className="group relative overflow-hidden aspect-4/5 cursor-pointer"
          >
            {/* Image */}
            <div className="absolute inset-0">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
            </div>

            {/* Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tight transition-transform duration-500 group-hover:scale-110">
                {category.title}
              </h2>
            </div>

            {/* Bottom Border Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;