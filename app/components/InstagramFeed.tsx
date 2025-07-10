"use client"

import { motion } from "framer-motion"
import { Instagram, Heart, MessageCircle } from "lucide-react"

const instagramPosts = [
  {
    id: 1,
    image: "/placeholder.svg?height=300&width=300",
    likes: 234,
    comments: 18,
    caption: "Fresh batch of Big Daddy cookies ready for pickup! 🍪✨",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=300&width=300",
    likes: 189,
    comments: 12,
    caption: "Behind the scenes: Cookie dough prep for tomorrow's orders 👩‍🍳",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=300",
    likes: 312,
    comments: 25,
    caption: "New flavor alert! Strawberry cheesecake cookies coming soon 🍓",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=300&width=300",
    likes: 156,
    comments: 8,
    caption: "Sunday delivery prep for our Wichita customers! 🚚",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=300&width=300",
    likes: 278,
    comments: 19,
    caption: "Cookie Monster approved! These chocolate chip beauties 🍪",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=300&width=300",
    likes: 201,
    comments: 14,
    caption: "Pre-orders opening tomorrow at 9 AM! Set those alarms ⏰",
  },
]

export default function InstagramFeed() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Instagram className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Follow Our <span className="text-primary">Journey</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest creations and behind-the-scenes moments
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.image || "/placeholder.svg"}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <div className="flex items-center">
                      <Heart className="w-5 h-5 mr-1" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-5 h-5 mr-1" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <p className="text-sm px-4">{post.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-secondary inline-flex items-center">
            <Instagram className="w-5 h-5 mr-2" />
            Follow @FrobandyCakes
          </button>
        </motion.div>
      </div>
    </section>
  )
}
