import { ThemeProvider } from '../ThemeProvider';
import { Toaster } from "@/components/ui/toaster";
import ContactSection from '../ContactSection';

export default function ContactSectionExample() {
  return (
    <ThemeProvider>
      <ContactSection />
      <Toaster />
    </ThemeProvider>
  );
}
