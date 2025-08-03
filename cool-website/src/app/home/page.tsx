import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoadingScreen from '../../components/LoadingScreen';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <LoadingScreen />
      <Header />
      <main className="flex-1 bg-gray-50 pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-8">Welcome to Cool Technical Service</h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
            Professional cleaning and technical services for your home and business.
            We provide reliable, efficient, and high-quality services to keep your spaces clean and well-maintained.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">Residential Cleaning</h3>
              <p className="text-gray-600 text-sm sm:text-base">Professional home cleaning services tailored to your needs.</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">Commercial Cleaning</h3>
              <p className="text-gray-600 text-sm sm:text-base">Comprehensive cleaning solutions for businesses and offices.</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">Deep Cleaning</h3>
              <p className="text-gray-600 text-sm sm:text-base">Thorough deep cleaning services for a spotless environment.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}