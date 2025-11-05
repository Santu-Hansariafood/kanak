"use client"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
const Locations = dynamic(() => import('@/components/ui/Locations/Locations'))
const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Locations />
    </Suspense>
  )
}

export default page