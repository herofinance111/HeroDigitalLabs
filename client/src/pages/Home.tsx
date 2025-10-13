import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Hero Digital Labs | AI, Automation & Web Systems for Growth";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "We help businesses scale with modern websites and AI-powered systems. Based on the Gold Coast."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "We help businesses scale with modern websites and AI-powered systems. Based on the Gold Coast.";
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTags = [
      { property: "og:title", content: "Hero Digital Labs | AI, Automation & Web Systems for Growth" },
      { property: "og:description", content: "We help businesses scale with modern websites and AI-powered systems. Based on the Gold Coast." },
      { property: "og:type", content: "website" },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: "Hero Digital Labs | AI, Automation & Web Systems for Growth" },
      { property: "twitter:description", content: "We help businesses scale with modern websites and AI-powered systems. Based on the Gold Coast." },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SolutionsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
