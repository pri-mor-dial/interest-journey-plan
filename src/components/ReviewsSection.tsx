import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    comment: "The diving experience in Dahab was absolutely incredible! The platform made booking so easy and the local guides were amazing.",
    tripType: "Diving Adventure",
    avatar: "👩‍💼"
  },
  {
    id: 2,
    name: "Marco Rossi",
    location: "Milan, Italy",
    rating: 5,
    comment: "Perfect food tour organization! I discovered the most authentic local restaurants and hidden gems I never would have found on my own.",
    tripType: "Culinary Journey",
    avatar: "👨‍🍳"
  },
  {
    id: 3,
    name: "Emily Chen",
    location: "Singapore",
    rating: 5,
    comment: "The hiking routes were perfectly planned with amazing photography spots. Every moment was documented beautifully!",
    tripType: "Photography & Hiking",
    avatar: "📸"
  },
  {
    id: 4,
    name: "Alex Thompson",
    location: "London, UK",
    rating: 5,
    comment: "Art galleries, museums, and street art tours were curated perfectly. I saw a side of the city I never knew existed.",
    tripType: "Art & Culture",
    avatar: "🎨"
  }
];

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Trusted by Travelers Like You
          </h2>
          <p className="text-xl text-neutral-600">
            Join thousands of satisfied adventurers who've discovered their perfect trips
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Review Card */}
          <div className="bg-neutral-50 rounded-[--radius-card] p-8 md:p-12 shadow-medium">
            <div className="text-center mb-8">
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 text-yellow-400 fill-current mx-1" 
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-xl md:text-2xl text-neutral-700 mb-8 italic font-medium text-balance">
                "{reviews[currentReview].comment}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="text-4xl">{reviews[currentReview].avatar}</div>
                <div className="text-left">
                  <div className="font-bold text-neutral-900 text-lg">
                    {reviews[currentReview].name}
                  </div>
                  <div className="text-neutral-600">
                    {reviews[currentReview].location}
                  </div>
                  <div className="text-sm text-travel-green font-medium">
                    {reviews[currentReview].tripType}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevReview}
              className="rounded-full bg-white shadow-soft hover:shadow-medium"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview 
                      ? "bg-travel-green scale-125" 
                      : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextReview}
              className="rounded-full bg-white shadow-soft hover:shadow-medium"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-travel-green mb-2">15K+</div>
            <div className="text-neutral-600">Happy Travelers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-travel-green mb-2">50+</div>
            <div className="text-neutral-600">Destinations</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-travel-green mb-2">4.8★</div>
            <div className="text-neutral-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-travel-green mb-2">98%</div>
            <div className="text-neutral-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}