"use client"

import { motion } from "framer-motion"
import { Mail, Instagram, Facebook, MessageCircle, Clock, Heart } from "lucide-react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-lg border border-primary/20"
            >
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="font-semibold text-gray-800">Let's Connect</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="heading-primary mb-6"
            >
              📞{" "}
              <span className="cursive-accent text-5xl md:text-6xl lg:text-7xl text-gradient-primary">Contact Us!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              We'd love to hear from you! Reach out with any questions, special requests, or sweet messages. 💕
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Email Us */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Mail className="w-10 h-10 text-white" />
              </div>

              <h3 className="font-oswald text-2xl font-bold mb-4 text-gray-800">📧 Email Us</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Click the button "Email Us" or write to:</p>
              <p className="font-semibold text-primary mb-6 text-lg">frobandycakes@gmail.com</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full"
                onClick={() => (window.location.href = "mailto:frobandycakes@gmail.com")}
              >
                Email Us 💌
              </motion.button>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-20 h-20 gradient-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <MessageCircle className="w-10 h-10 text-gray-900" />
              </div>

              <h3 className="font-oswald text-2xl font-bold mb-4 text-gray-800">💬 Message Us on Social Media</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">We typically respond within 24–48 hours.</p>

              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <Instagram className="w-5 h-5 text-pink-500" />
                  <span className="font-semibold text-gray-700">Instagram: @frobandycakes</span>
                </div>
                <div className="flex items-center justify-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <Facebook className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold text-gray-700">Facebook: Frobandy Cakes</span>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/frobandycakes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                      "_blank",
                    )
                  }
                  className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-full transition-colors"
                >
                  <Instagram className="w-5 h-5 mx-auto" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.open("https://www.facebook.com/FrobandyCAKES", "_blank")}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-full transition-colors"
                >
                  <Facebook className="w-5 h-5 mx-auto" />
                </motion.button>
              </div>
            </motion.div>

            {/* No Phone Support */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center md:col-span-2 lg:col-span-1"
            >
              <div className="w-20 h-20 gradient-accent rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>

              <h3 className="font-oswald text-2xl font-bold mb-4 text-gray-800">🚫 No Phone Support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To keep things running efficiently in the kitchen, we do not take phone calls.
              </p>
              <p className="text-gray-600 leading-relaxed">Thank you for understanding! 🍪</p>

              <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 italic">
                  "We're too busy making your cookies perfect to answer the phone!" 😊
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Response Time Info */}
      <section className="section-padding bg-gradient-to-br from-secondary/10 via-white to-primary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center space-x-2 mb-6">
              <Heart className="w-6 h-6 text-primary" />
              <span className="cursive-accent text-primary">Sweet Communication</span>
              <Heart className="w-6 h-6 text-primary" />
            </div>

            <h2 className="heading-secondary mb-8">
              We're Here to <span className="text-gradient-primary">Help!</span>
            </h2>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <h3 className="font-oswald text-lg font-bold mb-2">Email Response</h3>
                  <p className="text-gray-600 text-sm">Usually within 24 hours</p>
                </div>

                <div>
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="font-oswald text-lg font-bold mb-2">Social Media</h3>
                  <p className="text-gray-600 text-sm">24-48 hours response time</p>
                </div>

                <div>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🍪</span>
                  </div>
                  <h3 className="font-oswald text-lg font-bold mb-2">Pre-Orders</h3>
                  <p className="text-gray-600 text-sm">Confirmed same day</p>
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
            <h2 className="heading-secondary text-white mb-6">
              Ready for Some <span className="text-gradient-primary">Cookie Magic?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't wait! Our monthly flavors sell out fast. Pre-order your blissful treats today! 🍪✨
            </p>
            <button className="btn-primary text-lg px-10 py-5 sweet-bounce">Pre-Order Now!</button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
