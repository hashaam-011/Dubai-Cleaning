import { ChevronDown, ArrowRight, Brush } from 'lucide-react';
import Link from 'next/link';

export default function PackagesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 sm:py-32 mb-16">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="absolute inset-0">
          <img
            src="/64e88a7c9f02a60c44238e437519aad846eee5d9.jpg"
            alt="Clean modern interior"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Packages
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover a variety of cleaning packages designed to meet your unique needs — whether you need a quick touch-up, weekly care, or full-time support. Choose from hourly, weekly, or monthly plans, each crafted with convenience, quality, and attention to detail in mind. Our packages offer the perfect balance of flexibility and professionalism, ensuring your space stays spotless without the stress.
          </p>
          <div className="text-center text-sm text-gray-600">
            <p>Scroll Down</p>
            <p className="text-xs">mouse</p>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-white" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, #f3f4f6 20px, #f3f4f6 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, #f3f4f6 20px, #f3f4f6 21px)`
        }}></div>
        
        <div className="relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Brush className="w-6 h-6 text-gray-700 mr-2" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Pick a <span className="text-yellow-500">Plan</span> That Fits Your Life :)
              </h2>
            </div>
          </div>

          {/* Package Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* Hourly Package */}
            <div className="bg-white rounded-lg shadow-lg border-2 border-blue-500 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Hourly Package</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ChevronDown className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">1 Maid.</span>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">2 Hours – Basic cleaning</span>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">4 Hours – Full room cleaning, dishes, light laundry</span>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">8 Hours – Deep cleaning, ironing, cooking help</span>
                </li>
              </ul>
              <Link href="/contact" prefetch>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </Link>
            </div>

            {/* Weekly Package */}
            <div className="bg-white rounded-lg shadow-lg border-2 border-yellow-500 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Weekly Package</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ChevronDown className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">2–3 days/week – General cleaning, dusting, bathrooms</span>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">5–6 days/week – Full house care, including laundry and dishes</span>
                </li>
              </ul>
              <Link href="/contact" prefetch>
                <button className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                  Book Now
                </button>
              </Link>
            </div>

            {/* Monthly Package */}
            <div className="bg-white rounded-lg shadow-lg border-2 border-blue-500 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Monthly Package</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ChevronDown className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Full-time maid.</span>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">6–8 hours daily.</span>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">All-round help.</span>
                </li>
              </ul>
              <Link href="/contact" prefetch>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </Link>
            </div>

            {/* Annual Package */}
            <div className="bg-white rounded-lg shadow-lg border-2 border-yellow-500 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Annual Package</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ChevronDown className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Full-time maid.</span>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">6–8 hours daily.</span>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">all-round help.</span>
                </li>
              </ul>
              <Link href="/contact" prefetch>
                <button className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                  Book Now
                </button>
              </Link>
            </div>

          </div>

          {/* Bottom Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" prefetch>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Book Now
              </button>
            </Link>
            <Link href="/pricing" prefetch>
              <button className="bg-white text-yellow-500 border-2 border-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors">
                See Pricing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}