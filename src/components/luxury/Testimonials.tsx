"use client";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "KETO Enthusiast",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "These cookies are absolutely divine! I never thought KETO treats could taste this luxurious. The white chocolate macadamia is my absolute favorite.",
    verified: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Fitness Coach",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "As someone who's been on KETO for years, finding quality treats is challenging. These cookies exceed all expectations - premium quality and taste!",
    verified: true,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Nutritionist",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "I recommend these to all my clients. The ingredient quality is exceptional, and they perfectly fit into a KETO lifestyle without any compromises.",
    verified: true,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Food Blogger",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The packaging alone shows the attention to detail, but the cookies themselves are extraordinary. The thin mint variety is a masterpiece!",
    verified: true,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="luxury-section bg-gradient-to-br from-luxury-black to-luxury-gray-900 text-white">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-6">
            What Our Customers
            <span className="luxury-gradient-text"> Say</span>
          </h2>
          <p className="font-modern text-xl text-luxury-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made our KETO cookies 
            part of their luxury lifestyle.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-8">
            <Quote className="w-12 h-12 text-luxury-gold-400 mb-6" />
            
            <blockquote className="font-modern text-xl md:text-2xl text-white mb-8 leading-relaxed">
              "{currentTestimonial.text}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-luxury text-lg font-semibold text-white">
                      {currentTestimonial.name}
                    </h4>
                    {currentTestimonial.verified && (
                      <div className="w-5 h-5 bg-luxury-gold-400 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="text-luxury-gray-400">{currentTestimonial.role}</p>
                  <div className="flex items-center space-x-1 mt-2">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-luxury-gold-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevTestimonial}
                  className="text-white hover:bg-white/10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTestimonial}
                  className="text-white hover:bg-white/10"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-luxury-gold-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <div className="text-4xl font-luxury font-bold text-white mb-2">4.9</div>
              <div className="text-luxury-gray-400">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-luxury font-bold text-white mb-2">2,500+</div>
              <div className="text-luxury-gray-400">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-luxury font-bold text-white mb-2">98%</div>
              <div className="text-luxury-gray-400">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;