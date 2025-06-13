
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { menuData } from './MenuData';
import { ChefHat, Utensils, Coffee, Cake, Star, Sparkles } from 'lucide-react';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("plateaux");

  return (
    <section id="menu" className="py-20 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-japanGold rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-japanRed rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-japanGold rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-japanGold mr-3 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-white via-japanGold to-japanRed bg-clip-text text-transparent">
              Notre <span className="text-japanRed">Carte</span>
            </h2>
            <Sparkles className="w-8 h-8 text-japanGold ml-3 animate-pulse" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-japanGold to-japanRed mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre sélection de plats traditionnels japonais préparés avec 
            des ingrédients frais et authentiques par nos chefs expérimentés.
          </p>
        </div>

        <Tabs defaultValue="plateaux" className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-12 px-1 sm:px-2">
            <TabsList className="bg-japanCharcoal/70 backdrop-blur-sm border border-japanGold/30 rounded-2xl p-1 sm:p-4 shadow-2xl w-full max-w-sm sm:max-w-none sm:w-auto sm:min-h-[60px] grid grid-cols-5 sm:flex sm:flex-wrap">
              <TabsTrigger value="plateaux" className="text-xs sm:text-sm flex flex-col sm:flex-row items-center gap-0.5 sm:gap-2 px-1 sm:px-3 py-1.5 sm:py-2 rounded-xl transition-all duration-300 hover:bg-japanRed/20 data-[state=active]:bg-japanRed data-[state=active]:text-white sm:flex-shrink-0 sm:max-w-fit">
                <Utensils className="w-3.5 h-3.5 sm:w-3 sm:h-3" />
                <span className="hidden sm:inline">Plateaux & Sushis</span>
                <span className="sm:hidden text-[9px] leading-none text-center">Plat.</span>
              </TabsTrigger>
              <TabsTrigger value="platsChauds" className="text-xs sm:text-sm flex flex-col sm:flex-row items-center gap-0.5 sm:gap-2 px-1 sm:px-3 py-1.5 sm:py-2 rounded-xl transition-all duration-300 hover:bg-japanRed/20 data-[state=active]:bg-japanRed data-[state=active]:text-white sm:flex-shrink-0 sm:max-w-fit">
                <ChefHat className="w-3.5 h-3.5 sm:w-3 sm:h-3" />
                <span className="hidden sm:inline">Plats Chauds</span>
                <span className="sm:hidden text-[9px] leading-none text-center">Chaud</span>
              </TabsTrigger>
              <TabsTrigger value="specialites" className="text-xs sm:text-sm flex flex-col sm:flex-row items-center gap-0.5 sm:gap-2 px-1 sm:px-3 py-1.5 sm:py-2 rounded-xl transition-all duration-300 hover:bg-japanRed/20 data-[state=active]:bg-japanRed data-[state=active]:text-white sm:flex-shrink-0 sm:max-w-fit">
                <Star className="w-3.5 h-3.5 sm:w-3 sm:h-3" />
                <span className="hidden sm:inline">Spécialités</span>
                <span className="sm:hidden text-[9px] leading-none text-center">Spéc.</span>
              </TabsTrigger>
              <TabsTrigger value="boissons" className="text-xs sm:text-sm flex flex-col sm:flex-row items-center gap-0.5 sm:gap-2 px-1 sm:px-3 py-1.5 sm:py-2 rounded-xl transition-all duration-300 hover:bg-japanRed/20 data-[state=active]:bg-japanRed data-[state=active]:text-white sm:flex-shrink-0 sm:max-w-fit">
                <Coffee className="w-3.5 h-3.5 sm:w-3 sm:h-3" />
                <span className="hidden sm:inline">Boissons</span>
                <span className="sm:hidden text-[9px] leading-none text-center">Boiss.</span>
              </TabsTrigger>
              <TabsTrigger value="desserts" className="text-xs sm:text-sm flex flex-col sm:flex-row items-center gap-0.5 sm:gap-2 px-1 sm:px-3 py-1.5 sm:py-2 rounded-xl transition-all duration-300 hover:bg-japanRed/20 data-[state=active]:bg-japanRed data-[state=active]:text-white sm:flex-shrink-0 sm:max-w-fit">
                <Cake className="w-3.5 h-3.5 sm:w-3 sm:h-3" />
                <span className="hidden sm:inline">Desserts</span>
                <span className="sm:hidden text-[9px] leading-none text-center">Dess.</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Plateaux & Sushis */}
          <TabsContent value="plateaux" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sashimis Section */}
              <div className="bg-gradient-to-br from-japanCharcoal/40 to-japanBlack/60 p-8 rounded-2xl border border-japanGold/20 backdrop-blur-sm hover:border-japanGold/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-japanRed to-japanGold rounded-full mr-3"></div>
                  <h3 className="text-xl font-serif font-bold text-japanRed group-hover:text-japanGold transition-colors duration-300">
                    Sashimi <span className="text-sm text-white japanese-text">刺身</span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  {menuData.plateaux.sashimis.map((item, index) => (
                    <li key={index} className="flex justify-between items-start p-4 rounded-xl hover:bg-japanGold/10 transition-all duration-300 border border-transparent hover:border-japanGold/30 group cursor-pointer">
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-japanGold transition-colors duration-300">{item.name}</h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1">{item.description}</p>
                      </div>
                      <div className="flex items-center ml-4">
                        <span className="text-japanRed font-bold text-lg group-hover:text-japanGold transition-colors duration-300">{item.price.toFixed(2)}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Makis Section */}
              <div className="bg-gradient-to-br from-japanCharcoal/40 to-japanBlack/60 p-8 rounded-2xl border border-japanGold/20 backdrop-blur-sm hover:border-japanGold/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-japanRed to-japanGold rounded-full mr-3"></div>
                  <h3 className="text-xl font-serif font-bold text-japanRed group-hover:text-japanGold transition-colors duration-300">
                    Maki <span className="text-sm text-white japanese-text">巻き</span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[...menuData.plateaux.makis, ...menuData.plateaux.hosomakis.slice(0, 3)].map((item, index) => (
                    <li key={index} className="flex justify-between items-start p-4 rounded-xl hover:bg-japanGold/10 transition-all duration-300 border border-transparent hover:border-japanGold/30 group cursor-pointer">
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-japanGold transition-colors duration-300">{item.name}</h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1">{item.description}</p>
                      </div>
                      <div className="flex items-center ml-4">
                        <span className="text-japanRed font-bold text-lg group-hover:text-japanGold transition-colors duration-300">{item.price.toFixed(2)}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sushis Section */}
              <div className="bg-gradient-to-br from-japanCharcoal/40 to-japanBlack/60 p-8 rounded-2xl border border-japanGold/20 backdrop-blur-sm hover:border-japanGold/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-japanRed to-japanGold rounded-full mr-3"></div>
                  <h3 className="text-xl font-serif font-bold text-japanRed group-hover:text-japanGold transition-colors duration-300">
                    Sushi <span className="text-sm text-white japanese-text">寿司</span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  {menuData.plateaux.sushis.slice(0, 6).map((item, index) => (
                    <li key={index} className="flex justify-between items-start p-4 rounded-xl hover:bg-japanGold/10 transition-all duration-300 border border-transparent hover:border-japanGold/30 group cursor-pointer">
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-japanGold transition-colors duration-300">{item.name}</h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1">{item.description}</p>
                      </div>
                      <div className="flex items-center ml-4">
                        <span className="text-japanRed font-bold text-lg group-hover:text-japanGold transition-colors duration-300">{item.price.toFixed(2)}€/paire</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>

          {/* Plats Chauds */}
          <TabsContent value="platsChauds" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ramen & Plats Section */}
              <div className="bg-gradient-to-br from-japanCharcoal/40 to-japanBlack/60 p-8 rounded-2xl border border-japanGold/20 backdrop-blur-sm hover:border-japanGold/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-japanRed to-japanGold rounded-full mr-3"></div>
                  <h3 className="text-xl font-serif font-bold text-japanRed group-hover:text-japanGold transition-colors duration-300">
                    Ramen & Plats <span className="text-sm text-white japanese-text">ラーメン</span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  {menuData.plateaux.plats.slice(0, 5).map((item, index) => (
                    <li key={index} className="flex justify-between items-start p-4 rounded-xl hover:bg-japanGold/10 transition-all duration-300 border border-transparent hover:border-japanGold/30 group cursor-pointer">
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-japanGold transition-colors duration-300">{item.name}</h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1">{item.description}</p>
                      </div>
                      <div className="flex items-center ml-4">
                        <span className="text-japanRed font-bold text-lg group-hover:text-japanGold transition-colors duration-300">{item.price.toFixed(2)}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Donburi & Tempura Section */}
              <div className="bg-gradient-to-br from-japanCharcoal/40 to-japanBlack/60 p-8 rounded-2xl border border-japanGold/20 backdrop-blur-sm hover:border-japanGold/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-japanRed to-japanGold rounded-full mr-3"></div>
                  <h3 className="text-xl font-serif font-bold text-japanRed group-hover:text-japanGold transition-colors duration-300">
                    Donburi & Tempura <span className="text-sm text-white japanese-text">丼 & 天ぷら</span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  {menuData.plateaux.plats.slice(5).map((item, index) => (
                    <li key={index} className="flex justify-between items-start p-4 rounded-xl hover:bg-japanGold/10 transition-all duration-300 border border-transparent hover:border-japanGold/30 group cursor-pointer">
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-japanGold transition-colors duration-300">{item.name}</h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1">{item.description}</p>
                      </div>
                      <div className="flex items-center ml-4">
                        <span className="text-japanRed font-bold text-lg group-hover:text-japanGold transition-colors duration-300">{item.price.toFixed(2)}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Accompagnements Section */}
              <div className="bg-gradient-to-br from-japanCharcoal/40 to-japanBlack/60 p-8 rounded-2xl border border-japanGold/20 backdrop-blur-sm hover:border-japanGold/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group md:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-japanRed to-japanGold rounded-full mr-3"></div>
                  <h3 className="text-xl font-serif font-bold text-japanRed group-hover:text-japanGold transition-colors duration-300">
                    Accompagnements <span className="text-sm text-white japanese-text">付け合わせ</span>
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {menuData.plateaux.accompagnements.slice(0, 6).map((item, index) => (
                    <div key={index} className="flex justify-between items-start p-4 rounded-xl hover:bg-japanGold/10 transition-all duration-300 border border-transparent hover:border-japanGold/30 group cursor-pointer">
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-japanGold transition-colors duration-300">{item.name}</h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1">{item.description}</p>
                      </div>
                      <div className="flex items-center ml-4">
                        <span className="text-japanRed font-bold text-lg group-hover:text-japanGold transition-colors duration-300">
                          {item.prixBis ? `${item.prixBis.toFixed(2)}€ / ${item.price.toFixed(2)}€` : `${item.price.toFixed(2)}€`}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Specialités */}
          <TabsContent value="specialites" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Menus du Midi Section */}
              <div className="bg-gradient-to-br from-japanCharcoal/40 to-japanBlack/60 p-8 rounded-2xl border border-japanGold/20 backdrop-blur-sm hover:border-japanGold/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-japanRed to-japanGold rounded-full mr-3"></div>
                  <h3 className="text-xl font-serif font-bold text-japanRed group-hover:text-japanGold transition-colors duration-300">
                    Menus du Midi <span className="text-sm text-white japanese-text">ランチ</span>
                  </h3>
                </div>
                <p className="text-sm italic text-gray-400 mb-4">Servi uniquement le midi</p>
                <ul className="space-y-8">
                  {menuData.menuDuMidi.map((item, index) => (
                    <li key={index} className="pb-6 border-b border-gray-700 last:border-0">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-lg text-white group-hover:text-japanGold transition-colors duration-300">{item.name}</h4>
                        <span className="text-japanRed font-bold group-hover:text-japanGold transition-colors duration-300">{item.price.toFixed(2)}€</span>
                      </div>
                      <ul className="list-disc list-inside text-sm text-gray-400 ml-2">
                        {item.items.map((listItem, idx) => (
                          <li key={idx}>{listItem}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Izakaya Section */}
              <div className="bg-gradient-to-br from-japanCharcoal/40 to-japanBlack/60 p-8 rounded-2xl border border-japanGold/20 backdrop-blur-sm hover:border-japanGold/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-japanRed to-japanGold rounded-full mr-3"></div>
                  <h3 className="text-xl font-serif font-bold text-japanRed group-hover:text-japanGold transition-colors duration-300">
                    Izakaya <span className="text-sm text-white japanese-text">居酒屋</span>
                  </h3>
                </div>
                <p className="text-sm italic text-gray-400 mb-4">Petits plats japonais</p>
                <ul className="space-y-4">
                  {menuData.plateaux.izakaya.map((item, index) => (
                    <li key={index} className="flex justify-between items-start p-4 rounded-xl hover:bg-japanGold/10 transition-all duration-300 border border-transparent hover:border-japanGold/30 group cursor-pointer">
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-japanGold transition-colors duration-300">{item.name}</h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1">{item.description}</p>
                      </div>
                      <div className="flex items-center ml-4">
                        <span className="text-japanRed font-bold text-lg group-hover:text-japanGold transition-colors duration-300">{item.price.toFixed(2)}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>

          {/* Boissons */}
          <TabsContent value="boissons" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Thés Section */}
              <div className="bg-gradient-to-br from-japanCharcoal/40 to-japanBlack/60 p-8 rounded-2xl border border-japanGold/20 backdrop-blur-sm hover:border-japanGold/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-japanRed to-japanGold rounded-full mr-3"></div>
                  <h3 className="text-xl font-serif font-bold text-japanRed group-hover:text-japanGold transition-colors duration-300">
                    Thés <span className="text-sm text-white japanese-text">お茶</span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  {menuData.boissons.thes.slice(0, 5).map((item, index) => (
                    <li key={index} className="flex justify-between items-start p-4 rounded-xl hover:bg-japanGold/10 transition-all duration-300 border border-transparent hover:border-japanGold/30 group cursor-pointer">
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-japanGold transition-colors duration-300">{item.name}</h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1">{item.description}</p>
                      </div>
                      <div className="flex items-center ml-4">
                        <span className="text-japanRed font-bold text-lg group-hover:text-japanGold transition-colors duration-300">{item.price.toFixed(2)}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Saké & Bières Section */}
              <div className="bg-gradient-to-br from-japanCharcoal/40 to-japanBlack/60 p-8 rounded-2xl border border-japanGold/20 backdrop-blur-sm hover:border-japanGold/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-japanRed to-japanGold rounded-full mr-3"></div>
                  <h3 className="text-xl font-serif font-bold text-japanRed group-hover:text-japanGold transition-colors duration-300">
                    Saké & Bières <span className="text-sm text-white japanese-text">酒 & ビール</span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[...menuData.alcools.sake.slice(0, 2), ...menuData.alcools.bieres].map((item, index) => (
                    <li key={index} className="flex justify-between items-start p-4 rounded-xl hover:bg-japanGold/10 transition-all duration-300 border border-transparent hover:border-japanGold/30 group cursor-pointer">
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-japanGold transition-colors duration-300">{item.name}</h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1">{item.description}</p>
                      </div>
                      <div className="flex items-center ml-4">
                        <span className="text-japanRed font-bold text-lg group-hover:text-japanGold transition-colors duration-300">{item.price.toFixed(2)}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Jus & Sodas Section */}
              <div className="bg-gradient-to-br from-japanCharcoal/40 to-japanBlack/60 p-8 rounded-2xl border border-japanGold/20 backdrop-blur-sm hover:border-japanGold/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-japanRed to-japanGold rounded-full mr-3"></div>
                  <h3 className="text-xl font-serif font-bold text-japanRed group-hover:text-japanGold transition-colors duration-300">
                    Jus & Sodas <span className="text-sm text-white japanese-text">ジュース</span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  {menuData.boissons.jusSodas.slice(0, 5).map((item, index) => (
                    <li key={index} className="flex justify-between items-start p-4 rounded-xl hover:bg-japanGold/10 transition-all duration-300 border border-transparent hover:border-japanGold/30 group cursor-pointer">
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-japanGold transition-colors duration-300">{item.name}</h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1">{item.description}</p>
                      </div>
                      <div className="flex items-center ml-4">
                        <span className="text-japanRed font-bold text-lg group-hover:text-japanGold transition-colors duration-300">{item.price.toFixed(2)}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>

          {/* Desserts */}
          <TabsContent value="desserts" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Desserts Traditionnels Section */}
              <div className="bg-gradient-to-br from-japanCharcoal/40 to-japanBlack/60 p-8 rounded-2xl border border-japanGold/20 backdrop-blur-sm hover:border-japanGold/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-japanRed to-japanGold rounded-full mr-3"></div>
                  <h3 className="text-xl font-serif font-bold text-japanRed group-hover:text-japanGold transition-colors duration-300">
                    Desserts Traditionnels <span className="text-sm text-white japanese-text">和菓子</span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  {menuData.desserts.slice(5, 9).map((item, index) => (
                    <li key={index} className="flex justify-between items-start p-4 rounded-xl hover:bg-japanGold/10 transition-all duration-300 border border-transparent hover:border-japanGold/30 group cursor-pointer">
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-japanGold transition-colors duration-300">{item.name}</h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1">{item.description}</p>
                      </div>
                      <div className="flex items-center ml-4">
                        <span className="text-japanRed font-bold text-lg group-hover:text-japanGold transition-colors duration-300">{item.price?.toFixed(2)}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desserts Fusion Section */}
              <div className="bg-gradient-to-br from-japanCharcoal/40 to-japanBlack/60 p-8 rounded-2xl border border-japanGold/20 backdrop-blur-sm hover:border-japanGold/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-japanRed to-japanGold rounded-full mr-3"></div>
                  <h3 className="text-xl font-serif font-bold text-japanRed group-hover:text-japanGold transition-colors duration-300">
                    Desserts Fusion <span className="text-sm text-white japanese-text">フュージョン</span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  {menuData.desserts.slice(0, 5).map((item, index) => (
                    <li key={index} className="flex justify-between items-start p-4 rounded-xl hover:bg-japanGold/10 transition-all duration-300 border border-transparent hover:border-japanGold/30 group cursor-pointer">
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-japanGold transition-colors duration-300">{item.name}</h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1">{item.description}</p>
                        {item.choices && (
                          <ul className="list-disc list-inside text-xs text-gray-400 ml-2 mt-1">
                            {item.choices.slice(0, 3).map((choice, idx) => (
                              <li key={idx}>{choice}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="flex items-center ml-4">
                        <span className="text-japanRed font-bold text-lg group-hover:text-japanGold transition-colors duration-300">
                          {item.price ? `${item.price.toFixed(2)}€` : 'Prix variés'}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>


      </div>
    </section>
  );
};

export default MenuSection;
