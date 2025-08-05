'use client';

import { Star, Users, CheckCircle, Home, Building, Sparkles, Sofa, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CarouselButton from '../../components/CarouselButton';
import { useState } from 'react';
import Lottie from 'lottie-react';
import expertAnimation from '../../../public/Expert in Field.json';
import recycleAnimation from '../../../public/Recycle.json';
import calendarAnimation from '../../../public/Calendar.json';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const workImages = [
    { src: '/gl.png', alt: 'Before and After Cleaning Work 1' },
    { src: '/gl2.png', alt: 'Before and After Cleaning Work 2' },
    { src: '/2.png', alt: 'Before and After Cleaning Work 3' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % workImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + workImages.length) % workImages.length);
  };

  return (
    <>
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
                <div className="space-y-2 sm:gap-4">
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

      {/* Glimpse of our work Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Glimpse of our work
          </h2>
          
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {workImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={500}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Before & After</h3>
                        <p className="text-sm sm:text-base">Professional cleaning transformation</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {workImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
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
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Lottie animationData={expertAnimation} loop={true} style={{ width: '96px', height: '96px' }} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Professional Quality</h3>
              <p className="text-sm sm:text-base text-gray-600">Trained professionals with years of experience in cleaning and maintenance services.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Lottie animationData={recycleAnimation} loop={true} style={{ width: '96px', height: '96px' }} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-sm sm:text-base text-gray-600">We use environmentally safe cleaning products that are gentle on your family and pets.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg sm:col-span-2 lg:col-span-1">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Lottie animationData={calendarAnimation} loop={true} style={{ width: '96px', height: '96px' }} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-sm sm:text-base text-gray-600">Convenient scheduling options to fit your busy lifestyle and work commitments.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}