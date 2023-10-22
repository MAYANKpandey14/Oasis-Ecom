
import LoginForm from '@/components/LoginForm';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);
  if(session){
    redirect("/dashboard");
  }
  return (
    <main className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-blue-500 via-zinc-200 to-blue-800">
      <LoginForm/>
    </main>
  )
}
