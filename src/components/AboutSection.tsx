import { cn } from "@/lib/utils";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-japanWhite">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-japanBlack mb-6">
              L'Esprit <span className="text-japanRed">YIJI</span>
            </h2>
            <p className="text-japanCharcoal mb-6 leading-relaxed">Fondé en 2010 par le Chef Takeshi Yamamoto, YIJI est né d'une vision simple : créer un espace où les traditions culinaires japonaises rencontrent les saveurs contemporaines.</p>
            <p className="text-japanCharcoal mb-6 leading-relaxed">
              Notre restaurant combine l'art ancestral du sushi et de la cuisine japonaise authentique 
              avec une touche d'innovation pour créer une expérience gastronomique inoubliable.
            </p>
            <p className="text-japanCharcoal mb-6 leading-relaxed">
              Chaque plat est préparé avec précision et respect des traditions, 
              en utilisant uniquement des ingrédients frais et de saison importés directement du Japon.
            </p>
            
            <div className="flex items-center mb-6">
              <div className="w-16 h-1 bg-japanRed"></div>
              <div className="w-4 h-1 bg-japanGold ml-2"></div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-8 mt-8">
              <div className="flex flex-col">
                <span className="text-japanRed font-serif text-4xl font-bold">14</span>
                <span className="text-japanBlack text-sm uppercase tracking-wider">Années d'expérience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-japanRed font-serif text-4xl font-bold">5</span>
                <span className="text-japanBlack text-sm uppercase tracking-wider">Chefs experts</span>
              </div>
              <div className="flex flex-col">
                <span className="text-japanRed font-serif text-4xl font-bold">1200+</span>
                <span className="text-japanBlack text-sm uppercase tracking-wider">Clients satisfaits</span>
              </div>
            </div>
          </div>
          
          <div className="relative reveal-left">
            <div className="aspect-[3/4] overflow-hidden relative">
              <img alt="Chef préparant des sushis" className="w-full h-full rounded-md shadow-lg object-contain" src="https://images.unsplash.com/photo-1617196034738-26c5f7c977ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <div className={cn("absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-japanWhite p-5 shadow-lg rounded-md", "w-32 h-32 md:w-40 md:h-40 flex items-center justify-center")}>
                <div className="text-center">
                  <p className="text-japanRed font-serif font-bold text-lg md:text-xl">和食</p>
                  <p className="text-japanBlack text-xs md:text-sm mt-1">Cuisine japonaise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md reveal">
            <h3 className="text-xl font-serif font-bold text-japanBlack mb-4">Notre Philosophie</h3>
            <p className="text-japanCharcoal">
              Nous cultivons l'harmonie entre tradition et modernité, 
              en honorant le "Washoku" - l'art culinaire japonais reconnu 
              par l'UNESCO comme patrimoine culturel immatériel.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md reveal">
            <h3 className="text-xl font-serif font-bold text-japanBlack mb-4">L'Art du Service</h3>
            <p className="text-japanCharcoal">
              Notre équipe incarne l'esprit "Omotenashi" - l'hospitalité japonaise sans égale, 
              où l'attention aux détails et le service personnalisé créent une expérience immersive.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md reveal">
            <h3 className="text-xl font-serif font-bold text-japanBlack mb-4">Nos Engagements</h3>
            <p className="text-japanCharcoal">
              Nous nous engageons à soutenir des pratiques de pêche durable et à réduire notre empreinte 
              environnementale, tout en respectant les principes du "Mottainai" - ne rien gaspiller.
            </p>
          </div>
        </div>
        
        <div className="mt-16 reveal">
          <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
            <img src="https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFwb258ZW58MHx8MHx8fDA%3D" alt="Intérieur du restaurant YUJI" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-japanBlack/70 to-transparent flex items-end">
              <div className="p-6 text-white">
                <p className="text-lg md:text-xl font-serif italic">"L'expérience YIJI est une célébration des sens, une invitation au voyage à travers les saveurs du Japon."</p>
                <p className="text-sm mt-2">— Chef Takeshi Yamamoto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;