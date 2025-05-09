"use client";

import PixelTransition from "@/components/animations/PixelTransition/PixelTransition";
import Image from "next/image";

export default function ProductImage() {
  return (
    <div className="mx-auto my-6 w-full max-w-xl rounded-lg overflow-hidden shadow-lg aspect-[3/2] bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9] flex items-center justify-center">
      <PixelTransition
        firstContent={
          <div className="w-full h-full flex items-center justify-center relative bg-white">
            <div className="relative w-3/4 h-3/4 max-w-[320px] max-h-[240px] rounded-xl overflow-hidden shadow-md border-4 border-[#7BC043]">
              <Image
                src="/kanak.jpg"
                alt="Kanak Retail Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        }
        secondContent={
          <div className="w-full h-full grid place-items-center bg-[#021A13]">
            <p className="text-[#7BC043] font-extrabold text-3xl text-center font-sans drop-shadow-lg">
              Kanak Retail
            </p>
          </div>
        }
        gridSize={12}
        pixelColor="#ffffff"
        animationStepDuration={0.4}
        className="custom-pixel-card"
      />
    </div>
  );
}
