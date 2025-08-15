import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Mountain, TreePine, Map } from "lucide-react";

export default function HikingHeroSection() {
  const [location, setLocation] = useState("");

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text & Interaction */}
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-heading font-semibold text-neutral-900 mb-6 text-balance leading-tight">
            Explore Asia's{" "}
            <span className="bg-gradient-to-r from-hiking-green to-primary-light bg-clip-text text-transparent">
              Trails
            </span>
          </h1>
          
          <p className="text-xl text-neutral-600 mb-12 text-balance max-w-lg">
            Discover hiking trails, plan your trip, and learn from the experts
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-[--radius-card] p-6 shadow-medium mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Where do you want to hike?
                </label>
                <Input
                  type="text"
                  placeholder="Search location or trail"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-12 text-base"
                />
              </div>
              
              <div className="flex items-end">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto h-12 bg-hiking-green hover:bg-hiking-green-hover"
                  disabled={!location}
                >
                  <Search className="mr-2 w-5 h-5" />
                  Find Tours
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-hiking-green hover:bg-hiking-green-hover"
            >
              Find Tours
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-hiking-green text-hiking-green hover:bg-hiking-green hover:text-white"
            >
              Plan Your Trip
            </Button>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="relative animate-scale-in">
          <div className="relative bg-gradient-to-br from-hiking-green-light to-neutral-100 rounded-[--radius-card] p-12 shadow-soft">
            {/* Mountain Illustration */}
            <div className="flex items-center justify-center space-x-8 mb-8">
              <Mountain className="w-24 h-24 text-hiking-green animate-float" />
              <TreePine className="w-20 h-20 text-hiking-green/80" style={{ animationDelay: '1s' }} />
            </div>
            
            {/* Trail Path */}
            <div className="relative h-24 mb-8">
              <svg 
                className="w-full h-full" 
                viewBox="0 0 400 96" 
                fill="none"
              >
                <path 
                  d="M20 48 Q100 20, 200 48 T380 48" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  className="text-hiking-green/60"
                  strokeDasharray="10,5"
                />
                <circle cx="20" cy="48" r="4" className="fill-earth-orange" />
                <circle cx="380" cy="48" r="4" className="fill-hiking-green" />
              </svg>
            </div>

            {/* Map Icon */}
            <div className="flex justify-center">
              <div className="bg-white rounded-full p-4 shadow-soft">
                <Map className="w-12 h-12 text-hiking-green" />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-earth-orange rounded-full p-3 shadow-medium animate-float" style={{ animationDelay: '2s' }}>
              <Mountain className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-hiking-green rounded-full p-3 shadow-medium animate-float" style={{ animationDelay: '0.5s' }}>
              <TreePine className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}