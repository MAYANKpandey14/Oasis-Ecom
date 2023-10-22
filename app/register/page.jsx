

import RegisterForm from "@/components/RegisterForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Register() {

  const session = await getServerSession(authOptions);
  if(session){
    redirect("/dashboard");
  }

  return (
    <main className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-blue-500 via-zinc-200 to-blue-800">
      <RegisterForm/>
    </main>
  );
}
