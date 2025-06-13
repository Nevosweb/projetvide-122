
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

const Home = () => {
  // Add animation observer when component mounts
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with reveal classes
    document.querySelectorAll(".reveal, .reveal-left").forEach((el) => {
      observer.observe(el);
    });

    // Initialize header background state based on scroll position
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        // Fix: Toggle each class separately instead of combining them
        if (window.scrollY > 10) {
          header.classList.add("bg-black/70");
          header.classList.add("backdrop-blur-sm");
        } else {
          header.classList.remove("bg-black/70");
          header.classList.remove("backdrop-blur-sm");
        }
      }
    };

    // Add keyboard navigation for tab lists
    const setupTabKeyboardNavigation = () => {
      const tabLists = document.querySelectorAll('[role="tablist"]');
      
      tabLists.forEach(tabList => {
        const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));
        
        // Fix: Use KeyboardEvent type for proper typing
        tabList.addEventListener('keydown', (e: KeyboardEvent) => {
          // Get the index of the current tab
          const currentTab = document.activeElement;
          const currentIndex = tabs.indexOf(currentTab as HTMLElement);
          
          // Define which key we're using
          let targetIndex;
          
          if (e.key === 'ArrowRight') {
            targetIndex = currentIndex + 1 >= tabs.length ? 0 : currentIndex + 1;
            e.preventDefault();
          } else if (e.key === 'ArrowLeft') {
            targetIndex = currentIndex - 1 < 0 ? tabs.length - 1 : currentIndex - 1;
            e.preventDefault();
          } else {
            return;
          }
          
          // Focus the target tab
          const targetTab = tabs[targetIndex] as HTMLElement;
          targetTab.focus();
          targetTab.click();
          
          // Ensure the tab is visible in the scroll view
          targetTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        });
      });
    };

    // Add scroll event listener for header background
    window.addEventListener("scroll", handleScroll);
    // Initialize header state on component mount
    handleScroll();
    
    // Setup keyboard navigation after DOM is loaded
    window.addEventListener('DOMContentLoaded', setupTabKeyboardNavigation);
    // For React, we also call it directly since the component is already mounted
    setupTabKeyboardNavigation();

    return () => {
      // Clean up
      document.querySelectorAll(".reveal, .reveal-left").forEach((el) => {
        observer.unobserve(el);
      });
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('DOMContentLoaded', setupTabKeyboardNavigation);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Home;
