"use client";
import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.png";

interface BadgeProps {
  text: string;
  subHighlight?: string;
}

export const Badge: React.FC<BadgeProps> = ({ text, subHighlight }) => {
  return (
    <div className="relative group mb-12 cursor-default">
      <div className="absolute -inset-1 bg-[#3EB489] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-white text-black px-6 py-2.5 rounded-full flex items-center gap-3 shadow-xl transition-transform duration-300 group-hover:scale-105">
        <div className="transition-transform duration-300 group-hover:rotate-12">
          <Image src={logo} width={40} height={40} alt="Search Icon" />
        </div>
        <span className="font-extrabold tracking-tight text-xs sm:text-sm md:text-base uppercase">
          {text}{" "}
          {subHighlight && (
            <span className="underline decoration-2 underline-offset-4">
              {subHighlight}
            </span>
          )}{" "}
          UNIQUE
        </span>
      </div>
    </div>
  );
};
