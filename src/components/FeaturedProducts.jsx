import Image from "next/image"

const products = [
    { id: 1, name: "Standard Paper Target", price: 9.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "Reactive Splatter Target", price: 14.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "Silhouette Target", price: 12.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 4, name: "Long Range Target", price: 19.99, image: "/placeholder.svg?height=200&width=200" },
]

export default function FeaturedProducts() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                width={200}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                                <p className="text-gray-700 text-base mb-4">${product.price.toFixed(2)}</p>
                                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}