"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdInventory, MdShoppingCart, MdPerson, MdMenu, MdClose } from "react-icons/md";
import LogoutButton from "./logout";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 text-gray-700"
        aria-label="Open menu"
      >
        <MdMenu size={28} />
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed md:static top-0 bottom-0 left-0 z-50 h-screen w-70 bg-white shadow-lg rounded-b-2xl p-6 flex flex-col md:justify-between
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >

        <button
          onClick={() => setOpen(false)}
          className="md:hidden self-end mb-4 text-gray-700"
          aria-label="Close menu"
        >
          <MdClose size={26} />
        </button>

        <div>
          <h2 className="text-xs font-semibold text-gray-400 mb-6 tracking-widest">
            MENU
          </h2>

          <ul className="space-y-4">
            <li>
              <Link
                href="/protected/products"
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 ${pathname === '/protected/products' ? 'text-black' : 'text-gray-400'} font-medium hover:text-black transition`}
              >
                <MdInventory size={20} />
                My Products
              </Link>
            </li>

            <li>
              <Link
                href="/protected/cart"
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 ${pathname === '/protected/cart' ? 'text-black' : 'text-gray-400'} font-medium hover:text-black transition`}
              >
                <MdShoppingCart size={20} />
                Cart
                <span className={`absolute right-4 flex ${pathname === '/protected/cart' ? 'bg-black' : 'bg-gray-400'} h-5 w-5 items-center justify-center rounded-full hover:bg-black text-[12px] font-bold text-white`}>
                  2
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/protected/profile"
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 ${pathname === '/protected/profile' ? 'text-black' : 'text-gray-400'} font-medium hover:text-black transition`}
              >
                <MdPerson size={20} />
                Account
              </Link>
            </li>
          </ul>
        </div>

        <LogoutButton />
      </div>
    </>
  );
}

export default Sidebar;
