import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-8">Contact Us</h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
            Get in touch with us for all your cleaning and technical service needs.
            We&apos;re here to help and provide you with the best service possible.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Get In Touch</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Address</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Office 201, M Floor, Gate No 1, Abdullah Bahar Building, Salahudin Road, Deira Dubai</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Phone</h4>
                    <p className="text-gray-600 text-sm sm:text-base">04 268 6552</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Mobile</h4>
                    <p className="text-gray-600 text-sm sm:text-base">0505393004</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">WhatsApp</h4>
                    <p className="text-gray-600 text-sm sm:text-base">0505393004</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Toll Free</h4>
                    <p className="text-gray-600 text-sm sm:text-base">8006442</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h4>
                    <p className="text-gray-600 text-sm sm:text-base break-all">cleaningservices@abc.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Send us a Message</h3>
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    placeholder="Enter your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}