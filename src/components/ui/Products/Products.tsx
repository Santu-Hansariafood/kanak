"use client"

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    image: '/images/products/bason.jpg',
    name: 'BESON (Gram Flour)',
    description: '✨ Discover the authentic taste and fine texture of our premium Bason. Perfect for traditional recipes and modern delights alike.',
  },
  {
    image: '/images/products/ata.jpg',
    name: 'WHOLE WHEAT FLOUR (Aata)',
    description: '🌾 Experience the wholesome goodness of Kanak Retail Atta, milled from the finest wheat for soft, fluffy rotis every time.',
  },
  {
    image: '/images/products/flour.jpg',
    name: 'Corn Flour',
    description: '🥖 Elevate your baking with our versatile flour, ideal for breads, cakes, and all your culinary creations.',
  },
  {
    image: '/images/products/idli.jpg',
    name: 'Instant Ravi Idli Mix',
    description: '🍚 Make perfect, fluffy idlis with ease using our ready-to-cook Idli Mix, crafted for authentic South Indian flavor.',
  },
  {
    image: '/images/products/maida.jpg',
    name: 'Maida',
    description: '🍰 Kanak Retail Maida brings you the finest, softest texture for pastries, snacks, and festive treats.',
  },
  {
    image: '/images/products/ragi.jpg',
    name: 'Ragi Vermicelli',
    description: '🌱 Packed with nutrition, our Ragi is perfect for healthy meals, porridge, and innovative recipes.',
  },
  {
    image: '/images/products/ragiflour.jpg',
    name: 'Ragi Flour',
    description: '🥣 Enjoy the wholesome benefits of Ragi Flour, rich in calcium and fiber for a balanced diet.',
  },
  {
    image: '/images/products/rice.jpg',
    name: 'Rice Flour',
    description: '🍚 Premium quality rice for everyday meals, biryanis, and festive occasions. Taste the difference with Kanak Retail.',
  },
  {
    image: '/images/products/rosted.jpg',
    name: 'Roasted Vermicelli',
    description: '🔥 Savor the nutty aroma and crunch of our expertly roasted grains, perfect for snacks and recipes.',
  },
  {
    image: '/images/products/soji.jpg',
    name: 'Rava (Soji)',
    description: '🍮 Make delicious halwa, upma, and more with our premium Soji, milled for perfect texture.',
  },
  {
    image: '/images/products/wheat.jpg',
    name: 'Wheat Vermicelli',
    description: '🌾 Kanak Retail Wheat is sourced from the best farms, ensuring nutrition and taste in every grain.',
  },
]

const ParallaxProduct = ({ image, title, description }: { image: string; title: string; description: string }) => {
  const imageRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const offset = window.scrollY
        imageRef.current.style.transform = `translateY(${offset * 0.15}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center w-full gap-8 py-12">
      <div ref={imageRef} className="w-full md:w-1/2 flex justify-center transition-transform duration-700 will-change-transform">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-green-amber-spin">
          <Image
            src={image}
            alt={title}
            width={380}
            height={480}
            className="w-[320px] h-[400px] md:w-[380px] md:h-[480px] object-cover rounded-2xl border-4 border-amber-300 shadow-xl"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl pointer-events-none" />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left px-2 md:px-8">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-4 animate-fade-in-up bg-gradient-to-r from-green-400 via-amber-400 to-green-600 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
          Kanak Retail - <span className="text-amber-600 dark:text-amber-400">{title}</span>
        </h2>
        <div className="text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-6 animate-fade-in-up delay-150 p-6 rounded-2xl bg-white/80 dark:bg-black/40 shadow-inner border-l-4 border-amber-400 font-medium leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  )
}

const Products = () => {
  const [current, setCurrent] = useState(0)
  const total = products.length

  // Auto-swipe effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 3000)
    return () => clearInterval(timer)
  }, [total])

  const handlePrev = () => setCurrent((prev) => (prev - 1 + total) % total)
  const handleNext = () => setCurrent((prev) => (prev + 1) % total)
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 bg-gradient-to-br from-green-50 via-amber-50 to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Floating Back to Contact Button */}
      <div className="fixed left-8 top-1/2 z-50">
      <Link href="/" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#021A13] to-[#7BC043] shadow-lg text-white font-bold text-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-green-300">
            <span className="animate-bounce">📞</span>
            <span className="whitespace-nowrap">Back</span>
        </Link>
      </div>
      <h1 className="sticky top-0 z-20 w-full text-4xl md:text-5xl font-extrabold text-center mb-10 mt-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-amber-400 to-green-600 drop-shadow-xl animate-fade-in-up">
        Visit Our Products
      </h1>
      <div className="relative w-full max-w-5xl flex flex-col items-center">
        <ParallaxProduct
          image={products[current].image}
          title={products[current].name}
          description={products[current].description}
        />
        <div className="flex items-center justify-center gap-6 mt-4">
          <button onClick={handlePrev} className="rounded-full bg-amber-400 hover:bg-amber-500 text-white w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 text-2xl font-bold">
            &#8592;
          </button>
          <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {current + 1} / {total}
          </span>
          <button onClick={handleNext} className="rounded-full bg-green-400 hover:bg-green-500 text-white w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 text-2xl font-bold">
            &#8594;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Products