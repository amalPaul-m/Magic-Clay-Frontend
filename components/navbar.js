"use client";

import { useState } from "react";
import Image from "next/image";
import { MdSearch, MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";

const Header = ({ name }) => {
  const [showSearch, setShowSearch] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full min-h-[10vh] bg-white rounded-br-2xl shadow-md">
      <div className="px-12 md:px-10 py-3 flex items-center justify-between gap-4">

        <h1 className="text-sm md:text-2xl font-semibold text-black">
          Magic Clay
        </h1>

        <h3 className="text-sm md:text-xl font-medium text-gray-700"> {name} </h3>

        <div className={`${pathname==="/home/account" ? 'invisible' : '' } hidden md:flex items-center gap-2 border-b border-gray-400 focus-within:border-black w-[30vw]`}>
          <MdSearch size={24} className="text-gray-600" />
          <input
            type="text"
            placeholder="Search products"
            className="w-full bg-transparent text-gray-600 p-2 outline-none"
          />
        </div>

        <button
          onClick={() => setShowSearch(true)}
          className="md:hidden text-gray-700"
          aria-label="Open search"
        >
          <MdSearch size={26} />
        </button>

        <div className="flex items-center gap-2">
          <div className="text-right leading-tight hidden md:block">
            <p className="font-semibold text-black text-sm md:text-base">
              Amal
            </p>
            <p className="text-[10px] md:text-xs text-gray-500">
              Buyer
            </p>
          </div>

          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border">
            <Image
              src="/favicon.ico"
              alt="Profile Picture"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>

      {showSearch && (
        <div className="md:hidden px-4 py-3 flex items-center gap-2 border-t">
          <MdSearch size={22} className="text-gray-600" />
          <input
            autoFocus
            type="text"
            placeholder="Search products"
            className="flex-1 bg-transparent border-b border-gray-400 p-2 outline-none"
          />
          <button
            onClick={() => setShowSearch(false)}
            className="text-gray-700"
            aria-label="Close search"
          >
            <MdClose size={24} />
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;