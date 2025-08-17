"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ShoppingCart } from "lucide-react"

export default function StickyOrderButton() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [100, 200], [0, 1])
  const scale = useTransform(scrollY, [100, 200], [0.8, 1])

  return (
    <motion.div style={{ opacity, scale }} className="fixed bottom-6 right-6 z-50">
      <motion.button
        className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-full shadow-2xl flex items-center space-x-2 bounce-soft"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ShoppingCart className="w-5 h-5" />
        <span>Pre-Order Now</span>
      </motion.button>
    </motion.div>
  )
}
