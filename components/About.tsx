import React from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-32 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100">
            <img 
              src="https://picsum.photos/id/64/800/1200" 
              alt="Portrait of Photographer"
              className="w-full h-full object-cover"
            />
            {/* Artistic Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-neutral-900 rounded-full z-[-1] hidden md:block" />
            <div className="absolute -top-10 -left-10 w-full h-full border border-neutral-200 rounded-xl z-[-1] hidden md:block" />
          </div>
          
          <div className="flex gap-8 mt-12 justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <h4 className="text-3xl font-serif font-medium">500+</h4>
              <p className="text-xs text-neutral-500 uppercase tracking-widest mt-2">Projects</p>
            </div>
            <div className="w-[1px] h-12 bg-neutral-200" />
            <div className="text-center lg:text-left">
              <h4 className="text-3xl font-serif font-medium">12</h4>
              <p className="text-xs text-neutral-500 uppercase tracking-widest mt-2">Awards</p>
            </div>
            <div className="w-[1px] h-12 bg-neutral-200" />
            <div className="text-center lg:text-left">
              <h4 className="text-3xl font-serif font-medium">8y</h4>
              <p className="text-xs text-neutral-500 uppercase tracking-widest mt-2">Experience</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <div className="order-1 lg:order-2 flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h5 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">About Me</h5>
            <h1 className="text-5xl md:text-6xl font-serif text-neutral-900 mb-8 leading-tight">
              Visual storyteller based in <span className="italic text-neutral-500">New York.</span>
            </h1>
            
            <div className="space-y-6 text-lg text-neutral-600 font-light leading-relaxed">
              <p>
                Hello! I'm Alex. I don't just take pictures; I capture the silence between words and the emotion between beats. My journey started with a dusty film camera found in an attic, and it has evolved into a lifelong obsession with light.
              </p>
              <p>
                Specializing in architectural and landscape photography, my work aims to simplify the chaotic world into composed frames of peace and geometry. I believe that beauty exists everywhere—you just need to know the right angle to look from.
              </p>
            </div>

            <div className="mt-12 space-y-4">
               <div className="flex items-center gap-4 group">
                 <div className="p-3 bg-neutral-100 rounded-full group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                    <Camera size={24} strokeWidth={1.5} />
                 </div>
                 <div>
                   <h3 className="font-medium text-neutral-900">Photography & Direction</h3>
                   <p className="text-sm text-neutral-500">Editorial, Lifestyle, Landscape</p>
                 </div>
               </div>
               
               <div className="flex items-center gap-4 group">
                 <div className="p-3 bg-neutral-100 rounded-full group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                    <Award size={24} strokeWidth={1.5} />
                 </div>
                 <div>
                   <h3 className="font-medium text-neutral-900">Featured Work</h3>
                   <p className="text-sm text-neutral-500">Vogue, NatGeo, ArchDaily</p>
                 </div>
               </div>

               <div className="flex items-center gap-4 group">
                 <div className="p-3 bg-neutral-100 rounded-full group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} strokeWidth={1.5} />
                 </div>
                 <div>
                   <h3 className="font-medium text-neutral-900">Available Worldwide</h3>
                   <p className="text-sm text-neutral-500">Open for travel commissions</p>
                 </div>
               </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-8 py-4 bg-neutral-900 text-white rounded-lg font-medium tracking-wide hover:bg-neutral-800 transition-colors"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;