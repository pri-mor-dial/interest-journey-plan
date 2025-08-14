import { Button } from "@/components/ui/button";
import { Star, Clock, MapPin, Users } from "lucide-react";

const vendors = [
  {
    id: 1,
    name: "Blue Hole Diving Center",
    type: "Scuba Diving",
    price: "$85",
    rating: 4.8,
    reviews: 324,
    openingHours: "8:00 AM - 6:00 PM",
    location: "Dahab, Egypt",
    image: "🤿",
    features: ["Equipment included", "Certified instructors", "Transport provided"]
  },
  {
    id: 2,
    name: "Sunset Desert Safari",
    type: "Adventure Tour",
    price: "$120",
    rating: 4.9,
    reviews: 256,
    openingHours: "4:00 PM - 8:00 PM",
    location: "Dahab Desert",
    image: "🐪",
    features: ["Camel ride", "Traditional dinner", "Pickup included"]
  },
  {
    id: 3,
    name: "Bedouin Cultural Experience",
    type: "Cultural Tour",
    price: "$45",
    rating: 4.7,
    reviews: 189,
    openingHours: "10:00 AM - 10:00 PM",
    location: "Local Village",
    image: "🏕️",
    features: ["Authentic food", "Local guide", "Handicraft workshop"]
  }
];

export default function VendorBookingSection() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Book Vendors Directly
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Search and book tickets, tours, and experiences from trusted local vendors — all in one place
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor, index) => (
            <div 
              key={vendor.id}
              className="bg-white rounded-[--radius-card] shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Vendor Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-travel-green-light to-neutral-100 flex items-center justify-center text-6xl">
                {vendor.image}
              </div>

              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-travel-green transition-colors">
                      {vendor.name}
                    </h3>
                    <p className="text-sm text-neutral-600">{vendor.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-terracotta">{vendor.price}</div>
                    <div className="text-sm text-neutral-500">per person</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold text-neutral-900">{vendor.rating}</span>
                  </div>
                  <span className="text-sm text-neutral-500 ml-2">({vendor.reviews} reviews)</span>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-neutral-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {vendor.openingHours}
                  </div>
                  <div className="flex items-center text-sm text-neutral-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {vendor.location}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {vendor.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-travel-green-light text-travel-green text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button variant="outline" size="default" className="w-full">
                  View Details & Book
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Explore All Vendors
          </Button>
        </div>
      </div>
    </section>
  );
}