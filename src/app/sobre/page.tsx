import Link from 'next/link';
import Header from '../components/Header';

export default function Sobre() {
  return (
    <main>
        <Header/>
        <div className='p-10'>
            <h1 className='font-bold text-2xl mb-4'>Sobre o site</h1>
            <p>
                O Site oferece um guia abrangente para Imigrantes e Refugiados, fornecendo informações vitais sobre documentos, serviços locais, auxílio em questão de trabalho, educação e saúde. Uma ferramenta indispensável para facilitar a transição e promover uma experiência suave de adaptação.
            </p>
        </div>
    </main>
  );
};
