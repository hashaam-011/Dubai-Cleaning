'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Hide loading screen after completion
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-12 h-12 relative">
          <Image
            src="/logo.png"
            alt="Cool Technical Service Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <div>
          <div className="text-lg font-semibold text-gray-900">Cool Technical</div>
          <div className="text-lg font-semibold text-gray-900">Service</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading Text */}
      <div className="mt-3 text-xs text-gray-500">
        Loading...
      </div>
    </div>
  );
};

export default LoadingScreen;