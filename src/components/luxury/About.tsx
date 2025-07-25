import { Award, Leaf, Heart, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest ingredients make it into our cookies, sourced from trusted suppliers worldwide."
    },
    {
      icon: Leaf,
      title: "KETO Certified",
      description: "Every cookie is carefully crafted to meet strict KETO guidelines without compromising on taste."
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Each batch is handcrafted in small quantities with attention to every detail."
    },
    {
      icon: Sparkles,
      title: "Luxury Experience",
      description: "From packaging to delivery, every touchpoint is designed to delight and inspire."
    }
  ];

  return (
    <section className="luxury-section bg-white">
      <div className="luxury-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center space-x-2 bg-luxury-pink-100 text-luxury-pink-800 rounded-full px-6 py-2 mb-6">
              <Heart className="w-4 h-4" />
              <span className="font-medium text-sm">Our Story</span>
            </div>
            
            <h2 className="font-luxury text-4xl md:text-5xl font-bold text-luxury-black mb-6">
              Crafting Luxury
              <span className="luxury-gradient-text"> KETO</span>
              <span className="block">Experiences</span>
            </h2>
            
            <p className="font-modern text-lg text-luxury-gray-600 mb-8 leading-relaxed">
              Born from a passion for creating exceptional KETO-friendly treats, our journey began 
              with a simple mission: to prove that dietary restrictions don't mean compromising on 
              luxury or taste.
            </p>
            
            <p className="font-modern text-lg text-luxury-gray-600 mb-12 leading-relaxed">
              Every cookie tells a story of meticulous craftsmanship, premium ingredients, and 
              an unwavering commitment to excellence. We believe that indulgence should be both 
              guilt-free and extraordinary.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 animate-on-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-luxury-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-luxury-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-luxury text-lg font-semibold text-luxury-black mb-2">
                      {value.title}
                    </h3>
                    <p className="text-luxury-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="animate-on-scroll" style={{ animationDelay: '300ms' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gold-gradient rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=600&fit=crop"
                  alt="Artisan cookie making process"
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
                <div className="text-center">
                  <h3 className="font-luxury text-xl font-semibold text-luxury-black mb-2">
                    Handcrafted Excellence
                  </h3>
                  <p className="text-luxury-gray-600">
                    Every cookie is made with precision and care in our artisan kitchen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;