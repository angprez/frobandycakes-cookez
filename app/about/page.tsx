"use client"

import { motion } from "framer-motion"
import { Heart, Star, Play } from "lucide-react"
import { useState } from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function AboutPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero Section - Redesigned Layout */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-blue-50 pt-20">
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
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content - Text Above Video Layout */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-primary/20"
              >
                <Heart className="w-5 h-5 text-primary" />
                <span className="font-semibold text-gray-800">Our Sweet Story</span>
              </motion.div>

              {/* Title - Adjusted Font Size */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-oswald font-bold leading-tight"
              >
                About
                <br />
                <span className="cursive-accent text-4xl md:text-5xl lg:text-6xl text-gradient-primary">
                  FROBANDYCAKES COOKEZ
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Where every cookie tells a story of passion, creativity, and pure deliciousness! 🍪✨
              </motion.p>

              {/* About Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <p className="text-gray-700 leading-relaxed">
                  Meet Frances, the heart and soul behind FROBANDYCAKES COOKEZ. With a background in mental health and
                  academic services, she brings the same care and dedication to cookie making that she once brought to
                  helping families and children.
                </p>
              </motion.div>

              {/* Video Element - Positioned Below Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  {!isVideoPlaying ? (
                    <div className="relative">
                      <img
                        src="/placeholder.svg?height=300&width=500&text=Frances+Cookie+Making+Video"
                        alt="Frances making FROBANDYCAKES COOKEZ"
                        className="w-full h-[300px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setIsVideoPlaying(true)}
                          className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm hover:bg-white transition-colors"
                        >
                          <Play className="w-6 h-6 text-primary ml-1" />
                        </motion.button>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm font-medium">Watch Frances' Cookie Making Process</p>
                      </div>
                    </div>
                  ) : (
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-full h-[300px] object-cover"
                      poster="/placeholder.svg?height=300&width=500"
                    >
                      <source src="/videos/frances-cookie-making.mp4" type="video/mp4" />
                    </video>
                  )}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Large Feature Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative lg:mt-16"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=700&width=600&text=Frances+Portrait+Professional"
                  alt="Frances, founder of FROBANDYCAKES COOKEZ"
                  className="w-full h-[600px] lg:h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Overlay Text */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <h3 className="font-oswald text-xl font-bold text-gray-800 mb-2">Frances</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      From mental health professional to cookie artist - bringing care and creativity to every batch.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 gradient-secondary rounded-full float-gentle opacity-80" />
              <div
                className="absolute -bottom-6 -left-6 w-24 h-24 gradient-accent rounded-full float-gentle opacity-60"
                style={{ animationDelay: "2s" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Frobandy Story Section - Enhanced Design */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 mb-6">
                <Star className="w-6 h-6 text-secondary" />
                <span className="cursive-accent text-secondary text-xl">Meet Frances</span>
                <Star className="w-6 h-6 text-secondary" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-oswald font-bold mb-6">
                The <span className="text-gradient-primary">Frobandy Story</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Story Content */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-3xl p-8 md:p-10 shadow-lg">
                  <h3 className="font-oswald text-2xl md:text-3xl font-bold mb-6 text-gray-800">Fran is the owner</h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Prior to Reel Goats, Frances has worked within the Mental Health & Academic field working with
                      children and families providing mental health services such as therapeutic interventions, case
                      management, program development & evaluation, supervision of staff and more.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      This rich background in caring for others naturally translates into the love and attention she
                      puts into every cookie creation, making each treat a small act of care and joy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Facts Sidebar */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="font-oswald text-lg font-bold mb-4 text-gray-800">Professional Background</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Mental Health Services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Academic Field Work</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Program Development</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Staff Supervision</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-6 shadow-lg">
                  <h4 className="font-oswald text-lg font-bold mb-3 text-gray-800">Cookie Philosophy</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    "Every cookie should bring the same joy and care that I brought to helping families."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-oswald font-bold text-white mb-6">
              Ready to Taste Frances' <span className="text-gradient-primary">Magic?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience cookies crafted with the same care and attention Frances brought to her work with families!
              🍪✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-10 py-5">Pre-Order Now!</button>
              <button className="btn-secondary text-lg px-10 py-5">Contact Us</button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
