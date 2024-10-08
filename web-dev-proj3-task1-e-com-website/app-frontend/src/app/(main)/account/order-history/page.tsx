import {Metadata} from "next";


const orders = [
  {
    id: 1,
    datePlaced: 'January 22, 2021',
    orderNumber: 'WU88191111',
    totalAmount: 104.00,
    items: [
      {
        name: 'Men’s 3D Glasses Artwork Tee',
        price: 36.00,
        status: 'Delivered Jan 25, 2021',
        imageSrc: '/path-to-image-1',
      },
      {
        name: 'Women’s Moss Basic Tee',
        price: 32.00,
        status: 'Delivered Jan 25, 2021',
        imageSrc: '/path-to-image-2',
      },
      {
        name: 'Women’s Waves Artwork Tee',
        price: 36.00,
        status: 'Delivered Jan 25, 2021',
        imageSrc: '/path-to-image-3',
      },
    ],
  },
  {
    id: 2,
    datePlaced: 'January 5, 2021',
    orderNumber: 'WU88191009',
    totalAmount: 68.00,
    items: [
      {
        name: 'Women’s Gray Basic Tee',
        price: 32.00,
        status: 'Delivered Jan 7, 2021',
        imageSrc: '/path-to-image-4',
      },
      {
        name: 'Women’s Iso Dots Artwork Tee',
        price: 36.00,
        status: 'Delivered Jan 7, 2021',
        imageSrc: '/path-to-image-5',
      },
    ],
  },
]

export const metadata: Metadata = {
  title: 'Order History',
};

export default function OrderHistory() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900">Order history</h1>
        <p className="text-gray-600 mt-2">
          Check the status of recent orders, manage returns, and download invoices.
        </p>

        <div className="mt-10">
          {orders.map((order) => (
            <div key={order.id} className="bg-white shadow-md rounded-lg mb-8 p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Date placed:</span> {order.datePlaced}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Order number:</span> {order.orderNumber}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Total amount:</span> ${order.totalAmount.toFixed(2)}
                  </p>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  View Invoice
                </button>
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <img
                        src={item.imageSrc}
                        alt={item.name}
                        className="w-16 h-16 rounded-md"
                      />
                      <div className="ml-4">
                        <p className="text-lg font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">{item.status}</p>
                      </div>
                    </div>
                    <button className="text-indigo-600 hover:underline">
                      View Product
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
