// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="flex-col lg:flex-row flex justify-between items-center px-10 py-4">
        <Link className='text-emerald-600 font-bold text-xl mb-4 lg:mb-0' href="/dashboard">
            MigrAki
          </Link>
        <div className='text-sm flex lg:text-lg items-center justify-center gap-7'>
          <Link href="/documentos-imigrantes">
            Documentos Imigrantes
          </Link>
          <Link href="/documentos-refugiados">
            Documentos Refugiados
          </Link>
          <Link href="/constituicaoLei">
            Constituição + Leis
          </Link>
          <Link href="/sobre">
            Sobre
          </Link>
        </div>
      </nav>
    </header>
  );
};


