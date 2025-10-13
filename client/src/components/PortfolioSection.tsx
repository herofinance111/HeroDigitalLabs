import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "Knight Movers Redesign",
    location: "Brisbane",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
  {
    title: "Coastal Cleaners Website",
    location: "Gold Coast",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    title: "Haven Interiors Launch",
    location: "Byron Bay",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
  },
  {
    title: "Local Fitness Studio",
    location: "Gold Coast",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
  },
  {
    title: "Professional Services",
    location: "Brisbane",
    image: "https://images.unsplash.com/photo-1600607687887-3875a3b6a47e?w=800&q=80",
  },
  {
    title: "Retail Store Online",
    location: "Gold Coast",
    image: "https://images.unsplash.com/photo-1600607687527-cae1d3a6b5a5?w=800&q=80",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses across Australia transform their online presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-card-border hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid={`card-portfolio-${index}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.location}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-card-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
