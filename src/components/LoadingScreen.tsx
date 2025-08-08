'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const LoadingScreen = () => {
  const [showLoader, setShowLoader] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Show loader on initial load only
    setShowLoader(true);

    // Hide loader after 500ms (reduced from 1 second)
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []); // Only run on mount

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center loader-fade-in">
      <div className="relative text-center">
        {/* Logo with custom spinning animation */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4">
          <Image
            src="/logo.png"
            alt="Cool Technical Service Logo"
            width={96}
            height={96}
            className="object-contain logo-spin h-auto"
            priority
          />
        </div>

        {/* Loading text */}
        <div className="mb-4">
          <div className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
            Loading...
          </div>
          <div className="text-xs sm:text-sm text-gray-600">
            Cool Technical Service
          </div>
        </div>

        {/* Progress bar with custom animation */}
        <div className="w-40 sm:w-48 bg-gray-200 rounded-full h-1.5 overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full progress-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;