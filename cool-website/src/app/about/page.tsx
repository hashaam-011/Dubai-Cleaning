import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollIndicator from '../../components/ScrollIndicator';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 pt-16 sm:pt-20">
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

          {/* Company Overview Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Cool Technical Services Cleaning
              </h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/879cbb094a6a27505099f36b47ef50414566d7e8.jpg"
                  alt="Professional cleaning service"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                About us
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Cool Technical Services, we're committed to making everyday spaces cleaner, healthier, and more livable. With a wide range of cleaning services designed for modern lifestyles, we serve homes, apartments, offices, retail spaces, and even post-construction sites across the UAE.
                </p>
                <p>
                  Our highly trained team brings professionalism, efficiency, and a personal touch to every visit, using eco-friendly products and proven techniques to deliver consistently outstanding results. Whether you're booking us for a quick clean or ongoing support, we offer flexible service packages tailored to your needs — from hourly cleaning sessions to full-time, monthly arrangements.
                </p>
                <p>
                  Choose from residential cleaning for villas and apartments, commercial services for offices and malls, or deep cleaning for an intensive refresh. Our packages are designed to fit your schedule: hourly slots (2, 4, or 8 hours), weekly care (2–6 days), or full-time monthly support with a dedicated maid.
                </p>
                <p>
                  At Cool Technical Services, cleaning isn't just our job — it's our promise to enhance your comfort and peace of mind. We pride ourselves on being a trusted partner in your daily life, ensuring your spaces are not only clean but cared for with intention and respect.
                </p>
              </div>
            </div>
          </div>

          {/* How It Started Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                How it started
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Cool Technical Services began with one clear mission — to bring reliable, professional cleaning services to every corner of the UAE. It all started when our founder noticed the struggle many residents faced in finding trustworthy cleaners who truly delivered on their promises.
                </p>
                <p>
                  What began as a small operation with one maid and a few basic tools has grown into a leading cleaning company known for its flexible packages, trained staff, and commitment to quality. In the early days, we focused on hourly cleaning for residential clients, offering just a few services at a time.
                </p>
                <p>
                  But as demand grew, so did our offerings — expanding into commercial spaces, post-renovation cleanups, and full-time maid support. We designed customizable packages like our popular 2-hour express cleans, 8-hour deep cleaning with cooking and ironing, and monthly plans with all-day coverage.
                </p>
                <p>
                  Our reputation spread through word-of-mouth, backed by results that spoke for themselves. Today, we serve a wide range of clients across apartments, villas, offices, shops, and malls — all with the same level of care and reliability that started it all.
                </p>
                <p>
                  From day one, our goal was never just to clean — but to make life easier, one space at a time.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/64e88a7c9f02a60c44238e437519aad846eee5d9.jpg"
                  alt="Our journey and growth"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/35f06415aa4bd57a00b29fca514da8e056691423.jpg"
                  alt="Professional cleaning team"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Service Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-6 mb-4">
                  <img
                    src="/1afa28fe7873be2e7460cdfcf05c3f236323e1eb.jpg"
                    alt="Residential cleaning"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Residential Cleaning</h3>
                <p className="text-gray-600">For villas and apartments with flexible scheduling options</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-6 mb-4">
                  <img
                    src="/08b69e6a8c84f07e986a5c790d4742edddc64b48.jpg"
                    alt="Commercial cleaning"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Commercial Services</h3>
                <p className="text-gray-600">For offices and malls with professional standards</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-6 mb-4">
                  <img
                    src="/3095b32bf9ba1c7e5cab7febce8c676d476802ff.jpg"
                    alt="Deep cleaning"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Deep Cleaning</h3>
                <p className="text-gray-600">Intensive refresh for post-construction and renovation</p>
              </div>
            </div>
          </div>

          {/* Mission and Values */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional cleaning and technical services that enhance the quality of life for our customers while maintaining the highest standards of professionalism and reliability. We strive to make every space we touch cleaner, healthier, and more comfortable.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Quality and Excellence in every service
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Customer Satisfaction and trust
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Environmental Responsibility with eco-friendly products
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Professional Integrity and reliability
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Innovation and Efficiency in our approach
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  );
}