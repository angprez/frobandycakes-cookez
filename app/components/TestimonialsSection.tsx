"use client"

import { motion } from "framer-motion"
import { Star, Heart, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Cookie Monster",
    review: "Me LOVE these cookies! They make Cookie Monster go OM NOM NOM NOM! Best cookies in whole world! 🍪",
    rating: 5,
    avatar: "🍪",
    location: "Sesame Street",
  },
  {
    name: "Sarah J.",
    review: "OMG these cookies are INSANE! The Big Daddy size is perfect for sharing... but I never do! 😍",
    rating: 5,
    avatar: "😍",
    location: "Wichita, KS",
  },
  {
    name: "Mike T.",
    review:
      "I thought I knew what good cookies were... then I tried FROBANDYCAKES COOKEZ. My life is forever changed! ✨",
    rating: 5,
    avatar: "✨",
    location: "Kansas City, MO",
  },
  {
    name: "Big Bird",
    review: "These cookies are as sunny as a beautiful day! They make Big Bird's heart sing with joy! 🌞",
    rating: 5,
    avatar: "🌞",
    location: "Sesame Street",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-primary" />
            <span className="cursive-accent text-primary">Sweet Reviews</span>
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <h2 className="heading-secondary text-white mb-6">
            Cookie <span className="text-gradient-primary">Love</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            What our cookie-loving friends are saying about their blissful experiences! 💕
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20"
            >
              <Quote className="w-8 h-8 text-secondary mb-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-200 mb-6 leading-relaxed text-sm">"{testimonial.review}"</p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-secondary text-lg px-10 py-5">Join the Cookie Love! 💕</button>
        </motion.div>
      </div>
    </section>
  )
}
