"use client";
import { useState } from "react";
import { Mail, Gift, Bell, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail("");
  };

  if (isSubscribed) {
    return (
      <section className="luxury-section bg-gradient-to-br from-luxury-gold-50 to-luxury-pink-50">
        <div className="luxury-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <Gift className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-luxury-black mb-4">
              Welcome to the VIP List!
            </h2>
            <p className="font-modern text-lg text-luxury-gray-600 mb-8">
              You'll be the first to know when our next luxury cookie drop goes live. 
              Check your email for a special welcome gift!
            </p>
            <Button 
              onClick={() => setIsSubscribed(false)}
              variant="outline" 
              className="luxury-btn-secondary"
            >
              Subscribe Another Email
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="luxury-section bg-gradient-to-br from-luxury-gold-50 to-luxury-pink-50">
      <div className="luxury-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="inline-flex items-center space-x-2 bg-luxury-gold-100 text-luxury-gold-800 rounded-full px-4 py-2 mb-6">
                  <Bell className="w-4 h-4" />
                  <span className="font-medium text-sm">VIP Access</span>
                </div>

                <h2 className="font-luxury text-3xl md:text-4xl font-bold text-luxury-black mb-4">
                  Join Our Exclusive
                  <span className="luxury-gradient-text"> Waitlist</span>
                </h2>

                <p className="font-modern text-lg text-luxury-gray-600 mb-8">
                  Be the first to know when our limited monthly drops go live. 
                  VIP members get early access and exclusive flavors.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-12 px-4 border-2 border-luxury-gray-200 rounded-full focus:border-luxury-gold-400 focus:ring-0"
                      required
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="luxury-btn-primary h-12 px-8 whitespace-nowrap"
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Joining...</span>
                        </div>
                      ) : (
                        <>
                          <Mail className="w-4 h-4 mr-2" />
                          Join Waitlist
                        </>
                      )}
                    </Button>
                  </div>
                </form>

                <p className="text-sm text-luxury-gray-500 mt-4">
                  By subscribing, you agree to receive marketing emails. Unsubscribe at any time.
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-luxury-gold-100 rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-luxury-gold-600" />
                    </div>
                    <span className="text-luxury-gray-700">Early drop access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-luxury-pink-100 rounded-full flex items-center justify-center">
                      <Gift className="w-4 h-4 text-luxury-pink-600" />
                    </div>
                    <span className="text-luxury-gray-700">Exclusive flavors</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative bg-gradient-to-br from-luxury-gold-400 to-luxury-pink-400 p-8 md:p-12 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl transform rotate-6"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=300&h=300&fit=crop"
                      alt="Luxury cookie box"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="text-center">
                      <h3 className="font-luxury text-lg font-semibold text-luxury-black mb-2">
                        Monthly Luxury Box
                      </h3>
                      <p className="text-luxury-gray-600 text-sm">
                        Curated selection of our finest KETO cookies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;