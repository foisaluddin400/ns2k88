'use client'
import React from 'react'
import Image from 'next/image'
import backImage from '../../../../public/img/auth.png'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="relative -mt-20 -mb-20 h-screen w-full">
      {/* Background Image */}
      <Image
        src={backImage}
        alt="Auth Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-end px-6 pb-10 text-white">

        {/* Text */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Welcome!</h1>
          <p className="text-sm text-gray-200 leading-relaxed">
            Find the perfect trainer for your goals, schedule, and budget — or
            attract more clients effortlessly.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <Link href={'/signUp'}><button className="w-full bg-primary text-white py-3 rounded-full font-semibold text-lg hover:bg-teal-700 transition">
            Continue as Client
          </button></Link>
          <button className="w-full bg-primary text-white py-3 rounded-full font-semibold text-lg hover:bg-teal-700 transition">
            Continue as trainer
          </button>

          <button className="w-full border border-white text-white py-3 rounded-full font-semibold text-lg hover:bg-white/10 transition">
            Explore first
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
