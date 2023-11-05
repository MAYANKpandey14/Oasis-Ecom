"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();
  return (
    <div className="grid place-items-center h-screen">
      <div className=" shadow-xl p-8 rounded-md border-t-4 border-gray-800 bg-white flex flex-col gap-4 my-6">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <button
            onClick={() => signOut()}
            className="bg-red-600 rounded-md text-white m-auto max-w-fit py-2 px-6 shadow-md hover:shadow-lg ease-in-out duration-500"
          >
            Sign Out
          </button>
          <Link
            href={"/checkout"}
            className="bg-blue-600 px-4 py-2 rounded-md m-auto text-white w-fit shadow-md hover:shadow-lg ease-in-out duration-500"
          >
            Go to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
