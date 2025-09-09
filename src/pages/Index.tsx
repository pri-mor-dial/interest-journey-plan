import Navigation from "@/components/Navigation";
import HikingHeroSection from "@/components/HikingHeroSection";
import FindYourTrailSection from "@/components/FindYourTrailSection";
import FeaturedToursSection from "@/components/FeaturedToursSection";
import PlanTripSection from "@/components/PlanTripSection";
import HikingInsightsSection from "@/components/HikingInsightsSection";
import CommunityStoriesSection from "@/components/CommunityStoriesSection";
import HikingCTASection from "@/components/HikingCTASection";
import HikingFooter from "@/components/HikingFooter";

const Index = () => {
  return (
    <>
      {/* SEO Head */}
      <head>
        <title>HikeAsia - Explore Southeast & East Asia's Best Hiking Trails</title>
        <meta name="description" content="Discover incredible hiking trails across Southeast and East Asia. Book guided tours, plan your trip, and explore with expert local guides. From Mount Fuji to Annapurna Base Camp." />
        <meta name="keywords" content="hiking tours Asia, Southeast Asia trekking, mountain climbing, guided hiking tours, Nepal trekking, Japan hiking, Vietnam trails" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://hikeasia.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="HikeAsia - Explore Southeast & East Asia's Best Hiking Trails" />
        <meta property="og:description" content="Discover incredible hiking trails across Southeast and East Asia. Book guided tours and explore with expert local guides." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hikeasia.com" />
      </head>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "HikeAsia",
            "description": "Premier hiking tour operator for Southeast and East Asia",
            "url": "https://hikeasia.com",
            "logo": "https://hikeasia.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-HIKE-ASIA",
              "contactType": "customer service"
            },
            "areaServed": ["Southeast Asia", "East Asia"],
            "serviceType": "Hiking Tours and Adventure Travel"
          })
        }}
      />

      <Navigation />
      
      <main className="min-h-screen">
        <HikingHeroSection />
        <FindYourTrailSection />
        <FeaturedToursSection />
        <PlanTripSection />
        <HikingInsightsSection />
        <CommunityStoriesSection />
        <HikingCTASection />
      </main>

      <HikingFooter />
    </>
  );
};

export default Index;