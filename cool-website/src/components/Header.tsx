'use client';

import { useState, useEffect } from 'react';
import { Phone, Search, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCallClick = () => {
    window.open('tel:8006442', '_self');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
        : 'bg-white shadow-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14' : 'h-16 sm:h-20'
        }`}>
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link href="/home" className="flex items-center space-x-2 sm:space-x-3">
              <div className={`relative transition-all duration-300 ${
                isScrolled ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-12 h-12 sm:w-16 sm:h-16'
              }`}>
                <Image
                  src="/logo.png"
                  alt="Cool Technical Service Logo"
                  width={isScrolled ? (window.innerWidth < 640 ? 32 : 40) : (window.innerWidth < 640 ? 48 : 64)}
                  height={isScrolled ? (window.innerWidth < 640 ? 32 : 40) : (window.innerWidth < 640 ? 48 : 64)}
                  className="object-contain"
                />
              </div>
              <div className={`font-bold transition-all duration-300 ${
                isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl lg:text-2xl'
              } text-gray-900 hidden sm:block`}>
                Cool Technical Service
              </div>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-gray-50 hover:bg-white transition-colors"
                placeholder="Search for services..."
              />
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link href="/home" className="text-gray-700 hover:text-black font-medium transition-colors duration-200 text-sm lg:text-base">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-black font-medium transition-colors duration-200 text-sm lg:text-base">
              Services
            </Link>
            <Link href="/packages" className="text-gray-700 hover:text-black font-medium transition-colors duration-200 text-sm lg:text-base">
              Packages
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black font-medium transition-colors duration-200 text-sm lg:text-base">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black font-medium transition-colors duration-200 text-sm lg:text-base">
              Contact Us
            </Link>
          </nav>

          {/* Toll Free Number */}
          <div className="hidden lg:flex items-center space-x-3 ml-8">
            <div
              className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors duration-200 cursor-pointer"
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
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  placeholder="Search for services..."
                />
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              <Link href="/home" className="block py-2 text-gray-700 hover:text-black font-medium">
                Home
              </Link>
              <Link href="/services" className="block py-2 text-gray-700 hover:text-black font-medium">
                Services
              </Link>
              <Link href="/packages" className="block py-2 text-gray-700 hover:text-black font-medium">
                Packages
              </Link>
              <Link href="/about" className="block py-2 text-gray-700 hover:text-black font-medium">
                About Us
              </Link>
              <Link href="/contact" className="block py-2 text-gray-700 hover:text-black font-medium">
                Contact Us
              </Link>
            </nav>

            {/* Mobile Toll Free */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div
                className="flex items-center space-x-3 text-gray-700 cursor-pointer"
                onClick={handleCallClick}
              >
                <Phone className="w-5 h-5" />
                <div>
                  <div className="font-semibold text-sm">Call Now - Toll Free</div>
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