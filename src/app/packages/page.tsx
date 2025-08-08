'use client';
import { CheckCircle, ArrowRight, Brush, Star, Crown } from 'lucide-react';
import Link from 'next/link';
import Lottie from 'lottie-react';
import clean1Animation from '../../../public/clean1.json';
import clean2Animation from '../../../public/clean2.json';

export default function PackagesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <div className="relative py-20 sm:py-32 mb-20 rounded-2xl overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/64e88a7c9f02a60c44238e437519aad846eee5d9.jpg"
            alt="Clean modern interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>
                
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Brush className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-white font-medium">Professional Cleaning Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Our <span className="text-yellow-400">Packages</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Discover a variety of cleaning packages designed to meet your unique needs — whether you need a quick touch-up, weekly care, or full-time support. Choose from hourly, weekly, or monthly plans, each crafted with convenience, quality, and attention to detail in mind.
          </p>
        </div>
      </div>

      {/* Packages Section */}
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(251, 191, 36, 0.05) 0%, transparent 50%)`
        }}></div>
                
        <div className="relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-16 relative">
            {/* Left Animation */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-32 h-32 lg:w-48 lg:h-48 opacity-80">
              <Lottie animationData={clean1Animation} loop={true} />
            </div>
                         
            {/* Right Animation */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 h-32 lg:w-48 lg:h-48 opacity-80">
              <Lottie animationData={clean2Animation} loop={true} />
            </div>
                         
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-3 rounded-full mr-4">
                <Brush className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Pick a <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Plan</span> That Fits Your Life
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
          </div>
                     
          {/* Package Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                         
            {/* Hourly Package */}
            <div className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-4 right-4">
                <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  Flexible
                </div>
              </div>
              <div className="text-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">H</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Hourly Package</h3>
                <p className="text-gray-600 text-sm">Perfect for quick cleanups</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">1 Professional Maid</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">2 Hours – Basic cleaning</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">4 Hours – Full room cleaning, dishes, light laundry</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">8 Hours – Deep cleaning, ironing, cooking help</span>
                </div>
              </div>
              
              <Link href="/contact" prefetch>
                <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-4 rounded-xl font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg transform hover:scale-105">
                  Book Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Weekly Package */}
            <div className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-4 right-4">
                <div className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  Popular
                </div>
              </div>
              <div className="text-center mb-6">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">W</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Weekly Package</h3>
                <p className="text-gray-600 text-sm">Consistent weekly maintenance</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">2–3 days/week – General cleaning, dusting, bathrooms</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">5–6 days/week – Full house care, including laundry and dishes</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Customizable schedule</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Priority booking</span>
                </div>
              </div>
              
              <Link href="/contact" prefetch>
                <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-4 rounded-xl font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg transform hover:scale-105">
                  Book Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Monthly Package */}
            <div className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-4 right-4">
                <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  Full-time
                </div>
              </div>
              <div className="text-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">M</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly Package</h3>
                <p className="text-gray-600 text-sm">Dedicated monthly service</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Full-time professional maid</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">6–8 hours daily service</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Complete household management</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Monthly deep cleaning included</span>
                </div>
              </div>
              
              <Link href="/contact" prefetch>
                <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-4 rounded-xl font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg transform hover:scale-105">
                  Book Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Annual Package */}
            <div className="group relative bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-lg border-2 border-yellow-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-4 right-4">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Crown className="w-3 h-3 mr-1" />
                  Premium
                </div>
              </div>
              <div className="text-center mb-6">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Annual Package</h3>
                <p className="text-gray-600 text-sm">Ultimate year-round care</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Dedicated full-time maid</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">6–8 hours daily, 365 days</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Complete household support</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Best value & priority service</span>
                </div>
              </div>
              
              <Link href="/contact" prefetch>
                <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-4 rounded-xl font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg transform hover:scale-105 shadow-md">
                  Book Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their cleaning needs. Get started today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" prefetch>
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Book Your Service Now
                </button>
              </Link>
              <Link href="/pricing" prefetch>
                <button className="bg-transparent text-yellow-400 border-2 border-yellow-400 px-10 py-4 rounded-xl font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                  View Detailed Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
