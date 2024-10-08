
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: '/images/tshirt-black.jpg', // replace with your image path
    imageAlt: 'Black T-shirt',
  },
  {
    id: 2,
    name: 'Basic Tee',
    price: '$32.00',
    color: 'Stone',
    size: 'Large',
    imageSrc: '/images/tshirt-stone.jpg', // replace with your image path
    imageAlt: 'Stone T-shirt',
  },
]


export default function OrderSummary() {
    return (
        <>
            <section className="lg:col-span-1 bg-white p-6 shadow-md rounded-lg mt-12 lg:mt-0">
                <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
                <div className="mt-4">
                    <ul className="-my-4 divide-y divide-gray-200">
                        {products.map((product) => (
                            <li key={product.id} className="flex items-center py-4">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="flex-none w-16 h-16 rounded-md border border-gray-200"
                                />
                                <div className="ml-4 flex-auto">
                                    <h3 className="text-gray-900 font-medium">{product.name}</h3>
                                    <p className="text-gray-500">{product.color}, {product.size}</p>
                                </div>
                                <div className="ml-4 text-gray-900">{product.price}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-6 border-t border-gray-200 pt-4 space-y-4">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$64.00</p>
                    </div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Shipping</p>
                        <p>$65.00</p>
                    </div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Tax</p>
                        <p>$5.52</p>
                    </div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total</p>
                        <p>$75.52</p>
                    </div>
                    <button
                        className="mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-md text-base font-medium hover:bg-indigo-700"
                    >
                        Confirm Order
                    </button>
                </div>
            </section>
        </>
    )
}