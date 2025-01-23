import { Target, ShoppingCart, Truck } from "lucide-react"

const steps = [
    {
        icon: Target,
        title: "Choose or Design",
        description: "Select from our pre-made targets or create your own custom design.",
    },
    {
        icon: ShoppingCart,
        title: "Add to Cart",
        description: "Add your selected targets to the cart and proceed to checkout.",
    },
    { icon: Truck, title: "Fast Delivery", description: "We'll ship your order quickly and securely to your doorstep." },
]

export default function HowItWorks() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center">
                            <div className="bg-white rounded-full p-4 inline-block mb-4">
                                <step.icon size={48} className="text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

