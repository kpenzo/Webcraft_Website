import { ReactNode } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cn } from "./Button";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 md:p-8 transition-all duration-300",
        hover ? "hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_0_40px_rgba(104,86,227,0.15)]" : "",
        className
      )}
    >
      {children}
    </div>
  );
}