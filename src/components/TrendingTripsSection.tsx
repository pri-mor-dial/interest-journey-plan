import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users } from "lucide-react";

const featuredTrips = [
  {
    id: 1,
    title: "Mediterranean Diving Paradise",
    location: "Greek Islands",
    duration: "7 days",
    interest: "Diving",
    price: "From $1,200",
    image: "🏝️",
    highlights: ["Blue Caves", "Shipwreck Diving", "Underwater Photography"],
    participants: "12 spots left"
  },
  {
    id: 2,
    title: "Alpine Photography Adventure",
    location: "Swiss Alps",
    duration: "5 days",
    interest: "Photography",
    price: "From $980",
    image: "📷",
    highlights: ["Golden Hour Shoots", "Mountain Lakes", "Wildlife Encounters"],
    participants: "8 spots left"
  },
  {
    id: 3,
    title: "Tokyo Street Food Discovery",
    location: "Tokyo, Japan",
    duration: "4 days",
    interest: "Food",
    price: "From $850",
    image: "🍜",
    highlights: ["Hidden Ramen Shops", "Tsukiji Market", "Sake Tasting"],
    participants: "15 spots left"
  },
  {
    id: 4,
    title: "Patagonia Hiking Expedition",
    location: "Argentina & Chile",
    duration: "10 days",
    interest: "Hiking",
    price: "From $1,800",
    image: "🏔️",
    highlights: ["Torres del Paine", "Glacier Trekking", "Stargazing"],
    participants: "6 spots left"
  },
  {
    id: 5,
    title: "Moroccan Art & Architecture",
    location: "Marrakech & Fez",
    duration: "6 days",
    interest: "Art",
    price: "From $750",
    image: "🕌",
    highlights: ["Traditional Crafts", "Historic Medinas", "Tile Workshops"],
    participants: "20 spots left"
  },
  {
    id: 6,
    title: "Bali Wellness & Nature",
    location: "Bali, Indonesia",
    duration: "8 days",
    interest: "Wellness",
    price: "From $650",
    image: "🧘",
    highlights: ["Yoga Retreats", "Temple Visits", "Rice Terrace Walks"],
    participants: "10 spots left"
  }
];

export default function TrendingTripsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Trending Interest-Based Trips
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Pre-designed itineraries crafted by experts, ready to customize for your perfect adventure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTrips.map((trip, index) => (
            <div 
              key={trip.id}
              className="bg-white rounded-[--radius-card] shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group border border-neutral-100 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Trip Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-travel-green-light to-neutral-100 flex items-center justify-center text-6xl relative">
                {trip.image}
                <div className="absolute top-4 right-4">
                  <span className="bg-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
                    {trip.interest}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Header */}
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-travel-green transition-colors">
                  {trip.title}
                </h3>

                {/* Location and Duration */}
                <div className="flex items-center justify-between mb-4 text-sm text-neutral-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {trip.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {trip.duration}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-neutral-700 mb-2">Trip Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {trip.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Availability */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-travel-green">
                    {trip.price}
                  </div>
                  <div className="flex items-center text-sm text-neutral-600">
                    <Users className="w-4 h-4 mr-1" />
                    {trip.participants}
                  </div>
                </div>

                {/* CTA Button */}
                <Button variant="outline" size="default" className="w-full mb-2">
                  View & Customize
                </Button>
                <div className="text-center">
                  <button className="text-sm text-travel-green hover:underline font-medium">
                    Quick preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Browse All Trips
          </Button>
        </div>
      </div>
    </section>
  );
}