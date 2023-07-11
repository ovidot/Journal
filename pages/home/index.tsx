import { Feed } from '@/components/Feed'
import { Sidebar } from '@/components/Sidebar'
import { Inter } from 'next/font/google'
import { signIn, useSession } from "next-auth/react";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const { data: session } = useSession();

  useEffect(()=>{
    if (!session){
      router.push('/auth/signin')
    }
  },[])
  return (
    <>
    {session && (
    <div
      className={""}>
    <main className="flex min-h-screen max-w-7xl mx-auto ">
      {/* Sidebar */}
      <Sidebar />
      {/* Journal Feed */}
      <Feed />

      {/* Widget */}

      {/* Modal */}
    </main>
    </div>)}
    </>
  )
}
