"use client";
import React from "react";
import { Calendar, ArrowDown } from "lucide-react";

import Image from "next/image";
import bullet from "@/app/assets/bulle.webp";
import { Button } from "@/app/components/Button";
import { Badge } from "@/app/components/Badge";

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-20 text-center overflow-hidden selection:bg-[#3EB489] selection:text-black">
      <div className="mb-6">
        <Badge text="EDITION 2024" subHighlight="WEB DESIGN" />
      </div>

      <h1 className="flex flex-col gap-0 max-w-300 font-black text-white uppercase leading-[0.85] tracking-tighter">
        <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] block">
          Votre <span className="text-[#3EB489]">site</span>
        </span>

        <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] block italic font-serif lowercase tracking-tight -mt-2 mb-4 text-gray-300">
          doit donner envie
        </span>

        <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] block relative">
          de rester
          <span className="absolute -right-4 top-0 text-xs font-mono tracking-widest text-gray-500 uppercase hidden md:block rotate-90 origin-left">
            Exit the average
          </span>
        </span>
      </h1>

      <div className="max-w-xl mt-12 mb-10 border-l border-white/20 pl-6 text-left self-center">
        <p className="text-gray-400 text-sm md:text-lg leading-tight uppercase font-medium">
          Design moderne <span className="text-white">/</span> SEO solide{" "}
          <span className="text-white">/</span> Suivi complet
          <br />
          <span className="text-xs text-gray-500 mt-2 block">
            On construit des interfaces qui convertissent vos visiteurs en
            clients.
          </span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
        <Button
          variant="primary"
          className="h-16 px-10 text-lg font-bold uppercase tracking-widest bg-[#3EB489] hover:scale-105 transition-transform"
          leftIcon={Calendar}
        >
          Prendre RDV
        </Button>

        <Button
          variant="outline"
          className="h-16 px-10 text-lg font-bold uppercase tracking-widest border-white/20 hover:bg-white hover:text-black transition-all"
          rightIcon={ArrowDown}
        >
          Projets
        </Button>

        {/* L'image bullet repositionnée pour ne pas gêner la lecture */}
        <div className="absolute -bottom-24 -right-24 opacity-40 blur-sm pointer-events-none hidden lg:block">
          <Image src={bullet} width={200} height={200} alt="Bullet points" />
        </div>
      </div>

      {/* Background radial plus sombre pour faire ressortir le blanc */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#3EB489]/10 via-transparent to-transparent -z-10" />
    </main>
  );
};

export default App;
