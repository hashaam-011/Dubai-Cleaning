'use client';

import { CheckCircle, Star, Home, Building, Sparkles, Users, Award, Clock, Shield, Headphones } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Lottie from 'lottie-react';
import servicesAnimation from '../../../public/Services.json';
import testimonialsAnimation from '../../../public/Testimonials.json';

// Service data based on the content shown in the images
const services = [
  {
    id: 1,
    title: "Residential Cleaning",
    description: "Professional cleaning services for homes, apartments, and villas with eco-friendly products and trained staff.",
    icon: <Home className="w-8 h-8 text-blue-600" />,
    features: [
      "General dusting and vacuuming",
      "Bathroom and kitchen sanitation", 
      "Floor mopping and surface cleaning",
      "Eco-friendly cleaning products"
    ],
    bgColor: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    textColor: "text-blue-600"
  },
  {
    id: 2,
    title: "Commercial Cleaning", 
    description: "Comprehensive cleaning solutions for offices, shops, malls and commercial spaces with flexible scheduling.",
    icon: <Building className="w-8 h-8 text-green-600" />,
    features: [
      "Workspace sanitation and desk cleaning",
      "Restroom deep cleaning",
      "Window and glass surface cleaning", 
      "Flexible after-hours service"
    ],
    bgColor: "from-green-50 to-green-100",
    borderColor: "border-green-200",
    textColor: "text-green-600"
  },
  {
    id: 3,
    title: "Deep Cleaning",
    description: "Complete deep cleaning and post-renovation cleaning services for intensive cleaning needs.",
    icon: <Sparkles className="w-8 h-8 text-purple-600" />,
    features: [
      "Complete dust and debris removal",
      "Deep scrubbing of kitchens and bathrooms",
      "Stain, grease, and adhesive elimination",
      "Move-in ready space preparation"
    ],
    bgColor: "from-purple-50 to-purple-100", 
    borderColor: "border-purple-200",
    textColor: "text-purple-600"
  },
  {
    id: 4,
    title: "Post-Construction Cleaning",
    description: "Specialized cleaning services after renovation or construction work to make your space ready for use.",
    icon: <Award className="w-8 h-8 text-orange-600" />,
    features: [
      "Construction debris removal",
      "Paint and adhesive cleaning",
      "Window and fixture cleaning",
      "Final inspection and touch-ups"
    ],
    bgColor: "from-orange-50 to-orange-100",
    borderColor: "border-orange-200", 
    textColor: "text-orange-600"
  }
];

// Testimonial data based on the content shown in the images
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Owner",
    rating: 5,
    comment: "The team at Cool Technical Services exceeded our expectations. Their attention to detail and professionalism made our office sparkle. Highly recommended!",
    avatar: "/41.png"
  },
  {
    id: 2, 
    name: "Michael Chen",
    role: "Business Owner",
    rating: 5,
    comment: "Their deep cleaning service transformed our home. The team was thorough, efficient, and left everything spotless. Will definitely use their services again!",
    avatar: "/42.png"
  },
  {
    id: 3,
    name: "Emma Rodriguez", 
    role: "Villa Owner",
    rating: 5,
    comment: "The post-construction cleaning was professional and reliable. They removed all dust and debris, leaving our newly renovated space immaculate.",
    avatar: "/41.png"
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Office Manager", 
    rating: 5,
    comment: "Regular commercial cleaning service has been a game changer for our business. Consistent quality and excellent customer service.",
    avatar: "/42.png"
  }
];

export default function ServicePage() {
    return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <div className="relative mb-16 sm:mb-20 lg:mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 via-white to-blue-50 rounded-3xl transform -skew-y-1"></div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 px-8">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-6 h-6 mr-2" />
              <span className="font-semibold text-lg">Professional Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Cool Technical</span> Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              At Cool Technical Services, we understand that a clean space is essential to your comfort and well-being. With our team of highly trained professionals, we deliver premium cleaning services that go beyond expectations.
            </p>
            <div className="flex justify-center lg:justify-start">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <Lottie 
                animationData={servicesAnimation}
                loop={true}
                style={{ width: '420px', height: '340px' }}
                className="opacity-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* What We're Offering Section */}
      <div className="mb-16 sm:mb-20 lg:mb-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full mb-6">
            <Award className="w-6 h-6 mr-2" />
            <span className="font-semibold text-lg">What We&apos;re Offering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-500">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`group relative bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 border-2 ${service.borderColor} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Service Icon */}
              <div className="flex items-center mb-6">
                <div className={`bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${service.textColor}`}>{service.title}</h3>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Description */}
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <CheckCircle className={`w-5 h-5 ${service.textColor} mr-3 flex-shrink-0`} />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <div className="flex justify-center">
                <Link href="/contact" prefetch>
                  <button className={`bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                    Learn More →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-12">
          <Link href="/packages" prefetch>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              See All Packages →
            </button>
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16 sm:mb-20 lg:mb-24">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-full mb-6">
            <Users className="w-6 h-6 mr-2" />
            <span className="font-semibold text-lg">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-yellow-500">Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto"></div>
        </div>

        {/* Testimonials Animation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <Lottie 
              animationData={testimonialsAnimation}
              loop={true}
              style={{ width: '300px', height: '200px' }}
              className="opacity-100"
            />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="group bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full transform translate-x-10 -translate-y-10"></div>
              
              {/* Stars */}
              <div className="flex items-center justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center italic">
                "{testimonial.comment}"
              </p>

              {/* Avatar and Info */}
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3 ring-4 ring-blue-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="font-bold text-gray-900 text-center">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm text-center">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Feedback Button */}
        <div className="text-center mt-12">
          <Link href="/contact" prefetch>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Submit Your Feedback →
            </button>
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-yellow-500/10"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Shield className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-400 font-medium">Why Choose Us?</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the Cool Technical Service Difference
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Flexible Scheduling</h4>
              <p className="text-gray-300 text-sm">Available 7 days a week with flexible timing to suit your needs</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-green-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Eco-Friendly Products</h4>
              <p className="text-gray-300 text-sm">Safe, non-toxic cleaning products that protect your family and environment</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-yellow-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <Headphones className="w-8 h-8 text-yellow-400" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">24/7 Support</h4>
              <p className="text-gray-300 text-sm">Round-the-clock customer support for all your cleaning needs</p>
            </div>
          </div>
          
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
            Whether you need a quick clean or full-time help, we offer affordable packages that fit your schedule and budget—without compromising on quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" prefetch>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Get Free Quote
              </button>
            </Link>
            <Link href="/packages" prefetch>
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                View Packages
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    );
  }