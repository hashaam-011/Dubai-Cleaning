import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PackagesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-8">Our Packages</h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
            Choose from our comprehensive cleaning packages designed to meet your specific needs.
            We offer flexible solutions for both residential and commercial clients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Basic Package */}
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md border-2 border-gray-200">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">Basic Package</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">Perfect for regular maintenance cleaning</p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center text-sm sm:text-base">
                  <span className="text-green-500 mr-2">✓</span>
                  General dusting and vacuuming
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="text-green-500 mr-2">✓</span>
                  Bathroom cleaning
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="text-green-500 mr-2">✓</span>
                  Kitchen surface cleaning
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="text-green-500 mr-2">✓</span>
                  Trash removal
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm sm:text-base">
                Get Quote
              </button>
            </div>

            {/* Standard Package */}
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md border-2 border-green-500 relative">
              <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">Standard Package</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">Comprehensive cleaning for thorough results</p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center text-sm sm:text-base">
                  <span className="text-green-500 mr-2">✓</span>
                  All Basic Package services
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="text-green-500 mr-2">✓</span>
                  Deep carpet cleaning
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="text-green-500 mr-2">✓</span>
                  Window cleaning
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="text-green-500 mr-2">✓</span>
                  Appliance cleaning
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="text-green-500 mr-2">✓</span>
                  Floor mopping and polishing
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm sm:text-base">
                Get Quote
              </button>
            </div>

            {/* Premium Package */}
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md border-2 border-gray-200 sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">Premium Package</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">Complete deep cleaning and sanitization</p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center text-sm sm:text-base">
                  <span className="text-green-500 mr-2">✓</span>
                  All Standard Package services
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="text-green-500 mr-2">✓</span>
                  Upholstery cleaning
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="text-green-500 mr-2">✓</span>
                  Air duct cleaning
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="text-green-500 mr-2">✓</span>
                  Sanitization services
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="text-green-500 mr-2">✓</span>
                  Post-construction cleanup
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="text-green-500 mr-2">✓</span>
                  Specialized equipment cleaning
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm sm:text-base">
                Get Quote
              </button>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Custom Packages</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
              Don&apos;t see a package that fits your needs? We offer custom cleaning solutions tailored to your specific requirements.
              Contact us to discuss your needs and get a personalized quote.
            </p>
            <button className="bg-green-600 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm sm:text-base">
              Contact Us for Custom Quote
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}