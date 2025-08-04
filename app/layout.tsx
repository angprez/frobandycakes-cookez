import type React from "react"
import type { Metadata } from "next"
import { Poppins, Dancing_Script } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
})

export const metadata: Metadata = {
  title: "Frobandy Cakes - Luxury Cookies Stuffed with Awesomeness | Wichita",
  description:
    "Wichita's sweetest luxury cookie boutique. Handcrafted cookies stuffed, filled & topped with pure awesomeness. Pre-order your blissful treats today!",
  keywords: "luxury cookies, Wichita bakery, gourmet cookies, stuffed cookies, cookie boutique, artisan cookies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dancing.variable} font-poppins antialiased`}>{children}</body>
    </html>
  )
}
