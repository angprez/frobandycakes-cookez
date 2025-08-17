"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const flavors = [
  {
    name: "Chocolate Chip Cookie Dough Explosion",
    description: "Loaded with cookie dough chunks and premium chocolate chips",
    image: "/placeholder.svg?height=400&width=600",
    available: "January 2024",
  },
  {
    name: "Strawberry Cheesecake Dream",
    description: "Creamy cheesecake filling with fresh strawberry swirls",
    image: "/placeholder.svg?height=400&width=600",
    available: "February 2024",
  },
  {
    name: "Salted Caramel Pretzel Crunch",
    description: "Sweet and salty perfection with caramel drizzle",
    image: "/placeholder.svg?height=400&width=600",
    available: "March 2024",
  },
  {
    name: "Birthday Cake Bonanza",
    description: "Funfetti cookie with vanilla buttercream and sprinkles",
    image: "/placeholder.svg?height=400&width=600",
    available: "April 2024",
  },
]

export default function FlavorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % flavors.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % flavors.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + flavors.length) % flavors.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Monthly <span className="text-primary">Flavors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rotating creations that'll make your taste buds dance
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="grid md:grid-cols-2 bg-white">
                  <div className="relative h-64 md:h-96">
                    <img
                      src={flavors[currentIndex].image || "/placeholder.svg"}
                      alt={flavors[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-block bg-secondary text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                      {flavors[currentIndex].available}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{flavors[currentIndex].name}</h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{flavors[currentIndex].description}</p>
                    <button className="btn-primary w-fit bounce-soft">Pre-Order This Flavor</button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {flavors.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
