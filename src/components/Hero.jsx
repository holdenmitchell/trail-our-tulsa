import React from 'react'
import VerticalFlag from '@/components/tulsa-flag.png'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-24 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-36 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h4 className="mt-18 text-2xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-4xl">
              Improve Our Tulsa 🚶 🚲 
            </h4>
            <p className="mt-6 text-2xl text-lg leading-8 text-gray-600"></p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-blue-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src={VerticalFlag}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
