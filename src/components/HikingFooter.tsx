import { Mountain, Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HikingFooter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="w-8 h-8 text-hiking-green" />
              <span className="text-xl font-heading font-semibold">
                HikeAsia
              </span>
            </div>
            <p className="text-neutral-400 text-sm mb-6">
              Discover the most beautiful hiking trails across Southeast and East Asia. 
              Expert-guided adventures for every skill level.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-neutral-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-neutral-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-neutral-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-neutral-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#tours" className="text-neutral-400 hover:text-white transition-colors">
                  Find Tours
                </a>
              </li>
              <li>
                <a href="#plan" className="text-neutral-400 hover:text-white transition-colors">
                  Plan Trip
                </a>
              </li>
              <li>
                <a href="#insights" className="text-neutral-400 hover:text-white transition-colors">
                  Hiking Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Booking Help
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Travel Insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Emergency Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Get the latest trail updates, safety tips, and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
                required
              />
              <Button 
                type="submit"
                className="w-full bg-hiking-green hover:bg-hiking-green-hover"
              >
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              © 2024 HikeAsia. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}