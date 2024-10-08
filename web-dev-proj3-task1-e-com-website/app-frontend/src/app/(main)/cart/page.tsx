'use client'

import {useState} from 'react'


export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Basic Tee',
      color: 'Sienna',
      size: 'Large',
      price: 32.00,
      imageSrc: '/path-to-image-1',
      inStock: true,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Basic Tee',
      color: 'Black',
      size: 'Large',
      price: 32.00,
      imageSrc: '/path-to-image-2',
      inStock: false,
      quantity: 1,
      shippingTime: 'Ships in 2-3 weeks',
    },
    {
      id: 3,
      name: 'Nomad Tumbler',
      color: 'White',
      price: 35.00,
      imageSrc: '/path-to-image-3',
      inStock: true,
      quantity: 1,
    },
  ])

  const [subtotal, setSubtotal] = useState(99.00)
  const [shippingEstimate, setShippingEstimate] = useState(5.00)
  const [taxEstimate, setTaxEstimate] = useState(8.32)
  const [total, setTotal] = useState(112.32)

  const handleQuantityChange = (id: number, quantity: number) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    )
    setCartItems(updatedItems)
  }

  return (
    <div className="min-h-screen">
      <header className=" py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <div className="flex justify-between mt-10">
          {/* Cart Items */}
          <div className="w-3/5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-200 py-6"
              >
                <div className="flex items-center">
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className="w-24 h-24 rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.color}, {item.size}
                    </p>
                    {item.inStock ? (
                      <p className="text-sm text-green-600">In stock</p>
                    ) : (
                      <p className="text-sm text-gray-600">
                        {item.shippingTime}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-16 h-10 border border-gray-300 rounded-md"
                  >
                    {[1, 2, 3, 4, 5].map((qty) => (
                      <option key={qty} value={qty}>
                        {qty}
                      </option>
                    ))}
                  </select>
                  <p className="text-lg text-gray-900">${item.price}</p>
                  <button
                    className="text-sm text-red-600"
                    onClick={() =>
                      setCartItems(cartItems.filter((i) => i.id !== item.id))
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-1/3 shadow-md rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping estimate</p>
                <p>${shippingEstimate.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Tax estimate</p>
                <p>${taxEstimate.toFixed(2)}</p>
              </div>
              <div className="flex justify-between font-medium text-gray-900">
                <p>Order total</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>
            <button className="mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700">
              Checkout
            </button>
          </div>
        </div>

        {/* You may also like section */}
        <div className="mt-12">
          <h3 className="text-lg font-medium text-gray-900">You may also like...</h3>
          <div className="flex space-x-4 mt-6">
            {/* Suggested products */}
            {[
              { name: 'Leather Wallet', price: 118, imageSrc: '/path-to-wallet' },
              { name: 'Pencil Set', price: 70, imageSrc: '/path-to-pencil' },
              { name: 'Notebooks', price: 28, imageSrc: '/path-to-notebook' },
              { name: 'Organizer', price: 149, imageSrc: '/path-to-organizer' },
            ].map((product) => (
              <div key={product.name} className="w-1/5 bg-white shadow-md rounded-lg p-4">
                <img src={product.imageSrc} alt={product.name} className="w-full h-32 object-cover rounded-md" />
                <h4 className="text-sm font-medium text-gray-900 mt-2">{product.name}</h4>
                <p className="text-sm text-gray-600">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
