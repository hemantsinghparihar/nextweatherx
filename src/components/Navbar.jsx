'use client';

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="nav-co py-2 ">
      <div className="nav-in-co text-white py-1 px-6 flex justify-between items-center ">
        {/* Logo */}
        <div className="font-bold text-[20px]">Junpier</div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none relative z-50"
          onClick={toggleMenu}
        >
          <i className={`ri-menu-line text-[24px] ${isOpen ? "hidden" : "block"}`}></i>
          <i className={`ri-close-line text-[24px]   ${isOpen ? "block" : "hidden"}`}></i>
        </button>

        {/* Navigation Links */}
        {/* <div
          className={`absolute md:static top-0 right-0 bg-[#D2982D] md:bg-transparent md:flex md:items-center md:justify-evenly h-screen md:h-auto transition-all duration-300 ease-in-out ${
            isOpen ? "w-[50vw]" : "w-0"
          } overflow-hidden md:overflow-visible`}
        >
          <ul className="flex flex-col md:flex-row items-center min-w-[270px] space-y-2 md:space-y-0 md:min-w-[270px] py-3 md:py-1 md:h-auto md:w-auto relative z-50"> */}


        <div
          className={`absolute md:static top-0 right-0  md:bg-transparent md:flex z-40md:items-center md:justify-evenly transition-all duration-300 ease-in-out  ${
            isOpen ? "block pt-8 bg-[#243642]" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:justify-evenly  items-center min-w-[270px]  space-y-2 md:space-y-0 md:min-w-[270px] relative z-40 bg-[#243642]  md:bg-transparent py-3 md:py-1 md:h-auto md:w-auto h-[100vh] w-[50vw] ">
            
            <li className="border-b  md:border-none w-full md:w-auto text-2xl md:text-[16px] font-bold md:font-medium md:p-0 p-3 text-zinc-100 hover:text-white
                hover:bg-[#387478] duration-300 md:hover:bg-transparent md:hover:text-zinc-100
            ">
              <Link
                href="/"
                className={`${
                  pathname === "/"
                    ? "md:border-b-[2px] border-white"
                    : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="border-b  md:border-none w-full md:w-auto text-2xl md:text-[16px] font-bold md:font-medium md:p-0 p-3 text-zinc-100 hover:text-white
                hover:bg-[#387478] duration-300 md:hover:bg-transparent md:hover:text-zinc-100
            ">
              <Link
                href="/info"
                className={`${
                  pathname === "/info"
                    ? "md:border-b-[2px] border-white"
                    : ""
                }`}
              >
                Info
              </Link>
            </li>
            <li className="border-b  md:border-none w-full md:w-auto text-2xl md:text-[16px] font-bold md:font-medium md:p-0 p-3 text-zinc-100 hover:text-white
                hover:bg-[#387478] duration-300  md:hover:bg-transparent md:hover:text-zinc-100
            ">
              <Link
                href="/shop"
                className={`${
                  pathname === "/shop"
                    ? "md:border-b-[2px] border-white"
                    : ""
                }`}
              >
                Shop
              </Link>
            </li>
            {/* <li className="text-[16px] font-medium"></li> */}
            <li className="border-b md:border-none w-full md:w-auto text-2xl md:text-[16px] font-bold md:font-medium md:p-0 p-3 text-zinc-100 hover:text-white
                hover:bg-[#387478] duration-300 md:hover:bg-transparent md:hover:text-zinc-100
            ">
              <Link
                href="/"
                className={`${
                  pathname === "/search"
                    ? "md:border-b-[2px] border-white"
                    : ""
                }`}
              >
                <i className="ri-search-line"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


// 'use client'

// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Navbar = () => {
//     const pathname=usePathname()
//   return (
//     <div className="nav-co py-2">
//         <div className="nav-in-co text-white py-1 px-6 flex justify-between items-center">
//             <div className="font-bold text-[20px]">Junpier</div>
//             <div>
//                 <ul className="flex justify-evenly items-center min-w-[270px]">
//                     <li className="text-[16px] font-medium">
//                         <Link href={'/'} className={`${pathname==='/'?'border-b-[2px] border-white ':''}`}>home</Link>
                        
//                     </li>
//                     <li className="text-[16px] font-medium">
//                         <Link href={'/info'} className={`${pathname==='/info'?'border-b-[2px] border-white ':''}`}>Info</Link>
//                     </li>
//                     <li className="text-[16px] font-medium">
//                         <Link href={'/shop'} className={`${pathname==='/shop'?'border-b-[2px] border-white ':''}`}>Shop</Link>
//                     </li>
//                     {/* <li className="text-[16px] font-medium">
//                         <Link href={'/tos'} className={`${pathname==='/tos'?'border-b-[2px] border-white ':''}`}>TOS</Link>
//                     </li> */}
//                     <li className="text-[16px] font-medium">
//                         <Link href={'/'} className={`${pathname==='/'?'border-b-[2px] border-white ':''}`}><i className="ri-search-line "></i></Link>
//                     </li>
//                 </ul>
//             </div>

//         </div>
//     </div>
//   );
// };

// export default Navbar;
