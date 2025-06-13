
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Calendar, ArrowRight, Bus, Car, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tr from-slate-900 via-gray-800 to-slate-900">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0">
          {/* Large geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-japanGold/30 rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-japanRed/20 rounded-full animate-float"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-japanRed/40 rotate-12 animate-bounce"></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-japanGold/10 transform rotate-45"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 grid-rows-12 h-full w-full gap-4">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-white/20"></div>
              ))}
            </div>
          </div>
          
          {/* Floating contact icons */}
          <div className="absolute top-1/4 left-1/4 text-japanGold/30 animate-float" style={{animationDelay: '1s'}}>
            <Phone className="w-8 h-8" />
          </div>
          <div className="absolute top-1/3 right-1/4 text-japanRed/30 animate-float" style={{animationDelay: '2s'}}>
            <Mail className="w-8 h-8" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 text-japanGold/30 animate-float" style={{animationDelay: '3s'}}>
            <MapPin className="w-8 h-8" />
          </div>
        </div>

        {/* Diagonal overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-japanRed/10 via-transparent to-japanGold/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-japanGold/5 via-transparent to-japanRed/5"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Contact badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in-up hover:bg-white/20 hover:scale-105 hover:border-japanGold/50 transition-all duration-300 cursor-pointer group">
              <div className="w-2 h-2 bg-japanRed rounded-full animate-pulse group-hover:bg-japanGold group-hover:scale-125 transition-all duration-300"></div>
              <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-300">Contactez-nous</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white leading-tight">
              Restons en
              <span className="block bg-gradient-to-r from-japanGold via-orange-400 to-japanRed bg-clip-text text-transparent animate-shimmer">
                Contact
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-japanGold"></div>
              <div className="w-3 h-3 bg-japanRed rounded-full animate-pulse"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-japanGold"></div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Une question sur notre menu ? Envie de réserver une table pour une occasion spéciale ?
              <br className="hidden md:block" />
              Notre équipe est là pour vous accompagner dans votre expérience culinaire japonaise.
            </p>
            
            {/* Contact quick actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 hover:bg-white/20 hover:scale-110 hover:border-japanGold/50 transition-all duration-300 cursor-pointer group">
                <Phone className="w-5 h-5 text-japanGold group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <span className="text-white font-medium group-hover:text-japanGold transition-colors duration-300">01 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 hover:bg-white/20 hover:scale-110 hover:border-japanRed/50 transition-all duration-300 cursor-pointer group">
                <MapPin className="w-5 h-5 text-japanRed group-hover:scale-125 group-hover:bounce transition-all duration-300" />
                <span className="text-white font-medium group-hover:text-japanRed transition-colors duration-300">42 Rue des Cerisiers</span>
              </div>
            </div>
          </div>
        </div>
        

      </section>

      {/* Contact Info Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Cards */}
            <div className="space-y-8">
              <div className="fade-in-section">
                <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
                  Informations <span className="text-japanRed">Pratiques</span>
                </h2>
                <div className="w-16 h-1 bg-japanGold mb-8"></div>
              </div>
              
              {/* Address Card */}
              <div className="fade-in-section bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-japanRed/40">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-japanRed to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="text-white h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif font-bold text-gray-800 mb-2 text-lg">Adresse</h4>
                    <p className="text-gray-600 mb-4">42 Rue des Cerisiers, 75008 Paris</p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-medium text-gray-800 mb-2 flex items-center">
                        <Bus className="w-4 h-4 mr-2 text-japanRed" />
                        Accès & Transports
                      </h5>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>🚇 Métro : Ligne 9 – Station "Pont de Sèvres" (5 min à pied)</li>
                        <li>🚌 Bus : Lignes 169 / 179 – Arrêt "Parc de Billancourt"</li>
                        <li>🚗 Parking : Indigo "Les Passages", 250 m</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phone Card */}
              <div className="fade-in-section bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-japanRed/40">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-japanRed to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-gray-800 mb-1 text-lg">Téléphone</h4>
                    <p className="text-gray-600 text-xl font-medium">01 23 45 67 89</p>
                    <p className="text-gray-500 text-sm mt-1">Réservations et renseignements</p>
                  </div>
                </div>
              </div>
              
              {/* Hours Card */}
              <div className="fade-in-section bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-japanRed/40">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-japanRed to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="text-white h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif font-bold text-gray-800 mb-4 text-lg">Horaires d'ouverture</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-medium text-gray-800 mb-2">Lundi - Vendredi</p>
                        <p className="text-gray-600">12h - 14h30</p>
                        <p className="text-gray-600">19h - 22h30</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-medium text-gray-800 mb-2">Samedi - Dimanche</p>
                        <p className="text-gray-600">12h - 15h</p>
                        <p className="text-gray-600">19h - 23h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="fade-in-section pt-6">
                <Button 
                  className="w-full md:w-auto bg-gradient-to-r from-japanRed to-orange-500 hover:from-japanRed/90 hover:to-orange-500/90 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                  asChild
                >
                  <Link to="/reservation">
                    Réserver une table <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Map */}
            <div className="fade-in-section">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-serif font-bold text-gray-800 mb-4 text-xl">Notre Emplacement</h3>
                <div className="h-[500px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047035503!2d2.3354297156743847!3d48.87456857928985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3ecb45af3b%3A0xf9090f9c4f9a8bcd!2s42%20Rue%20des%20Petits%20Champs%2C%2075001%20Paris!5e0!3m2!1sfr!2sfr!4v1649754039856!5m2!1sfr!2sfr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Restaurant location"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
                <p className="text-gray-500 text-sm mt-3 text-center">
                  📍 Cliquez sur la carte pour obtenir l'itinéraire
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
