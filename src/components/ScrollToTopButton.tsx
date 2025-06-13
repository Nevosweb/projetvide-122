import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 left-4 h-12 w-12 rounded-full bg-gradient-to-r from-japanRed to-red-600 hover:from-japanRed/90 hover:to-red-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 z-[9999] border border-japanRed/30"
      aria-label="Retour en haut"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <ArrowUp className="h-6 w-6 mx-auto" />
    </button>
  );
};

export default ScrollToTopButton;