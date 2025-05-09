"use client";

import TrueFocus from "@/components/animations/TrueFocus/TrueFocus";

export default function WelcomeHeading() {
  return (
    <div className="text-center mb-8">
      {/* Animated headline using TrueFocus */}
      <div className="mb-4">
        <TrueFocus
          sentence="Welcome To Kanak Retail"
          manualMode={false}
          blurAmount={5}
          borderColor="green"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>

      {/* Description */}
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9] rounded-xl shadow-lg p-6 border border-green-200">
        <p className="text-lg md:text-2xl font-semibold text-gray-800 mb-2">
          Discover our <span className="text-green-600 font-extrabold">Premium Spices</span> &amp; <span className="text-green-600 font-extrabold">Pulses</span>—crafted for purity, flavor, and authenticity.
        </p>
        <ul className="list-disc list-inside text-base md:text-lg text-gray-700 mb-2">
          <li>Turmeric,Chili, Bey Leaf, Cumin, Coriander, Mustard</li>
          <li>Urad Dal, Moong Dal, Toor Dal , Monung Dal, and more</li>
        </ul>
        <p className="text-base md:text-lg text-gray-600">
          Sourced from trusted farms across India and packed with care, our collection brings the true taste of tradition to your kitchen.
        </p>
      </div>
    </div>
  );
}
