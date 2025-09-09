import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mountain, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Mountain className="w-8 h-8 text-hiking-green" />
            <span className="text-xl font-heading font-semibold text-neutral-900">
              HikeAsia
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-neutral-700 hover:text-hiking-green transition-colors font-medium"
            >
              Home
            </a>
            <a 
              href="#tours" 
              className="text-neutral-700 hover:text-hiking-green transition-colors font-medium"
            >
              Find a Tour
            </a>
            <a 
              href="#plan" 
              className="text-neutral-700 hover:text-hiking-green transition-colors font-medium"
            >
              Plan Your Trip
            </a>
            <a 
              href="#insights" 
              className="text-neutral-700 hover:text-hiking-green transition-colors font-medium"
            >
              Hiking Insights
            </a>
            <a 
              href="#about" 
              className="text-neutral-700 hover:text-hiking-green transition-colors font-medium"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-neutral-700 hover:text-hiking-green transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-neutral-700" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-neutral-700 hover:text-hiking-green transition-colors font-medium"
              >
                Home
              </a>
              <a 
                href="#tours" 
                className="text-neutral-700 hover:text-hiking-green transition-colors font-medium"
              >
                Find a Tour
              </a>
              <a 
                href="#plan" 
                className="text-neutral-700 hover:text-hiking-green transition-colors font-medium"
              >
                Plan Your Trip
              </a>
              <a 
                href="#insights" 
                className="text-neutral-700 hover:text-hiking-green transition-colors font-medium"
              >
                Hiking Insights
              </a>
              <a 
                href="#about" 
                className="text-neutral-700 hover:text-hiking-green transition-colors font-medium"
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-neutral-700 hover:text-hiking-green transition-colors font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}