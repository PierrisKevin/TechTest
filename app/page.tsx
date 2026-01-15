"use client";
import React from "react";
import { Calendar, ArrowDown } from "lucide-react";
import { Button } from "./components/Button";
import { Badge } from "./components/Badge";
import Image from "next/image";
import bullet from "@/app/assets/bulle.webp";

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
      <Badge text="CRÉER UN SITE WEB VRAIMENT" subHighlight="VRAIMENT" />

      <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] mb-8">
        Votre <span className="text-[#3EB489]">site</span> doit{" "}
        <span className="text-[#3EB489]">donner envie</span> de{" "}
        <span className="text-[#3EB489]">rester</span>, pas de{" "}
        <span className="text-[#3EB489] line-through decoration-background">
          revenir
        </span>{" "}
        en{" "}
        <span className="text-[#3EB489] block mt-1 line-through decoration-background">
          arrière.
        </span>
      </h1>

      <div className="max-w-2xl mb-12">
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Design moderne, SEO solide, Suivi complet :<br />
          on construit un site qui retient vos visiteurs et vous apporte des
          résultats.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-5 relative">
        <div className="relative">
          <Button variant="primary" leftIcon={Calendar}>
            Prendre RDV
          </Button>

          <div className="absolute -bottom-16 -left-12 hidden md:block">
            <Image src={bullet} width={170} height={170} alt="Bullet points" />
          </div>
        </div>

        <Button variant="outline" rightIcon={ArrowDown}>
          Découvrir nos projets
        </Button>
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-[#3EB489]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </main>
  );
};

export default App;
