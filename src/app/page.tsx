'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


export default function Home() {

  const router = useRouter();

  return (
    <main className='bg-estrada h-screen'>
         
        <div className='p-10 bg-slate-900 rounded-lg'>
          <h1 className='font-bold text-2xl'>Tudo que você precisa em um só lugar!</h1>
          <h2 className='text-slate-400'>Ajudamos voçê com a sua regularização</h2>
          <button className='mt-10 bg-cyan-600 py-4 px-6 rounded-lg' onClick={() => router.push('/dashboard')}>Começar</button>
        </div>
    </main>
  )
}
