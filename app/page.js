"use client"

import { useState, useEffect } from "react";
import Carosal from "../components/carosal";
import { CiMail, CiLock, CiUnlock } from "react-icons/ci";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import PreLoader from "@/components/preloader";

const Page = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {

    e.preventDefault();

    if(email=== "" || password===""){
        setMessage("Please fill all the fields")
        return
    }

    if(password.length < 6){
        setMessage("Password must be at least 6 characters long");
        return
    }

    try {
        setLoading(true);
        setMessage("");
        const response = await axios.post('http://localhost:3000/auth/login', {
            email,
            password
        }, { withCredentials: true });
        if(response.status==200){
            setMessage(response.data.message)
            router.push('/home/products')
        }else {
            setMessage(response.data.message)
        }
      
    } catch (error) {
        setMessage("Login failed. Please try again.");
    } finally {
        setLoading(false);
    }

  };

  return (
    <div className="flex bg-white min-h-screen">
      <div className="w-1/2 hidden md:block">
        <h1 className="absolute z-50 m-5 text-3xl font-bold">Magic Clay</h1>
        <Carosal />
      </div>

      <div className="flex flex-col w-full sm:w-1/3 justify-center items-center p-8">
        <div className="max-w-md">
          <h1 className="text-3xl text-center sm:hidden font-bold mb-8">Magic Clay</h1>
          <h1 className="text-4xl font-medium mt-6 mb-6">Login</h1>


          <form className="relative w-full" onSubmit={handleSubmit}>
            <label className="font-semibold block mb-1">Email</label>
            <CiMail className="absolute right-3 top-10 text-gray-400 pointer-events-none" />
            <input
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 pr-10 pl-3 mb-4
                          focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
              required
            />

            <label className="font-semibold">Password</label>
            {showPassword ? (
              <CiUnlock
                className="absolute right-3 top-33 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <CiLock
                className="absolute right-3 top-33 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 mt-2 mb-4"
              placeholder="Enter Your Password"
              required
            />

            {message && <p className="text-sm mt-3 text-red-500 mb-3">{message}</p>}
          
          <button 
          type="submit"
          className='w-full bg-black text-white py-2 mt-4 rounded-md hover:bg-gray-950 cursor-pointer font-semibold transition'>
          Login
          </button>
          </form>

          { loading && <PreLoader /> }

          <p className="text-sm mt-3 text-gray-500 font-semibold">Don&apos;t Have an Account? <Link href="/register" className="text-black hover:underline">Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Page
