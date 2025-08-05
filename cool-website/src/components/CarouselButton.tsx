'use client';

import { ArrowRight } from 'lucide-react';

const CarouselButton = () => {
  const handleCarouselScroll = () => {
    const carousel = document.getElementById('promotional-carousel');
    if (carousel) {
      carousel.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <button
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors z-10"
      onClick={handleCarouselScroll}
    >
      <ArrowRight className="w-5 h-5 text-gray-600" />
    </button>
  );
};

export default CarouselButton; 