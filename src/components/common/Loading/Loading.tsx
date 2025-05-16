import Image from "next/image";
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-100 via-green-200 to-green-300">
      <div className="flex flex-col items-center">
        <Image
          src="/kanak.jpg"
          alt="KANAK Logo"
          height={100}
          width={100}
          className="w-32 h-32 animate-spin-slow drop-shadow-lg rounded-full"
        />
        <p className="mt-6 text-xl font-semibold text-green-900 animate-pulse">
          Loading KANAK Dashboard...
        </p>
      </div>
    </div>
  );
};

export default Loading;
