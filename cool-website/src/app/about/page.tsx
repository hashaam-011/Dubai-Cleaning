import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-8">About Us</h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
            Cool Technical Service is a leading provider of professional cleaning and technical services.
            With years of experience in the industry, we are committed to delivering exceptional quality
            and customer satisfaction.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To provide reliable, efficient, and high-quality cleaning services that exceed our customers&apos; expectations
                and create clean, healthy environments for homes and businesses.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">Our Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To become the most trusted and preferred cleaning service provider, known for our professionalism,
                quality, and customer-centric approach.
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Why Choose Us?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Professional Team</h4>
                <p className="text-gray-600 text-sm sm:text-base">Trained and experienced cleaning professionals</p>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Quality Service</h4>
                <p className="text-gray-600 text-sm sm:text-base">Consistent high-quality cleaning standards</p>
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Reliable</h4>
                <p className="text-gray-600 text-sm sm:text-base">Punctual and dependable service delivery</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}