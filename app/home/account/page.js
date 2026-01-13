"use client"

import NavBar from '@/components/navbar'
import SideBar from '@/components/sideBar'
import { useCart } from '@/context/cartContext'
import PreLoader from "@/components/preloader"
import { CiMail, CiLock } from "react-icons/ci"
import { IoMdArrowDropdown } from "react-icons/io"
import { useState } from 'react'
import EditableImage from '@/components/editProfileImg'

const Page = () => {
  const { cart } = useCart()
  const [email, setEmail] = useState('amal paul')
  const [gender, setGender] = useState('')

  return (
      <div className="flex min-h-screen flex-col">

          <NavBar name="Account" />

          <div className="flex flex-1 flex-col md:flex-row">

              <div className="w-full md:w-64 bg-white shadow-md">
                  <SideBar Item={cart} />
              </div>

              <div className="flex flex-1 flex-col items-center gap-6 p-15">

                  <EditableImage
                    imageUrl="/images/img-1.jpg"
                    onEdit={() => console.log("Edit clicked")}
                  />
                  <h1 className="font-semibold text-3xl">Amal Paul</h1>


                  <form className="w-full max-w-md">

                      <div className="relative mb-4">
                          <label className="font-semibold block mb-1">Email</label>
                          <CiMail className="absolute right-3 top-13 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          <input
                              type="email"
                              value={email}
                              className="w-full h-12 border bg-white border-gray-300 rounded-xl py-2 pr-10 pl-3
                                        focus:outline-none focus:ring-2 focus:ring-black"
                              
                          />
                      </div>

                      <div className="relative">
                          <label className="font-semibold block mb-1">Gender</label>
                          <IoMdArrowDropdown className="absolute right-3 top-13 -translate-y-1/2 text-gray-400" />
                          <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full cursor-pointer h-12 border bg-white border-gray-300 rounded-xl py-2 pr-10 pl-3
                                        focus:outline-none focus:ring-2 focus:ring-black appearance-none"
                            >
                            <option value="" disabled>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            </select>
                      </div>

                  </form>

              </div>
          </div>
      </div>


  )
}

export default Page
