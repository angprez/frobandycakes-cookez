"use client"

import { motion } from "framer-motion"
import { Calendar, Instagram, Truck, Shield, Heart } from "lucide-react"

const steps = [
  {
    icon: Calendar,
    title: "Pre-Orders Only",
    description:
      "Sweet drops announced on social media! Order through our website or slide into our DMs for guaranteed freshness.",
    color: "primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Instagram,
    title: "Monthly Flavors",
    description:
      "Discover our rotating seasonal creations! Each month brings new magical flavors revealed on Instagram.",
    color: "secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Truck,
    title: "Shipping & Delivery",
    description:
      "Nationwide shipping every Monday after pre-order. Local Wichita friends get Sunday delivery in limited time slots!",
    color: "accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Shield,
    title: "Returns & Refunds",
    description:
      "Due to our artisanal process and premium ingredients, all sales are final to ensure the highest quality.",
    color: "primary",
    bgColor: "bg-primary/10",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-br from-pink-50/50 to-blue-50/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-primary" />
            <span className="font-dancing text-2xl text-primary">Sweet & Simple</span>
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How It <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your journey to cookie bliss is just a few sweet steps away! 🍪✨
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div
                className={`${step.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-${step.color}/20 h-full`}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
                  <span className={`text-${step.color} font-bold text-lg`}>0{index + 1}</span>
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}
                >
                  <step.icon className={`w-8 h-8 text-${step.color}`} />
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-primary text-lg px-10 py-5 sweet-bounce">Ready to Start? Pre-Order Now! 🎉</button>
        </motion.div>
      </div>
    </section>
  )
}
