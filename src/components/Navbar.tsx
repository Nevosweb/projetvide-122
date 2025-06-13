
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Send } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  // Detect scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navigation avec scroll to top
  const handleMobileNavigation = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    // Triple scroll to top pour compatibilité
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Délai avant fermeture du menu
    setTimeout(() => {
      setIsOpen(false);
      setIsDropdownOpen(false);
    }, 150);
    
    // Navigation
    window.location.href = path;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Items de navigation avec dropdown
  const navItems = [
    { name: 'Accueil', path: '/' },
    {
      name: 'Menu',
      path: '/menu',
      dropdown: [
        { name: 'Menu Complet', path: '/menu' },
        { name: 'Carte Complète', path: '/carte-complete' }
      ]
    },
    { name: 'Notre Histoire', path: '/notre-histoire' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  // Styles dynamiques du header
  const headerStyle = scrolled
    ? 'bg-gradient-to-r from-japanBlack/95 via-japanCharcoal/95 to-japanBlack/95 backdrop-blur-xl shadow-2xl border-b border-japanGold/20'
    : 'bg-transparent backdrop-blur-none shadow-none border-b border-transparent';

  return (
    <header className={`py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${headerStyle}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" onClick={scrollToTop} className="flex items-center group">
          <h1 className="text-xl md:text-2xl font-serif font-bold tracking-wider bg-gradient-to-r from-white via-japanGold to-japanRed bg-clip-text text-transparent group-hover:from-japanGold group-hover:to-japanRed transition-all duration-300">
            YIJI <span className="text-japanRed">餐廳</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="text-white hover:text-japanRed transition-colors">
            Accueil
          </Link>
          <Link to="/menu" className="text-white hover:text-japanRed transition-colors">
            Menu
          </Link>
          <Link to="/notre-histoire" className="text-white hover:text-japanRed transition-colors">
            Notre Histoire
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

        {/* Bouton Burger */}
        <button
          className={`md:hidden text-white p-3 min-h-[48px] min-w-[48px] flex items-center justify-center transition-all duration-500 ease-out hover:scale-110 rounded-2xl hover:shadow-xl active:scale-95 border backdrop-blur-sm group relative overflow-hidden ${
            isOpen
              ? 'bg-gradient-to-r from-japanRed/30 to-red-600/30 border-japanRed/30 shadow-lg'
              : 'hover:bg-gradient-to-r hover:from-japanRed/30 hover:to-japanGold/30 border-white/20'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-japanGold/10 to-japanRed/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            {isOpen ? (
              <X size={24} className="transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Menu size={24} className="transform group-hover:scale-110 transition-transform duration-300" />
            )}
          </div>
        </button>
      </div>

      {/* Menu Mobile */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-japanBlack/98 to-japanCharcoal/98 backdrop-blur-xl shadow-2xl border-b border-japanGold/10 transition-all duration-500 ease-out transform ${
        isOpen
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
      }`}>
        <div className="container mx-auto py-6 px-4 flex flex-col space-y-3">

          {navItems.map((item, index) =>
            item.dropdown ? (
              // Item avec dropdown
              <div key={item.name} className={`flex flex-col transform transition-all duration-300 ease-out ${
                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`} style={{ transitionDelay: `${index * 100}ms` }}>

                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`font-medium px-5 py-4 min-h-[52px] flex items-center justify-between rounded-2xl transition-all duration-300 w-full text-left border backdrop-blur-sm group relative overflow-hidden ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-japanRed/40 to-red-600/40 text-white border-japanRed/30 shadow-lg'
                      : 'hover:bg-gradient-to-r hover:from-japanRed/25 hover:to-japanGold/25 text-japanWhite hover:text-white border-white/15 hover:border-japanRed/30'
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  <ChevronDown size={20} className={`relative z-10 transition-all duration-300 ${
                    isDropdownOpen ? 'rotate-180 text-japanGold' : 'rotate-0'
                  }`} />
                </button>

                {/* Sous-menu */}
                <div className={`overflow-hidden transition-all duration-500 ease-out ${
                  isDropdownOpen
                    ? 'max-h-96 opacity-100 pointer-events-auto'
                    : 'max-h-0 opacity-0 pointer-events-none'
                }`}>
                  <div className="flex flex-col pl-6 space-y-2 py-3">
                    {item.dropdown.map((subItem, subIndex) => (
                      <button
                        key={subItem.name}
                        onClick={(e) => handleMobileNavigation(subItem.path, e)}
                        className={`flex items-center font-medium px-4 py-3 min-h-[48px] rounded-xl transition-all duration-200 text-sm border backdrop-blur-sm group relative overflow-hidden ${
                          isActive(subItem.path)
                            ? 'bg-gradient-to-r from-japanRed/40 to-red-600/40 text-white border-japanRed/30 shadow-md'
                            : 'hover:bg-gradient-to-r hover:from-japanRed/25 hover:to-japanGold/25 text-japanWhite hover:text-white border-white/10 hover:border-japanRed/20'
                        }`}
                        style={{
                          transitionDelay: isDropdownOpen ? `${subIndex * 50}ms` : '0ms',
                          WebkitTapHighlightColor: 'transparent'
                        }}
                      >
                        <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-200">{subItem.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Item simple
              <button
                key={item.name}
                onClick={(e) => handleMobileNavigation(item.path, e)}
                className={`font-medium px-5 py-4 min-h-[52px] text-left flex items-center rounded-2xl transition-all duration-300 border backdrop-blur-sm group relative overflow-hidden transform ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                } ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-japanRed/40 to-red-600/40 text-white border-japanRed/30 shadow-lg'
                    : 'hover:bg-gradient-to-r hover:from-japanRed/25 hover:to-japanGold/25 text-japanWhite hover:text-white border-white/15 hover:border-japanRed/30'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  WebkitTapHighlightColor: 'transparent'
                }}
              >
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
              </button>
            )
          )}

          {/* Bouton CTA */}
          <button
            onClick={(e) => handleMobileNavigation("/reservation", e)}
            className={`bg-gradient-to-r from-japanRed to-red-600 hover:from-japanRed/90 hover:to-red-600/90 transition-all duration-300 w-full rounded-2xl py-4 min-h-[52px] mt-6 flex items-center justify-center text-white shadow-lg hover:shadow-2xl border border-japanRed/30 group relative overflow-hidden transform ${
              isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
            }`}
            style={{
              transitionDelay: `${navItems.length * 100 + 200}ms`,
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">Réserver</span>
            <Send className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
