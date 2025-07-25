"use client";
import { useState } from "react";
import { Check, Crown, Gift, Truck, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const subscriptionPlans = [
  {
    id: "half-dozen",
    name: "Half Dozen",
    price: 26,
    cookies: 6,
    description: "Perfect for trying our flavors",
    features: [
      "6 premium KETO cookies",
      "Mix of all 3 signature flavors",
      "Luxury packaging",
      "Monthly drop access",
    ],
    popular: false,
  },
  {
    id: "full-dozen",
    name: "Full Dozen",
    price: 48,
    cookies: 12,
    description: "Our most popular subscription",
    features: [
      "12 premium KETO cookies",
      "4 cookies of each flavor",
      "Luxury gift box packaging",
      "Monthly drop access",
      "Exclusive flavor previews",
    ],
    popular: true,
  },
];

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState("full-dozen");

  return (
    <section className="luxury-section bg-gradient-to-br from-luxury-gray-50 to-white">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-luxury-gold-100 text-luxury-gold-800 rounded-full px-6 py-2 mb-6">
            <Crown className="w-4 h-4" />
            <span className="font-medium text-sm">Exclusive Subscription</span>
          </div>
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-luxury-black mb-6">
            Join Our Monthly
            <span className="luxury-gradient-text"> Drop</span>
          </h2>
          <p className="font-modern text-xl text-luxury-gray-600 max-w-3xl mx-auto">
            Experience the exclusivity of our limited monthly drops. Each box is carefully curated 
            with our signature KETO cookies, available only to subscribers during drop windows.
          </p>
        </div>

        {/* How It Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center animate-on-scroll">
            <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-luxury text-xl font-semibold mb-2">Monthly Drops</h3>
            <p className="text-luxury-gray-600">
              Limited quantities released once per month. Subscribe to get notified when drops go live.
            </p>
          </div>
          <div className="text-center animate-on-scroll" style={{ animationDelay: '200ms' }}>
            <div className="w-16 h-16 bg-pink-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-luxury text-xl font-semibold mb-2">Curated Selection</h3>
            <p className="text-luxury-gray-600">
              Each box features our three signature flavors, perfectly balanced for the ultimate experience.
            </p>
          </div>
          <div className="text-center animate-on-scroll" style={{ animationDelay: '400ms' }}>
            <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-luxury text-xl font-semibold mb-2">Luxury Delivery</h3>
            <p className="text-luxury-gray-600">
              Premium packaging and careful handling ensure your cookies arrive in perfect condition.
            </p>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subscriptionPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`luxury-card cursor-pointer transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? 'ring-2 ring-luxury-gold-400 shadow-2xl scale-105'
                    : 'hover:shadow-xl'
                } ${plan.popular ? 'relative' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-luxury-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="font-luxury text-2xl font-bold text-luxury-black mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-luxury-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="font-luxury text-4xl font-bold text-luxury-black">
                        ${plan.price}
                      </span>
                      <span className="text-luxury-gray-600 ml-2">/drop</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-luxury-gold-500 mr-3 flex-shrink-0" />
                        <span className="text-luxury-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      selectedPlan === plan.id
                        ? 'luxury-btn-primary'
                        : 'luxury-btn-secondary'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected Plan' : 'Select Plan'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="luxury-btn-primary text-xl px-12 py-4 animate-glow">
              Join Waitlist for Next Drop
            </Button>
            <p className="text-luxury-gray-600 mt-4">
              Next drop: <span className="font-semibold">February 15th, 2025</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;