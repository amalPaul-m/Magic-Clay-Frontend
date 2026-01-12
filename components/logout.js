"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import { MdLogout } from "react-icons/md";


const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      axios.post("http://localhost:3000/auth/logout", {}, { withCredentials: true });
      router.replace("/"); 
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <button onClick={handleLogout} className="cursor-pointer flex items-center gap-3 text-gray-700 font-medium hover:text-black transition">
    <MdLogout size={20} />
    Logout
    </button>
  );
}

export default LogoutButton;