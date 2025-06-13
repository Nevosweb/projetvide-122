import React, { useEffect, useState } from "react";
import { Clock, Users, Award, Heart, ChefHat, Star, MapPin, Calendar } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotreHistoire = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            
            // Animation spéciale pour les éléments de timeline
            if (entry.target.classList.contains('timeline-item')) {
              const index = parseInt((entry.target as HTMLElement).dataset.index || '0');
              const isLeft = index % 2 === 0;
              entry.target.classList.add(isLeft ? 'timeline-item-left' : 'timeline-item-right');
              
              // Animer le point de la timeline immédiatement
              const dot = entry.target.querySelector('.timeline-dot');
              if (dot) {
                dot.classList.add('timeline-dot');
              }
            }
            
            // Animation spéciale pour les cartes de valeurs
            if (entry.target.classList.contains('value-card-container')) {
              entry.target.classList.add('value-card');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.fade-in-section, .timeline-item, .value-card-container');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      year: "1985",
      title: "Les Débuts",
      description: "Ouverture du premier restaurant YIJI par Maître Tanaka, un chef passionné venu directement de Tokyo.",
      icon: <ChefHat className="w-6 h-6" />
    },
    {
      year: "1992",
      title: "Reconnaissance",
      description: "Premier restaurant japonais à Paris à recevoir une étoile Michelin pour son authenticité exceptionnelle.",
      icon: <Star className="w-6 h-6" />
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Agrandissement du restaurant et création de l'espace privé pour les cérémonies traditionnelles.",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      year: "2018",
      title: "Nouvelle Génération",
      description: "Transmission du savoir-faire à la nouvelle génération tout en préservant les traditions ancestrales.",
      icon: <Users className="w-6 h-6" />
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Fusion parfaite entre tradition japonaise et innovation culinaire moderne.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const values = [
    {
      title: "Authenticité",
      description: "Chaque plat respecte les techniques traditionnelles japonaises transmises de génération en génération.",
      icon: <Heart className="w-8 h-8 text-japanRed" />
    },
    {
      title: "Excellence",
      description: "Sélection rigoureuse des meilleurs ingrédients, importés directement du Japon.",
      icon: <Star className="w-8 h-8 text-japanRed" />
    },
    {
      title: "Omotenashi",
      description: "L'art de l'hospitalité japonaise, un service attentionné et respectueux.",
      icon: <Users className="w-8 h-8 text-japanRed" />
    },
    {
      title: "Tradition",
      description: "Préservation et transmission des savoir-faire culinaires ancestraux.",
      icon: <Clock className="w-8 h-8 text-japanRed" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-japanBlack via-japanCharcoal to-japanBlack">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-japanBlack via-japanCharcoal to-japanBlack/90">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(30)].map((_, i) => (
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
                <div className="w-2 h-2 bg-japanRed rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-japanRed/20 via-japanGold/10 to-japanRed/20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 bg-gradient-to-r from-white via-japanGold to-japanRed bg-clip-text text-transparent animate-shimmer">
              Notre Histoire
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-japanRed to-orange-500 mx-auto mb-8 animate-pulse"></div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              Depuis 1985, YIJI perpétue l'art culinaire japonais à Paris, 
              <br className="hidden md:block" />
              alliant tradition ancestrale et excellence moderne.
            </p>
            <div className="text-6xl animate-bounce" style={{animationDelay: '1s'}}>
              🏮
            </div>
          </div>
        </div>


      </section>

      {/* Story Section */}
        <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="fade-in-section grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
                  L'Histoire de <span className="text-japanRed">YIJI</span>
                </h2>
                <div className="w-16 h-1 bg-japanGold mb-6"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  En 1985, Maître Hiroshi Tanaka quitte Tokyo avec un rêve : partager l'authenticité 
                  de la cuisine japonaise avec les Parisiens. Armé de ses couteaux traditionnels et 
                  de recettes familiales transmises depuis des générations, il ouvre les portes de YIJI.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Le nom "YIJI" (意志) signifie "volonté" en japonais, reflétant la détermination 
                  de préserver les traditions culinaires tout en s'adaptant aux goûts parisiens.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Aujourd'hui, près de 40 ans plus tard, YIJI continue d'honorer cet héritage 
                  sous la direction de la nouvelle génération, perpétuant l'excellence et l'authenticité.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-japanRed/10 to-orange-500/10 rounded-2xl p-8 backdrop-blur-sm border border-japanRed/20 shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-xl flex items-center justify-center shadow-inner">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🍣</div>
                      <p className="text-japanGold font-serif text-lg">Depuis 1985</p>
                      <p className="text-gray-700 text-sm mt-2">39 ans d'excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
        <section className="py-20 relative bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
              Chronologie de notre <span className="text-japanRed">Évolution</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-japanRed to-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez les moments clés qui ont façonné l'histoire de YIJI
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line - Centrée et visible */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-japanRed to-orange-500 timeline-line" style={{height: '100%'}}></div>
              
              {milestones.map((milestone, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={milestone.year} className="timeline-item relative mb-16 md:mb-20" data-index={index}>
                    {/* Version Mobile */}
                    <div className="md:hidden flex items-start pl-16">
                      <div className="w-full">
                        <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-japanRed/40">
                          <div className="flex items-center mb-3">
                            <div className="p-2 bg-japanRed/20 rounded-lg mr-3 transition-all duration-300 hover:bg-japanRed/30">
                              {milestone.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-japanRed">{milestone.year}</h3>
                          </div>
                          <h4 className="text-xl font-serif font-bold text-gray-800 mb-3 hover:text-japanRed transition-colors duration-300">{milestone.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Version Desktop */}
                    <div className="hidden md:flex items-center justify-center">
                      {/* Contenu à gauche pour les éléments pairs */}
                      {isLeft && (
                        <div className="w-5/12 text-right pr-8">
                          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-japanRed/40">
                            <div className="flex items-center justify-end mb-3">
                              <h3 className="text-2xl font-bold text-japanRed mr-3">{milestone.year}</h3>
                              <div className="p-2 bg-japanRed/20 rounded-lg transition-all duration-300 hover:bg-japanRed/30">
                                {milestone.icon}
                              </div>
                            </div>
                            <h4 className="text-xl font-serif font-bold text-gray-800 mb-3 hover:text-japanRed transition-colors duration-300">{milestone.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                          </div>
                        </div>
                      )}

                      {/* Espace vide à gauche pour les éléments impairs */}
                      {!isLeft && <div className="w-5/12"></div>}

                      {/* Point central */}
                      <div className="relative flex justify-center items-center w-2/12">
                        <div className="w-6 h-6 bg-japanRed rounded-full border-4 border-white z-10 shadow-lg timeline-dot hover:scale-125 transition-transform duration-300"></div>
                      </div>

                      {/* Espace vide à droite pour les éléments pairs */}
                      {isLeft && <div className="w-5/12"></div>}

                      {/* Contenu à droite pour les éléments impairs */}
                      {!isLeft && (
                        <div className="w-5/12 text-left pl-8">
                          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-japanRed/40">
                            <div className="flex items-center mb-3">
                              <div className="p-2 bg-japanRed/20 rounded-lg mr-3 transition-all duration-300 hover:bg-japanRed/30">
                                {milestone.icon}
                              </div>
                              <h3 className="text-2xl font-bold text-japanRed">{milestone.year}</h3>
                            </div>
                            <h4 className="text-xl font-serif font-bold text-gray-800 mb-3 hover:text-japanRed transition-colors duration-300">{milestone.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Point de timeline pour mobile */}
                    <div className="md:hidden absolute left-8 top-6 transform -translate-x-1/2 w-4 h-4 bg-japanRed rounded-full border-4 border-white z-10 shadow-lg timeline-dot hover:scale-125 transition-transform duration-300"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
        <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
              Nos <span className="text-japanRed">Valeurs</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-japanRed to-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Les principes qui guident notre passion culinaire depuis près de 40 ans
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={value.title} className="value-card-container group h-full" data-index={index}>
                <div className="bg-white backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center hover:border-japanRed/40 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-japanRed/20 shadow-md h-full flex flex-col transform hover:-translate-y-2">
                  <div className="mb-4 flex justify-center group-hover:scale-125 transition-transform duration-500 group-hover:rotate-12">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-800 mb-3 group-hover:text-japanRed transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm flex-grow group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                  <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-japanRed to-japanGold group-hover:w-full transition-all duration-500 mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
        <section className="py-20 bg-gradient-to-br from-japanBlack via-japanCharcoal to-japanBlack">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in-section">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-10 shadow-lg relative overflow-hidden border border-white/20">
              {/* Bordure japonaise subtile */}
              <div className="absolute inset-0 border-2 border-japanGold/20 rounded-lg m-2 pointer-events-none"></div>
              
              {/* Symbole japonais en filigrane */}
              <div className="absolute right-0 bottom-0 w-40 h-40 opacity-5">
                <div className="w-full h-full bg-japanBlack rounded-full"></div>
              </div>
              
              <div className="text-5xl text-japanGold mb-6 font-serif">"</div>
              <blockquote className="text-xl md:text-2xl font-serif italic text-white text-center leading-relaxed mb-8">
                La cuisine n'est pas seulement une question de goût, 
                <br className="hidden md:block" />
                c'est une expression de l'âme et du respect des traditions.
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="mr-4 w-14 h-14 bg-japanRed rounded-full flex items-center justify-center shadow-md">
                  <ChefHat className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-japanGold font-serif text-lg font-semibold">Maître Hiroshi Tanaka</p>
                  <p className="text-white/80 text-sm">Fondateur de YIJI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotreHistoire;