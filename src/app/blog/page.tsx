"use client"
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
const Blog = dynamic(() => import('@/components/ui/Blog/Blog'))

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Blog />
    </Suspense>
  )
}

export default page