"use client";

import Link from "next/link";
import { useState } from "react";
import { BsPlusSquareFill } from "react-icons/bs";
import { IoLogIn } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className="border-y-2 border-gray-200 rounded-md">
      <div className="flex p-2 justify-between mx-2 items-center">
        <div className="mx-8 text-xl font-bold">
          <h1 className="italic text-3xl font-bold cursor-pointer select-none">
            <Link 
            className=""
            href={'/'}
            >Oasis</Link>
          </h1>
        </div>
        <div className="hidden sm:flex ">
          <ul className="hidden md:flex gap-8 px-10 py-2 text-md font-semibold">
            <li className="hover:bg-gray-200 rounded-lg px-4 py-2 ease-in-out duration-300">
              <Link
                className="flex gap-2 items-center justify-center"
                href={"/login"}
              >
                <IoLogIn size={30} />
                Login / Register
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-white p-10 ease-in duration-500 border-r-2 border-gray-200 shadow-xl"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500 border-r-2 border-gray-200 shadow-xl"
        }
      >
        <ul className="grid place-items-start gap-4 list-none font-semibold text-md">
          <li className="">
            <Link className="flex gap-2 items-center justify-center" href={"/"}>
              <HiHome size={25} />
              Home
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center justify-center"
              href={"/login"}
            >
              <IoLogIn size={30} />
              Login
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center justify-center"
              href={"/register"}
            >
              <BsPlusSquareFill size={20} />
              Register
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
