'use client';

import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-24 px-8 md:px-16 pb-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Image */}
          <div className="relative">
            <div className="relative aspect-3/4 overflow-hidden bg-neutral-100">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" 
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <h4 className="text-4xl font-bold mb-2">500+</h4>
                <p className="text-sm text-neutral-600">Projects</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold mb-2">12</h4>
                <p className="text-sm text-neutral-600">Awards</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold mb-2">8y</h4>
                <p className="text-sm text-neutral-600">Experience</p>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-center">
            <h5 className="text-sm font-medium uppercase tracking-wider text-neutral-600 mb-4">About Me</h5>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Visual storyteller based in New York
            </h1>
            
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed mb-12">
              <p>
                Hello! I'm Alex. I don't just take pictures; I capture the silence between words and the emotion between beats. My journey started with a dusty film camera found in an attic, and it has evolved into a lifelong obsession with light.
              </p>
              <p>
                Specializing in architectural and landscape photography, my work aims to simplify the chaotic world into composed frames of peace and geometry. I believe that beauty exists everywhere—you just need to know the right angle to look from.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <div className="border-l-2 border-black pl-4">
                <h3 className="font-semibold mb-1">Photography & Direction</h3>
                <p className="text-sm text-neutral-600">Editorial, Lifestyle, Landscape</p>
              </div>
              
              <div className="border-l-2 border-black pl-4">
                <h3 className="font-semibold mb-1">Featured Work</h3>
                <p className="text-sm text-neutral-600">Vogue, NatGeo, ArchDaily</p>
              </div>

              <div className="border-l-2 border-black pl-4">
                <h3 className="font-semibold mb-1">Available Worldwide</h3>
                <p className="text-sm text-neutral-600">Open for travel commissions</p>
              </div>
            </div>

            <Link 
              href="/contact"
              className="inline-block bg-black text-white px-8 py-4 font-medium hover:bg-neutral-800 transition-colors w-fit"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;