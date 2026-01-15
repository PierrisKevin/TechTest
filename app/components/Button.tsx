"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "relative flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-bold transition-all duration-300 text-sm md:text-base active:scale-95 overflow-hidden group";

  const variants = {
    primary:
      "bg-[#3EB489] text-[#0f1111] hover:bg-[#4ed4a3] hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(62,180,137,0.5)]",
    outline:
      "border border-[#3EB489]/40 text-[#3EB489] hover:bg-[#3EB489]/5 hover:border-[#3EB489] hover:-translate-y-1",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Gloss effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>

      {LeftIcon && (
        <LeftIcon
          size={20}
          className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
        />
      )}

      <span className="relative z-10">{children}</span>

      {RightIcon && (
        <RightIcon
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </button>
  );
};
