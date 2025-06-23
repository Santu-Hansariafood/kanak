import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
import Loading from '@/components/common/Loading/Loading';
const WelcomeSection = dynamic(()=> import('@/components/ui/WelcomeSection/WelcomeSection'));

const page = () => {
  return (
    <Suspense fallback={<Loading/>}>
    <WelcomeSection/>
    </Suspense>
  )
}

export default page