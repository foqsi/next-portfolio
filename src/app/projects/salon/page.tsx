'use client'

import { useState } from 'react'
import Image from 'next/image'
import GlowCard from '@/components/GlowCard'

export default function SalonSiteFeatures() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const images = [
    { src: '/erns/home.png', alt: 'Salon homepage screenshot' },
    { src: '/erns/gallery.png', alt: 'Salon gallery page screenshot' },
    { src: '/erns/simplebook.png', alt: 'Salon simple booking form' },
    { src: '/erns/confirmation.png', alt: 'Confirmation email' },
    { src: '/erns/dashboard1.png', alt: 'Salon admin dashboard screenshot' },
    { src: '/erns/dashboard2.png', alt: 'Salon admin dashboard screenshot' },
    { src: '/erns/dashboard3.png', alt: 'Salon admin dashboard screenshot' },
    { src: '/erns/dashboard4.png', alt: 'Salon admin dashboard screenshot' },
  ]

  return (
    <main className="bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-400 max-w-5xl mx-auto px-4 pt-12 pb-16 mb-6 rounded-xl">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gradient bg-gradient-to-r dark:from-blue-500 dark:to-teal-400 from-gray-600 to-gray-400 bg-clip-text text-transparent">El Reno Nail Spa</h1>
      </header>

      {/* Core Features */}
      <GlowCard className="mb-6 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Core Features</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Easy online booking system with automated confirmations using EmailJS</li>
          <li>Responsive design</li>
          <li>Customizable service menus</li>
          <li>Embedded Google Maps</li>
          <li>SEO-optimized for better search rankings</li>
          <li>Mobile-friendly & fast-loading</li>
          <li>Automatically apply logo or watermark when uploading to gallery</li>
          <li>CRUD admin panels for managing content</li>
        </ul>
      </GlowCard>

      {/* Screenshots */}
      <GlowCard className="mb-6 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Gallery & Admin Features</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {images.slice(0, 2).map(({ src, alt }) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              width={600}
              height={400}
              className="rounded-lg shadow border border-gray-200 dark:border-gray-700 cursor-pointer"
              onClick={() => setModalImage(src)}
            />
          ))}

          <div className="col-span-1 sm:col-span-2 space-y-4 mt-4">
            <h3 className="text-xl font-semibold">Simple Booking Form</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Automatic</strong> confirmation emails sent to clients.
            </p>
            {images.slice(2, 4).map(({ src, alt }) => (
              <Image
                key={src}
                src={src}
                alt={alt}
                width={600}
                height={400}
                className="rounded-lg shadow border border-gray-200 dark:border-gray-700 cursor-pointer"
                onClick={() => setModalImage(src)}
              />
            ))}

            <h3 className="text-xl font-semibold mt-6">Admin Dashboard</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Admin</strong> dashboard for easy CRUD management.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {images.slice(4).map(({ src, alt }) => (
                <Image
                  key={src}
                  src={src}
                  alt={alt}
                  width={600}
                  height={400}
                  className="rounded-lg shadow border border-gray-200 dark:border-gray-700 cursor-pointer"
                  onClick={() => setModalImage(src)}
                />
              ))}
            </div>
          </div>
        </div>
      </GlowCard>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImage}
              alt="Expanded view"
              width={1200}
              height={800}
              className="rounded shadow-lg border border-gray-200 dark:border-gray-700"
            />
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-500 transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
