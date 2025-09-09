import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

// Import trek images
import halongBayImg from "@/assets/trek-halong-bay.jpg";
import angkorWatImg from "@/assets/trek-angkor-wat.jpg";
import borneoImg from "@/assets/trek-borneo-malaysia.jpg";
import kawahIjenImg from "@/assets/trek-kawah-ijen.jpg";

import annapurnaImg from "@/assets/trek-annapurna-nepal.jpg";
import everestImg from "@/assets/trek-everest-base-camp.jpg";
import langtangImg from "@/assets/trek-langtang-valley.jpg";

import japaneseAlpsImg from "@/assets/trek-japanese-alps.jpg";
import hallasanImg from "@/assets/trek-hallasan-korea.jpg";
import greatWallImg from "@/assets/trek-great-wall-china.jpg";

interface Trek {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  link: string;
}

const trekData = {
  "Southeast Asia": [
    {
      id: "halong-bay",
      name: "Ha Long Bay Trek", 
      country: "Vietnam",
      description: "Explore limestone karst formations and emerald waters",
      image: halongBayImg,
      link: "/trek/halong-bay"
    },
    {
      id: "angkor-wat",
      name: "Angkor Archaeological Park",
      country: "Cambodia", 
      description: "Ancient temples and jungle pathways adventure",
      image: angkorWatImg,
      link: "/trek/angkor-wat"
    },
    {
      id: "borneo-rainforest",
      name: "Borneo Rainforest Trek",
      country: "Malaysia",
      description: "Wildlife encounters in pristine jungle canopy",
      image: borneoImg,
      link: "/trek/borneo-rainforest"
    },
    {
      id: "kawah-ijen",
      name: "Kawah Ijen Volcano",
      country: "Indonesia",
      description: "Blue fire phenomenon and turquoise crater lake",
      image: kawahIjenImg,
      link: "/trek/kawah-ijen"
    }
  ],
  "South Asia": [
    {
      id: "annapurna-base-camp",
      name: "Annapurna Base Camp",
      country: "Nepal",
      description: "Classic Himalayan trek with stunning mountain views",
      image: annapurnaImg,
      link: "/trek/annapurna-base-camp"
    },
    {
      id: "everest-base-camp", 
      name: "Everest Base Camp",
      country: "Nepal",
      description: "World's most famous trekking destination",
      image: everestImg,
      link: "/trek/everest-base-camp"
    },
    {
      id: "langtang-valley",
      name: "Langtang Valley Trek",
      country: "Nepal",
      description: "Rhododendron forests and traditional Tamang culture",
      image: langtangImg,
      link: "/trek/langtang-valley"
    }
  ],
  "East Asia": [
    {
      id: "japanese-alps",
      name: "Japanese Alps Trek",
      country: "Japan",
      description: "Autumn colors and traditional mountain huts",
      image: japaneseAlpsImg,
      link: "/trek/japanese-alps"
    },
    {
      id: "mount-hallasan",
      name: "Mount Hallasan",
      country: "South Korea",
      description: "Volcanic crater lake and seasonal wildflowers",
      image: hallasanImg,
      link: "/trek/mount-hallasan"
    },
    {
      id: "great-wall-hiking",
      name: "Great Wall Hiking",
      country: "China",
      description: "Ancient wall winding through dramatic mountains",
      image: greatWallImg,
      link: "/trek/great-wall-hiking"
    }
  ]
};

const FindYourTrailSection = () => {
  const [activeTab, setActiveTab] = useState("Southeast Asia");

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Find Your Trail
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover incredible trekking adventures across Asia's most stunning landscapes
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-muted/50 p-1 rounded-xl">
            <TabsTrigger 
              value="Southeast Asia"
              className="text-sm font-medium px-6 py-3 rounded-lg transition-all duration-300 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
            >
              Southeast Asia
            </TabsTrigger>
            <TabsTrigger 
              value="South Asia"
              className="text-sm font-medium px-6 py-3 rounded-lg transition-all duration-300 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
            >
              South Asia
            </TabsTrigger>
            <TabsTrigger 
              value="East Asia"
              className="text-sm font-medium px-6 py-3 rounded-lg transition-all duration-300 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
            >
              East Asia
            </TabsTrigger>
          </TabsList>

          {Object.entries(trekData).map(([region, treks]) => (
            <TabsContent 
              key={region}
              value={region}
              className="animate-fade-in duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {treks.map((trek) => (
                  <Card 
                    key={trek.id}
                    className="group cursor-pointer overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    onClick={() => window.location.href = trek.link}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={trek.image}
                        alt={`${trek.name} in ${trek.country}`}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2">
                        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                          {trek.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {trek.country}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {trek.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FindYourTrailSection;