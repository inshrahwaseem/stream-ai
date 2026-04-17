import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-3 bg-white/10 border border-transparent rounded text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
            error && "border-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
