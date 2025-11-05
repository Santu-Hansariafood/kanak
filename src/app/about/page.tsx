"use client";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
const About = dynamic(() => import("@/components/ui/About/About"));

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <About />
    </Suspense>
  );
};

export default page;
