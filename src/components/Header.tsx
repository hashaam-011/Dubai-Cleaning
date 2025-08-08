'use client';

import { useState, useEffect, useCallback } from 'react';
import { Phone, Search, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 20;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    // Throttled scroll listener
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [handleScroll]);

  const handleCallClick = () => {
    window.open('tel:8006442', '_self');
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
        : 'bg-white shadow-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-200 ${
          isScrolled ? 'h-14' : 'h-16 sm:h-20'
        }`}>
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link href="/" prefetch className="flex items-center space-x-2 sm:space-x-3 cursor-pointer">
              <div className={`relative transition-all duration-200 ${
                isScrolled ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-12 h-12 sm:w-16 sm:h-16'
              }`} style={{cursor:'pointer'}}>
                <Image
                  src="/logo.png"
                  alt="Cool Technical Service Logo"
                  width={isScrolled ? 40 : 64}
                  height={isScrolled ? 40 : 64}
                  className="object-contain h-auto"
                  priority
                />
              </div>
              <div className={`font-bold transition-all duration-200 ${
                isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl lg:text-2xl'
              } text-gray-900 hidden sm:block`} style={{cursor:'pointer'}}>
                Cool Technical Service
              </div>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8 relative">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-gray-50 hover:bg-white transition-colors"
                placeholder="Search for services..."
                disabled
              />
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link href="/" prefetch className="text-gray-700 hover:text-black font-medium transition-colors duration-150 text-sm lg:text-base cursor-pointer">
              Home
            </Link>
            <Link href="/service" prefetch className="text-gray-700 hover:text-black font-medium transition-colors duration-150 text-sm lg:text-base cursor-pointer">
              Services
            </Link>
            <Link href="/packages" prefetch className="text-gray-700 hover:text-black font-medium transition-colors duration-150 text-sm lg:text-base cursor-pointer">
              Packages
            </Link>
            <Link href="/pricing" prefetch className="text-gray-700 hover:text-black font-medium transition-colors duration-150 text-sm lg:text-base cursor-pointer">
              Pricing
            </Link>
            <Link href="/about" prefetch className="text-gray-700 hover:text-black font-medium transition-colors duration-150 text-sm lg:text-base cursor-pointer">
              About Us
            </Link>
            <Link href="/contact" prefetch className="text-gray-700 hover:text-black font-medium transition-colors duration-150 text-sm lg:text-base cursor-pointer">
              Contact Us
            </Link>
          </nav>

          {/* Toll Free Number */}
          <div className="hidden lg:flex items-center space-x-3 ml-8">
            <div
              className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors duration-150 cursor-pointer"
              onClick={handleCallClick}
            >
              <Phone className="w-4 h-4" />
              <div className="text-sm">
                <div className="font-semibold">Call Now</div>
                <div className="font-bold">8006442</div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMobileMenuToggle}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors duration-150 cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            {/* Mobile Search */}
            <div className="mb-4 relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-gray-50"
                  placeholder="Search for services..."
                  disabled
                />
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              <Link href="/" prefetch className="block py-2 text-gray-700 hover:text-black font-medium transition-colors duration-150 cursor-pointer">
                Home
              </Link>
              <Link href="/service" prefetch className="block py-2 text-gray-700 hover:text-black font-medium transition-colors duration-150 cursor-pointer">
                Services
              </Link>
              <Link href="/packages" prefetch className="block py-2 text-gray-700 hover:text-black font-medium transition-colors duration-150 cursor-pointer">
                Packages
              </Link>
              <Link href="/pricing" prefetch className="block py-2 text-gray-700 hover:text-black font-medium transition-colors duration-150 cursor-pointer">
                Pricing
              </Link>
              <Link href="/about" prefetch className="block py-2 text-gray-700 hover:text-black font-medium transition-colors duration-150 cursor-pointer">
                About Us
              </Link>
              <Link href="/contact" prefetch className="block py-2 text-gray-700 hover:text-black font-medium transition-colors duration-150 cursor-pointer">
                Contact Us
              </Link>
            </nav>

            {/* Mobile Toll Free */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div
                className="flex items-center space-x-2 text-gray-700 hover:text-black cursor-pointer transition-colors duration-150"
                onClick={handleCallClick}
              >
                <Phone className="w-4 h-4" />
                <div className="text-sm">
                  <div className="font-semibold">Call Now</div>
                  <div className="font-bold">8006442</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;