export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Our Company
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          At Cool Technical Services, we redefine the concept of cleanliness. With a focus on luxury and precision, our expert team transforms spaces into immaculate, elegant environments. Every service we offer is tailored to meet the highest standards of excellence, delivering results that speak for themselves.
        </p>
      </div>

      {/* About Us Section */}
      <div className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Cool Technical Services Cleaning
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At Cool Technical Services, we're committed to making everyday spaces cleaner, healthier, and more livable. With a wide range of cleaning services designed for modern lifestyles, we serve homes, apartments, offices, retail spaces, and even post-construction sites across the UAE. Our highly trained team brings professionalism, efficiency, and a personal touch to every visit, using eco-friendly products and proven techniques to deliver consistently outstanding results. Whether you're booking us for a quick clean or ongoing support, we offer flexible service packages tailored to your needs — from hourly cleaning sessions to full-time, monthly arrangements. Choose from residential cleaning for villas and apartments, commercial services for offices and malls, or deep cleaning for an intensive refresh. Our packages are designed to fit your schedule: hourly slots (2, 4, or 8 hours), weekly care (2–6 days), or full-time monthly support with a dedicated maid. At Cool Technical Services, cleaning isn't just our job — it's our promise to enhance your comfort and peace of mind. We pride ourselves on being a trusted partner in your daily life, ensuring your spaces are not only clean but cared for with intention and respect.
          </p>
        </div>
      </div>

      {/* How it Started Section */}
      <div className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            How it started
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Cool Technical Services began with one clear mission — to bring reliable, professional cleaning services to every corner of the UAE. It all started when our founder noticed the struggle many residents faced in finding trustworthy cleaners who truly delivered on their promises. What began as a small operation with one maid and a few basic tools has grown into a leading cleaning company known for its flexible packages, trained staff, and commitment to quality. In the early days, we focused on hourly cleaning for residential clients, offering just a few services at a time. But as demand grew, so did our offerings — expanding into commercial spaces, post-renovation cleanups, and full-time maid support. We designed customizable packages like our popular 2-hour express cleans, 8-hour deep cleaning with cooking and ironing, and monthly plans with all-day coverage. Our reputation spread through word-of-mouth, backed by results that spoke for themselves. Today, we serve a wide range of clients across apartments, villas, offices, shops, and malls — all with the same level of care and reliability that started it all. From day one, our goal was never just to clean — but to make life easier, one space at a time.
          </p>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            How it Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our simple 4-step process ensures a seamless cleaning experience from booking to completion. We make it easy for you to get the professional cleaning service you deserve.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow-lg border border-blue-200 p-6 relative">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">👋</span>
              <h3 className="text-xl font-bold text-orange-600">Select a service</h3>
            </div>
            <p className="text-gray-600">
              Choose from our comprehensive range of cleaning services including residential cleaning, commercial cleaning, deep cleaning, or specialized services. Our flexible packages cater to your specific needs and schedule.
            </p>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
              <span className="text-2xl text-orange-500">➝</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow-lg border border-blue-200 p-6 relative">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">📞</span>
              <h3 className="text-xl font-bold text-orange-600">Make an appointment</h3>
            </div>
            <p className="text-gray-600">
              Contact us through phone, email, or our online booking system. Our friendly team will work with you to schedule a convenient time that fits your schedule and discuss your specific cleaning requirements.
            </p>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
              <span className="text-2xl text-orange-500">➝</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow-lg border border-blue-200 p-6">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">💳</span>
              <h3 className="text-xl font-bold text-orange-600">Proceed with the payment</h3>
            </div>
            <p className="text-gray-600">
              Complete your booking with our secure payment system. We offer flexible payment options including online payment, cash, or bank transfer. All our pricing is transparent with no hidden fees.
            </p>
          </div>

        </div>

        {/* U-turn Arrow */}
        <div className="text-center mb-8">
          <div className="inline-block bg-blue-100 rounded-full p-3">
            <span className="text-2xl text-blue-600">↩️</span>
          </div>
        </div>

        {/* Step 4 - Final Step */}
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg border border-blue-200 p-6 relative">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">✅</span>
              <h3 className="text-xl font-bold text-green-600">Get your work done !</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Our professional cleaning team arrives at your scheduled time with all necessary equipment and eco-friendly products. We work efficiently to transform your space, ensuring every detail is attended to with care and precision.
            </p>
            <div className="flex items-center">
              <div className="bg-yellow-100 rounded-full p-2 mr-3">
                <span className="text-2xl">👍</span>
              </div>
              <span className="text-sm text-gray-600 font-semibold">Thumbs Up</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}