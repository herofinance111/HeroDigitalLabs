import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "After Hero Digital Labs rebuilt our site, our bookings increased by 40%.",
    author: "Coastal Cleaners",
    location: "Gold Coast",
  },
  {
    quote: "They made it simple and fast — best investment for my business.",
    author: "Knight Movers",
    location: "Brisbane",
  },
  {
    quote: "Our new site feels like a real brand now.",
    author: "Haven Interiors",
    location: "Byron Bay",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Websites Help Local Businesses Double Their Leads
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 border-card-border hover-elevate transition-all"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-card-foreground mb-4 italic">"{testimonial.quote}"</p>
              <div className="text-sm">
                <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                <p className="text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
