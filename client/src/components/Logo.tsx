import { useTheme } from "./ThemeProvider";
import logoLight from "@assets/HDL Logo 2_1760343992449.png";
import logoDark from "@assets/ChatGPT Image Oct 13, 2025, 06_23_19 PM_1760343992449.png";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-8" }: LogoProps) {
  const { theme } = useTheme();
  
  return (
    <img 
      src={theme === "dark" ? logoDark : logoLight}
      alt="Hero Digital Labs"
      className={className}
    />
  );
}
