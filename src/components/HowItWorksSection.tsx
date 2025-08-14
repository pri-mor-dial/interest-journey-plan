import { MapPin, Calendar, CreditCard } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Discover Destinations",
    description: "Find amazing places tailored to your interests and passions",
    number: "01"
  },
  {
    icon: Calendar,
    title: "Build Your Schedule",
    description: "Create your perfect itinerary with our interactive planner",
    number: "02"
  },
  {
    icon: CreditCard,
    title: "Book & Go",
    description: "Reserve activities, tours, and experiences all in one place",
    number: "03"
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Three simple steps to your perfect trip
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-travel-green rounded-full flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-terracotta text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-neutral-900 mb-4 group-hover:text-travel-green transition-colors">
                  {step.title}
                </h3>
                <p className="text-neutral-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}