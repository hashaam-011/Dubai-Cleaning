'use client';

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const handlePhoneClick = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971505393004', '_blank');
  };

  const handleLocationClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Office+201,+M+Floor,+Gate+No+1,+Abdullah+Bahar+Building,+Salahudin+Road,+Deira+Dubai', '_blank');
  };

  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=cleaningservices@abc.com', '_blank');
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 relative">
                <Image
                  src="/logo.png"
                  alt="Cool Technical Service Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-gray-900 text-sm">Cool Technical Service</span>
            </div>
            <p className="text-xs text-gray-600">
              Professional cleaning and technical services for your home and business needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 text-sm">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/home" prefetch={true} className="block text-xs text-gray-600 hover:text-black transition-colors">
                Home
              </Link>
              <Link href="/services" prefetch={true} className="block text-xs text-gray-600 hover:text-black transition-colors">
                Services
              </Link>
              <Link href="/packages" prefetch={true} className="block text-xs text-gray-600 hover:text-black transition-colors">
                Packages
              </Link>
              <Link href="/about" prefetch={true} className="block text-xs text-gray-600 hover:text-black transition-colors">
                About Us
              </Link>
              <Link href="/contact" prefetch={true} className="block text-xs text-gray-600 hover:text-black transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 text-sm">Our Services</h3>
            <nav className="space-y-2">
              <Link href="/services" prefetch={true} className="block text-xs text-gray-600 hover:text-black transition-colors">
                Residential Cleaning
              </Link>
              <Link href="/services" prefetch={true} className="block text-xs text-gray-600 hover:text-black transition-colors">
                Commercial Cleaning
              </Link>
              <Link href="/services" prefetch={true} className="block text-xs text-gray-600 hover:text-black transition-colors">
                Deep Cleaning
              </Link>
              <Link href="/services" prefetch={true} className="block text-xs text-gray-600 hover:text-black transition-colors">
                Furniture Cleaning
              </Link>
              <Link href="/services" prefetch={true} className="block text-xs text-gray-600 hover:text-black transition-colors">
                Pest Control
              </Link>
            </nav>
          </div>

          {/* Get In Touch */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 text-sm">Get In Touch</h3>
            <div className="space-y-2">
              <div
                className="flex items-center space-x-2 text-xs text-gray-600 hover:text-black transition-colors cursor-pointer"
                onClick={handleLocationClick}
              >
                <MapPin className="w-3 h-3 text-black" />
                <span className="break-all">Office 201, M Floor, Gate No 1, Abdullah Bahar Building, Salahudin Road, Deira Dubai</span>
              </div>
              <div
                className="flex items-center space-x-2 text-xs text-gray-600 hover:text-black transition-colors cursor-pointer"
                onClick={() => handlePhoneClick('042686552')}
              >
                <Phone className="w-3 h-3 text-black" />
                <span>04 268 6552</span>
                <Phone className="w-3 h-3 text-black" />
              </div>
              <div
                className="flex items-center space-x-2 text-xs text-gray-600 hover:text-black transition-colors cursor-pointer"
                onClick={() => handlePhoneClick('971505393004')}
              >
                <Phone className="w-3 h-3 text-black" />
                <span>0505393004</span>
              </div>
              <div
                className="flex items-center space-x-2 text-xs text-gray-600 hover:text-black transition-colors cursor-pointer"
                onClick={handleWhatsAppClick}
              >
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>0505393004</span>
              </div>
              <div
                className="flex items-center space-x-2 text-xs text-gray-600 hover:text-black transition-colors cursor-pointer"
                onClick={() => handlePhoneClick('8006442')}
              >
                <Phone className="w-3 h-3 text-black" />
                <span>8006442 (Toll Free)</span>
              </div>
              <div
                className="flex items-center space-x-2 text-xs text-gray-600 hover:text-black transition-colors cursor-pointer break-all"
                onClick={handleEmailClick}
              >
                <Mail className="w-3 h-3 text-black" />
                <span>cleaningservices@abc.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <h4 className="font-semibold text-gray-900 text-xs mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <Facebook className="w-4 h-4 text-black" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <Instagram className="w-4 h-4 text-black" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <Linkedin className="w-4 h-4 text-black" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-6 pt-6">
          <p className="text-center text-xs text-gray-600">
            © 2024 Cool Technical Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;