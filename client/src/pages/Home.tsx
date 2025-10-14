import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import VoiceflowChat from "@/components/VoiceflowChat";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Hero Digital Labs | Website Design & Redesign Experts Gold Coast";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Hero Digital Labs builds high-performing websites for small businesses. Modern design, SEO-ready, and built for growth. Based on the Gold Coast."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Hero Digital Labs builds high-performing websites for small businesses. Modern design, SEO-ready, and built for growth. Based on the Gold Coast.";
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTags = [
      { property: "og:title", content: "Hero Digital Labs | Website Design & Redesign Experts Gold Coast" },
      { property: "og:description", content: "Hero Digital Labs builds high-performing websites for small businesses. Modern design, SEO-ready, and built for growth." },
      { property: "og:type", content: "website" },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: "Hero Digital Labs | Website Design & Redesign Experts Gold Coast" },
      { property: "twitter:description", content: "Hero Digital Labs builds high-performing websites for small businesses. Modern design, SEO-ready, and built for growth." },
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
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <VoiceflowChat />
    </div>
  );
}
