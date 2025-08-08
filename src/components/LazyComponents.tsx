'use client';

import dynamic from 'next/dynamic';

// Lazy load non-critical components
const ScrollButtons = dynamic(() => import("./ScrollButtons"), {
  ssr: false,
  loading: () => null
});

const PhoneCallPopup = dynamic(() => import("./PhoneCallPopup"), {
  ssr: false,
  loading: () => null
});

const LazyComponents = () => {
  return (
    <>
      <ScrollButtons />
      <PhoneCallPopup />
    </>
  );
};

export default LazyComponents;
