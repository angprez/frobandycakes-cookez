"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Cookie Monster",
    review: "Me love these cookies! They make me go OM NOM NOM NOM! Best cookies in all of Sesame Street!",
    rating: 5,
    avatar: "🍪",
  },
  {
    name: "Big Bird",
    review: "These cookies are as sunny as a beautiful day! Frances makes the most wonderful treats!",
    rating: 5,
    avatar: "🐥",
  },
  {
    name: "Elmo",
    review: "Elmo LOVES Frobandy Cakes! These cookies make Elmo so happy! Elmo wants more cookies!",
    rating: 5,
    avatar: "❤️",
  },
  {
    name: "Oscar the Grouch",
    review: "Usually I hate everything, but these cookies... they're disgustingly delicious! I love them!",
    rating: 5,
    avatar: "🗑️",
  },
]

export default function ReviewsSlider() {
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cookie Monster's <span className="text-primary">Reviews</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">What our cookie-loving friends are saying</p>
        </motion.div>

        <motion.div
          key={currentReview}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
        >
          <div className="text-6xl mb-6">{reviews[currentReview].avatar}</div>

          <div className="flex justify-center mb-6">
            {[...Array(reviews[currentReview].rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <blockquote className="text-xl md:text-2xl font-light mb-6 leading-relaxed">
            "{reviews[currentReview].review}"
          </blockquote>

          <cite className="text-lg font-semibold text-primary">- {reviews[currentReview].name}</cite>
        </motion.div>

        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview ? "bg-primary scale-125" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
