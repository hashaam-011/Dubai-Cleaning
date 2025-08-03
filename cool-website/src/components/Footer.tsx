'use client';

import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const handlePhoneClick = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsAppClick = (phoneNumber: string) => {
    const message = "Hello! I'm interested in your cleaning services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLocationClick = () => {
    const address = "Office 201, M Floor, Gate No 1, Abdullah Bahar Building, Salahudin Road, Deira Dubai";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=cleaningservices@abc.com', '_blank');
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6">
          {/* Company Info */}
          <div className="sm:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 relative">
                <Image
                  src="/logo.png"
                  alt="Cool Technical Service Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-base sm:text-lg font-semibold text-black">Cool Technical Service</span>
            </div>
            <h3 className="text-xs sm:text-sm font-semibold text-black mb-3">Company</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="/about" className="text-black hover:text-gray-700 text-xs sm:text-sm">About us</Link></li>
              <li><Link href="/contact" className="text-black hover:text-gray-700 text-xs sm:text-sm">Contact us</Link></li>
              <li><a href="#" className="text-black hover:text-gray-700 text-xs sm:text-sm">Terms & conditions</a></li>
              <li><a href="#" className="text-black hover:text-gray-700 text-xs sm:text-sm">Privacy policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="sm:col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-black mb-3">Services</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="/services" className="text-black hover:text-gray-700 text-xs sm:text-sm">Residential Cleaning</Link></li>
              <li><Link href="/services" className="text-black hover:text-gray-700 text-xs sm:text-sm">Commercial Cleaning</Link></li>
              <li><Link href="/services" className="text-black hover:text-gray-700 text-xs sm:text-sm">Deep Cleaning</Link></li>
              <li><Link href="/packages" className="text-black hover:text-gray-700 text-xs sm:text-sm">Our Packages</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="sm:col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-black mb-3">Support</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#" className="text-black hover:text-gray-700 text-xs sm:text-sm">Customer Support</a></li>
              <li><a href="#" className="text-black hover:text-gray-700 text-xs sm:text-sm">Help Center</a></li>
              <li><a href="#" className="text-black hover:text-gray-700 text-xs sm:text-sm">Service Areas</a></li>
              <li><a href="#" className="text-black hover:text-gray-700 text-xs sm:text-sm">FAQs</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="sm:col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-black mb-3">Social links</h3>
            <div className="flex space-x-2 sm:space-x-3 mb-4">
              <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Facebook className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              </a>
              <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-pink-600" />
              </a>
              <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-700" />
              </a>
            </div>

            {/* Get In Touch */}
            <h4 className="text-xs sm:text-sm font-semibold text-black mb-3">Get In Touch</h4>
            <div className="space-y-1 sm:space-y-2">
              <div
                className="flex items-start space-x-2 cursor-pointer hover:bg-gray-100 p-1 rounded transition-colors"
                onClick={handleLocationClick}
              >
                <MapPin className="w-2 h-2 sm:w-3 sm:h-3 text-black mt-0.5 flex-shrink-0" />
                <span className="text-xs text-black leading-tight">Office 201, M Floor, Gate No 1, Abdullah Bahar Building, Salahudin Road, Deira Dubai</span>
              </div>
              <div
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-1 rounded transition-colors"
                onClick={() => handlePhoneClick('042686552')}
              >
                <Phone className="w-2 h-2 sm:w-3 sm:h-3 text-black flex-shrink-0" />
                <span className="text-xs text-black">04 268 6552</span>
              </div>
              <div
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-1 rounded transition-colors"
                onClick={() => handlePhoneClick('0505393004')}
              >
                <Phone className="w-2 h-2 sm:w-3 sm:h-3 text-black flex-shrink-0" />
                <span className="text-xs text-black">0505393004</span>
              </div>
              <div
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-1 rounded transition-colors"
                onClick={() => handleWhatsAppClick('971505393004')}
              >
                <svg className="w-2 h-2 sm:w-3 sm:h-3 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="text-xs text-black">0505393004</span>
              </div>
              <div
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-1 rounded transition-colors"
                onClick={() => handlePhoneClick('8006442')}
              >
                <Phone className="w-2 h-2 sm:w-3 sm:h-3 text-black flex-shrink-0" />
                <span className="text-xs text-black">8006442 (Toll Free)</span>
              </div>
              <div
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-1 rounded transition-colors"
                onClick={handleEmailClick}
              >
                <Mail className="w-2 h-2 sm:w-3 sm:h-3 text-black flex-shrink-0" />
                <span className="text-xs text-black break-all">cleaningservices@abc.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-4">
          <div className="text-xs text-black text-center sm:text-left">
            <p>© Copyright 2025 Cool Technical Service Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;