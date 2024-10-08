import React from "react";

export default function Invoice(){
  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-lg font-bold">Invoice #00011</h1>
          <p className="text-gray-600">Tuple, Inc</p>
        </div>
        <div className="flex space-x-4">
          <button className="text-blue-600 font-semibold">Copy URL</button>
          <button className="text-blue-600 font-semibold">Edit</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Send</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-6 rounded-md shadow-md">
          <div className="mb-8">
            <div className="flex justify-between">
              <div>
                <h2 className="font-semibold">From</h2>
                <p className="text-gray-600">Acme, Inc.</p>
                <p className="text-gray-600">7243 Cynthia Pass</p>
                <p className="text-gray-600">Toronto, ON M4Y 1B6</p>
              </div>
              <div>
                <h2 className="font-semibold">To</h2>
                <p className="text-gray-600">Tuple, Inc.</p>
                <p className="text-gray-600">888 Walter Street</p>
                <p className="text-gray-600">New York, NY 12345</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold">Projects</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="pb-2">Project</th>
                  <th className="pb-2">Hours</th>
                  <th className="pb-2">Rate</th>
                  <th className="pb-2">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Logo redesign</td>
                  <td className="py-2">20.0</td>
                  <td className="py-2">$100.00</td>
                  <td className="py-2">$2,000.00</td>
                </tr>
                <tr>
                  <td className="py-2">Website redesign</td>
                  <td className="py-2">52.0</td>
                  <td className="py-2">$100.00</td>
                  <td className="py-2">$5,200.00</td>
                </tr>
                <tr>
                  <td className="py-2">Business cards</td>
                  <td className="py-2">12.0</td>
                  <td className="py-2">$100.00</td>
                  <td className="py-2">$1,200.00</td>
                </tr>
                <tr>
                  <td className="py-2">T-shirt design</td>
                  <td className="py-2">4.0</td>
                  <td className="py-2">$100.00</td>
                  <td className="py-2">$400.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border-t pt-4 flex justify-between">
            <p>Subtotal</p>
            <p>$8,200.00</p>
          </div>
          <div className="border-t pt-4 flex justify-between">
            <p>Tax</p>
            <p>$1,750.00</p>
          </div>
          <div className="border-t pt-4 flex justify-between">
            <p>Total</p>
            <p>$10,560.00</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <div className="mb-4">
            <p className="text-gray-600">Amount</p>
            <h2 className="text-2xl font-bold">$10,560.00</h2>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">Alex Curran</p>
            <p>January 31, 2023</p>
            <p>Paid with MasterCard</p>
          </div>
          <button className="text-blue-600 font-semibold">Download receipt</button>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-md shadow-md">
        <h2 className="font-semibold">Activity</h2>
        <ul className="mt-4">
          <li className="flex justify-between mb-4">
            <div>
              <p>Cheslea Hagon created the invoice</p>
              <p className="text-sm text-gray-600">7 days ago</p>
            </div>
          </li>
          <li className="flex justify-between mb-4">
            <div>
              <p>Cheslea Hagon edited the invoice</p>
              <p className="text-sm text-gray-600">4 days ago</p>
            </div>
          </li>
          <li className="flex justify-between mb-4">
            <div>
              <p>Cheslea Hagon sent the invoice</p>
              <p className="text-sm text-gray-600">4 days ago</p>
            </div>
          </li>
          <li className="flex justify-between mb-4">
            <div>
              <p>Cheslea Hagon commented</p>
              <p className="text-sm text-gray-600">
                Called client, they reassured me the invoice would be paid by
                the 25th.
              </p>
              <p className="text-sm text-gray-600">3 days ago</p>
            </div>
          </li>
          <li className="flex justify-between mb-4">
            <div>
              <p>Alex Curran viewed the invoice</p>
              <p className="text-sm text-gray-600">2 days ago</p>
            </div>
          </li>
          <li className="flex justify-between">
            <div>
              <p>Alex Curran paid the invoice</p>
              <p className="text-sm text-gray-600">1 day ago</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
