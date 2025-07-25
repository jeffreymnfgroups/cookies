"use client";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Subscriptions", path: "/subscriptions" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="luxury-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
            <span className="text-white font-luxury font-bold text-xl">K</span>
          </div>
          <div className="flex flex-col">
            <span className="font-luxury font-bold text-xl text-luxury-black">
              KETO
            </span>
            <span className="font-modern text-xs text-luxury-gray-600 -mt-1">
              LUXURY COOKIES
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="font-modern text-luxury-gray-700 hover:text-luxury-gold-600 transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-luxury-pink-500 text-white text-xs rounded-full flex items-center justify-center">
              0
            </span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
          <Button className="luxury-btn-primary">
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-luxury-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg">
          <div className="luxury-container py-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="font-modern text-luxury-gray-700 hover:text-luxury-gold-600 transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-luxury-gray-200">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-luxury-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                    0
                  </span>
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
                <Button className="luxury-btn-primary flex-1">
                  Join Waitlist
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;