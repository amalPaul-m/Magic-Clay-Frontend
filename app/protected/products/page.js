"use client"

import NavBar from "@/components/navbar"
import SideBar from "@/components/sideBar"
import { useEffect } from "react";
import axios from "axios";
import ProductCard from "@/components/productCard";

const Page = () => {

  useEffect(() => {
    axios.get("http://localhost:3000/auth/me", {
      withCredentials: true
    })
    .catch(() => {
      router.replace("/");
    });
  }, []);

  const arr = [1,2,3,4,5,6,7,8,9,10];

  return (
  <div className="flex min-h-screen flex-col">
    <NavBar />

    <div className="flex flex-1">
      <SideBar />

      <div className="flex flex-1 flex-wrap gap-10 p-10 mx-10">
        {arr.map((item, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  </div>

  )
}

export default Page
