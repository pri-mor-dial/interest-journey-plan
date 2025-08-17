import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const featuredTours = [
  {
    id: 1,
    name: "Mount Fuji Summit Trail",
    location: "Japan",
    image: "🗻",
    difficulty: "Hard",
    distance: "19.3 km",
    duration: "2 days",
    rating: 4.8,
    reviews: 124,
    price: "From $280",
    highlights: ["Summit views", "Sunrise experience", "Mountain huts"]
  },
  {
    id: 2,
    name: "Annapurna Base Camp",
    location: "Nepal",
    image: "🏔️",
    difficulty: "Moderate",
    distance: "115 km",
    duration: "12 days",
    rating: 4.9,
    reviews: 89,
    price: "From $650",
    highlights: ["Base camp", "Mountain views", "Tea houses"]
  },
  {
    id: 3,
    name: "Sapa Rice Terraces Trek",
    location: "Vietnam",
    image: "🌾",
    difficulty: "Easy",
    distance: "15 km",
    duration: "3 days",
    rating: 4.7,
    reviews: 156,
    price: "From $120",
    highlights: ["Rice terraces", "Local villages", "Cultural experience"]
  },
  {
    id: 4,
    name: "Mount Kinabalu",
    location: "Malaysia",
    image: "⛰️",
    difficulty: "Hard",
    distance: "8.7 km",
    duration: "2 days",
    rating: 4.6,
    reviews: 203,
    price: "From $180",
    highlights: ["Sunrise view", "Unique flora", "Summit certificate"]
  },
  {
    id: 5,
    name: "Bromo Tengger Trek",
    location: "Indonesia",
    image: "🌋",
    difficulty: "Moderate",
    distance: "12 km",
    duration: "2 days",
    rating: 4.8,
    reviews: 98,
    price: "From $95",
    highlights: ["Volcano views", "Sea of sand", "Sunrise point"]
  },
  {
    id: 6,
    name: "Tiger's Nest Monastery",
    location: "Bhutan",
    image: "🏛️",
    difficulty: "Moderate",
    distance: "6 km",
    duration: "1 day",
    rating: 4.9,
    reviews: 67,
    price: "From $45",
    highlights: ["Monastery visit", "Mountain views", "Spiritual journey"]
  }
];

const difficultyColors = {
  Easy: "bg-hiking-green-light text-hiking-green",
  Moderate: "bg-earth-orange-light text-earth-orange",
  Hard: "bg-neutral-200 text-neutral-700"
};

export default function FeaturedToursSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToNext = () => {
    if (scrollRef.current) {
      const cardWidth = 320;
      const maxScroll = (featuredTours.length - 3) * cardWidth;
      const currentScroll = scrollRef.current.scrollLeft;
      
      if (currentScroll < maxScroll) {
        scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        setCurrentIndex(Math.min(currentIndex + 1, featuredTours.length - 3));
      }
    }
  };

  const scrollToPrev = () => {
    if (scrollRef.current) {
      const cardWidth = 320;
      
      if (scrollRef.current.scrollLeft > 0) {
        scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        setCurrentIndex(Math.max(currentIndex - 1, 0));
      }
    }
  };

  return (
    <section id="tours" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-neutral-900 mb-4">
            Featured Hiking Tours
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Curated adventures across Southeast and East Asia's most stunning trails
          </p>
        </div>

        {/* Tour Cards Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-medium"
            onClick={scrollToPrev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-medium"
            onClick={scrollToNext}
            disabled={currentIndex >= featuredTours.length - 3}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Cards Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide mx-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredTours.map((tour, index) => (
              <div
                key={tour.id}
                className="flex-shrink-0 w-80 bg-white rounded-[--radius-card] shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group border border-neutral-100 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Tour Image */}
                <div className="h-48 bg-gradient-to-br from-hiking-green-light to-neutral-100 flex items-center justify-center text-6xl relative">
                  {tour.image}
                  <div className="absolute top-4 right-4">
                    <Badge className={difficultyColors[tour.difficulty as keyof typeof difficultyColors]}>
                      {tour.difficulty}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  {/* Header */}
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-hiking-green transition-colors">
                    {tour.name}
                  </h3>

                  {/* Location and Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-neutral-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {tour.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {tour.duration}
                    </div>
                  </div>

                  {/* Distance */}
                  <p className="text-sm text-neutral-600 mb-4">
                    Distance: {tour.distance}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-earth-orange fill-current" />
                    <span className="text-sm font-medium text-neutral-900 ml-1">
                      {tour.rating}
                    </span>
                    <span className="text-sm text-neutral-600 ml-1">
                      ({tour.reviews} reviews)
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.slice(0, 2).map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-semibold text-hiking-green">
                      {tour.price}
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-hiking-green hover:bg-hiking-green-hover"
                      onClick={() => {
                        if (tour.id === 1) {
                          navigate('/mount-fuji-trail');
                        }
                      }}
                    >
                      View Tour
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}