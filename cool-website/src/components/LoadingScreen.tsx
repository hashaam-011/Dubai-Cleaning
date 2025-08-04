'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Much faster loading - only show for 500ms total
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Hide loading screen immediately after completion
          setTimeout(() => setIsVisible(false), 100);
          return 100;
        }
        return prev + 25; // Faster progress increments
      });
    }, 50); // Much faster interval

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-10 h-10 relative">
          <Image
            src="/logo.png"
            alt="Cool Technical Service Logo"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
        </div>
        <div>
          <div className="text-base font-semibold text-gray-900">Cool Technical</div>
          <div className="text-base font-semibold text-gray-900">Service</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading Text */}
      <div className="mt-2 text-xs text-gray-500">
        Loading...
      </div>
    </div>
  );
};

export default LoadingScreen;