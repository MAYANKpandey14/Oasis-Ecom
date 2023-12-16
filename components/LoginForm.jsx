"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MdOutlineMailOutline , MdPassword } from "react-icons/md";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  

const router = useRouter();

const  handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("");
      setError("All fields are necessary.");
      return;
    }
    
    try {
        const res= await signIn("credentials",{
            email,password,redirect:false,
        });

        if(res.error){
            setError("");
            setError("Invalid Credentials.");
            return;
        }

        router.replace("dashboard");
    } catch (error) {
        console.log(error);
    }

  };

  return (
    <div className="grid place-items-center h-screen ">
      <div className="shadow-lg p-5 bg-white border-t-4 border-gray-800 rounded-lg">
        <h1 className="text-3xl font-bold mt-2 mb-10 text-center ">
        Welcome👋
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mx-2">
          <label className="flex gap-1 items-center font-semibold mx-1 select-none" htmlFor="email">
          <MdOutlineMailOutline className="m-0 p-0" size={25}/>Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="example@mail.com"
          />

          <label className=" flex items-center gap-1 font-semibold mx-1 select-none" htmlFor="password">
            <MdPassword className="m-0 p-0" size={25}/>Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="Must have atleast 6 characters"
          />
          <button className="bg-black text-white font-bold rounded-md cursor-pointer px-6 py-2 select-none shadow-md hover:shadow-xl ease-in-out duration-500">
            Login
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <div className="flex flex-col">
            <Link href={"/register"} className="text-sm mt-4">
              Don&rsquo;t have an account?{" "}
              <span className="font-semibold underline">Register</span>
            </Link>
<<<<<<< HEAD

            {/* //forgot password  link*/}
            <Link className="flex flex-col text-sm underline text-red-500 font-semibold" href={"/forgot"}>Forgot Password</Link>
=======
            <Link href={"/forgot"} className="mt-4 underline text-red-500">Forgot Password</Link>
            {/* This is a link to forgot page */}
>>>>>>> 73ae0635e9e7aad35201a4990b833c1dd2cc7ac7
          </div>
        </form>
      </div>
    </div>
  );
}
