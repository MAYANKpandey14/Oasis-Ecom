"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineMailOutline , MdPassword , MdOutlineDriveFileRenameOutline } from "react-icons/md";


export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const router= useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("");
      setError("All fields neccessary.");
      return;
    }

    if(password.length<6){
      setError("");
      setError("Atleast 6 digit password required");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("");
        setError("User already exists.")
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        const form = e.target;
        setError("");
        form.reset();
        router.push("/"); 
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-xl bg-white p-5 border-t-4 border-blue-600 rounded-lg">
        <h1 className="text-3xl font-bold mt-2 mb-10 text-center">
          Let&rsquo;s get you onboarded 🚀
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mx-2">
          <label className=" flex gap-1 items-center font-semibold mx-1" htmlFor="name">
          <MdOutlineDriveFileRenameOutline className="m-0 p-0" size={25}/>Full Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            placeholder="John Wick"
            
          />

          <label  className=" flex gap-1 items-center font-semibold mx-1" htmlFor="email">
          <MdOutlineMailOutline className="m-0 p-0" size={25}/>Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="example@mail.com"
           
          />

          <label className=" flex gap-1 items-center font-semibold mx-1" htmlFor="password">
          <MdPassword className="m-0 p-0" size={25}/>Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="Must have atleast 6 characters"
          />
          <button className="bg-blue-600 text-white font-bold rounded-md cursor-pointer px-6 py-2">
            Register
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <div>
            <Link href={"/"} className="text-sm mt-4">
              Already have an account?{" "}
              <span className="font-semibold underline">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
