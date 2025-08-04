import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollIndicator from '../../components/ScrollIndicator';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">

        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 sm:py-32">
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          <div className="absolute inset-0">
            <img
              src="/35f06415aa4bd57a00b29fca514da8e056691423.jpg"
              alt="Professional cleaning service"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg">
              Pricing
            </h1>
            <p className="text-lg sm:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-8 drop-shadow-md">
              Our pricing is designed with flexibility and transparency in mind. Whether you need a quick clean or full-time help, we offer affordable packages that fit your schedule and budget—without compromising on quality. Explore our rates and choose the plan that works best for your space.
            </p>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-gray-700 font-medium">Scroll Down</span>
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center bg-white bg-opacity-80">
                <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Elite Cleaning, Clearly Priced!
                </h2>
              </div>
            </div>

            {/* Homes Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ▶ For <span className="text-green-600">Homes</span> - 4 weeks service pack
                </h3>
              </div>

              {/* Once in a week - 4 times */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Once in a week - 4 times</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Rooms</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Duration</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Without Supplies</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Regular Supplies</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Eco Supplies</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">Studio</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">2 Hrs</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 440</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 520</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 600</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">1 Bedroom</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">3 Hrs</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 560</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 680</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 800</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">2 Bedroom</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">4 Hrs</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 640</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 800</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 960</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">3 Bedroom</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">5 Hrs</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 800</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1000</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1200</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">4 Bedroom</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">6 Hrs</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 960</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1200</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1440</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Twice in a week - 8 times */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Twice in a week - 8 times</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Rooms</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Duration</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Without Supplies</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Regular Supplies</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Eco Supplies</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">Studio</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">2 Hrs</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 880</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1040</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1200</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">1 Bedroom</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">3 Hrs</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1120</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1360</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1600</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">2 Bedroom</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">4 Hrs</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1280</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1600</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1920</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">3 Bedroom</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">5 Hrs</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1600</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 2000</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 2400</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">4 Bedroom</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">6 Hrs</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1920</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 2400</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 2880</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Thrice in a week - 8 times */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Thrice in a week - 8 times</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Rooms</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Duration</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Without Supplies</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Regular Supplies</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Eco Supplies</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">Studio</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">2 Hrs</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 880</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1040</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1200</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">1 Bedroom</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">3 Hrs</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1120</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1360</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1600</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">2 Bedroom</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">4 Hrs</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1280</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1600</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1920</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">3 Bedroom</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">5 Hrs</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1600</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 2000</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 2400</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">4 Bedroom</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">6 Hrs</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1920</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 2400</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 2880</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Apartments Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ▶ For <span className="text-green-600">Apartments</span>
                </h3>
                <p className="text-lg text-green-600 font-semibold">25% off on your first booking</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Rooms</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Eco Supplies</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">Studio</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 399</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">1 BHK</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 599</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">2 BHK</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 799</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">3 BHK</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1199</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Villas Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ▶ For <span className="text-green-600">Villas</span>
                </h3>
                <p className="text-lg text-green-600 font-semibold">25% off on your first booking</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Rooms</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Eco Supplies</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">1 BHK</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 799</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">2 BHK</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 999</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">3 BHK</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1299</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">4 BHK</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1399</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">5 BHK</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900 font-semibold">AED 1699</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Link href="/contact">
                <button className="bg-yellow-500 text-white px-8 py-4 rounded-lg hover:bg-yellow-600 transition-colors font-bold text-lg flex items-center mx-auto">
                  Book Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </Link>
            </div>

          </div>
        </div>

      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  );
}