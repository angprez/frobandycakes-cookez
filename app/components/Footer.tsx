"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Mail, MapPin, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white fill-current" />
                </div>
                <div>
                  <h3 className="font-oswald text-2xl md:text-3xl font-bold text-primary">FROBANDYCAKES COOKEZ</h3>
                  <p className="cursive-accent text-gray-400 text-sm">Stuffed with Awesomeness</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Wichita's sweetest luxury cookie boutique! We craft cookies stuffed, filled & topped with pure
                awesomeness. Every bite is 5.5-7 oz of pure bliss! 🍪✨
              </p>
            </motion.div>

            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/frobandycakes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/FrobandyCAKES"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Facebook className="w-5 h-5 text-gray-900" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-oswald font-bold mb-6 text-lg">Sweet Links</h4>
            <ul className="space-y-3">
              {["About Us", "How It Works", "Pre-Order", "Contact", "Cookie Love"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-oswald font-bold mb-6 text-lg">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300">Wichita, Kansas</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-gray-300">frobandycakes@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 FROBANDYCAKES COOKEZ. All rights reserved. Made with 💕 and lots of cookies in Wichita, Kansas.
          </p>
        </div>
      </div>
    </footer>
  )
}
