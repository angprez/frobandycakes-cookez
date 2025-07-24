"use client"

import { motion } from "framer-motion"
import { Heart, Star, Crown } from "lucide-react"

const sizes = [
  {
    name: "Mini Cookies",
    weight: "1.2 oz",
    description: "Bite-sized joy that packs a punch! Perfect for sampling our magical flavors.",
    icon: Heart,
    color: "primary",
    bgGradient: "gradient-primary",
    features: ["Perfect for sampling", "Adorable size", "Great for gifts"],
  },
  {
    name: "LiL Baddies",
    weight: "3.5 oz",
    description: "Bakery size perfection! The ideal shareable treat that's not too big, not too small.",
    icon: Star,
    color: "secondary",
    bgGradient: "gradient-secondary",
    features: ["Bakery standard", "Perfect for sharing", "Most popular choice"],
    popular: true,
  },
  {
    name: "Big Daddy's",
    weight: "5.5 oz +",
    description: "The ultimate indulgence! Fully loaded & extra daddy - always available for maximum bliss.",
    icon: Crown,
    color: "accent",
    bgGradient: "gradient-accent",
    features: ["Maximum indulgence", "Always available", "Fully loaded"],
  },
]

export default function SizesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <Crown className="w-6 h-6 text-accent" />
            <span className="cursive-accent text-accent">Choose Your Bliss</span>
            <Crown className="w-6 h-6 text-accent" />
          </div>
          <h2 className="heading-secondary mb-6">
            Perfect <span className="text-gradient-primary">Sizes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From bite-sized joy to ultimate indulgence - we've got the perfect size for every craving! 🍪
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sizes.map((size, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group ${size.popular ? "scale-105" : ""}`}
            >
              {size.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-secondary text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular! 🌟
                  </span>
                </div>
              )}

              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-gray-200 h-full">
                {/* Icon Header */}
                <div
                  className={`w-20 h-20 ${size.bgGradient} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}
                >
                  <size.icon className="w-10 h-10 text-white" />
                </div>

                <div className="text-center mb-6">
                  <h3 className="font-oswald text-xl sm:text-2xl font-bold mb-2 text-gray-800 leading-tight">
                    {size.name}
                  </h3>
                  <p className={`text-${size.color} font-bold text-lg sm:text-xl`}>{size.weight}</p>
                </div>

                <p className="text-gray-600 text-center mb-6 leading-relaxed text-sm sm:text-base px-2">
                  {size.description}
                </p>

                <div className="space-y-3 mb-8">
                  {size.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center">
                      <div className={`w-2 h-2 bg-${size.color} rounded-full mr-3 flex-shrink-0`} />
                      <span className="text-gray-600 text-xs sm:text-sm text-center">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full btn-${size.color} group-hover:scale-105 transition-transform text-sm sm:text-base py-3 sm:py-4`}
                >
                  Choose This Size! 🍪
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
