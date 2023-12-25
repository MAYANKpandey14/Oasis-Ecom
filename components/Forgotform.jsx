'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Forgotform(){
    const router =useRouter();
    const [error,setError]=useState("");
    // const session =useSession();


    const handleSubmit = async(e)=>{
        e.preventDefault();
        let oldpass= document.querySelector('#old-pass').value;
        let newpass= document.querySelector('#new-pass').value;
        console.log("Old password is",oldpass);
        console.log("New password is",newpass);
        
    try {
        const res = await fetch("api/forget-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email}),
        });
  
        if (res.status === 400) {
          setError("This email does not exists.");
        } 
        if (res.status === 200) {
            setError("");
            router.push("/login");
          }
      } catch (error) {
        setError("Error, try again!");
        console.log("Error during registration: ", error);
      }
    };

return(
    <div className="flex flex-col items-center m-10 w-[500px] py-4 bg-white border-t-4 border-black rounded-md drop-shadow-md">
        <div className="my-4">
        <h1 className="text-3xl font-bold">Update Password</h1>
        </div>
        <div className="mt-4 mb-10">
        <form className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="">Old Password</label>
            <input id="old-pass" type="password" />
            <label className="font-semibold" htmlFor="">New Password</label>
            <input id="new-pass" type="password" />
            <button onClick={handleSubmit} type="submit" className="border-2 border-black w-fit px-2 py-1 bg-black text-white rounded-md drop-shadow-md ">Submit</button>
        </form>
        </div> 
    </div>
)
}