
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <ContactNavbar />
      <ContactSection />
      <Footer />
    </div>
  );
};

// Custom Navbar specifically for the Contact page
const ContactNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Styles dynamiques du header
  const headerStyle = scrolled
    ? 'bg-gradient-to-r from-japanBlack/95 via-japanCharcoal/95 to-japanBlack/95 backdrop-blur-xl shadow-2xl border-b border-japanGold/20'
    : 'bg-transparent backdrop-blur-none shadow-none border-b border-transparent';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out ${headerStyle}`}
    >
      <div className="container mx-auto">
        <nav
          className="flex items-center justify-between py-4"
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl md:text-3xl font-serif font-bold tracking-wider bg-gradient-to-r from-white via-japanGold to-japanRed bg-clip-text text-transparent hover:from-japanGold hover:to-japanRed transition-all duration-300"
            >
              YIJI <span className="text-japanRed">餐廳</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-white hover:text-japanRed transition-colors">
              Accueil
            </Link>
            <Link to="/menu" className="text-white hover:text-japanRed transition-colors">
              Menu
            </Link>
            <Link to="/contact" className="text-white hover:text-japanRed transition-colors">
              Contact
            </Link>
            <Button
              variant="default"
              className="rounded-md bg-japanRed px-5 py-2 text-sm font-semibold text-white hover:bg-japanRed/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-japanRed"
              asChild
            >
              <Link to="/reservation">Réserver</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-japanRed/50 text-white"
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`md:hidden absolute inset-x-0 top-16 bg-japanBlack/95 backdrop-blur-md shadow-md z-30 transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link 
            to="/" 
            className="py-2 text-white hover:text-japanRed transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link 
            to="/menu" 
            className="py-2 text-white hover:text-japanRed transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Menu
          </Link>
          <Link 
            to="/contact" 
            className="py-2 text-white hover:text-japanRed transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Button
            variant="default"
            className="w-full rounded-md bg-japanRed px-5 py-2 text-sm font-semibold text-white hover:bg-japanRed/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-japanRed"
            asChild
          >
            <Link to="/reservation" onClick={() => setMobileMenuOpen(false)}>Réserver</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Contact;
