'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../data';
import { ArrowUpRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-32 px-4 md:px-8 lg:px-12 max-w-[1920px] mx-auto">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-20 md:mb-32 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-neutral-900 leading-[0.9] tracking-tighter mb-8">
          Capturing the <br /> 
          <span className="italic serif text-neutral-400">unseen moments.</span>
        </h1>
        <p className="text-neutral-500 text-lg md:text-xl max-w-lg leading-relaxed">
          A visual exploration of nature, architecture, and the subtle interactions of light and shadow in our daily lives.
        </p>
      </motion.div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {PORTFOLIO_ITEMS.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="break-inside-avoid relative group overflow-hidden cursor-zoom-in"
          >
            <div className="relative overflow-hidden rounded-lg bg-neutral-200">
               {/* Image Container with Hover Zoom */}
              <motion.img
                src={photo.url}
                alt={photo.title}
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              
              {/* Floating Caption/Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-neutral-900">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-white text-xl font-medium serif">{photo.title}</h3>
                <p className="text-white/80 text-sm uppercase tracking-wider mt-1">{photo.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 text-center"
      >
        <p className="text-neutral-400 text-sm uppercase tracking-widest">End of Collection</p>
      </motion.div>
    </div>
  );
};

export default Home;