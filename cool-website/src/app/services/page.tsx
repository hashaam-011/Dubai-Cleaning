import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Home, Building, Sparkles, Wrench, Shield, Users } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-8">Our Services</h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
            We offer a comprehensive range of cleaning and technical services to meet all your needs.
            From residential to commercial, we ensure the highest quality standards in everything we do.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Residential Cleaning */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3 sm:mb-4">
                <Home className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mr-2 sm:mr-3" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Residential Cleaning</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                Professional home cleaning services tailored to your specific needs and schedule.
              </p>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                <li>• Regular house cleaning</li>
                <li>• Deep cleaning services</li>
                <li>• Move-in/move-out cleaning</li>
                <li>• Spring cleaning</li>
              </ul>
            </div>

            {/* Commercial Cleaning */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3 sm:mb-4">
                <Building className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mr-2 sm:mr-3" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Commercial Cleaning</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                Comprehensive cleaning solutions for offices, retail spaces, and commercial properties.
              </p>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                <li>• Office cleaning</li>
                <li>• Retail space cleaning</li>
                <li>• Industrial cleaning</li>
                <li>• Warehouse cleaning</li>
              </ul>
            </div>

            {/* Deep Cleaning */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3 sm:mb-4">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mr-2 sm:mr-3" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Deep Cleaning</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                Thorough deep cleaning services that go beyond regular maintenance.
              </p>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                <li>• Carpet deep cleaning</li>
                <li>• Upholstery cleaning</li>
                <li>• Air duct cleaning</li>
                <li>• Sanitization services</li>
              </ul>
            </div>

            {/* Post-construction Cleaning */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3 sm:mb-4">
                <Wrench className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mr-2 sm:mr-3" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Post-construction Cleaning</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                Specialized cleaning services after construction or renovation projects.
              </p>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                <li>• Construction debris removal</li>
                <li>• Dust and paint cleanup</li>
                <li>• Final touch-up cleaning</li>
                <li>• Safety compliance cleaning</li>
              </ul>
            </div>

            {/* Sanitization Services */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3 sm:mb-4">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mr-2 sm:mr-3" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Sanitization Services</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                Professional sanitization and disinfection services for health and safety.
              </p>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                <li>• Surface disinfection</li>
                <li>• Air purification</li>
                <li>• COVID-19 sanitization</li>
                <li>• Healthcare facility cleaning</li>
              </ul>
            </div>

            {/* Specialized Cleaning */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mr-2 sm:mr-3" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Specialized Cleaning</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                Custom cleaning solutions for specific needs and requirements.
              </p>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                <li>• Window cleaning</li>
                <li>• Carpet and upholstery</li>
                <li>• Equipment cleaning</li>
                <li>• Emergency cleaning</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Why Choose Our Services?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Professional Team</h4>
                <p className="text-gray-600 text-sm sm:text-base">Trained and experienced cleaning professionals</p>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Quality Equipment</h4>
                <p className="text-gray-600 text-sm sm:text-base">State-of-the-art cleaning equipment and supplies</p>
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Flexible Scheduling</h4>
                <p className="text-gray-600 text-sm sm:text-base">Convenient scheduling options to fit your needs</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}