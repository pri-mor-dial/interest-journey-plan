import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, MapPin, Calendar } from "lucide-react";

export default function SchedulePlannerSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-[--radius-card] p-8 shadow-medium">
              <div className="bg-white rounded-[--radius-soft] p-6 shadow-soft mb-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-travel-green" />
                  Tuesday, March 15
                </h3>
                
                {/* Sample itinerary items */}
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-travel-green-light rounded-[--radius-soft] border-l-4 border-travel-green">
                    <div className="flex-1">
                      <div className="flex items-center text-sm text-neutral-600 mb-1">
                        <Clock className="w-4 h-4 mr-1" />
                        9:00 AM - 11:30 AM
                      </div>
                      <h4 className="font-semibold text-neutral-900">Scuba Diving at Blue Hole</h4>
                      <div className="flex items-center text-sm text-neutral-600 mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        Dahab, Egypt
                      </div>
                    </div>
                    <CheckCircle className="w-5 h-5 text-travel-green" />
                  </div>

                  <div className="flex items-center p-3 bg-neutral-50 rounded-[--radius-soft] border-l-4 border-neutral-200">
                    <div className="flex-1">
                      <div className="flex items-center text-sm text-neutral-600 mb-1">
                        <Clock className="w-4 h-4 mr-1" />
                        1:00 PM - 3:00 PM
                      </div>
                      <h4 className="font-semibold text-neutral-900">Lunch at Bedouin Tent</h4>
                      <div className="flex items-center text-sm text-neutral-600 mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        Dahab Bay
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-terracotta-light rounded-[--radius-soft] border-l-4 border-terracotta">
                    <div className="flex-1">
                      <div className="flex items-center text-sm text-neutral-600 mb-1">
                        <Clock className="w-4 h-4 mr-1" />
                        5:00 PM - 7:00 PM
                      </div>
                      <h4 className="font-semibold text-neutral-900">Sunset Camel Ride</h4>
                      <div className="flex items-center text-sm text-neutral-600 mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        Desert Safari Point
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-neutral-500 mb-2">Drag & drop to reorder</p>
                <div className="w-12 h-1 bg-neutral-300 rounded-full mx-auto"></div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Interactive Schedule Planner
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-travel-green rounded-full flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Drag & Drop Simplicity
                  </h3>
                  <p className="text-neutral-600">
                    Easily rearrange your activities and create the perfect daily schedule
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-travel-green rounded-full flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Smart Time Management
                  </h3>
                  <p className="text-neutral-600">
                    Automatic travel time calculations and optimal route suggestions
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-travel-green rounded-full flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Real-time Updates
                  </h3>
                  <p className="text-neutral-600">
                    Live availability, pricing, and weather information for your activities
                  </p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Start Planning Your Trip
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}