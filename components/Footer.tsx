import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-6 border-t border-neutral-200 mt-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="serif text-lg font-medium">LUMINA LENS</span>
          <span className="text-xs text-neutral-400 mt-1">© {new Date().getFullYear()} All Rights Reserved.</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors transform hover:scale-110">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors transform hover:scale-110">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors transform hover:scale-110">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;