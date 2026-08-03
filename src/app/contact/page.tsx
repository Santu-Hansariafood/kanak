"use client";

import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const Contact = dynamic(() => import("@/components/ui/Contact/Contact"));

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Contact />
    </Suspense>
  );
};

export default page;
