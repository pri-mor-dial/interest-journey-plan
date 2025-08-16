import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "Singapore",
    avatar: "👩‍🦱",
    rating: 5,
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
    quote: "Mount Fuji summit at sunrise was a spiritual experience. The preparation tips on this site were incredibly helpful.",
    trail: "Mount Fuji, Japan",
    verified: true
  }
];

export default function CommunityStoriesSection() {
  return (
    <section className="relative">
      {/* Photo Header */}
      <div className="relative h-80 bg-gradient-to-br from-hiking-green to-hiking-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDM1TDM0LjY0MSAxMkg1LjM1OUwyMCAzNVoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz4KPC9zdmc+')] opacity-30"></div>
        
        <div className="relative h-full flex items-center justify-center text-center z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-4">
              Stories from the Trail
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto px-6">
              Real experiences from fellow hikers who've discovered Asia's hidden gems
            </p>
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {stories.map((story, index) => (
              <div 
                key={story.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-0">
                    {/* Large Quote */}
                    <div className="mb-6">
                      <Quote className="w-8 h-8 text-hiking-green/20 mb-4" />
                      <blockquote className="text-xl text-neutral-700 font-light leading-relaxed">
                        "{story.quote}"
                      </blockquote>
                    </div>

                    {/* Trail and Rating */}
                    <div className="mb-6">
                      <p className="text-sm text-hiking-green font-medium mb-2">
                        {story.trail}
                      </p>
                      <div className="flex items-center">
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
                          {story.rating}/5
                        </span>
                      </div>
                    </div>

                    {/* User Info */}
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">
                        {story.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">
                          {story.name}
                        </p>
                        <p className="text-sm text-neutral-600">
                          {story.location}
                        </p>
                      </div>
                      {story.verified && (
                        <div className="bg-hiking-green-light text-hiking-green px-3 py-1 rounded-full text-xs font-medium ml-auto">
                          Verified Hiker
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Read More CTA */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-hiking-green text-white rounded-[--radius-button] hover:bg-hiking-green-dark transition-all font-medium hover:shadow-lg">
              Read More Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}