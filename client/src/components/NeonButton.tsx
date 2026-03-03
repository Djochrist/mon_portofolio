import { ReactNode } from "react";
import { motion } from "framer-motion";

interface NeonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  external?: boolean;
}

export function NeonButton({ 
  children, 
  onClick, 
  href, 
  variant = "primary", 
  className = "",
  external = false
}: NeonButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center px-8 py-4 font-display font-semibold tracking-wide transition-all duration-300 rounded-none overflow-hidden group interactive";
  
  const variantClasses = variant === "primary" 
    ? "bg-primary text-black hover:bg-white hover:text-black box-glow-hover" 
    : "bg-transparent border-2 border-primary text-primary hover:bg-primary/10 box-glow hover:text-primary";

  const Content = () => (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></div>
      )}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseClasses} ${variantClasses} ${className}`}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        <Content />
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <Content />
    </button>
  );
}
