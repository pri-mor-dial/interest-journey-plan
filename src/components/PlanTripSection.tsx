import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Backpack, Calendar, Users, Shield, Mountain, Compass } from "lucide-react";

const planningTools = [
  {
    icon: Backpack,
    title: "Packing Checklist",
    description: "Essential gear for every type of hike",
    content: "From base layers to emergency supplies, get personalized packing lists based on your destination, season, and difficulty level."
  },
  {
    icon: Calendar,
    title: "Best Seasons",
    description: "Optimal timing for your adventure",
    content: "Discover the ideal months to visit each destination, considering weather patterns, trail conditions, and local festivals."
  },
  {
    icon: Users,
    title: "Local Guides",
    description: "Connect with certified experts",
    content: "Find experienced local guides who know the terrain, culture, and hidden gems of your chosen hiking destination."
  },
  {
    icon: Shield,
    title: "Safety Tips",
    description: "Stay safe on the trails",
    content: "Comprehensive safety guidelines, emergency protocols, and risk management for different hiking environments and conditions."
  }
];

export default function PlanTripSection() {
  return (
    <section id="plan" className="py-24 bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-neutral-900 mb-4">
            Plan Your Perfect Trip
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Everything you need to prepare for an unforgettable hiking adventure
          </p>
        </div>

        {/* Planning Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {planningTools.map((tool, index) => (
            <Card 
              key={index}
              className="group cursor-pointer hover:shadow-medium transition-all duration-300 border-neutral-200 hover:border-hiking-green/30 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-hiking-green-light rounded-[--radius-card] flex items-center justify-center mx-auto mb-4 group-hover:bg-hiking-green group-hover:text-white transition-all duration-300">
                  <tool.icon className="w-8 h-8 text-hiking-green group-hover:text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-neutral-900">
                  {tool.title}
                </CardTitle>
                <CardDescription className="text-neutral-600">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 text-center">
                  {tool.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Planning Widget */}
        <div className="bg-white rounded-[--radius-card] shadow-medium p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Start Planning Your Adventure
              </h3>
              <p className="text-neutral-600 mb-6">
                Use our comprehensive planning tools to create a detailed itinerary, 
                check weather conditions, and connect with local experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-hiking-green text-white rounded-[--radius-button] hover:bg-hiking-green-hover transition-colors font-medium">
                  Start Planning
                </button>
                <button className="px-6 py-3 border border-hiking-green text-hiking-green rounded-[--radius-button] hover:bg-hiking-green hover:text-white transition-all font-medium">
                  Download Guide
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-hiking-green-light to-neutral-100 rounded-[--radius-card] p-8">
                  <div className="flex items-center justify-center space-x-4">
                    <Mountain className="w-16 h-16 text-hiking-green animate-float" />
                    <Compass className="w-12 h-12 text-hiking-green/70" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-earth-orange rounded-full p-2 shadow-medium">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}