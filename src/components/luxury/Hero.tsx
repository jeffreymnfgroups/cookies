"use client";
import { useState, useEffect } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-luxury-black via-luxury-gray-900 to-luxury-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-luxury-gold-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-luxury-pink-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-luxury-gold-300 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>

      <div className="luxury-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Sparkles className="w-4 h-4 text-luxury-gold-400" />
            <span className="text-white font-modern text-sm">Limited Monthly Drops</span>
          </div>

          {/* Main Heading */}
          <h1 className={`font-luxury text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Luxury
            <span className="block luxury-gradient-text">KETO</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl">Cookies</span>
          </h1>

          {/* Subtitle */}
          <p className={`font-modern text-xl md:text-2xl text-luxury-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Indulge in our exclusive monthly subscription featuring premium artisan KETO cookies crafted with the finest ingredients.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button className="luxury-btn-primary text-lg px-10 py-4 animate-glow">
              Join Waitlist - Next Drop
            </Button>
            <Link href="/products">
              <Button variant="outline" className="luxury-btn-secondary text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-luxury-black">
                Shop Individual Cookies
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <div className="text-3xl font-luxury font-bold text-white mb-2">3</div>
              <div className="text-luxury-gray-400 font-modern">Signature Flavors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-luxury font-bold text-white mb-2">1x</div>
              <div className="text-luxury-gray-400 font-modern">Monthly Drop</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-luxury font-bold text-white mb-2">100%</div>
              <div className="text-luxury-gray-400 font-modern">KETO Friendly</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white opacity-60" />
      </div>
    </section>
  );
};

export default Hero;