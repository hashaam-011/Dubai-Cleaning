'use client';

import { useState, useEffect } from 'react';
import { Phone, Search, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [windowWidth, setWindowWidth] = useState(0);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial window width
    setWindowWidth(window.innerWidth);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCallClick = () => {
    window.open('tel:8006442', '_self');
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    // Search through page content
    const pageContent = [
      'Home Deep Cleaning',
      'Kitchen Cleaning',
      'AC & Appliance Repair',
      'Bathroom Cleaning',
      'Commercial Cleaning',
      'Furniture Cleaning',
      'Deep Cleaning',
      'Wall Panels',
      'Kitchen Deep Cleaning',
      'Residential Cleaning',
      'Professional Quality',
      'Eco-Friendly',
      'Flexible Scheduling'
    ];

    const results = pageContent.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
    setShowSearchResults(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => setShowSearchResults(false), 200);
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
            <Link href="/home" prefetch={true} className="flex items-center space-x-2 sm:space-x-3">
              <div className={`relative transition-all duration-200 ${
                isScrolled ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-12 h-12 sm:w-16 sm:h-16'
              }`}>
                <Image
                  src="/logo.png"
                  alt="Cool Technical Service Logo"
                  width={isScrolled ? (windowWidth < 640 ? 32 : 40) : (windowWidth < 640 ? 48 : 64)}
                  height={isScrolled ? (windowWidth < 640 ? 32 : 40) : (windowWidth < 640 ? 48 : 64)}
                  className="object-contain"
                  priority
                />
              </div>
              <div className={`font-bold transition-all duration-200 ${
                isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl lg:text-2xl'
              } text-gray-900 hidden sm:block`}>
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
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => setShowSearchResults(true)}
                onBlur={handleSearchBlur}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-gray-50 hover:bg-white transition-colors"
                placeholder="Search for services..."
              />

              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-green-50 cursor-pointer text-sm text-gray-700 border-b border-gray-100 last:border-b-0"
                    >
                      {result}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link href="/home" prefetch={true} className="text-gray-700 hover:text-black font-medium transition-colors duration-150 text-sm lg:text-base">
              Home
            </Link>
            <Link href="/contact" prefetch={true} className="text-gray-700 hover:text-black font-medium transition-colors duration-150 text-sm lg:text-base">
              Services
            </Link>
            <Link href="/packages" prefetch={true} className="text-gray-700 hover:text-black font-medium transition-colors duration-150 text-sm lg:text-base">
              Packages
            </Link>
            <Link href="/pricing" prefetch={true} className="text-gray-700 hover:text-black font-medium transition-colors duration-150 text-sm lg:text-base">
              Pricing
            </Link>
            <Link href="/about" prefetch={true} className="text-gray-700 hover:text-black font-medium transition-colors duration-150 text-sm lg:text-base">
              About Us
            </Link>
            <Link href="/contact" prefetch={true} className="text-gray-700 hover:text-black font-medium transition-colors duration-150 text-sm lg:text-base">
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
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors duration-150"
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
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => setShowSearchResults(true)}
                  onBlur={handleSearchBlur}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-gray-50"
                  placeholder="Search for services..."
                />

                {/* Mobile Search Results */}
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-green-50 cursor-pointer text-sm text-gray-700 border-b border-gray-100 last:border-b-0"
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              <Link href="/home" prefetch={true} className="block py-2 text-gray-700 hover:text-black font-medium transition-colors duration-150">
                Home
              </Link>
              <Link href="/contact" prefetch={true} className="block py-2 text-gray-700 hover:text-black font-medium transition-colors duration-150">
                Services
              </Link>
              <Link href="/packages" prefetch={true} className="block py-2 text-gray-700 hover:text-black font-medium transition-colors duration-150">
                Packages
              </Link>
              <Link href="/pricing" prefetch={true} className="block py-2 text-gray-700 hover:text-black font-medium transition-colors duration-150">
                Pricing
              </Link>
              <Link href="/about" prefetch={true} className="block py-2 text-gray-700 hover:text-black font-medium transition-colors duration-150">
                About Us
              </Link>
              <Link href="/contact" prefetch={true} className="block py-2 text-gray-700 hover:text-black font-medium transition-colors duration-150">
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