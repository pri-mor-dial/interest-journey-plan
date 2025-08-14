import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-travel-green via-primary-light to-travel-green relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-float">✈️</div>
        <div className="absolute top-20 right-20 text-4xl animate-float" style={{ animationDelay: '1s' }}>🗺️</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-float" style={{ animationDelay: '2s' }}>🎒</div>
        <div className="absolute bottom-10 right-10 text-3xl animate-float" style={{ animationDelay: '0.5s' }}>🌍</div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-8">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-balance">
            Your Next Adventure 
            <br />
            <span className="bg-gradient-to-r from-terracotta to-accent-light bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto text-balance">
            Join thousands of travelers who've discovered their perfect trips through their passions. 
            Start planning your interest-based adventure today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="bg-white text-travel-green hover:bg-neutral-50 hover:scale-105 shadow-strong"
            >
              Start Planning Your Trip
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="xl"
              className="text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50"
            >
              Browse Destinations
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/70 mb-6">Trusted by travelers worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
              <div className="flex items-center">
                <span className="text-2xl mr-2">⭐</span>
                <span>4.8/5 Average Rating</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🛡️</span>
                <span>Secure Booking</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">📞</span>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">💫</span>
                <span>15K+ Happy Travelers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}