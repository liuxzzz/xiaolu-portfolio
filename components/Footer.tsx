import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-8 md:px-16 border-t border-neutral-200 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600">
        <div>
          © {new Date().getFullYear()} Your Site Title. All Rights Reserved.
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-black transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;