'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show loading for a brief moment on route changes
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div className="h-full bg-green-500 transition-all duration-300 ease-out" style={{ width: '100%' }}></div>
    </div>
  );
};

export default LoadingScreen;