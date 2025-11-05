"use client"
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
const Products = dynamic(() => import('@/components/ui/Products/Products'))

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Products />
    </Suspense>
  )
}
export default page;