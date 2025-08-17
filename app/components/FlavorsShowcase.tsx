"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"

const flavors = [
  {
    name: "Chocolate Chip Cookie Dough Supreme",
    description: "Premium Belgian chocolate chips nestled in edible cookie dough with a hint of vanilla bean",
    image: "/placeholder.svg?height=400&width=600",
    month: "January 2024",
    ingredients: ["Belgian Chocolate", "Vanilla Bean", "Cookie Dough"],
  },
  {
    name: "Strawberry Cheesecake Elegance",
    description: "Creamy New York-style cheesecake filling with fresh strawberry compote and graham cracker crumble",
    image: "/placeholder.svg?height=400&width=600",
    month: "February 2024",
    ingredients: ["Fresh Strawberries", "Cream Cheese", "Graham Crackers"],
  },
  {
    name: "Salted Caramel Pretzel Sophistication",
    description: "House-made salted caramel with artisanal pretzel pieces and a touch of sea salt",
    image: "/placeholder.svg?height=400&width=600",
    month: "March 2024",
    ingredients: ["Salted Caramel", "Artisanal Pretzels", "Sea Salt"],
  },
]

export default function FlavorsShowcase() {
  const [currentFlavor, setCurrentFlavor] = useState(0)

  const nextFlavor = () => {
    setCurrentFlavor((prev) => (prev + 1) % flavors.length)
  }

  const prevFlavor = () => {
    setCurrentFlavor((prev) => (prev - 1 + flavors.length) % flavors.length)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            Monthly <span className="gradient-text">Flavor Collections</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Discover our carefully curated seasonal flavors, each crafted with premium ingredients
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-96">
                <img
                  src={flavors[currentFlavor].image || "/placeholder.svg"}
                  alt={flavors[currentFlavor].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  key={currentFlavor}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 text-primary mr-2" />
                    <span className="text-primary font-medium">{flavors[currentFlavor].month}</span>
                  </div>

                  <h3 className="font-playfair text-3xl font-semibold mb-4 text-text-primary">
                    {flavors[currentFlavor].name}
                  </h3>

                  <p className="text-body mb-6">{flavors[currentFlavor].description}</p>

                  <div className="mb-8">
                    <h4 className="font-medium text-text-primary mb-3">Premium Ingredients:</h4>
                    <div className="flex flex-wrap gap-2">
                      {flavors[currentFlavor].ingredients.map((ingredient, index) => (
                        <span key={index} className="bg-secondary px-3 py-1 rounded-full text-sm text-text-secondary">
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="btn-primary">Pre-Order This Flavor</button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevFlavor}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-text-primary" />
          </button>

          <button
            onClick={nextFlavor}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-text-primary" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {flavors.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFlavor(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
