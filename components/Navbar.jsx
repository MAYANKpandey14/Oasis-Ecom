"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { BsPlusSquareFill } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { useSession } from "next-auth/react";
import { BiLogIn, BiSolidUser } from "react-icons/bi";
import AuthContext from "@/context/AuthContext";

export default function Navbar() {
  const { data } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data, setUser]);

  console.log(data);

  return (
    <main className="border-y-2 border-gray-200 rounded-md">
      <div className="flex p-2 justify-between mx-2 items-center">
        <div className="mx-8 text-xl font-bold">
          <h1 className="italic text-3xl font-bold cursor-pointer select-none">
            <Link className="" href={"/"}>
              Oasis
            </Link>
          </h1>
        </div>
        <div className="hidden sm:flex">
          <ul className="hidden md:flex gap-8 px-10 py-2 text-md font-semibold">
            <li className=" flex hover:bg-gray-200 rounded-md px-4 py-2 ease-in-out duration-300">
              <Link
                className="flex gap-2 items-center justify-center"
                href={"/cart"}
              >
                <AiOutlineShoppingCart size={30} />
                <span className="text-lg">Cart</span>
              </Link>
            </li>
            <li className="hover:bg-gray-200 rounded-lg px-4 py-2 ease-in-out duration-300">
              {!user ? (
                <Link
                  className="flex gap-2 items-center justify-center"
                  href={"/login"}
                >
                  <BiLogIn size={30} />
                  <span className="text-lg">Login</span>
                </Link>
              ) : (
                <Link
                  className="flex gap-2 items-center justify-center"
                  href={"/login"}
                >
                  <BiSolidUser size={26} />
                  <span className="text-lg">{data?.user?.name}</span>
                </Link>
              )}
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
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-white p-10 ease-in-out duration-700 border-r-2 border-gray-200 shadow-xl"
            : "fixed left-[-100%] top-0 p-10  border-r-2 border-gray-200 shadow-xl"
        }
      >
        <ul className="grid place-items-start gap-4 list-none font-semibold text-md">
          <li className="hover:bg-gray-200 rounded-lg px-4 py-2 ease-in-out duration-300">
            <Link className="flex gap-2 items-center justify-center" href={"/"}>
              <HiHome size={28} />
              <span className="text-lg">Home</span>
            </Link>
          </li>
          <li className="hover:bg-gray-200 rounded-lg px-4 py-2 ease-in-out duration-300">
              {!user ? (
                <Link
                  className="flex gap-2 items-center justify-center"
                  href={"/login"}
                >
                  <BiLogIn size={30} />
                  <span className="text-lg">Login</span>
                </Link>
              ) : (
                <Link
                  className="flex gap-2 items-center justify-center"
                  href={"/login"}
                >
                  <BiSolidUser size={26} />
                  <span className="text-lg">{data?.user?.name}</span>
                </Link>
              )}
            </li>
        </ul>
      </div>
    </main>
  );
}