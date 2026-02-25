'use client';

import React from 'react';
import Link from 'next/link';

const WorkPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Urban Architecture',
      category: 'Architecture',
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80',
      date: '2024'
    },
    {
      id: 2,
      title: 'Portrait Series',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
      date: '2024'
    },
    {
      id: 3,
      title: 'Modern Interiors',
      category: 'Interior Design',
      image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80',
      date: '2023'
    },
    {
      id: 4,
      title: 'Nature Collection',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
      date: '2023'
    }
  ];

  return (
    <div className="w-full min-h-screen pt-24 px-8 md:px-16 pb-16">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Work</h1>
          <p className="text-lg text-neutral-600">Selected projects and collections</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.id}
              href={`/work/${project.id}`}
              className="group"
            >
              <div className="relative aspect-4/3 overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-semibold group-hover:opacity-70 transition-opacity">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-neutral-600">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;

