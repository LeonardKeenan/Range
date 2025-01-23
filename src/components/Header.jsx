import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export default function Header() {
    return (
        <header className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    Logo
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/shop">Shop Targets</Link>
                        </li>
                        <li>
                            <Link href="/design">Design Your Own</Link>
                        </li>
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    <Link href="/login" className="text-sm">
                        Login / Sign-Up
                    </Link>
                    <Link href="/cart" className="relative">
                        <ShoppingCart size={24} />
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            0
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

