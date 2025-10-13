interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-8 w-8" }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M20 20 L20 80 L45 80 L45 55 L70 55 L70 80 L80 80 L80 20 L70 20 L70 45 L45 45 L45 20 Z" 
        fill="currentColor"
        className="text-primary"
      />
      <path 
        d="M70 45 L80 35 L80 20" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round"
        className="text-primary"
      />
    </svg>
  );
}
