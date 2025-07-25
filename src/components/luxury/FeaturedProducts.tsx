"use client";
import { useState } from "react";
import { Star, Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "White Chocolate Macadamia Nut",
    description: "Rich white chocolate chunks with premium macadamia nuts in a buttery KETO cookie base",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&h=500&fit=crop",
    price: 59,
    rating: 4.9,
    reviews: 127,
    isNew: true,
  },
  {
    id: 2,
    name: "Stuffed Red Velvet",
    description: "Decadent red velvet cookie stuffed with cream cheese filling and a hint of cocoa",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=500&fit=crop",
    price: 59,
    rating: 4.8,
    reviews: 89,
    isNew: false,
  },
  {
    id: 3,
    name: "Thin Mint",
    description: "Crispy chocolate cookie with refreshing mint and dark chocolate coating",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=500&fit=crop",
    price: 59,
    rating: 4.9,
    reviews: 156,
    isNew: false,
  },
];

const FeaturedProducts = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="luxury-section bg-white">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-luxury-black mb-6">
            Our Signature
            <span className="luxury-gradient-text"> Flavors</span>
          </h2>
          <p className="font-modern text-xl text-luxury-gray-600 max-w-2xl mx-auto">
            Each cookie is meticulously crafted with premium ingredients, 
            ensuring every bite is a luxurious experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="luxury-card group cursor-pointer animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  {product.isNew && (
                    <div className="absolute top-4 left-4 z-10 bg-luxury-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </div>
                  )}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300"
                  >
                    <Heart 
                      className={`w-5 h-5 transition-colors duration-300 ${
                        favorites.includes(product.id) 
                          ? 'text-luxury-pink-500 fill-current' 
                          : 'text-luxury-gray-600'
                      }`} 
                    />
                  </button>
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-luxury-gold-400 fill-current'
                              : 'text-luxury-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-luxury-gray-600 ml-2">
                        ({product.reviews})
                      </span>
                    </div>
                    <span className="font-luxury text-2xl font-bold text-luxury-black">
                      ${product.price}
                    </span>
                  </div>

                  <h3 className="font-luxury text-xl font-semibold text-luxury-black mb-3">
                    {product.name}
                  </h3>

                  <p className="font-modern text-luxury-gray-600 mb-6 line-clamp-2">
                    {product.description}
                  </p>

                  <Button className="w-full luxury-btn-primary group">
                    <ShoppingBag className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-modern text-luxury-gray-600 mb-6">
            All cookies are sold by the dozen (12 pieces)
          </p>
          <Button variant="outline" className="luxury-btn-secondary">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;