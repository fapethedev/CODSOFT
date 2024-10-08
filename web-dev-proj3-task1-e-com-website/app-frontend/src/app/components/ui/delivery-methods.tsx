import {RadioGroup} from "@headlessui/react";
import {useState} from "react";

const deliveryMethods = [
  { id: 1, title: 'Standard', turnaround: '4–10 business days', price: '$5.00' },
  { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
]

export default function DeliveryMethods() {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0])

    return (
        <>
            <section className="mt-8">
                <h2 className="text-lg font-medium text-gray-900">Delivery Method</h2>
                <RadioGroup value={selectedDeliveryMethod} onChange={setSelectedDeliveryMethod} className="mt-4">
                    <div className="grid grid-cols-2 gap-4">
                        {deliveryMethods.map((method) => (
                            <RadioGroup.Option key={method.id} value={method}>
                                {({checked}) => (
                                    <div
                                        className={`relative border rounded-lg p-4 cursor-pointer ${
                                            checked ? 'border-indigo-500 ring-2 ring-indigo-500' : 'border-gray-300'
                                        }`}
                                    >
                                        <div className="flex justify-between">
                                            <span className="text-sm font-medium text-gray-900">{method.title}</span>
                                            <span className="text-sm font-medium text-gray-900">{method.price}</span>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">{method.turnaround}</p>
                                    </div>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </section>
        </>
    )
}