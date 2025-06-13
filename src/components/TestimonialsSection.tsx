import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Critique gastronomique",
      content: "Une expérience culinaire exceptionnelle ! Chaque bouchée est un voyage au cœur du Japon. La fraîcheur des ingrédients et la maîtrise du chef sont remarquables.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1591487325538-8cf10f853c20?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "Thomas Martin",
      role: "Amateur de sushi",
      content: "Le meilleur restaurant japonais de Paris ! L'ambiance est authentique et le service impeccable. Je recommande vivement les plateaux omakase.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Sophie Chen",
      role: "Blogueuse culinaire",
      content: "YIJI respecte parfaitement les traditions japonaises tout en apportant une touche moderne. Un véritable art culinaire qui mérite le détour.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-japanBlack via-japanCharcoal to-japanBlack">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Ce que disent nos <span className="text-japanRed">clients</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients qui ont vécu l'expérience YIJI
          </p>
          <div className="flex items-center justify-center mt-6">
            <div className="w-16 h-1 bg-japanRed"></div>
            <div className="w-4 h-1 bg-japanGold ml-2"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 reveal ${index % 2 === 1 ? 'md:mt-8' : ''}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-japanGold text-japanGold" />
                  ))}
                </div>
                
                <blockquote className="text-white mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-japanGold"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-japanGold text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-japanGold text-japanGold" />
              ))}
            </div>
            <div className="text-white">
              <span className="font-bold text-xl">4.9</span>
              <span className="text-gray-300 ml-2">sur 5 • Plus de 500 avis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;