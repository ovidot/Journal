import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
    <div className="flex flex-col items-center space-y-4 w-full h-full text-black text-xl">
      <p> Hello World</p>
    </div>
    </main>
  )
}
