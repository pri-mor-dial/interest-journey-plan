import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, TreePine, Flower, Sun, Shield } from "lucide-react";

const insightTopics = [
  {
    id: "terrain",
    title: "Terrain Types",
    icon: Mountain,
    description: "Understanding different hiking terrains"
  },
  {
    id: "difficulty",
    title: "Hike Difficulty",
    icon: TreePine,
    description: "How to assess and prepare for different levels"
  },
  {
    id: "flora",
    title: "Flora & Fauna",
    icon: Flower,
    description: "Wildlife and plants you'll encounter"
  },
  {
    id: "seasons",
    title: "Seasonal Highlights",
    icon: Sun,
    description: "Best times to visit different regions"
  },
  {
    id: "safety",
    title: "Safety Tips",
    icon: Shield,
    description: "Essential safety knowledge for hikers"
  }
];

const insightContent = {
  terrain: {
    title: "Understanding Terrain Types",
    content: "Asian hiking trails offer incredible diversity, from coastal paths to alpine peaks. Rocky terrain requires sturdy boots and careful foot placement, while muddy jungle paths need waterproof gear. Mountain ridges offer spectacular views but demand proper preparation for altitude and weather changes.",
    image: "🏔️",
    tips: [
      "Rocky terrain: Use hiking poles for stability",
      "Muddy paths: Waterproof boots are essential",
      "Alpine routes: Check weather conditions daily",
      "Jungle trails: Bring insect repellent"
    ]
  },
  difficulty: {
    title: "Hike Difficulty Levels",
    content: "Easy trails (under 5km) are perfect for beginners with minimal elevation gain. Moderate hikes (5-15km) include some steep sections and require basic fitness. Hard trails (15km+) demand excellent fitness, navigation skills, and proper equipment.",
    image: "⛰️",
    tips: [
      "Easy: 2-4 hours, minimal elevation gain",
      "Moderate: 4-8 hours, some steep sections",
      "Hard: 8+ hours, significant elevation changes",
      "Always check recent trail conditions"
    ]
  },
  flora: {
    title: "Flora & Fauna of Asia",
    content: "Asia's trails showcase incredible biodiversity. Tropical rainforests house exotic orchids and colorful birds, while alpine regions feature hardy mountain flowers. You might spot langurs in Malaysia, snow leopards in Nepal, or unique bird species throughout the region.",
    image: "🌺",
    tips: [
      "Bring binoculars for wildlife viewing",
      "Respect wildlife - maintain safe distances",
      "Learn about poisonous plants before hiking",
      "Early morning offers best wildlife sightings"
    ]
  },
  seasons: {
    title: "Seasonal Hiking Guide",
    content: "Spring (March-May) offers mild weather and blooming flowers. Summer brings warm temperatures but also monsoons in many regions. Autumn (September-November) provides ideal conditions with clear skies. Winter enables high-altitude treks but requires cold-weather gear.",
    image: "🌸",
    tips: [
      "Spring: Perfect for most destinations",
      "Summer: Avoid monsoon-affected areas",
      "Autumn: Best visibility for mountain views",
      "Winter: High-altitude treks in dry regions"
    ]
  },
  safety: {
    title: "Essential Safety Guidelines",
    content: "Always inform someone of your hiking plans and expected return. Carry emergency supplies including first aid, extra food, and water purification tablets. Check weather forecasts and trail conditions. Know your limits and don't hesitate to turn back if conditions worsen.",
    image: "🚨",
    tips: [
      "Share your itinerary with someone reliable",
      "Carry emergency whistle and headlamp",
      "Bring more water than you think you need",
      "Know basic first aid procedures"
    ]
  }
};

export default function HikingInsightsSection() {
  const [selectedTopic, setSelectedTopic] = useState("terrain");

  return (
    <section id="insights" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-neutral-900 mb-4">
            Hiking Insights & Facts
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Learn from experts and discover essential knowledge for safe, enjoyable hiking
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Topics */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-900 mb-6">
              Explore Topics
            </h3>
            {insightTopics.map((topic, index) => (
              <Card
                key={topic.id}
                className={`cursor-pointer transition-all duration-300 border-2 animate-scale-in ${
                  selectedTopic === topic.id
                    ? "border-hiking-green bg-hiking-green-light"
                    : "border-neutral-200 hover:border-hiking-green/50"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedTopic(topic.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-[--radius-button] ${
                      selectedTopic === topic.id
                        ? "bg-hiking-green text-white"
                        : "bg-neutral-100 text-hiking-green"
                    }`}>
                      <topic.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">
                        {topic.title}
                      </h4>
                      <p className="text-sm text-neutral-600">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column - Content */}
          <div className="animate-fade-in-up">
            <Card className="border-neutral-200 shadow-medium">
              <CardContent className="p-8">
                {/* Content Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-6xl">
                    {insightContent[selectedTopic as keyof typeof insightContent].image}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {insightContent[selectedTopic as keyof typeof insightContent].title}
                  </h3>
                </div>

                {/* Content Description */}
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  {insightContent[selectedTopic as keyof typeof insightContent].content}
                </p>

                {/* Tips List */}
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-4">
                    Key Tips:
                  </h4>
                  <div className="space-y-3">
                    {insightContent[selectedTopic as keyof typeof insightContent].tips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-hiking-green rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-neutral-600 text-sm">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-8">
                  <button className="px-6 py-3 bg-hiking-green text-white rounded-[--radius-button] hover:bg-hiking-green-hover transition-colors font-medium">
                    Learn More
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}