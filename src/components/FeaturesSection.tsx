import { Utensils, Clock, Award, Heart, Leaf, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Utensils,
      title: "Cuisine Authentique",
      description: "Techniques traditionnelles japonaises transmises de génération en génération",
      color: "text-japanRed"
    },
    {
      icon: Clock,
      title: "Fraîcheur Garantie",
      description: "Ingrédients sélectionnés quotidiennement et préparés à la commande",
      color: "text-japanGold"
    },
    {
      icon: Award,
      title: "Chef Reconnu",
      description: "Chef Takeshi Yamamoto, formé dans les meilleurs restaurants de Tokyo",
      color: "text-japanRed"
    },
    {
      icon: Heart,
      title: "Service Omotenashi",
      description: "Hospitalité japonaise authentique pour une expérience mémorable",
      color: "text-japanGold"
    },
    {
      icon: Leaf,
      title: "Pêche Durable",
      description: "Engagement pour des pratiques respectueuses de l'environnement",
      color: "text-japanRed"
    },
    {
      icon: Users,
      title: "Expérience Privée",
      description: "Salons privés disponibles pour vos événements spéciaux",
      color: "text-japanGold"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-japanBlack to-japanCharcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Pourquoi choisir <span className="text-japanRed">YIJI</span> ?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Découvrez ce qui fait de YIJI une destination culinaire d'exception
          </p>
          <div className="flex items-center justify-center mt-6">
            <div className="w-16 h-1 bg-japanRed"></div>
            <div className="w-4 h-1 bg-japanGold ml-2"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group reveal"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${feature.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-japanGold transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center reveal">
            <div className="text-3xl md:text-4xl font-serif font-bold text-japanRed mb-2">14+</div>
            <div className="text-gray-300 text-sm uppercase tracking-wider">Années d'expérience</div>
          </div>
          <div className="text-center reveal">
            <div className="text-3xl md:text-4xl font-serif font-bold text-japanGold mb-2">5</div>
            <div className="text-gray-300 text-sm uppercase tracking-wider">Chefs experts</div>
          </div>
          <div className="text-center reveal">
            <div className="text-3xl md:text-4xl font-serif font-bold text-japanRed mb-2">1200+</div>
            <div className="text-gray-300 text-sm uppercase tracking-wider">Clients satisfaits</div>
          </div>
          <div className="text-center reveal">
            <div className="text-3xl md:text-4xl font-serif font-bold text-japanGold mb-2">4.9</div>
            <div className="text-gray-300 text-sm uppercase tracking-wider">Note moyenne</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;