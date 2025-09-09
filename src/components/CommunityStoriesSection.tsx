import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import storyAnnapurna from "@/assets/story-annapurna.jpg";
import storyFuji from "@/assets/story-fuji.jpg";
import avatarSarahChen from "@/assets/avatar-sarah-chen.jpg";
import avatarHiroshiTanaka from "@/assets/avatar-hiroshi-tanaka.jpg";

const stories = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "Singapore",
    avatar: avatarSarahChen,
    rating: 5,
    quote: "The Annapurna Base Camp trek was absolutely life-changing. The guides were knowledgeable and the mountain views were breathtaking.",
    trail: "Annapurna Base Camp, Nepal",
    verified: true,
    photo: storyAnnapurna
  },
  {
    id: 2,
    name: "Hiroshi Tanaka",
    location: "Tokyo", 
    avatar: avatarHiroshiTanaka,
    rating: 5,
    quote: "Mount Fuji summit at sunrise was a spiritual experience. The preparation tips on this site were incredibly helpful.",
    trail: "Mount Fuji, Japan",
    verified: true,
    photo: storyFuji
  }
];

export default function CommunityStoriesSection() {
  return (
    <section className="relative">
      {/* Photo Header */}
      <div className="relative h-80 bg-hiking-green overflow-hidden">
        
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
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={story.photo} 
                      alt={`${story.trail} hiking experience`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-hiking-green-light text-hiking-green px-3 py-1 rounded-full text-xs font-medium">
                      {story.verified && "Verified Hiker"}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    {/* Trail and Rating */}
                    <div className="mb-4">
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

                    {/* Quote */}
                    <blockquote className="text-neutral-700 font-light leading-relaxed mb-4">
                      "{story.quote}"
                    </blockquote>

                    {/* User Info */}
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={story.avatar} alt={story.name} />
                        <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-neutral-900">
                          {story.name}
                        </p>
                        <p className="text-sm text-neutral-600">
                          {story.location}
                        </p>
                      </div>
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