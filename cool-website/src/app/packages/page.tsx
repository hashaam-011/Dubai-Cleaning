import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollIndicator from '../../components/ScrollIndicator';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PackagesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">

        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 sm:py-32">
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          <div className="absolute inset-0">
            <img
              src="/64e88a7c9f02a60c44238e437519aad846eee5d9.jpg"
              alt="Professional cleaning service"
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

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-gray-600">Scroll Down</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Packages Section */}
        <div className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Pick a <span className="text-yellow-500">Plan</span> That Fits Your Life :)
                </h2>
              </div>
            </div>

            {/* Package Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Hourly Package */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hourly Package</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">1 Maid.</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">2 Hours – Basic cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">4 Hours – Full room cleaning, dishes, light laundry</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">8 Hours – Deep cleaning, ironing, cooking help</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center">
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Weekly Package */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Weekly Package</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">2–3 days/week – General cleaning, dusting, bathrooms</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">5–6 days/week – Full house care, including laundry and dishes</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center">
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Monthly Package */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Package</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Full-time maid.</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">6–8 hours daily.</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">All-round help.</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center">
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Annual Package */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Annual Package</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Full-time maid.</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">6–8 hours daily.</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">all-round help.</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center">
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

            </div>

            {/* Additional CTA Section */}
            <div className="mt-16 text-center">
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                  Book Now
                </Link>
                <button className="bg-white text-black border border-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                  See Pricing
                </button>
                <button className="bg-white text-black border border-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                  Follow Us
                </button>
                <button className="bg-white text-black border border-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>

      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  );
}