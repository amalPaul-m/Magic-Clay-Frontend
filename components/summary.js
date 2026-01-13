import { useEffect, useState } from "react"


const Summary = ({Item = []}) => {
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
    if (Item.length > 0) {
        setQuantity(Item.length);

        const total = Item.reduce((acc, curr) => {
        return acc + (parseFloat(curr.product.price) * curr.quantity);
        }, 0);

        setTotalPrice(total);
    }
    }, [Item]);
  return (
      <div className="w-full md:w-80 bg-white rounded-xl shadow-md p-5 flex flex-col gap-4 self-start">
        <h2 className="text-xl font-semibold">Order Summary</h2>

        <div className="flex justify-between">
          <span>Products</span>
          <span>{quantity}</span>
        </div>

        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${totalPrice}</span>
        </div>

        <button className="bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Checkout
        </button>
      </div>
  )
}

export default Summary
