"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

const flavors = [
  {
    name: "Chocolate Chip Cookie Dough Explosion",
    description:
      "Loaded with premium cookie dough chunks and Belgian chocolate chips - it's like eating raw cookie dough but better! 🍪",
    image: "/placeholder.svg?height=400&width=600",
    month: "January",
    emoji: "🍫",
  },
  {
    name: "Strawberry Cheesecake Dream",
    description: "Creamy cheesecake filling swirled with fresh strawberry goodness - summer vibes in every bite! 🍓",
    image: "/placeholder.svg?height=400&width=600",
    month: "February",
    emoji: "🍓",
  },
  {
    name: "Salted Caramel Pretzel Crunch",
    description:
      "Sweet meets salty perfection with gooey caramel and crunchy pretzel pieces - absolutely addictive! 🥨",
    image: "/placeholder.svg?height=400&width=600",
    month: "March",
    emoji: "🥨",
  },
  {
    name: "Birthday Cake Bonanza",
    description: "It's a party in your mouth! Funfetti cookie with vanilla buttercream and rainbow sprinkles! 🎂",
    image: "/placeholder.svg?height=400&width=600",
    month: "April",
    emoji: "🎂",
  },
]

export default function FlavorShowcase() {
  const [currentFlavor, setCurrentFlavor] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentFlavor((prev) => (prev + 1) % flavors.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextFlavor = () => {
    setCurrentFlavor((prev) => (prev + 1) % flavors.length)
    setIsAutoPlaying(false)
  }

  const prevFlavor = () => {
    setCurrentFlavor((prev) => (prev - 1 + flavors.length) % flavors.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-secondary/10 via-white to-primary/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-secondary" />
            <span className="font-dancing text-2xl text-secondary">Monthly Magic</span>
            <Sparkles className="w-6 h-6 text-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Rotating <span className="text-gradient-primary">Flavors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every month brings new magical creations that'll make your taste buds dance! ✨
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-96">
                <motion.img
                  key={currentFlavor}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={flavors[currentFlavor].image || "/placeholder.svg"}
                  alt={flavors[currentFlavor].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 right-4 text-4xl">{flavors[currentFlavor].emoji}</div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  key={currentFlavor}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="text-primary font-bold">{flavors[currentFlavor].month} Special</span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 leading-tight">
                    {flavors[currentFlavor].name}
                  </h3>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{flavors[currentFlavor].description}</p>

                  <button className="btn-primary sweet-bounce">Pre-Order This Flavor! 🎉</button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevFlavor}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextFlavor}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {flavors.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentFlavor(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentFlavor ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
