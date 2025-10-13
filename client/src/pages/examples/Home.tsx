import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from "@/components/ui/toaster";
import Home from '../Home';

export default function HomeExample() {
  return (
    <ThemeProvider>
      <Home />
      <Toaster />
    </ThemeProvider>
  );
}
