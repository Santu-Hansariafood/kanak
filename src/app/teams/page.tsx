"use client"
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
const Teams = dynamic(() => import('@/components/ui/Teams/Teams'))

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Teams />
    </Suspense>
  )
}

export default page