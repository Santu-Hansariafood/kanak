"use client"

import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
const Home = dynamic(() => import('@/components/ui/Home/Home'))

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  )
}

export default page;