
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuData } from './MenuData';

const MenuComplet = () => {
  const [activeCategory, setActiveCategory] = useState("plateaux");

  return (
    <section id="menu-complet" className="py-20 bg-japanBlack text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Notre <span className="text-japanRed">carte complète</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez l'ensemble de notre menu, préparé avec des ingrédients frais et authentiques.
          </p>
        </div>

        <Tabs defaultValue="plateaux" className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-japanCharcoal/30">
              <TabsTrigger 
                value="plateaux" 
                className="text-base font-semibold tracking-wide data-[state=active]:bg-japanRed data-[state=active]:text-white data-[state=inactive]:text-[#bfbfbf]"
              >
                Plateaux & Sushis
              </TabsTrigger>
              <TabsTrigger 
                value="platsChauds" 
                className="text-base font-semibold tracking-wide data-[state=active]:bg-japanRed data-[state=active]:text-white data-[state=inactive]:text-[#bfbfbf]"
              >
                Plats Chauds
              </TabsTrigger>
              <TabsTrigger 
                value="specialites" 
                className="text-base font-semibold tracking-wide data-[state=active]:bg-japanRed data-[state=active]:text-white data-[state=inactive]:text-[#bfbfbf]"
              >
                Spécialités
              </TabsTrigger>
              <TabsTrigger 
                value="boissons" 
                className="text-base font-semibold tracking-wide data-[state=active]:bg-japanRed data-[state=active]:text-white data-[state=inactive]:text-[#bfbfbf]"
              >
                Boissons
              </TabsTrigger>
              <TabsTrigger 
                value="desserts" 
                className="text-base font-semibold tracking-wide data-[state=active]:bg-japanRed data-[state=active]:text-white data-[state=inactive]:text-[#bfbfbf]"
              >
                Desserts
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Plateaux & Sushis */}
          <TabsContent value="plateaux" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Sashimis Section */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Sashimi <span className="text-sm text-white japanese-text">刺身</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.plateaux.sashimis.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className="text-japanRed font-bold">{item.price.toFixed(2)}€</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chirashis Section */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Chirashi <span className="text-sm text-white japanese-text">ちらし</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.plateaux.chirashis.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className="text-japanRed font-bold">{item.price.toFixed(2)}€</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Makis Section */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Maki <span className="text-sm text-white japanese-text">巻き</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.plateaux.makis.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className="text-japanRed font-bold">{item.price.toFixed(2)}€</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hosomakis Section */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Hosomaki <span className="text-sm text-white japanese-text">細巻き</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.plateaux.hosomakis.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className="text-japanRed font-bold">{item.price.toFixed(2)}€</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Uramakis Section */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Uramaki <span className="text-sm text-white japanese-text">裏巻き</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.plateaux.uramakis.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className="text-japanRed font-bold">{item.price.toFixed(2)}€</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sushis Section */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Sushi <span className="text-sm text-white japanese-text">寿司</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.plateaux.sushis.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className="text-japanRed font-bold">{item.price.toFixed(2)}€/paire</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>

          {/* Plats Chauds */}
          <TabsContent value="platsChauds" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Ramen & Plats */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Ramen & Plats <span className="text-sm text-white japanese-text">ラーメン</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.plateaux.plats.slice(0, 5).map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className="text-japanRed font-bold">{item.price.toFixed(2)}€</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Donburi & Tempura */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Donburi & Tempura <span className="text-sm text-white japanese-text">丼 & 天ぷら</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.plateaux.plats.slice(5).map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className="text-japanRed font-bold">{item.price.toFixed(2)}€</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Accompagnements */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Accompagnements <span className="text-sm text-white japanese-text">付け合わせ</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.plateaux.accompagnements.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className="text-japanRed font-bold">
                        {item.prixBis ? `${item.prixBis.toFixed(2)}€ / ${item.price.toFixed(2)}€` : `${item.price.toFixed(2)}€`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>

          {/* Specialités */}
          <TabsContent value="specialites" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Menus du Midi */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Menus du Midi <span className="text-sm text-white japanese-text">ランチ</span>
                </h3>
                <p className="text-sm italic text-gray-400 mb-4">Servi uniquement le midi</p>
                <ul className="space-y-8">
                  {menuData.menuDuMidi.map((item, index) => (
                    <li key={index} className="pb-6 border-b border-gray-700 last:border-0">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-lg">{item.name}</h4>
                        <span className="text-japanRed font-bold">{item.price.toFixed(2)}€</span>
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

              {/* Izakaya */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Izakaya <span className="text-sm text-white japanese-text">居酒屋</span>
                </h3>
                <p className="text-sm italic text-gray-400 mb-4">Petits plats japonais</p>
                <ul className="space-y-4">
                  {menuData.plateaux.izakaya.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className="text-japanRed font-bold">{item.price.toFixed(2)}€</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>

          {/* Boissons */}
          <TabsContent value="boissons" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Thés */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Thés <span className="text-sm text-white japanese-text">お茶</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.boissons.thes.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className="text-japanRed font-bold">{item.price.toFixed(2)}€</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cafés */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Cafés <span className="text-sm text-white japanese-text">コーヒー</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.boissons.cafes.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className="text-japanRed font-bold">{item.price.toFixed(2)}€</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Eaux minérales */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Eaux minérales <span className="text-sm text-white japanese-text">ミネラルウォーター</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.boissons.eauxMinerales.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className="text-japanRed font-bold">{item.price.toFixed(2)}€</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Jus et Sodas */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Jus & Sodas <span className="text-sm text-white japanese-text">ジュース</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.boissons.jusSodas.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className="text-japanRed font-bold">{item.price.toFixed(2)}€</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Alcools */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Apéritifs <span className="text-sm text-white japanese-text">食前酒</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.alcools.aperitifs.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className="text-japanRed font-bold">{item.price.toFixed(2)}€</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bières */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Bières <span className="text-sm text-white japanese-text">ビール</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.alcools.bieres.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className="text-japanRed font-bold">{item.price.toFixed(2)}€</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>

          {/* Desserts */}
          <TabsContent value="desserts" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Desserts Traditionnels */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Desserts Traditionnels <span className="text-sm text-white japanese-text">伝統的なデザート</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.desserts.slice(5, 9).map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className="text-japanRed font-bold">{item.price?.toFixed(2)}€</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desserts Fusion */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Desserts Fusion <span className="text-sm text-white japanese-text">フュージョンデザート</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.desserts.slice(0, 5).map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                        {item.choices && (
                          <ul className="list-disc list-inside text-xs text-gray-400 ml-2 mt-1">
                            {item.choices.map((choice, idx) => (
                              <li key={idx}>{choice}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <span className="text-japanRed font-bold">
                        {item.price ? `${item.price.toFixed(2)}€` : 'Prix variés'}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Perles de Coco */}
              <div className="bg-japanCharcoal/30 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-japanRed border-b border-japanRed/30 pb-2 mb-4 uppercase relative after:w-12 after:h-0.5 after:bg-japanRed after:block after:mt-1">
                  Perles de Coco <span className="text-sm text-white japanese-text">ココナッツパール</span>
                </h3>
                <ul className="space-y-4">
                  {menuData.desserts
                    .filter(item => item.name === "Perles de Coco")
                    .map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          {item.choices && (
                            <ul className="list-disc list-inside text-sm text-gray-400 ml-2 mt-1">
                              {item.choices.map((choice, idx) => (
                                <li key={idx}>{choice}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <span className="text-japanRed font-bold">{item.price.toFixed(2)}€</span>
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

export default MenuComplet;
