'use client'

import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"


export default function UserInfo(){
    const {data:session}= useSession();
    return(
        <div className="grid place-items-center h-screen">
            <div className=" shadow-xl p-8 rounded-md border-t-4 border-blue-500 bg-white flex flex-col gap-2 my-6">
                <div>
                    Name: <span className="font-bold">{session?.user?.name}</span>
                </div>
                <div>
                    Email: <span className="font-bold">{session?.user?.email}</span>
                </div>
                <button onClick={()=>signOut()} className="bg-red-600 rounded-md text-white mt-4 max-w-fit py-2 px-6">Sign Out</button>
            </div>
        </div>
    )
}