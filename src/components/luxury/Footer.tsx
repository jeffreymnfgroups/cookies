import { Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-luxury-black text-white">
      <div className="luxury-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-luxury font-bold text-xl">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-luxury font-bold text-xl">
                  KETO LUXURY COOKIES
                </span>
                <span className="font-modern text-sm text-luxury-gray-400 -mt-1">
                  Premium Artisan Cookie Subscriptions
                </span>
              </div>
            </div>
            <p className="text-luxury-gray-300 mb-6 max-w-md">
              Indulge in our exclusive monthly drops of premium KETO cookies, 
              crafted with the finest ingredients and delivered with luxury in mind.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/luxuryketocookies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-luxury-gray-800 rounded-full flex items-center justify-center hover:bg-gold-gradient transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:hello@luxuryketocookies.com"
                className="w-10 h-10 bg-luxury-gray-800 rounded-full flex items-center justify-center hover:bg-gold-gradient transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-luxury text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/subscriptions"
                  className="text-luxury-gray-300 hover:text-luxury-gold-400 transition-colors duration-300"
                >
                  Subscriptions
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-luxury-gray-300 hover:text-luxury-gold-400 transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-luxury-gray-300 hover:text-luxury-gold-400 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-luxury-gray-300 hover:text-luxury-gold-400 transition-colors duration-300"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-luxury text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-luxury-gray-300 hover:text-luxury-gold-400 transition-colors duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-luxury-gray-300 hover:text-luxury-gold-400 transition-colors duration-300"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-luxury-gray-300 hover:text-luxury-gold-400 transition-colors duration-300"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-luxury-gray-300 hover:text-luxury-gold-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luxury-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-luxury-gray-400 text-sm">
            © {new Date().getFullYear()} Luxury KETO Cookies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-luxury-gray-400 hover:text-luxury-gold-400 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-luxury-gray-400 hover:text-luxury-gold-400 text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;