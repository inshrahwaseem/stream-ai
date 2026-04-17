import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white hover:bg-red-700",
      secondary: "bg-secondary/50 text-white hover:bg-secondary/70 backdrop-blur-md",
      outline: "bg-transparent border border-white/20 text-white hover:bg-white/10",
      ghost: "bg-transparent text-white hover:bg-white/10",
    };

    const sizes = {
      sm: "px-4 py-1.5 text-sm",
      md: "px-8 py-2 text-md",
      lg: "px-10 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
