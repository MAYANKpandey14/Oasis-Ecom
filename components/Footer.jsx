"use client";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-white border-t-2 border-gray-200 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-12">
        <div className="p-5 ">
          <ul>
            <p className="italic text-gray-800 font-bold text-3xl pb-6 select-none">Oasis</p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-orange-600 hover:text-[28px] ease-in-out duration-200" />
              <FaXTwitter className="text-2xl cursor-pointer hover:text-gray-800 hover:text-[28px] ease-in-out duration-200" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600 hover:text-[28px] ease-in-out duration-200" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600 hover:text-[28px] ease-in-out duration-200" />
            </div>
          </ul>
        </div>
        <div className="p-4">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Shop</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-black cursor-pointer">
              Shirts
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-black cursor-pointer">
              T-Shirts
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-black cursor-pointer">
              Jeans
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-black cursor-pointer">
              Jacket
            </li>
          </ul>
        </div>
        <div className="p-4">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-black cursor-pointer">
              About
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-black cursor-pointer">
              Values
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-black cursor-pointer">
              Careers
            </li>
            
          </ul>
        </div>
        <div className="p-4">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-black cursor-pointer">
              Contact
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-black cursor-pointer">
              Support Portals
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-white">
        <h1 className=" text-gray-800 font-semibold">
          © 2021-2022 All rights reserved | Build with ❤️ by{" "}
          <span className="font-semibold cursor-pointer">Oasis </span>
        </h1>
      </div>
    </>
  );
}
