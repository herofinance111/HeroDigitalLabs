import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Sparkles, Target } from "lucide-react";

const solutions = [
  {
    icon: RefreshCw,
    title: "Website Redesigns",
    description: "Give your business a modern refresh.",
    features: ["Mobile Optimized", "SEO Enhanced", "Conversion Focused"],
    pricing: "From $799",
  },
  {
    icon: Sparkles,
    title: "New Website Builds",
    description: "Launch your brand online, the right way.",
    features: ["Custom Design", "Fast Loading", "Brand Identity"],
    pricing: "From $1,299",
  },
  {
    icon: Target,
    title: "Landing Page Optimization",
    description: "Turn clicks into conversions.",
    features: ["High Converting", "A/B Ready", "Analytics Integrated"],
    pricing: "From $599",
  },
];

export default function SolutionsSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional web design services that help your business stand out and grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-elevate active-elevate-2 transition-all duration-300 animate-slide-up border-card-border"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`card-solution-${index}`}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-3">{solution.description}</p>
                  <p className="text-primary font-semibold text-lg">{solution.pricing}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-card-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => scrollToSection("contact")}
                  data-testid={`button-quote-${index}`}
                >
                  Get a Quote
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Why Choose Hero Digital Labs?</h3>
          <div className="grid md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "⚡", text: "Lightning-fast & mobile optimized" },
              { icon: "🎯", text: "Designed for conversions, not clutter" },
              { icon: "🔍", text: "SEO-ready with Google best practices" },
              { icon: "🧠", text: "Smart automation for leads & follow-ups" },
              { icon: "🛠️", text: "Custom redesigns for outdated sites" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
