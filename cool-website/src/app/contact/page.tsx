'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollIndicator from '../../components/ScrollIndicator';
import { ArrowRight, Mail, Phone, MapPin, HelpCircle, MessageCircle, Users, Building } from 'lucide-react';
import { useState } from 'react';

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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">

            {/* Left Column - Contact Form */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                Contact us
              </h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Enter Phone Number</label>
                  <div className="flex space-x-2">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => handleInputChange('countryCode', e.target.value)}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                    >
                      <option value="+971">+971</option>
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Enter Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right Column - Information Sections */}
            <div className="space-y-6">
              {/* Call Us Person Image */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-center">
                  <img
                    src="/879cbb094a6a27505099f36b47ef50414566d7e8.jpg"
                    alt="Call us - Customer Service Representative"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us Today!</h3>
                  <p className="text-gray-600 mb-4">
                    Our friendly customer service team is ready to help you with all your cleaning service needs.
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5 text-black" />
                    <span className="text-lg font-semibold text-black">04 268 6552</span>
                  </div>
                </div>
              </div>

              {/* Need help? */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Need help?</h3>
                <p className="text-gray-600 mb-4">
                  For any immediate help regarding your bookings, please log-in and visit our Help Center. You will be able to get instant resolution through our chat support.
                </p>
                <a href="#" className="text-black font-medium flex items-center hover:text-gray-700">
                  Open Help Center <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* Still facing issues? */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Still facing issues?</h3>
                <p className="text-gray-600 mb-4">
                  If you've already tried chatting with us and are not satisfied with the resolution - please send us an email on resolve@cooltechnical.com. We will get back to you within 24-48 hours.
                </p>
                <a href="mailto:resolve@cooltechnical.com" className="text-black font-medium">
                  resolve@cooltechnical.com
                </a>
              </div>

              {/* Media inquiries */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Media inquiries</h3>
                <p className="text-gray-600 mb-4">
                  For media inquiries, you can send us an email on press@cooltechnical.com
                </p>
                <a href="mailto:press@cooltechnical.com" className="text-black font-medium">
                  press@cooltechnical.com
                </a>
              </div>

              {/* Helpline number */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">What is our helpline number?</h3>
                <p className="text-gray-600 mb-4">
                  We have switched from a customer care phone number to a fast, simple-to-use chat based support. Just open our Help Center, select your issue, and initiate a chat with us.
                </p>
              </div>

              {/* Office addresses */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Our office addresses</h3>
                <p className="text-gray-600 mb-4">
                  You can view a list of all our office addresses by clicking below
                </p>
                <a href="#" className="text-black font-medium flex items-center hover:text-gray-700">
                  View addresses <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Office Location
            </h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1234567890123!2d55.27000000000001!3d25.27000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzEyLjAiTiA1NcKwMTYnMTIuMCJF!5e0!3m2!1sen!2sae!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cool Technical Service Office Location"
                ></iframe>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-black mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Main Office</h3>
                    <p className="text-gray-600">
                      Office 201, M Floor, Gate No 1, Abdullah Bahar Building, Salahudin Road, Deira Dubai
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">04 268 6552</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">cleaningservices@abc.com</span>
                      </div>
                    </div>
                  </div>
                </div>
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