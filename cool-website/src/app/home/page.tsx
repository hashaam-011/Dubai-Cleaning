'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollIndicator from '../../components/ScrollIndicator';
import { Star, Users, ArrowRight, CheckCircle, Home, Building, Sparkles, Sofa } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentTileIndex, setCurrentTileIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTileIndex((prevIndex) => (prevIndex + 1) % 9);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll promotional carousel
  useEffect(() => {
    const carousel = document.getElementById('promotional-carousel');
    if (!carousel) return;

    const autoScroll = setInterval(() => {
      const scrollAmount = 320;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      if (carousel.scrollLeft >= maxScroll) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 2000);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 pt-16 sm:pt-20">

        {/* Hero Section */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="space-y-6 sm:space-y-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  Home services at your doorstep
                </h1>

                {/* Service Categories Grid */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  {/* Row 1 */}
                  <div className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors cursor-pointer">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-200 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                      <Image
                        src="/1afa28fe7873be2e7460cdfcf05c3f236323e1eb.jpg"
                        alt="Home Deep Cleaning"
                        width={48}
                        height={48}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Home Deep Cleaning</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors cursor-pointer">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-200 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                      <Image
                        src="/64e88a7c9f02a60c44238e437519aad846eee5d9.jpg"
                        alt="Kitchen Cleaning"
                        width={48}
                        height={48}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Kitchen Cleaning</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors cursor-pointer">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                      <Image
                        src="/35f06415aa4bd57a00b29fca514da8e056691423.jpg"
                        alt="AC & Appliance Repair"
                        width={48}
                        height={48}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">AC & Appliance Repair</p>
                  </div>

                  {/* Row 2 */}
                  <div className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors cursor-pointer">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-200 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                      <Image
                        src="/94f77000ab2f026d86dfb312a07fdb457837bb2a.jpg"
                        alt="Bathroom Cleaning"
                        width={48}
                        height={48}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Bathroom Cleaning</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors cursor-pointer">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-200 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                      <Image
                        src="/08b69e6a8c84f07e986a5c790d4742edddc64b48.jpg"
                        alt="Commercial Cleaning"
                        width={48}
                        height={48}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Commercial Cleaning</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors cursor-pointer relative">
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">Sale</div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                      <Image
                        src="/3d27251398f4f7f19bdbeae61e868f777cdefe6f.jpg"
                        alt="Furniture Cleaning"
                        width={48}
                        height={48}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Furniture Cleaning</p>
                  </div>

                  {/* Row 3 */}
                  <div className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors cursor-pointer">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-200 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                      <Image
                        src="/5e0699fe1cd5ecddb07ffee953272085570a8fee.jpg"
                        alt="Deep Cleaning"
                        width={48}
                        height={48}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Deep Cleaning</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors cursor-pointer">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-200 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                      <Image
                        src="/16ff545d7e36e5fd277daaf9626b023cb913aa55.jpg"
                        alt="Wall Panels"
                        width={48}
                        height={48}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Wall Panels</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors cursor-pointer">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-200 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                      <Image
                        src="/37fec225f7e8f27f9b70cae1b931b16dac5d8fc4.jpg"
                        alt="Kitchen Deep Cleaning"
                        width={48}
                        height={48}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Kitchen Deep Cleaning</p>
                  </div>
                </div>

                {/* Statistics */}
                <div className="flex items-center space-x-6 sm:space-x-8">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-black" />
                    <span className="text-sm sm:text-base text-black">4.8 Service Rating*</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-black" />
                    <span className="text-sm sm:text-base text-black">12M+ Customers Globally*</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  <div className="space-y-2 sm:space-y-4">
                    <div className="relative">
                      <Image
                        src="/879cbb094a6a27505099f36b47ef50414566d7e8.jpg"
                        alt="Home Cleaning Service"
                        width={200}
                        height={160}
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded"
                        priority
                      />
                    </div>
                    <div className="relative">
                      <Image
                        src="/64e88a7c9f02a60c44238e437519aad846eee5d9.jpg"
                        alt="Kitchen Cleaning Service"
                        width={200}
                        height={160}
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-4">
                    <div className="relative">
                      <Image
                        src="/94f77000ab2f026d86dfb312a07fdb457837bb2a.jpg"
                        alt="Deep Cleaning Service"
                        width={200}
                        height={160}
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        src="/35f06415aa4bd57a00b29fca514da8e056691423.jpg"
                        alt="AC Cleaning Service"
                        width={200}
                        height={160}
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
              Our Professional Services
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">

              {/* Residential Cleaning */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 sm:h-56 bg-gradient-to-br from-blue-100 to-blue-200 relative">
                  <Image
                    src="/1afa28fe7873be2e7460cdfcf05c3f236323e1eb.jpg"
                    alt="Residential Cleaning"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute top-4 left-4">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Residential Cleaning</h3>
                  <p className="text-gray-600 mb-4">Professional cleaning services for homes, apartments, and villas</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">General dusting and vacuuming of all rooms</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Bathroom and kitchen sanitation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Floor mopping and surface cleaning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Eco-friendly cleaning products available</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Commercial Cleaning */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 sm:h-56 bg-gradient-to-br from-purple-100 to-purple-200 relative">
                  <Image
                    src="/08b69e6a8c84f07e986a5c790d4742edddc64b48.jpg"
                    alt="Commercial Cleaning"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute top-4 left-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Commercial Cleaning</h3>
                  <p className="text-gray-600 mb-4">Comprehensive cleaning solutions for offices, shops, and malls</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Workspace sanitation and desk cleaning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Restroom deep cleaning and supply replenishment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Window and glass surface cleaning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Flexible after-hours service</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Deep Cleaning */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 sm:h-56 bg-gradient-to-br from-orange-100 to-orange-200 relative">
                  <Image
                    src="/5e0699fe1cd5ecddb07ffee953272085570a8fee.jpg"
                    alt="Deep Cleaning"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute top-4 left-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Deep Cleaning</h3>
                  <p className="text-gray-600 mb-4">Complete deep cleaning and post-renovation cleaning services</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Complete dust and debris removal</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Deep scrubbing of kitchens and bathrooms</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Stain, grease, and adhesive elimination</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Move-in ready space preparation</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Furniture Cleaning */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 sm:h-56 bg-gradient-to-br from-green-100 to-green-200 relative">
                  <Image
                    src="/3d27251398f4f7f19bdbeae61e868f777cdefe6f.jpg"
                    alt="Furniture Cleaning"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute top-4 left-4">
                    <Sofa className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Furniture Cleaning</h3>
                  <p className="text-gray-600 mb-4">Fresh and clean upholstery services for all furniture types</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Sofas & Chairs – Fabric or leather cleaning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Mattresses – Dust, odor, and stain removal</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Office Chairs – Seat and back cleaning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Cushions & Pillows – Fluff and freshen up</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Promotional Banners Section */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-4 scrollbar-hide" id="promotional-carousel">
                {/* Image 1 - Home Cleaning */}
                <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 sm:h-56 bg-gradient-to-br from-amber-100 to-amber-200 relative">
                    <Image
                      src="/879cbb094a6a27505099f36b47ef50414566d7e8.jpg"
                      alt="Home Cleaning Service"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg sm:text-xl font-bold mb-1">Home Cleaning Service</h3>
                      <p className="text-sm sm:text-base mb-3">Professional cleaning at your doorstep</p>
                      <Link href="/contact">
                        <button className="bg-gray-200 text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-300 transition-colors">
                          Book now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Image 2 - Kitchen Cleaning */}
                <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 sm:h-56 bg-gradient-to-br from-green-100 to-green-200 relative">
                    <Image
                      src="/64e88a7c9f02a60c44238e437519aad846eee5d9.jpg"
                      alt="Kitchen Cleaning Service"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg sm:text-xl font-bold mb-1">Kitchen Cleaning</h3>
                      <p className="text-sm sm:text-base mb-3">Deep kitchen sanitization</p>
                      <Link href="/contact">
                        <button className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors">
                          Book now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Image 3 - Deep Cleaning */}
                <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 sm:h-56 bg-gradient-to-br from-red-100 to-red-200 relative">
                    <Image
                      src="/94f77000ab2f026d86dfb312a07fdb457837bb2a.jpg"
                      alt="Deep Cleaning Service"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg sm:text-xl font-bold mb-1">Deep Cleaning</h3>
                      <p className="text-sm sm:text-base mb-3">Complete deep cleaning</p>
                      <Link href="/contact">
                        <button className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-700 transition-colors">
                          Book now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Image 4 - AC Cleaning */}
                <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 sm:h-56 bg-gradient-to-br from-indigo-100 to-indigo-200 relative">
                    <Image
                      src="/35f06415aa4bd57a00b29fca514da8e056691423.jpg"
                      alt="AC Cleaning Service"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg sm:text-xl font-bold mb-1">AC Cleaning</h3>
                      <p className="text-sm sm:text-base mb-3">AC maintenance & cleaning</p>
                      <Link href="/contact">
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-indigo-700 transition-colors">
                          Book now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Image 5 - Residential Cleaning */}
                <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 sm:h-56 bg-gradient-to-br from-teal-100 to-teal-200 relative">
                    <Image
                      src="/1afa28fe7873be2e7460cdfcf05c3f236323e1eb.jpg"
                      alt="Residential Cleaning"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg sm:text-xl font-bold mb-1">Residential Cleaning</h3>
                      <p className="text-sm sm:text-base mb-3">Home cleaning services</p>
                      <Link href="/contact">
                        <button className="bg-teal-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-teal-700 transition-colors">
                          Book now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Image 6 - Commercial Cleaning */}
                <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 sm:h-56 bg-gradient-to-br from-pink-100 to-pink-200 relative">
                    <Image
                      src="/08b69e6a8c84f07e986a5c790d4742edddc64b48.jpg"
                      alt="Commercial Cleaning"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg sm:text-xl font-bold mb-1">Commercial Cleaning</h3>
                      <p className="text-sm sm:text-base mb-3">Office & business cleaning</p>
                      <Link href="/contact">
                        <button className="bg-pink-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-pink-700 transition-colors">
                          Book now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Image 7 - Post Construction */}
                <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 sm:h-56 bg-gradient-to-br from-emerald-100 to-emerald-200 relative">
                    <Image
                      src="/5e0699fe1cd5ecddb07ffee953272085570a8fee.jpg"
                      alt="Post Construction Cleaning"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg sm:text-xl font-bold mb-1">Post Construction</h3>
                      <p className="text-sm sm:text-base mb-3">Post-renovation cleaning</p>
                      <Link href="/contact">
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-emerald-700 transition-colors">
                          Book now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Image 8 - Furniture Cleaning */}
                <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 sm:h-56 bg-gradient-to-br from-rose-100 to-rose-200 relative">
                    <Image
                      src="/3d27251398f4f7f19bdbeae61e868f777cdefe6f.jpg"
                      alt="Furniture Cleaning"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg sm:text-xl font-bold mb-1">Furniture Cleaning</h3>
                      <p className="text-sm sm:text-base mb-3">Professional sofa cleaning</p>
                      <Link href="/contact">
                        <button className="bg-rose-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-rose-700 transition-colors">
                          Book now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrow */}
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors z-10"
                onClick={() => {
                  const carousel = document.getElementById('promotional-carousel');
                  if (carousel) {
                    carousel.scrollBy({ left: 320, behavior: 'smooth' });
                  }
                }}
              >
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
              Why Choose Cool Technical Service?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Professional Quality</h3>
                <p className="text-sm sm:text-base text-gray-600">Trained professionals with years of experience in cleaning and maintenance services.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
                <p className="text-sm sm:text-base text-gray-600">We use environmentally safe cleaning products that are gentle on your family and pets.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                <p className="text-sm sm:text-base text-gray-600">Convenient scheduling options to fit your busy lifestyle and work commitments.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  );
}