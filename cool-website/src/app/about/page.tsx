import { Users, Award, Clock, CheckCircle, ArrowRight, Sparkles, Heart, Shield, Star } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <div className="relative text-center mb-16 sm:mb-20 lg:mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-yellow-50 rounded-3xl transform -skew-y-1"></div>
        <div className="relative py-16 px-8">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full mb-6">
            <Users className="w-5 h-5 mr-2" />
            <span className="font-medium">About Cool Technical Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Company</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Cool Technical Services, we redefine the concept of cleanliness. With a focus on luxury and precision, our expert team transforms spaces into immaculate, elegant environments. Every service we offer is tailored to meet the highest standards of excellence, delivering results that speak for themselves.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Team Images Section */}
      <div className="mb-16 sm:mb-20 lg:mb-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-full mb-6">
            <Users className="w-6 h-6 mr-2" />
            <span className="font-semibold text-lg">Meet Our Team</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Dedicated <span className="text-yellow-500">Professionals</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated professionals are ready to serve you with excellence and care.
          </p>
        </div>
                
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Image 1 */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="relative overflow-hidden">
              <img
                src="/23.png"
                alt="Professional cleaning team member"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Professional Excellence</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Dedicated to delivering the highest quality cleaning services with attention to every detail.</p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="relative overflow-hidden">
              <img
                src="/22.png"
                alt="Cleaning professional with equipment"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Expert Equipment</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Using professional tools and eco-friendly products for optimal results and environmental safety.</p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="relative overflow-hidden">
              <img
                src="/24.png"
                alt="Team member with thumbs up"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="bg-yellow-100 rounded-full p-2 mr-3">
                  <Heart className="w-5 h-5 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Customer Satisfaction</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Committed to exceeding your expectations with every service and building lasting relationships.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="mb-16 sm:mb-20 lg:mb-24">
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Cool Technical Services <span className="text-blue-500">Cleaning</span>
              </h2>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <p className="text-gray-700 leading-relaxed text-lg">
                At Cool Technical Services, we're committed to making everyday spaces cleaner, healthier, and more livable. With a wide range of cleaning services designed for modern lifestyles, we serve homes, apartments, offices, retail spaces, and even post-construction sites across the UAE. Our highly trained team brings professionalism, efficiency, and a personal touch to every visit, using eco-friendly products and proven techniques to deliver consistently outstanding results. Whether you're booking us for a quick clean or ongoing support, we offer flexible service packages tailored to your needs — from hourly cleaning sessions to full-time, monthly arrangements. Choose from residential cleaning for villas and apartments, commercial services for offices and malls, or deep cleaning for an intensive refresh. Our packages are designed to fit your schedule: hourly slots (2, 4, or 8 hours), weekly care (2–6 days), or full-time monthly support with a dedicated maid. At Cool Technical Services, cleaning isn't just our job — it's our promise to enhance your comfort and peace of mind. We pride ourselves on being a trusted partner in your daily life, ensuring your spaces are not only clean but cared for with intention and respect.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How it Started Section */}
      <div className="mb-16 sm:mb-20 lg:mb-24">
        <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 border border-yellow-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full transform -translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full transform translate-x-16 translate-y-16"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                How it <span className="text-yellow-500">Started</span>
              </h2>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <p className="text-gray-700 leading-relaxed text-lg">
                Cool Technical Services began with one clear mission — to bring reliable, professional cleaning services to every corner of the UAE. It all started when our founder noticed the struggle many residents faced in finding trustworthy cleaners who truly delivered on their promises. What began as a small operation with one maid and a few basic tools has grown into a leading cleaning company known for its flexible packages, trained staff, and commitment to quality. In the early days, we focused on hourly cleaning for residential clients, offering just a few services at a time. But as demand grew, so did our offerings — expanding into commercial spaces, post-renovation cleanups, and full-time maid support. We designed customizable packages like our popular 2-hour express cleans, 8-hour deep cleaning with cooking and ironing, and monthly plans with all-day coverage. Our reputation spread through word-of-mouth, backed by results that spoke for themselves. Today, we serve a wide range of clients across apartments, villas, offices, shops, and malls — all with the same level of care and reliability that started it all. From day one, our goal was never just to clean — but to make life easier, one space at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="mb-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full mb-6">
            <CheckCircle className="w-6 h-6 mr-2" />
            <span className="font-semibold text-lg">Simple Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How it <span className="text-green-500">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple 4-step process ensures a seamless cleaning experience from booking to completion. We make it easy for you to get the professional cleaning service you deserve.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="group relative bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-xl border-2 border-orange-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-4 right-4">
              <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-bold">
                STEP 1
              </div>
            </div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">👋</span>
              </div>
              <h3 className="text-xl font-bold text-orange-600">Select a service</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Choose from our comprehensive range of cleaning services including residential cleaning, commercial cleaning, deep cleaning, or specialized services. Our flexible packages cater to your specific needs and schedule.
            </p>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <ArrowRight className="w-6 h-6 text-orange-500" />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl border-2 border-blue-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-4 right-4">
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                STEP 2
              </div>
            </div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600">Make an appointment</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Contact us through phone, email, or our online booking system. Our friendly team will work with you to schedule a convenient time that fits your schedule and discuss your specific cleaning requirements.
            </p>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <ArrowRight className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-xl border-2 border-purple-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-4 right-4">
              <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-bold">
                STEP 3
              </div>
            </div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💳</span>
              </div>
              <h3 className="text-xl font-bold text-purple-600">Proceed with the payment</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Complete your booking with our secure payment system. We offer flexible payment options including online payment, cash, or bank transfer. All our pricing is transparent with no hidden fees.
            </p>
          </div>
        </div>

        {/* U-turn Arrow */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-blue-100 to-blue-200 rounded-full p-4 shadow-lg">
            <span className="text-3xl">↩️</span>
          </div>
        </div>

        {/* Step 4 - Final Step */}
        <div className="max-w-2xl mx-auto">
          <div className="group relative bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-2xl border-2 border-green-200 p-8 hover:shadow-3xl transition-all duration-300">
            <div className="absolute top-4 right-4">
              <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                <Star className="w-3 h-3 mr-1" />
                FINAL STEP
              </div>
            </div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold text-green-600">Get your work done!</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Our professional cleaning team arrives at your scheduled time with all necessary equipment and eco-friendly products. We work efficiently to transform your space, ensuring every detail is attended to with care and precision.
            </p>
            <div className="flex items-center justify-center bg-yellow-100 rounded-2xl p-4">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full p-3 mr-4">
                <span className="text-2xl">👍</span>
              </div>
              <div>
                <span className="text-lg font-bold text-gray-800">Satisfaction Guaranteed</span>
                <p className="text-sm text-gray-600">Your happiness is our success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
