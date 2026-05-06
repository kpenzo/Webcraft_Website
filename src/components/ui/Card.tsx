import { ReactNode } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cn } from "./Button";

interface CardProps {
  children: ReactNode;
  className?: string;
  highlighted?: boolean;
}

export function Card({ children, className, highlighted = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg- white rounded-2xl p-6 md:p-8 border-2 transition- all duration-300 hover:-translate-y-1 hover:shadow-xl",
        highlighted ? "border- primary-500 shadow-lg relative" : "border-gray-100",
        className
      )}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg- primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      {children}
    </div>
  );
}