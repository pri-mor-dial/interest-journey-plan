import { Button } from "@/components/ui/button";
import { Mountain, TreePine, Compass } from "lucide-react";

export default function HikingCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-hiking-green to-hiking-green-hover relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-12 left-12 opacity-10">
          <Mountain className="w-32 h-32 text-white" />
        </div>
        <div className="absolute bottom-12 right-12 opacity-10">
          <TreePine className="w-24 h-24 text-white" />
        </div>
        <div className="absolute top-1/2 left-1/3 opacity-5">
          <Compass className="w-48 h-48 text-white" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-6 text-balance">
            Ready to Explore the Great Outdoors?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 text-balance max-w-2xl mx-auto">
            Join thousands of adventurers who've discovered Asia's most incredible hiking trails. 
            Your next unforgettable journey starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-hiking-green hover:bg-neutral-100 font-semibold px-8 py-4"
            >
              Find Your Next Trail
            </Button>
            <Button 
              size="lg" 
              className="bg-neutral-900 text-white hover:bg-neutral-800 border-0 font-semibold px-8 py-4"
            >
              Start Planning
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 text-sm">Hiking Trails</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15</div>
              <div className="text-white/80 text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50k+</div>
              <div className="text-white/80 text-sm">Happy Hikers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}