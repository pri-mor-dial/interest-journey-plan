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
import gearHikingBoots from "@/assets/gear-hiking-boots.png";
import gearLayeredClothing from "@/assets/gear-layered-clothing.png";
import gearWaterBottles from "@/assets/gear-water-bottles.png";
import gearWeatherProtection from "@/assets/gear-weather-protection.png";
import tourFujiSunriseGroup from "@/assets/tour-fuji-sunrise-group.jpg";
import tourFujiCulturalGroup from "@/assets/tour-fuji-cultural-group.jpg";
import tourFujiSpiritualGroup from "@/assets/tour-fuji-spiritual-group.jpg";
import heroMountFujiLandscape from "@/assets/hero-mount-fuji-landscape.jpg";

const tourOperators = [
  {
    id: 1,
    name: "Fuji Mountain Guides",
    highlight: "Sunrise Summit Tour",
    price: "From ¥18,000",
    duration: "2 days",
    image: tourFujiSunriseGroup,
    rating: 4.9
  },
  {
    id: 2,
    name: "Japan Alpine Club",
    highlight: "Cultural Heritage Trek",
    price: "From ¥15,500",
    duration: "2 days",
    image: tourFujiCulturalGroup,
    rating: 4.8
  },
  {
    id: 3,
    name: "Sacred Mountain Tours",
    highlight: "Spiritual Journey Experience",
    price: "From ¥20,000",
    duration: "3 days",
    image: tourFujiSpiritualGroup,
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
        {/* Hero Section - Photo with Text Overlay */}
        <section 
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroMountFujiLandscape})` }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Mount Fuji <br />
              <span className="text-hiking-green-light">Summit Trail</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 font-light max-w-2xl mx-auto">
              Climb Japan's iconic peak with respect and preparation during the official season from July to September.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-sm text-white/90">
                <strong>2025 Update:</strong> A climbing fee system supports mountain preservation and enhances safety measures for all climbers.
              </p>
            </div>
          </div>
          
          {/* Scroll Down Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/70" />
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {tourOperators.map((operator, index) => (
                <Card key={operator.id} className="overflow-hidden shadow-soft hover:shadow-medium transition-all hover-scale">
                  <div className="h-32 relative overflow-hidden">
                    <img 
                      src={operator.image} 
                      alt={`${operator.name} tour group`}
                      className="w-full h-full object-cover"
                    />
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
            
            <div className="text-center">
              <Button size="lg" className="bg-hiking-green hover:bg-hiking-green-hover text-white">
                Find a Guided Tour
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-2">
                        <li>• Layered clothing (temperatures drop significantly at altitude)</li>
                        <li>• Waterproof jacket and pants</li>
                        <li>• Sturdy hiking boots with ankle support</li>
                        <li>• Headlamp and extra batteries</li>
                        <li>• Sunscreen and sunglasses</li>
                        <li>• Plenty of water and high-energy snacks</li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center">
                        <img src={gearHikingBoots} alt="Hiking boots" className="w-16 h-16 object-contain mb-2" />
                        <span className="text-xs text-neutral-500">Hiking Boots</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src={gearLayeredClothing} alt="Layered clothing" className="w-16 h-16 object-contain mb-2" />
                        <span className="text-xs text-neutral-500">Layered Clothing</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="weather" className="border border-neutral-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  Weather Awareness
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p>Weather on Fuji changes rapidly. Even in summer, temperatures at the summit can drop below freezing. 
                         Check current conditions and be prepared to turn back if weather deteriorates.</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex flex-col items-center">
                        <img src={gearWeatherProtection} alt="Weather protection gear" className="w-16 h-16 object-contain mb-2" />
                        <span className="text-xs text-neutral-500">Weather Protection</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="altitude" className="border border-neutral-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  Altitude Tips
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p>Take regular breaks, stay hydrated, and ascend slowly. If you experience severe headaches, 
                         nausea, or dizziness, descend immediately. Consider spending time at the 5th Station to acclimatize.</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex flex-col items-center">
                        <img src={gearWaterBottles} alt="Hydration gear" className="w-16 h-16 object-contain mb-2" />
                        <span className="text-xs text-neutral-500">Hydration Gear</span>
                      </div>
                    </div>
                  </div>
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