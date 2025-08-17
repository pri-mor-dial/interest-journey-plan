import Navigation from "@/components/Navigation";
import HikingFooter from "@/components/HikingFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Mountain, 
  Clock, 
  Gauge, 
  MapPin, 
  Calendar,
  ChevronDown,
  Star,
  Users,
  ArrowRight
} from "lucide-react";

const tourOperators = [
  {
    id: 1,
    name: "Fuji Mountain Guides",
    highlight: "Sunrise Summit Tour",
    price: "From ¥18,000",
    duration: "2 days",
    image: "🌅",
    rating: 4.9
  },
  {
    id: 2,
    name: "Japan Alpine Club",
    highlight: "Cultural Heritage Trek",
    price: "From ¥15,500",
    duration: "2 days",
    image: "⛩️",
    rating: 4.8
  },
  {
    id: 3,
    name: "Sacred Mountain Tours",
    highlight: "Spiritual Journey Experience",
    price: "From ¥20,000",
    duration: "3 days",
    image: "🗻",
    rating: 4.9
  }
];

const quickFacts = [
  {
    icon: Gauge,
    label: "Difficulty",
    value: "Moderate–Challenging"
  },
  {
    icon: Clock,
    label: "Duration",
    value: "6–8h ascent / 3–5h descent"
  },
  {
    icon: Mountain,
    label: "Elevation",
    value: "3,776m"
  },
  {
    icon: MapPin,
    label: "Starting Point",
    value: "5th Station"
  },
  {
    icon: Calendar,
    label: "Best Season",
    value: "July–September"
  }
];

export default function MountFujiTrail() {
  return (
    <>
      {/* SEO Head */}
      <head>
        <title>Mount Fuji Summit Trail - Climb Japan's Iconic Peak | HikeAsia</title>
        <meta name="description" content="Experience Mount Fuji summit trail with expert guides. Learn about climbing seasons, preparation tips, and respectful hiking practices for Japan's sacred mountain." />
        <meta name="keywords" content="Mount Fuji hiking, Fuji summit trail, Japan mountain climbing, Fuji climbing season, Mount Fuji tours" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://hikeasia.com/mount-fuji-trail" />
      </head>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section - Split Screen */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-neutral-50 to-sky-50">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left - Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-neutral-900 leading-tight">
                    Mount Fuji <br />
                    <span className="text-hiking-green">Summit Trail</span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-neutral-600 font-light">
                    Climb Japan's iconic peak with respect and preparation.
                  </p>
                </div>
              </div>

              {/* Right - Visual Illustration */}
              <div className="relative">
                <div className="relative z-10 flex items-center justify-center">
                  {/* Mountain Silhouette */}
                  <div className="relative">
                    <div className="w-96 h-96 relative">
                      {/* Main Mountain */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                        <div className="w-80 h-64 bg-gradient-to-t from-neutral-600 via-neutral-500 to-neutral-300 
                                      polygon-mountain relative overflow-hidden rounded-t-full">
                          {/* Snow Cap */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 
                                        w-32 h-24 bg-gradient-to-b from-white to-neutral-100 rounded-t-full">
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-12 right-12 animate-bounce" style={{ animationDelay: '0.5s' }}>
                        <div className="w-12 h-12 bg-hiking-green-light rounded-full flex items-center justify-center">
                          🌸
                        </div>
                      </div>
                      
                      <div className="absolute top-32 left-8 animate-pulse" style={{ animationDelay: '1s' }}>
                        <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                          ⛩️
                        </div>
                      </div>
                      
                      <div className="absolute bottom-20 right-20 animate-bounce" style={{ animationDelay: '1.5s' }}>
                        <div className="w-8 h-8 bg-earth-orange-light rounded-full flex items-center justify-center">
                          🏔️
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Down Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-neutral-400" />
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-6">
              A Sacred Journey
            </h2>
            <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
              <p>
                Mount Fuji stands as Japan's most revered symbol, combining natural beauty with deep spiritual significance. 
                The official climbing season runs from <strong>July to September</strong>, when mountain huts and trails are fully accessible.
              </p>
              <p>
                <strong>Important Notice:</strong> As of 2025, a climbing fee system has been implemented to support mountain preservation 
                and enhance safety measures. This initiative helps protect Fuji-san for future generations while ensuring climber safety.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Facts Grid */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-heading font-semibold text-neutral-900 text-center mb-12">
              Trail Quick Facts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {quickFacts.map((fact, index) => (
                <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-all">
                  <CardContent className="p-6">
                    <fact.icon className="w-8 h-8 text-hiking-green mx-auto mb-4" />
                    <h3 className="font-medium text-neutral-900 mb-2">{fact.label}</h3>
                    <p className="text-sm text-neutral-600">{fact.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Options */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                Guided Tour Options
              </h2>
              <p className="text-lg text-neutral-600">
                Choose from experienced operators for a safe and meaningful ascent
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tourOperators.map((operator, index) => (
                <Card key={operator.id} className="overflow-hidden shadow-soft hover:shadow-medium transition-all hover-scale">
                  <div className="h-32 bg-gradient-to-br from-hiking-green-light to-sky-100 flex items-center justify-center text-4xl">
                    {operator.image}
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-semibold text-neutral-900 mb-1">{operator.name}</h3>
                      <p className="text-hiking-green font-medium text-sm">{operator.highlight}</p>
                    </div>
                    
                    <div className="flex items-center mb-4 text-sm text-neutral-600">
                      <Star className="w-4 h-4 text-earth-orange fill-current mr-1" />
                      <span className="font-medium mr-2">{operator.rating}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{operator.duration}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold text-hiking-green">
                        {operator.price}
                      </div>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Preparation & Safety */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                Preparation & Safety
              </h2>
              <p className="text-lg text-neutral-600">
                Climbing Fuji is rewarding but requires preparation.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="packing" className="border border-neutral-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  Packing Essentials
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700 pt-2">
                  <ul className="space-y-2">
                    <li>• Layered clothing (temperatures drop significantly at altitude)</li>
                    <li>• Waterproof jacket and pants</li>
                    <li>• Sturdy hiking boots with ankle support</li>
                    <li>• Headlamp and extra batteries</li>
                    <li>• Sunscreen and sunglasses</li>
                    <li>• Plenty of water and high-energy snacks</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="weather" className="border border-neutral-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  Weather Awareness
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700 pt-2">
                  <p>Weather on Fuji changes rapidly. Even in summer, temperatures at the summit can drop below freezing. 
                     Check current conditions and be prepared to turn back if weather deteriorates.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="altitude" className="border border-neutral-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  Altitude Tips
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700 pt-2">
                  <p>Take regular breaks, stay hydrated, and ascend slowly. If you experience severe headaches, 
                     nausea, or dizziness, descend immediately. Consider spending time at the 5th Station to acclimatize.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="leave-no-trace" className="border border-neutral-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  Leave No Trace
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700 pt-2">
                  <p>Respect Fuji's sacred nature. Carry out all trash, stay on designated trails, 
                     and be mindful of noise levels. Support local conservation efforts by following all guidelines.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-hiking-green to-hiking-green-hover">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-heading font-bold text-white mb-6">
              Ready for Your Fuji Adventure?
            </h2>
            <Button size="lg" variant="secondary" className="bg-white text-hiking-green hover:bg-neutral-50">
              Find a Guided Tour
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </main>

      <HikingFooter />
    </>
  );
}