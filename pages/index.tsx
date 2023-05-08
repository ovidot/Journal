import { Feed } from '@/components/Feed'
import { Sidebar } from '@/components/Sidebar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
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
    </div>
  )
}
