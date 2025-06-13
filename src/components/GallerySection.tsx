import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop",
      alt: "Sushi frais préparés par notre chef",
      category: "Plats"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1617196034738-26c5f7c977ce?w=800&h=600&fit=crop",
      alt: "Chef préparant des sushis",
      category: "Cuisine"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      alt: "Intérieur élégant du restaurant",
      category: "Ambiance"
    },
    {
      id: 4,
      src: "https://www.oceansideseafood.com/cdn/shop/products/Premium_Variety.png?v=1741552871&width=823",
      alt: "Plateau de sashimi premium",
      category: "Plats"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop",
      alt: "Ambiance chaleureuse du restaurant",
      category: "Ambiance"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&h=600&fit=crop",
      alt: "Ramen traditionnel japonais",
      category: "Plats"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <>
      <section className="py-20 bg-japanWhite">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-japanBlack mb-4">
              Notre <span className="text-japanRed">Galerie</span>
            </h2>
            <p className="text-japanCharcoal text-lg max-w-2xl mx-auto">
              Plongez dans l'univers YIJI à travers nos créations culinaires et notre ambiance authentique
            </p>
            <div className="flex items-center justify-center mt-6">
              <div className="w-16 h-1 bg-japanRed"></div>
              <div className="w-4 h-1 bg-japanGold ml-2"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer reveal"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="inline-block bg-japanRed px-3 py-1 rounded-full text-xs font-medium mb-2">
                      {image.category}
                    </span>
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
                
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-japanGold transition-colors duration-300 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            
            <img 
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <span className="inline-block bg-japanRed px-3 py-1 rounded-full text-xs font-medium mb-2 text-white">
                  {galleryImages[selectedImage].category}
                </span>
                <p className="text-white text-sm">{galleryImages[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;