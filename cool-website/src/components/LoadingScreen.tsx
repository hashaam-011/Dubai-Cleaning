'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const LoadingScreen = () => {
  const [showLoader, setShowLoader] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Show loader on initial load
    setShowLoader(true);
    
    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // Only run on mount

  useEffect(() => {
    // Show loader on route changes
    setShowLoader(true);
    
    // Hide loader after 1.5 seconds for route changes
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pathname]); // Run on pathname changes

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center loader-fade-in">
      <div className="relative text-center">
        {/* Logo with custom spinning animation */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6">
          <Image
            src="/logo.png"
            alt="Cool Technical Service Logo"
            width={128}
            height={128}
            className="object-contain logo-spin h-auto"
            priority
          />
        </div>
        
        {/* Loading text */}
        <div className="mb-6">
          <div className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            Loading...
          </div>
          <div className="text-sm text-gray-600">
            Cool Technical Service
          </div>
        </div>
        
        {/* Progress bar with custom animation */}
        <div className="w-48 sm:w-64 bg-gray-200 rounded-full h-2 overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full progress-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;