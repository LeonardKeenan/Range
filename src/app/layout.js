import "./globals.css"
import { Metadata } from "next"
import { Montserrat, Roboto } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" })

export const metadata = {
  title: "Gun Range Target Site",
  description: "Custom and pre-made targets for gun enthusiasts",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable} font-sans`}>{children}</body>
    </html>
  )
}

