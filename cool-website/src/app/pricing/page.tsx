import { CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          <span className="text-yellow-500">Elite</span> Cleaning, <span className="text-yellow-500">Clearly Priced!</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
          Our pricing is designed with flexibility and transparency in mind. Whether you need a quick clean or full-time help, we offer affordable packages that fit your schedule and budget—without compromising on quality. Explore our rates and choose the plan that works best for your space.
        </p>
      </div>

      {/* Homes Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          <span className="text-yellow-500">▶</span> For <span className="text-yellow-500">Homes</span> - 4 weeks service pack
        </h2>
        
        {/* Once in a week - 4 times */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Once in a week - 4 times</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Rooms</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Duration</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Without Supplies</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Regular Supplies</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Eco Supplies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Studio</td>
                  <td className="px-6 py-4 text-sm text-gray-600">2 Hrs</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 440</span> <span className="text-green-600 font-semibold">AED 418</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 520</span> <span className="text-green-600 font-semibold">AED 494</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 600</span> <span className="text-green-600 font-semibold">AED 570</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">1 Bedroom</td>
                  <td className="px-6 py-4 text-sm text-gray-600">3 Hrs</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 560</span> <span className="text-green-600 font-semibold">AED 504</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 680</span> <span className="text-green-600 font-semibold">AED 612</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 800</span> <span className="text-green-600 font-semibold">AED 720</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">2 Bedroom</td>
                  <td className="px-6 py-4 text-sm text-gray-600">4 Hrs</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 640</span> <span className="text-green-600 font-semibold">AED 576</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 800</span> <span className="text-green-600 font-semibold">AED 720</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 960</span> <span className="text-green-600 font-semibold">AED 864</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">3 Bedroom</td>
                  <td className="px-6 py-4 text-sm text-gray-600">5 Hrs</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 800</span> <span className="text-green-600 font-semibold">AED 720</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1000</span> <span className="text-green-600 font-semibold">AED 900</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1200</span> <span className="text-green-600 font-semibold">AED 1080</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">4 Bedroom</td>
                  <td className="px-6 py-4 text-sm text-gray-600">6 Hrs</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 960</span> <span className="text-green-600 font-semibold">AED 864</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1200</span> <span className="text-green-600 font-semibold">AED 1080</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1440</span> <span className="text-green-600 font-semibold">AED 1296</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Twice in a week - 8 times */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Twice in a week - 8 times</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Rooms</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Duration</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Without Supplies</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Regular Supplies</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Eco Supplies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Studio</td>
                  <td className="px-6 py-4 text-sm text-gray-600">2 Hrs</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 880</span> <span className="text-green-600 font-semibold">AED 836</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1040</span> <span className="text-green-600 font-semibold">AED 988</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1200</span> <span className="text-green-600 font-semibold">AED 1140</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">1 Bedroom</td>
                  <td className="px-6 py-4 text-sm text-gray-600">3 Hrs</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1120</span> <span className="text-green-600 font-semibold">AED 1064</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1360</span> <span className="text-green-600 font-semibold">AED 1224</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1600</span> <span className="text-green-600 font-semibold">AED 1440</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">2 Bedroom</td>
                  <td className="px-6 py-4 text-sm text-gray-600">4 Hrs</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1280</span> <span className="text-green-600 font-semibold">AED 1152</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1600</span> <span className="text-green-600 font-semibold">AED 1440</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1920</span> <span className="text-green-600 font-semibold">AED 1728</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">3 Bedroom</td>
                  <td className="px-6 py-4 text-sm text-gray-600">5 Hrs</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1600</span> <span className="text-green-600 font-semibold">AED 1440</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 2000</span> <span className="text-green-600 font-semibold">AED 1800</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 2400</span> <span className="text-green-600 font-semibold">AED 2160</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">4 Bedroom</td>
                  <td className="px-6 py-4 text-sm text-gray-600">6 Hrs</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1920</span> <span className="text-green-600 font-semibold">AED 1728</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 2400</span> <span className="text-green-600 font-semibold">AED 2160</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 2880</span> <span className="text-green-600 font-semibold">AED 2592</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Thrice in a week - 8 times */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Thrice in a week - 8 times</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Rooms</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Duration</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Without Supplies</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Regular Supplies</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Eco Supplies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Studio</td>
                  <td className="px-6 py-4 text-sm text-gray-600">2 Hrs</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 880</span> <span className="text-green-600 font-semibold">AED 836</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1040</span> <span className="text-green-600 font-semibold">AED 988</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1200</span> <span className="text-green-600 font-semibold">AED 1140</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">1 Bedroom</td>
                  <td className="px-6 py-4 text-sm text-gray-600">3 Hrs</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1120</span> <span className="text-green-600 font-semibold">AED 1064</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1360</span> <span className="text-green-600 font-semibold">AED 1224</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1600</span> <span className="text-green-600 font-semibold">AED 1440</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">2 Bedroom</td>
                  <td className="px-6 py-4 text-sm text-gray-600">4 Hrs</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1280</span> <span className="text-green-600 font-semibold">AED 1152</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1600</span> <span className="text-green-600 font-semibold">AED 1440</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1920</span> <span className="text-green-600 font-semibold">AED 1728</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">3 Bedroom</td>
                  <td className="px-6 py-4 text-sm text-gray-600">5 Hrs</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1600</span> <span className="text-green-600 font-semibold">AED 1440</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 2000</span> <span className="text-green-600 font-semibold">AED 1800</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 2400</span> <span className="text-green-600 font-semibold">AED 2160</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">4 Bedroom</td>
                  <td className="px-6 py-4 text-sm text-gray-600">6 Hrs</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 1920</span> <span className="text-green-600 font-semibold">AED 1728</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 2400</span> <span className="text-green-600 font-semibold">AED 2160</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="line-through text-gray-400">AED 2880</span> <span className="text-green-600 font-semibold">AED 2592</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Apartments and Villas Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Apartments */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <span className="text-yellow-500">▶</span> For <span className="text-yellow-500">Appartments</span>
          </h2>
          <p className="text-lg font-semibold text-green-600 mb-6">25% off on your first booking</p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Rooms</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Eco Supplies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Studio</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">AED 399</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">1 BHK</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">AED 599</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">2 BHK</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">AED 799</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">3 BHK</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">AED 1199</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Villas */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <span className="text-yellow-500">▶</span> For <span className="text-yellow-500">Villas</span>
          </h2>
          <p className="text-lg font-semibold text-green-600 mb-6">25% off on your first booking</p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Rooms</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Eco Supplies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">1 BHK</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">AED 799</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">2 BHK</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">AED 999</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">3 BHK</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">AED 1299</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">4 BHK</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">AED 1399</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">5 BHK</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">AED 1699</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Link href="/contact" prefetch>
          <button className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}