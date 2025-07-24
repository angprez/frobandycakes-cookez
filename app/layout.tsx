import type React from "react"
import type { Metadata } from "next"
import { Oswald, Pacifico } from "next/font/google"
import "./globals.css"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
})

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export const metadata: Metadata = {
  title: "FROBANDYCAKES COOKEZ - Luxury Cookies Stuffed with Awesomeness | Wichita",
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
      <body className={`${oswald.variable} ${pacifico.variable} font-oswald antialiased`}>{children}</body>
    </html>
  )
}
