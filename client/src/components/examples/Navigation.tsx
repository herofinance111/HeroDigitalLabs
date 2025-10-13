import { ThemeProvider } from '../ThemeProvider';
import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <div className="h-screen">
        <Navigation />
      </div>
    </ThemeProvider>
  );
}
