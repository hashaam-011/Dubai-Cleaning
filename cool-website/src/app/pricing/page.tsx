import { CheckCircle, Star, Home, Building, Crown, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <div className="relative text-center mb-16 sm:mb-20 lg:mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-blue-50 rounded-3xl transform -skew-y-1"></div>
        <div className="relative py-16 px-8">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="font-medium">Transparent Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Elite</span> Cleaning, <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Clearly Priced!</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our pricing is designed with flexibility and transparency in mind. Whether you need a quick clean or full-time help, we offer affordable packages that fit your schedule and budget—without compromising on quality.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Homes Section */}
      <div className="mb-16 sm:mb-20 lg:mb-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full mb-4">
            <Home className="w-6 h-6 mr-2" />
            <span className="font-semibold text-lg">For Homes - 4 Weeks Service Pack</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive home cleaning packages designed for regular maintenance and deep cleaning needs.
          </p>
        </div>

        {/* Once in a week - 4 times */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-center mb-2">
              <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mr-3">
                WEEKLY
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Once in a week - 4 times</h3>
            </div>
            <p className="text-center text-gray-600">Perfect for maintaining a clean home with weekly professional service</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Rooms</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Without Supplies</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Regular Supplies</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      <div className="flex items-center">
                        <Crown className="w-4 h-4 mr-1 text-yellow-500" />
                        Eco Supplies
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">Studio</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">2 Hrs</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 440</span>
                        <span className="text-green-600 font-bold text-lg">AED 418</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 520</span>
                        <span className="text-green-600 font-bold text-lg">AED 494</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 600</span>
                        <span className="text-green-600 font-bold text-lg">AED 570</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">1 Bedroom</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">3 Hrs</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 560</span>
                        <span className="text-green-600 font-bold text-lg">AED 504</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 680</span>
                        <span className="text-green-600 font-bold text-lg">AED 612</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 800</span>
                        <span className="text-green-600 font-bold text-lg">AED 720</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">2 Bedroom</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">4 Hrs</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 640</span>
                        <span className="text-green-600 font-bold text-lg">AED 576</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 800</span>
                        <span className="text-green-600 font-bold text-lg">AED 720</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 960</span>
                        <span className="text-green-600 font-bold text-lg">AED 864</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">3 Bedroom</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">5 Hrs</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 800</span>
                        <span className="text-green-600 font-bold text-lg">AED 720</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1000</span>
                        <span className="text-green-600 font-bold text-lg">AED 900</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1200</span>
                        <span className="text-green-600 font-bold text-lg">AED 1080</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">4 Bedroom</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">6 Hrs</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 960</span>
                        <span className="text-green-600 font-bold text-lg">AED 864</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1200</span>
                        <span className="text-green-600 font-bold text-lg">AED 1080</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1440</span>
                        <span className="text-green-600 font-bold text-lg">AED 1296</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Twice in a week - 8 times */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-center mb-2">
              <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mr-3 flex items-center">
                <Star className="w-4 h-4 mr-1" />
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Twice in a week - 8 times</h3>
            </div>
            <p className="text-center text-gray-600">Most popular choice for busy families who want consistent cleanliness</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-50 to-blue-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Rooms</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Without Supplies</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Regular Supplies</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      <div className="flex items-center">
                        <Crown className="w-4 h-4 mr-1 text-yellow-500" />
                        Eco Supplies
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">Studio</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">2 Hrs</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 880</span>
                        <span className="text-green-600 font-bold text-lg">AED 836</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1040</span>
                        <span className="text-green-600 font-bold text-lg">AED 988</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1200</span>
                        <span className="text-green-600 font-bold text-lg">AED 1140</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">1 Bedroom</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">3 Hrs</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1120</span>
                        <span className="text-green-600 font-bold text-lg">AED 1064</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1360</span>
                        <span className="text-green-600 font-bold text-lg">AED 1224</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1600</span>
                        <span className="text-green-600 font-bold text-lg">AED 1440</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">2 Bedroom</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">4 Hrs</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1280</span>
                        <span className="text-green-600 font-bold text-lg">AED 1152</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1600</span>
                        <span className="text-green-600 font-bold text-lg">AED 1440</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1920</span>
                        <span className="text-green-600 font-bold text-lg">AED 1728</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">3 Bedroom</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">5 Hrs</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1600</span>
                        <span className="text-green-600 font-bold text-lg">AED 1440</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 2000</span>
                        <span className="text-green-600 font-bold text-lg">AED 1800</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 2400</span>
                        <span className="text-green-600 font-bold text-lg">AED 2160</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">4 Bedroom</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">6 Hrs</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1920</span>
                        <span className="text-green-600 font-bold text-lg">AED 1728</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 2400</span>
                        <span className="text-green-600 font-bold text-lg">AED 2160</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 2880</span>
                        <span className="text-green-600 font-bold text-lg">AED 2592</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Thrice in a week - 8 times */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-center mb-2">
              <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mr-3 flex items-center">
                <Crown className="w-4 h-4 mr-1" />
                PREMIUM
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Thrice in a week - 8 times</h3>
            </div>
            <p className="text-center text-gray-600">Premium service for those who demand the highest standards of cleanliness</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-purple-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-50 to-purple-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Rooms</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Without Supplies</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Regular Supplies</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      <div className="flex items-center">
                        <Crown className="w-4 h-4 mr-1 text-yellow-500" />
                        Eco Supplies
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-purple-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">Studio</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">2 Hrs</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 880</span>
                        <span className="text-green-600 font-bold text-lg">AED 836</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1040</span>
                        <span className="text-green-600 font-bold text-lg">AED 988</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1200</span>
                        <span className="text-green-600 font-bold text-lg">AED 1140</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">1 Bedroom</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">3 Hrs</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1120</span>
                        <span className="text-green-600 font-bold text-lg">AED 1064</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1360</span>
                        <span className="text-green-600 font-bold text-lg">AED 1224</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1600</span>
                        <span className="text-green-600 font-bold text-lg">AED 1440</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">2 Bedroom</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">4 Hrs</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1280</span>
                        <span className="text-green-600 font-bold text-lg">AED 1152</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1600</span>
                        <span className="text-green-600 font-bold text-lg">AED 1440</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1920</span>
                        <span className="text-green-600 font-bold text-lg">AED 1728</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">3 Bedroom</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">5 Hrs</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1600</span>
                        <span className="text-green-600 font-bold text-lg">AED 1440</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 2000</span>
                        <span className="text-green-600 font-bold text-lg">AED 1800</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 2400</span>
                        <span className="text-green-600 font-bold text-lg">AED 2160</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">4 Bedroom</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">6 Hrs</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 1920</span>
                        <span className="text-green-600 font-bold text-lg">AED 1728</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 2400</span>
                        <span className="text-green-600 font-bold text-lg">AED 2160</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-through text-gray-400 text-xs">AED 2880</span>
                        <span className="text-green-600 font-bold text-lg">AED 2592</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Apartments and Villas Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 sm:mb-20 lg:mb-24">
        {/* Apartments */}
        <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-4 right-4">
            <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
              25% OFF
            </div>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
              <Building className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                For <span className="text-yellow-500">Apartments</span>
              </h2>
              <p className="text-gray-600">Perfect for apartment living</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 mb-6">
            <p className="text-lg font-bold text-green-700 text-center flex items-center justify-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              25% off on your first booking
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Rooms</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Eco Supplies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">Studio</td>
                  <td className="px-6 py-4 text-lg font-bold text-gray-900">AED 399</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">1 BHK</td>
                  <td className="px-6 py-4 text-lg font-bold text-gray-900">AED 599</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">2 BHK</td>
                  <td className="px-6 py-4 text-lg font-bold text-gray-900">AED 799</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">3 BHK</td>
                  <td className="px-6 py-4 text-lg font-bold text-gray-900">AED 1199</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Villas */}
        <div className="group relative bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-xl p-8 border-2 border-yellow-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-4 right-4">
            <div className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
              <Crown className="w-3 h-3 mr-1" />
              25% OFF
            </div>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                For <span className="text-yellow-500">Villas</span>
              </h2>
              <p className="text-gray-600">Luxury villa cleaning service</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-4 mb-6">
            <p className="text-lg font-bold text-yellow-700 text-center flex items-center justify-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              25% off on your first booking
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-yellow-50 to-yellow-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Rooms</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Eco Supplies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-yellow-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">1 BHK</td>
                  <td className="px-6 py-4 text-lg font-bold text-gray-900">AED 799</td>
                </tr>
                <tr className="hover:bg-yellow-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">2 BHK</td>
                  <td className="px-6 py-4 text-lg font-bold text-gray-900">AED 999</td>
                </tr>
                <tr className="hover:bg-yellow-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">3 BHK</td>
                  <td className="px-6 py-4 text-lg font-bold text-gray-900">AED 1299</td>
                </tr>
                <tr className="hover:bg-yellow-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">4 BHK</td>
                  <td className="px-6 py-4 text-lg font-bold text-gray-900">AED 1399</td>
                </tr>
                <tr className="hover:bg-yellow-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">5 BHK</td>
                  <td className="px-6 py-4 text-lg font-bold text-gray-900">AED 1699</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-blue-500/10"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-medium">Ready to Get Started?</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Book Your Perfect Cleaning Package Today
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of satisfied customers who trust us with their cleaning needs. Professional service, transparent pricing, guaranteed satisfaction.
          </p>
          <Link href="/contact" prefetch>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Book Now & Save 25%
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
