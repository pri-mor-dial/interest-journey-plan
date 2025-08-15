import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "Singapore",
    avatar: "👩‍🦱",
    rating: 5,
    image: "🏔️",
    quote: "The Annapurna Base Camp trek was absolutely life-changing. The guides were knowledgeable and the mountain views were breathtaking.",
    trail: "Annapurna Base Camp, Nepal",
    verified: true
  },
  {
    id: 2,
    name: "Hiroshi Tanaka",
    location: "Tokyo",
    avatar: "👨‍💼",
    rating: 5,
    image: "🗻",
    quote: "Mount Fuji summit at sunrise was a spiritual experience. The preparation tips on this site were incredibly helpful.",
    trail: "Mount Fuji, Japan",
    verified: true
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Manila",
    avatar: "👩‍🎓",
    rating: 4,
    image: "🌾",
    quote: "Sapa's rice terraces exceeded all expectations. The cultural immersion made this trip unforgettable.",
    trail: "Sapa Rice Terraces, Vietnam",
    verified: true
  },
  {
    id: 4,
    name: "David Park",
    location: "Seoul",
    avatar: "👨‍💻",
    rating: 5,
    image: "🌋",
    quote: "Witnessing the sunrise from Mount Bromo was magical. The entire experience was perfectly organized.",
    trail: "Mount Bromo, Indonesia",
    verified: true
  },
  {
    id: 5,
    name: "Lisa Wong",
    location: "Hong Kong",
    avatar: "👩‍⚕️",
    rating: 5,
    image: "⛰️",
    quote: "Mount Kinabalu was challenging but incredibly rewarding. The summit view made every step worth it.",
    trail: "Mount Kinabalu, Malaysia",
    verified: true
  },
  {
    id: 6,
    name: "Alex Kumar",
    location: "Mumbai",
    avatar: "👨‍🎨",
    rating: 4,
    image: "🏛️",
    quote: "The Tiger's Nest Monastery hike was both physically and spiritually rewarding. Bhutan is truly special.",
    trail: "Tiger's Nest, Bhutan",
    verified: true
  }
];

export default function CommunityStoriesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-neutral-900 mb-4">
            Community Stories & Reviews
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Real experiences from fellow hikers who've explored Asia's most beautiful trails
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stories.map((story, index) => (
            <Card
              key={story.id}
              className="group cursor-pointer hover:shadow-medium transition-all duration-300 border-neutral-200 hover:border-hiking-green/30 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Story Image */}
                <div className="h-32 bg-gradient-to-br from-hiking-green-light to-neutral-100 rounded-[--radius-button] flex items-center justify-center text-4xl mb-4 relative overflow-hidden">
                  {story.image}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Quote */}
                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-hiking-green/30 absolute -top-2 -left-2" />
                  <p className="text-neutral-700 italic pl-4 text-sm leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>

                {/* Trail Info */}
                <p className="text-xs text-hiking-green font-medium mb-4">
                  {story.trail}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < story.rating
                          ? "text-earth-orange fill-current"
                          : "text-neutral-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-neutral-600 ml-2">
                    ({story.rating}/5)
                  </span>
                </div>

                {/* User Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">
                      {story.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 text-sm">
                        {story.name}
                      </p>
                      <p className="text-xs text-neutral-600">
                        {story.location}
                      </p>
                    </div>
                  </div>
                  {story.verified && (
                    <div className="bg-hiking-green-light text-hiking-green px-2 py-1 rounded-full text-xs font-medium">
                      Verified
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-3 border border-hiking-green text-hiking-green rounded-[--radius-button] hover:bg-hiking-green hover:text-white transition-all font-medium">
            Read All Stories
          </button>
        </div>
      </div>
    </section>
  );
}