'use client';

import { Star, Users, CheckCircle, Home, Building, Sparkles, Sofa, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy load Lottie animations to improve performance
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div className="w-16 h-16 bg-gray-200 rounded-lg animate-pulse"></div>
});

// Import animations only when needed
const expertAnimation = () => import('../../public/Expert in Field.json');
const recycleAnimation = () => import('../../public/Recycle.json');
const calendarAnimation = () => import('../../public/Calendar.json');
const kitchenAnimation = () => import('../../public/Chef cooking.json');
const residentialAnimation = () => import('../../public/Cleaner Site.json');
const bathroomAnimation = () => import('../../public/Cleaning.json');
const commercialAnimation = () => import('../../public/Maintenance.json');
const furnitureAnimation = () => import('../../public/Furniture isolated.json');
const acAnimation = () => import('../../public/Home repair.json');

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedAnimations, setLoadedAnimations] = useState<{[key: string]: any}>({});

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

  // Load animation data when needed
  const loadAnimation = async (animationName: string, importFn: () => Promise<any>) => {
    if (!loadedAnimations[animationName]) {
      try {
        const animationData = await importFn();
        setLoadedAnimations(prev => ({
          ...prev,
          [animationName]: animationData.default
        }));
      } catch (error) {
        console.error(`Failed to load animation: ${animationName}`, error);
      }
    }
  };

  // Hero services - no filtering
  const heroServices = [
    { label: 'Home Deep Cleaning', animationName: 'acAnimation', importFn: acAnimation },
    { label: 'Kitchen Cleaning', animationName: 'kitchenAnimation', importFn: kitchenAnimation },
    { label: 'Residential Cleaning', animationName: 'residentialAnimation', importFn: residentialAnimation },
    { label: 'Bathroom Cleaning', animationName: 'bathroomAnimation', importFn: bathroomAnimation },
    { label: 'Commercial Cleaning', animationName: 'commercialAnimation', importFn: commercialAnimation },
    { label: 'Furniture Cleaning', animationName: 'furnitureAnimation', importFn: furnitureAnimation },
  ];

  const serviceCards = [
    {
      title: 'Residential Cleaning',
      desc: 'Professional cleaning services for homes, apartments, and villas',
      label: 'Residential Cleaning',
      img: '/1afa28fe7873be2e7460cdfcf05c3f236323e1eb.jpg',
      icon: <Home className="w-8 h-8 text-white" />,
      features: [
        'General dusting and vacuuming of all rooms',
        'Bathroom and kitchen sanitation',
        'Floor mopping and surface cleaning',
        'Eco-friendly cleaning products available',
      ],
    },
    {
      title: 'Commercial Cleaning',
      desc: 'Comprehensive cleaning solutions for offices, shops, and malls',
      label: 'Commercial Cleaning',
      img: '/08b69e6a8c84f07e986a5c790d4742edddc64b48.jpg',
      icon: <Building className="w-8 h-8 text-white" />,
      features: [
        'Workspace sanitation and desk cleaning',
        'Restroom deep cleaning and supply replenishment',
        'Window and glass surface cleaning',
        'Flexible after-hours service',
      ],
    },
    {
      title: 'Deep Cleaning',
      desc: 'Complete deep cleaning and post-renovation cleaning services',
      label: 'Deep Cleaning',
      img: '/5e0699fe1cd5ecddb07ffee953272085570a8fee.jpg',
      icon: <Sparkles className="w-8 h-8 text-white" />,
      features: [
        'Complete dust and debris removal',
        'Deep scrubbing of kitchens and bathrooms',
        'Stain, grease, and adhesive elimination',
        'Move-in ready space preparation',
      ],
    },
    {
      title: 'Furniture Cleaning',
      desc: 'Fresh and clean upholstery services for all furniture types',
      label: 'Furniture Cleaning',
      img: '/3d27251398f4f7f19bdbeae61e868f777cdefe6f.jpg',
      icon: <Sofa className="w-8 h-8 text-white" />,
      features: [
        'Sofas & Chairs – Fabric or leather cleaning',
        'Mattresses – Dust, odor, and stain removal',
        'Office Chairs – Seat and back cleaning',
        'Cushions & Pillows – Fluff and freshen up',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white mb-12 sm:mb-16 lg:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Home services at your doorstep
              </h1>

              {/* Service Categories Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {heroServices.map((s) => (
                  <Link
                    href="/pricing"
                    key={s.label}
                    prefetch
                    className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors cursor-pointer flex flex-col items-center"
                    style={{cursor:'pointer'}}
                    onMouseEnter={() => loadAnimation(s.animationName, s.importFn)}
                  >
                    <div>
                      {loadedAnimations[s.animationName] ? (
                        <Lottie animationData={loadedAnimations[s.animationName]} loop={true} />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 rounded-lg animate-pulse"></div>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">{s.label}</p>
                  </Link>
                ))}
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
                      src="/home.jpg"
                      alt="Home Cleaning Service"
                      width={200}
                      height={160}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded"
                      priority
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src="/home2.jpg"
                      alt="Professional Cleaning Service"
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
                      src="/home3.jpg"
                      alt="Deep Cleaning Service"
                      width={200}
                      height={160}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src="/home5.jpg"
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
      <section className="py-8 sm:py-12 lg:py-16 mb-12 sm:mb-16 lg:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Our Professional Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">

            {serviceCards.map((card) => (
              <Link href="/pricing" key={card.title} prefetch className="bg-white rounded-lg shadow-md overflow-hidden block" style={{cursor:'pointer'}}>
                <div className="h-48 sm:h-56 bg-gradient-to-br from-blue-100 to-blue-200 relative">
                  <Image src={card.img} alt={card.title} fill className="object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute top-4 left-4">{card.icon}</div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                  <p className="text-gray-600 mb-4">{card.desc}</p>
                  <ul className="space-y-2">
                    {card.features.map(f => (
                      <li key={f} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* Glimpse of our work Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 mb-12 sm:mb-16 lg:mb-20">
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
      <section className="py-8 sm:py-12 lg:py-16 bg-white mb-12 sm:mb-16 lg:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Why Choose Cool Technical Service?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                {loadedAnimations.expertAnimation ? (
                  <Lottie animationData={loadedAnimations.expertAnimation} loop={true} style={{ width: '96px', height: '96px' }} />
                ) : (
                  <div className="w-24 h-24 bg-gray-200 rounded-lg animate-pulse" onMouseEnter={() => loadAnimation('expertAnimation', expertAnimation)}></div>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Professional Quality</h3>
              <p className="text-sm sm:text-base text-gray-600">Trained professionals with years of experience in cleaning and maintenance services.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                {loadedAnimations.recycleAnimation ? (
                  <Lottie animationData={loadedAnimations.recycleAnimation} loop={true} style={{ width: '96px', height: '96px' }} />
                ) : (
                  <div className="w-24 h-24 bg-gray-200 rounded-lg animate-pulse" onMouseEnter={() => loadAnimation('recycleAnimation', recycleAnimation)}></div>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-sm sm:text-base text-gray-600">We use environmentally safe cleaning products that are gentle on your family and pets.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg sm:col-span-2 lg:col-span-1">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                {loadedAnimations.calendarAnimation ? (
                  <Lottie animationData={loadedAnimations.calendarAnimation} loop={true} style={{ width: '96px', height: '96px' }} />
                ) : (
                  <div className="w-24 h-24 bg-gray-200 rounded-lg animate-pulse" onMouseEnter={() => loadAnimation('calendarAnimation', calendarAnimation)}></div>
                )}
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
