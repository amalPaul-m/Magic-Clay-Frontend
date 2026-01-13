"use client";

import Image from "next/image";
import { useCart } from "@/context/cartContext"

const ProductCard = ({item}) => {

  const { addToCart } = useCart();

  return (
    <div className="group relative h-65 w-45 overflow-hidden rounded-xl">
      
      <Image
        src={item?.img_url} 
        alt="Product"
        fill
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20"></div>


      <div className="absolute bottom-0 z-20 h-32 w-full translate-y-full rounded-t-xl bg-white/90 p-3 transition-transform duration-300 ease-out group-hover:translate-y-0">
        <p className="pt-2 ps-2 text-lg font-bold text-gray-800">
            {item.name}
        </p>

        <p className="ps-2 text-base font-medium text-gray-800">
            ₹{item.price}
        </p>

        <button onClick={()=>addToCart(item.id)} className="cursor-pointer mt-3 ms-2 w-[calc(100%-1rem)] rounded-md bg-black py-1.5 text-sm font-semibold text-white transition hover:bg-gray-900">
            Add to Cart
        </button>
      </div>

    </div>
  );
};

export default ProductCard;
