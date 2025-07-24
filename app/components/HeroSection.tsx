"use client"

import { motion } from "framer-motion"
import { Play, Sparkles, Cookie } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-blue-50">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-primary/20 rounded-full float-gentle" />
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-secondary/30 rounded-full float-gentle"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-10 h-10 bg-accent/20 rounded-full float-gentle"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-40 w-12 h-12 bg-primary/10 rounded-full float-gentle"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-4 h-4 bg-secondary/40 rounded-full sparkle"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent/50 rounded-full sparkle"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Sweet Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-lg border border-primary/20"
            >
              <Cookie className="w-5 h-5 text-primary" />
              <span className="font-semibold text-gray-800">Wichita's Sweetest Cookie Boutique</span>
              <Sparkles className="w-4 h-4 text-secondary" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald font-bold leading-tight mb-6"
            >
              <span className="text-gray-800">Luxury Cookies</span>
              <br />
              <span className="cursive-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient-primary block">
                Stuffed with Awesomeness!
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0"
            >
              Net weight 5.5 – 7 oz of pure bliss. Handcrafted with love, stuffed with premium ingredients, and topped
              with magic! ✨
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 lg:px-0"
            >
              <button className="btn-primary text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 sweet-bounce whitespace-nowrap">
                Pre-Order Your Bliss! 🍪
              </button>
              <button className="btn-secondary text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 whitespace-nowrap">
                See How It Works
              </button>
            </motion.div>

            {/* Fun Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex items-center justify-center lg:justify-start space-x-8 mt-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">12</div>
                <div className="text-sm text-gray-600">Monthly Flavors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">7oz</div>
                <div className="text-sm text-gray-600">Pure Bliss</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {!isVideoPlaying ? (
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="Delicious FROBANDYCAKES COOKEZ cookies"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsVideoPlaying(true)}
                      className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm"
                    >
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </motion.button>
                  </div>
                </div>
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full h-[500px] object-cover"
                  poster="/placeholder.svg?height=600&width=800"
                >
                  <source src="/videos/hero-cookies.mp4" type="video/mp4" />
                </video>
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 gradient-secondary rounded-full float-gentle opacity-80" />
            <div
              className="absolute -bottom-6 -left-6 w-24 h-24 gradient-accent rounded-full float-gentle opacity-60"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute top-1/2 -right-4 w-8 h-8 gradient-primary rounded-full sparkle"
              style={{ animationDelay: "1s" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
