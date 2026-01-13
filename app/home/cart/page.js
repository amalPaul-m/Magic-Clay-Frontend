"use client"

import NavBar from "@/components/navbar"
import SideBar from "@/components/sideBar"
import CartItem from "@/components/cartItem"
import Summary from "@/components/summary"
import { useCart } from "@/context/cartContext";
import PreLoader from "@/components/preloader"

const Page = () => {

  const { cart, loading } = useCart();

  if (loading) return <PreLoader />;

  return (
      <div className="flex min-h-screen flex-col">

        <NavBar name="Cart" />

        <div className="flex flex-1 flex-col md:flex-row">
          <div className="w-full md:w-64 bg-white shadow-md">
            <SideBar Item={cart}/>
          </div>

          <div className="flex-1 flex flex-col md:flex-row md:ms-10 gap-4 p-4 sm:p-6 md:p-8">
            <div className="flex-1 flex flex-col gap-4">
              {cart.map((Item)=> (
                <CartItem 
                key={`${Item.id}-${Item?.product?.id}`} 
                Item={Item} 
                />
              ))}
            </div>
            <div className="md:mt-20 md:me-10">
              <Summary Item={cart}/>
            </div>
          </div>
          
        </div>
      </div>


  )
}

export default Page
