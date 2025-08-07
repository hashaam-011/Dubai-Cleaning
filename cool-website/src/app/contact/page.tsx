'use client';
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, MessageCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import contactAnimation from '../../../public/contact.json';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+971',
    phoneNumber: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section with Image */}
      <div className="relative mb-16 sm:mb-20 lg:mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-green-50 rounded-3xl transform -skew-y-1"></div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 px-8">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full mb-6">
              <MessageCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">Get In Touch</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Contact</span> Us
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Ready to experience the best cleaning service in Dubai? Contact us today for a free consultation and quote.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <Lottie 
                animationData={contactAnimation}
                loop={true}
                style={{ width: '420px', height: '340px' }}
                className="opacity-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Get In Touch Box */}
      <div className="bg-gradient-to-r from-white to-blue-50 rounded-3xl shadow-2xl p-8 md:p-12 mb-12 sm:mb-16 lg:mb-20 border border-blue-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-500/10 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
        
        <div className="relative text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-6 h-6 mr-2" />
            <span className="font-semibold text-lg">We&apos;re Here to Help</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-green-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re here to help you with all your cleaning needs. Reach out to us and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 sm:mb-16 lg:mb-20">
        {/* Contact Form */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full transform -translate-x-20 -translate-y-20"></div>
          
          <div className="relative">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Send us a message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white/70 backdrop-blur-sm"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white/70 backdrop-blur-sm"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                  Phone Number *
                </label>
                <div className="flex">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleInputChange('countryCode', e.target.value)}
                    className="px-4 py-4 border-2 border-gray-200 rounded-l-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/70 backdrop-blur-sm text-gray-900 font-medium"
                  >
                    <option value="+971">+971</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+91">+91</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className="flex-1 px-4 py-4 border-2 border-l-0 border-gray-200 rounded-r-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white/70 backdrop-blur-sm"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={5}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white/70 backdrop-blur-sm resize-none"
                  placeholder="Tell us about your cleaning needs..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Send Message
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Quick Contact */}
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
            
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Quick Contact</h2>
              </div>
              
              <div className="space-y-6">
                <div className="group flex items-center space-x-4 p-4 bg-white/70 backdrop-blur-sm rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Call Us</h3>
                    <p className="text-gray-600 font-medium">8006442</p>
                  </div>
                </div>

                <div className="group flex items-center space-x-4 p-4 bg-white/70 backdrop-blur-sm rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Email Us</h3>
                    <p className="text-gray-600 font-medium">info@cooltechnicalservice.com</p>
                  </div>
                </div>

                <div className="group flex items-center space-x-4 p-4 bg-white/70 backdrop-blur-sm rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Visit Us</h3>
                    <p className="text-gray-600 font-medium">Dubai, United Arab Emirates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-gradient-to-br from-white to-yellow-50 rounded-3xl shadow-2xl p-8 border border-yellow-100 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-full transform -translate-x-14 translate-y-14"></div>
            
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Business Hours</h2>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Monday - Friday</span>
                  <span className="font-bold text-gray-900">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Saturday</span>
                  <span className="font-bold text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 font-medium">Sunday</span>
                  <span className="font-bold text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full mb-6">
            <MapPin className="w-6 h-6 mr-2" />
            <span className="font-semibold text-lg">Find Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            We&apos;re Just Around the <span className="text-red-500">Corner</span> ;)
          </h2>
          <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 font-medium">
              Office 201, M Floor, Gate No 1, Abdullah Bahar Building, Salahudin Road, Deira Dubai
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-red-500/5 pointer-events-none"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1234567890123!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTUuMCJF!5e0!3m2!1sen!2sae!4v1234567890123"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cool Technical Service Location"
            className="relative z-10"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
