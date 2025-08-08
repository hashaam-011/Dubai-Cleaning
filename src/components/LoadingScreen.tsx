'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const LoadingScreen = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Show loader on initial load only
    setShowLoader(true);

    // Hide loader after 200ms (reduced from 300ms for even faster loading)
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []); // Only run on mount

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center loader-fade-in">
      <div className="relative text-center">
        {/* Logo with custom spinning animation */}
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3">
          <Image
            src="/logo.png"
            alt="Cool Technical Service Logo"
            width={64}
            height={64}
            className="object-contain logo-spin h-auto"
            priority
            quality={80}
          />
        </div>

        {/* Loading text */}
        <div className="mb-3">
          <div className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">
            Loading...
          </div>
          <div className="text-xs text-gray-600">
            Cool Technical Service
          </div>
        </div>

        {/* Progress bar with custom animation */}
        <div className="w-24 sm:w-32 bg-gray-200 rounded-full h-0.5 overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full progress-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;