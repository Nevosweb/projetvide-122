
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-japanBlack overflow-hidden w-full max-w-full"
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 transition-transform duration-1000 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/98/13/fe/9813fe405e7881e89b4c03b68252bf29.jpg')",
          filter: "brightness(0.4)",
        }}
      ></div>

      {/* Enhanced Overlay with Dynamic Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/80 via-japanBlack/60 to-black/40"></div>

      {/* Animated Japanese Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-japanGold rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-japanRed rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-japanGold rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>

      {/* Content with Enhanced Typography and Animations */}
      <div className="container mx-auto px-4 z-20 text-center w-full max-w-full overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Star className="w-4 h-4 text-japanGold mr-2" />
            <span className="text-white text-sm font-medium">Restaurant japonais authentique depuis 2010</span>
          </div>

          {/* Main Title with Gradient */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-japanWhite to-white bg-clip-text text-transparent drop-shadow-2xl">
              YIJI
            </span>
            <br />
            <span className="bg-gradient-to-r from-japanRed via-red-400 to-japanRed bg-clip-text text-transparent">
              餐廳
            </span>
          </h1>

          {/* Subtitle with Better Typography */}
          <p className="text-japanWhite text-lg sm:text-xl md:text-2xl mb-8 font-light leading-relaxed tracking-wide max-w-3xl mx-auto drop-shadow-lg">
            Découvrez l'art culinaire japonais dans une expérience gastronomique unique où tradition et innovation se rencontrent
          </p>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-japanRed to-red-600 hover:from-red-600 hover:to-japanRed text-white border-0 px-8 py-4 text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/menu" className="flex items-center">
                <span className="relative z-10">Découvrir notre menu</span>
                <ArrowRight size={18} className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/reservation" className="flex items-center">
                <span>Réserver une table</span>
              </Link>
            </Button>
          </div>

          {/* Video Play Button */}
          <div className="mt-12">
            <Link 
              to="/notre-histoire"
              className="group inline-flex items-center text-white hover:text-japanGold transition-colors duration-300"
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-japanGold/20 group-hover:border-japanGold/50 transition-all duration-300">
                  <Play className="w-6 h-6 ml-1" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>
              </div>
              <span className="ml-4 text-sm font-medium">Découvrez notre histoire</span>
            </Link>
          </div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
