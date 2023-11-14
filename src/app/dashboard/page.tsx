'use client'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'


export default function dashboard() {

  return (
    
    <main className='bg-regula bg-cover h-screen'>
      <Header />
      <div className='p-10 bg-emerald-600 rounded-sm'>
        <div className='gap-4'>
          <h1 className='font-bold text-2xl'>Regularização para Imigrantes e Refugiados no Brasil</h1>      
        </div>
      </div>
    </main>
  )
}
