import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

// Import hero images
import heroDiving from "@/assets/hero-diving.jpg";
import heroHiking from "@/assets/hero-hiking.jpg";
import heroFood from "@/assets/hero-food.jpg";

const heroImages = [
  { src: heroDiving, alt: "Diving adventure", interest: "Diving" },
  { src: heroHiking, alt: "Mountain hiking", interest: "Hiking" },
  { src: heroFood, alt: "Local food experiences", interest: "Food" },
];

const interests = [
  "Diving", "Hiking", "Food", "Art", "Photography", "Music",
  "Architecture", "Wildlife", "Culture", "Adventure"
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedInterest, setSelectedInterest] = useState("");
  const [destination, setDestination] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Overlay */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Plan Your Trip Around{" "}
            <span className="bg-gradient-to-r from-terracotta to-accent-light bg-clip-text text-transparent">
              What You Love
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto text-balance">
            Discover destinations, create your perfect schedule, and book everything in one place.
          </p>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-[--radius-card] p-6 max-w-4xl mx-auto shadow-strong">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  What are you passionate about?
                </label>
                <Select value={selectedInterest} onValueChange={setSelectedInterest}>
                  <SelectTrigger className="h-14 text-base">
                    <SelectValue placeholder="Select your interest" />
                  </SelectTrigger>
                  <SelectContent>
                    {interests.map((interest) => (
                      <SelectItem key={interest} value={interest}>
                        {interest}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Where do you want to go?
                </label>
                <Input
                  type="text"
                  placeholder="Enter destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="h-14 text-base"
                />
              </div>

              <div className="flex items-end">
                <Button 
                  variant="search" 
                  size="lg" 
                  className="w-full md:w-auto"
                  disabled={!selectedInterest || !destination}
                >
                  <Search className="mr-2" />
                  Search Destinations
                </Button>
              </div>
            </div>
          </div>

          {/* Interest Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? "bg-terracotta scale-125" 
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
}