
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, Clock, ChefHat, Star } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer id="footer" className="relative bg-gradient-to-b from-japanBlack via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <ChefHat size={16} className="text-japanRed" />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-japanRed/5 via-transparent to-japanRed/5"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Content */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="group">
              <Link to="/" className="text-3xl font-serif font-bold mb-4 inline-block transition-all duration-300 hover:scale-105">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-shimmer">
                  YIJI
                </span>
                <span className="text-japanRed ml-2 animate-pulse">餐廳</span>
              </Link>
              <div className="h-1 w-0 bg-gradient-to-r from-japanRed to-orange-500 transition-all duration-500 group-hover:w-full"></div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              YIJI est un restaurant japonais authentique qui vous propose 
              une expérience culinaire unique, mélangeant tradition et innovation 
              dans un cadre élégant et raffiné.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-japanRed transition-colors group">
                <MapPin size={18} className="group-hover:animate-bounce" />
                <span>123 Rue de la Paix, 75001 Paris</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-japanRed transition-colors group">
                <Phone size={18} className="group-hover:animate-bounce" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-japanRed transition-colors group">
                <Clock size={18} className="group-hover:animate-bounce" />
                <span>Mar-Dim: 18h00 - 23h00</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-japanRed hover:to-orange-500 transition-all duration-300 hover:scale-110 hover:rotate-12"
                aria-label="Instagram"
              >
                <Instagram size={20} className="group-hover:animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-japanRed to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-japanRed hover:to-orange-500 transition-all duration-300 hover:scale-110 hover:rotate-12"
                aria-label="Facebook"
              >
                <Facebook size={20} className="group-hover:animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-japanRed to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <h4 className="font-serif font-bold text-xl mb-6 text-white relative">
              Navigation
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-japanRed"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Accueil" },
                { to: "/menu", label: "Menu" },
                { to: "/notre-histoire", label: "Notre Histoire" },
                { to: "/reservation", label: "Réservation" },
                { to: "/contact", label: "Contact" }
              ].map((link, index) => (
                <li key={link.to} className="animate-fade-in-left" style={{animationDelay: `${1 + index * 0.1}s`}}>
                  <Link 
                    to={link.to} 
                    className="group flex items-center text-gray-300 hover:text-japanRed transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="w-0 h-0.5 bg-japanRed transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="animate-fade-in-up" style={{animationDelay: '1.2s'}}>
            <h4 className="font-serif font-bold text-xl mb-6 text-white relative">
              Newsletter
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-japanRed"></div>
            </h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Inscrivez-vous pour recevoir nos offres spéciales et découvrir nos nouveautés culinaires.
            </p>
            
            {isSubscribed ? (
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-4 animate-pulse-glow">
                <div className="flex items-center space-x-2 text-green-400">
                  <Star size={18} className="animate-spin" />
                  <span>Merci pour votre inscription !</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative group">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email" 
                    className="w-full bg-gradient-to-r from-white/10 to-white/5 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-japanRed focus:border-transparent transition-all duration-300 group-hover:border-japanRed/50"
                    required
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-japanRed transition-colors" size={18} />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-japanRed to-orange-500 hover:from-orange-500 hover:to-japanRed text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-japanRed/25"
                >
                  S'abonner
                </Button>
              </form>
            )}
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className={`border-t border-gradient-to-r from-transparent via-white/20 to-transparent mt-16 pt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{animationDelay: '1.5s'}}>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm flex items-center space-x-2">
              <span>© {new Date().getFullYear()} YIJI Restaurant.</span>
              <span className="hidden md:inline">•</span>
              <span>Tous droits réservés.</span>
            </p>
            <div className="flex gap-6">
              <Link 
                to="/mentions-legales" 
                className="text-gray-400 text-sm hover:text-japanRed transition-all duration-300 hover:underline underline-offset-4"
              >
                Mentions légales
              </Link>
              <Link 
                to="/politique-confidentialite" 
                className="text-gray-400 text-sm hover:text-japanRed transition-all duration-300 hover:underline underline-offset-4"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-japanRed to-transparent animate-pulse"></div>
    </footer>
  );
};

export default Footer;
