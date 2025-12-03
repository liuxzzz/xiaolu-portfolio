import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-neutral-50/80 backdrop-blur-md supports-[backdrop-filter]:bg-neutral-50/60 border-b border-neutral-200/50"
    >
      <NavLink to="/" className="flex items-center gap-2 group">
        <div className="p-2 bg-neutral-900 text-white rounded-full group-hover:scale-105 transition-transform duration-300">
          <Camera size={20} strokeWidth={1.5} />
        </div>
        <span className="text-xl font-semibold tracking-tight serif group-hover:opacity-70 transition-opacity">LUMINA</span>
      </NavLink>

      <div className="flex items-center gap-8">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `text-sm font-medium uppercase tracking-widest hover:text-neutral-900 transition-colors relative ${isActive ? 'text-neutral-900' : 'text-neutral-400'}`
          }
        >
          {({ isActive }) => (
            <>
              Work
              {isActive && (
                <motion.div 
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-neutral-900" 
                />
              )}
            </>
          )}
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `text-sm font-medium uppercase tracking-widest hover:text-neutral-900 transition-colors relative ${isActive ? 'text-neutral-900' : 'text-neutral-400'}`
          }
        >
          {({ isActive }) => (
            <>
              About
              {isActive && (
                <motion.div 
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-neutral-900" 
                />
              )}
            </>
          )}
        </NavLink>
      </div>
    </motion.nav>
  );
};

export default Navigation;