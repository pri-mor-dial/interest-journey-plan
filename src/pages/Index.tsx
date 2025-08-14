import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SchedulePlannerSection from "@/components/SchedulePlannerSection";
import VendorBookingSection from "@/components/VendorBookingSection";
import ReviewsSection from "@/components/ReviewsSection";
import TrendingTripsSection from "@/components/TrendingTripsSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "TravelMatch",
            "description": "Interest-based travel planning platform",
            "url": "https://travelmatch.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://travelmatch.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      <HeroSection />
      <HowItWorksSection />
      <SchedulePlannerSection />
      <VendorBookingSection />
      <ReviewsSection />
      <TrendingTripsSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;