import { Card } from "@/components/ui/card";
import { Globe, Workflow, TrendingUp } from "lucide-react";

const solutions = [
  {
    icon: Globe,
    title: "Web Design",
    description: "High-performance sites that convert.",
    features: ["Responsive Design", "SEO Optimized", "Lightning Fast"],
  },
  {
    icon: Workflow,
    title: "Automation Systems",
    description: "Save hours with smart workflows.",
    features: ["AI-Powered", "Custom Integrations", "Seamless Operations"],
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Simplify, systemize, scale.",
    features: ["Data-Driven", "Strategic Planning", "Scalable Solutions"],
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital services designed to accelerate your business growth
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
                  <p className="text-muted-foreground text-lg">{solution.description}</p>
                </div>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-card-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
