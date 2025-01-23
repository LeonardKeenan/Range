import Link from "next/link"

export default function Hero() {
    return (
        <section className="bg-gray-800 text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Design Custom Targets Today</h1>
                <p className="text-xl mb-8">Create your perfect target or choose from our pre-designed collection</p>
                <div className="space-x-4">
                    <Link href="/shop" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Shop Targets
                    </Link>
                    <Link href="/design" className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded">
                        Design Your Own
                    </Link>
                </div>
            </div>
        </section>
    )
}

