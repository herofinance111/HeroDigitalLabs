import { Card } from "@/components/ui/card";
import { Zap, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Speed",
    description: "Rapid delivery without compromising quality",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Meticulous attention to every detail",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Cutting-edge solutions for modern challenges",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Hero Digital Labs
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              We help ambitious businesses stand out online. Founded by <span className="text-primary font-semibold">Ryan Heron</span>, Hero Digital Labs blends design, strategy, and automation to create websites that actually grow your business.
            </p>
            <p className="text-lg text-muted-foreground/80">
              Based in the Gold Coast. Working with businesses across Australia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover-elevate transition-all duration-300 border-card-border"
                  data-testid={`card-value-${index}`}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
