'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Import the phone call animation
import phoneCallAnimation from '../../public/phone call.json';

const PhoneCallPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPulse, setIsPulse] = useState(true);

  useEffect(() => {
    // Show popup after 12 seconds for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, 12000);

    // Add subtle pulse animation every 15 seconds
    const pulseInterval = setInterval(() => {
      setIsPulse(false);
      setTimeout(() => setIsPulse(true), 100);
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearInterval(pulseInterval);
    };
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleCall = () => {
    window.open('tel:8006442', '_self');
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed right-2 sm:right-4 top-1/3 transform -translate-y-1/2 z-50 transition-all duration-500 ease-out ${
        isAnimating ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
      } ${isPulse ? 'animate-pulse' : ''}`}
      style={{ zIndex: 9999 }}
    >
      {/* Main popup container with professional styling */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl shadow-2xl p-5 max-w-sm border border-white/10 backdrop-blur-sm animate-float">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-1 -right-1 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-1 shadow-md transition-colors duration-200 z-10 opacity-80 hover:opacity-100"
          aria-label="Close popup"
        >
          <X size={14} />
        </button>

        {/* Content */}
        <div className="text-center text-white">
          {/* Lottie Animation */}
          <div className="mb-3 flex justify-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-inner border border-white/30">
              <Lottie
                animationData={phoneCallAnimation}
                loop={true}
                style={{ width: '60px', height: '60px' }}
                className="opacity-95 drop-shadow-lg"
              />
            </div>
          </div>

          {/* Text content */}
          <h3 className="text-lg font-bold mb-2 text-shadow">Need Professional Help?</h3>
          <p className="text-sm text-blue-100 mb-4 font-medium">Get instant support from our experts</p>
          
          {/* Phone number display */}
          <div className="bg-white/20 rounded-lg p-3 mb-4 backdrop-blur-sm border border-white/20 shadow-lg">
            <p className="text-xl font-bold text-white">8006442</p>
            <p className="text-xs text-blue-200 font-medium">Available 24/7</p>
          </div>

          {/* Call button */}
          <button
            onClick={handleCall}
            className="w-full bg-white text-blue-700 font-bold py-3 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg transform hover:scale-[1.02] border border-white/30"
          >
            📞 Call Now
          </button>
        </div>

        {/* Professional decorative elements */}
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-300 rounded-full animate-pulse shadow-sm opacity-70"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-75 shadow-sm opacity-70"></div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl blur-lg -z-10"></div>
      </div>

      {/* Professional floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-6px); 
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default PhoneCallPopup;
