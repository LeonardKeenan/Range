import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/faq">FAQs</Link>
                            </li>
                            <li>
                                <Link href="/privacy">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms">Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p>123 Target Lane</p>
                        <p>Shooterville, ST 12345</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@targetsite.com</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-red-600">
                                <Facebook />
                            </a>
                            <a href="#" className="hover:text-red-600">
                                <Twitter />
                            </a>
                            <a href="#" className="hover:text-red-600">
                                <Instagram />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                        <p className="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
                        <form className="flex">
                            <input type="email" placeholder="Your email" className="flex-grow px-4 py-2 rounded-l-md" />
                            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-md">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2023 Gun Range Target Site. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

