import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Our Services
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Residential Cleaning</h3>
              <p className="text-gray-600 mb-4">Professional cleaning services for homes, apartments, and villas.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• General dusting and vacuuming</li>
                <li>• Bathroom and kitchen sanitation</li>
                <li>• Floor mopping and surface cleaning</li>
                <li>• Eco-friendly cleaning products</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Commercial Cleaning</h3>
              <p className="text-gray-600 mb-4">Comprehensive cleaning solutions for offices, shops, and malls.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Workspace sanitation and desk cleaning</li>
                <li>• Restroom deep cleaning</li>
                <li>• Window and glass surface cleaning</li>
                <li>• Flexible after-hours service</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Deep Cleaning</h3>
              <p className="text-gray-600 mb-4">Complete deep cleaning and post-renovation cleaning services.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Complete dust and debris removal</li>
                <li>• Deep scrubbing of kitchens and bathrooms</li>
                <li>• Stain, grease, and adhesive elimination</li>
                <li>• Move-in ready space preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Furniture Cleaning</h3>
              <p className="text-gray-600 mb-4">Fresh and clean upholstery services for all furniture types.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Sofas & Chairs – Fabric or leather cleaning</li>
                <li>• Mattresses – Dust, odor, and stain removal</li>
                <li>• Office Chairs – Seat and back cleaning</li>
                <li>• Cushions & Pillows – Fluff and freshen up</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Pest Control</h3>
              <p className="text-gray-600 mb-4">Effective pest control solutions for residential and commercial properties.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cockroach, Ant & General Pest Control</li>
                <li>• Safe and eco-friendly treatments</li>
                <li>• Regular maintenance programs</li>
                <li>• Emergency pest control services</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Specialized Cleaning</h3>
              <p className="text-gray-600 mb-4">Specialized cleaning services for specific areas and requirements.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Kitchen deep cleaning</li>
                <li>• Bathroom sanitization</li>
                <li>• Carpet and upholstery cleaning</li>
                <li>• Post-construction cleanup</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}