"use client"
import { useState } from "react"
import Carosal from "@/components/carosal"
import axios from "axios"
import { useRouter } from "next/navigation"
import PreLoader from "@/components/preloader"

const Page = () => {

    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setLoading(true);
            setMessage("");
            const response = await axios.post('http://localhost:3000/auth/verify-otp', {
                otp
            });
            if(response.status==200){
                setMessage(response.data.message)
                router.push('/')
            }else {
                setMessage(response.data.message)
            }
        } catch (error) {
            setMessage('Failed to verify OTP or expired'+error)
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
          <h1 className="text-4xl font-medium mt-6 mb-6">Verify OTP</h1>
          <p className="text-sm mt-3 text-gray-500 mb-3">OTP sent to your registered email !</p>

          <form className="relative w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 pr-10 pl-3 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your otp"
              required
            />

            {message && <p className="text-sm mt-3 text-red-500 mb-3">{message}</p>}
          
          <button type="submit" className="w-full bg-black text-white py-2 mt-4 rounded-md hover:bg-gray-950 cursor-pointer font-semibold transition">Verify</button>
          </form>

            { loading && <PreLoader /> }

        </div>
      </div>
    </div>
  )
}

export default Page
