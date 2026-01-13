"use client"

import Image from "next/image"
import { MdDelete } from "react-icons/md"
import { useCart } from "@/context/cartContext";

const CartItem = ({Item}) => {

  const { product, quantity } = Item
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex flex-col md:flex-row w-full md:w-150 h-auto md:h-40 bg-white rounded-xl shadow-md gap-4">

        <div className="flex justify-center md:justify-start">
            <Image
            src={product?.img_url}
            alt="Product Image"
            className="rounded-xl object-cover"
            width={120}
            height={80}
            />
        </div>

        <div className="flex-1 pt-2 md:pt-4 text-center md:text-left">
            <h2 className="font-semibold text-lg text-black">
            {product?.name}
            </h2>

            <p className="text-gray-600 text-sm">
            Seller: {product?.seller} <span className="mx-1">|</span> Color: {product?.color}
            </p>
            
            <button onClick={()=>removeFromCart(product.id)} className="cursor-pointer">
            <MdDelete
            size={24}
            className="text-black mt-3 md:mt-4 mx-auto md:mx-0"
            />
            </button>
        </div>

        <div className="flex flex-col items-center gap-2 md:gap-5 p-5 md:ml-4">
            <p className="text-xl font-semibold">$ {product?.price}</p>

            <div className="flex gap-2">
            <button 
            onClick={()=>updateQuantity(product.id, "dec")}
            className="bg-black hover:bg-gray-800 cursor-pointer text-white px-3 py-1 rounded-full font-semibold"
            >
            -
            </button>
            <span className="text-gray-800 font-medium">{quantity}</span>
            <button 
            onClick={() => updateQuantity(product.id, "inc")}
            className="bg-black hover:bg-gray-800 cursor-pointer text-white px-3 py-1 rounded-full font-semibold"
            >
            +
            </button>
            </div>
        </div>
        </div>

  )
}

export default CartItem
