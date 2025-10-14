import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-flow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          High-Performing Websites
          <br />
          <span className="text-primary">That Turn Visitors Into Clients.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Hero Digital Labs builds fast, modern, and beautiful websites designed to grow your business — not just exist online.
        </p>

        <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto italic">
          Your business. Upgraded.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="text-lg px-8"
            data-testid="button-get-consultation"
          >
            Get a Free Website Audit
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              if (window.voiceflow?.chat?.open) {
                window.voiceflow.chat.open();
              }
            }}
            className="text-lg px-8"
            data-testid="button-hero-assistant"
          >
            Talk to Hero Assistant
          </Button>
        </div>

        <div className="mt-16 p-6 bg-card/50 backdrop-blur-sm border rounded-lg max-w-2xl mx-auto">
          <p className="text-foreground/90">
            🎯 We're currently accepting <span className="font-bold text-primary">3 new client projects</span> this month — book your free audit call.
          </p>
        </div>
      </div>
    </section>
  );
}
