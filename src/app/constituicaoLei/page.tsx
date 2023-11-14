import Link from 'next/link';
import Header from '../components/Header';

export default function ConstituicaoLeis() {
  return (
    <main>
        <Header/>
        <div className='p-10'>
            <h1 className='font-bold text-2xl mb-4'>Constituição + Leis</h1>
            <Link className='font-bold text-lg my-4  text-emerald-600 ' href='http://www.planalto.gov.br/ccivil_03/Leis/l9474.htm'>
              LEI Nº 9.474, DE 22 DE MAIO DE 1997.
            </Link>
            <p>
            </p> 

            <div className='mt-10'>
              <Link className='font-bold text-lg mt-4  text-emerald-600 ' href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13445.htm">
                  LEI Nº 13.445, DE 24 DE MAIO DE 2017
              </Link>
              <p>
                 Esta Lei dispõe sobre os direitos e os deveres do migrante e do visitante, regula a sua entrada e estada no País e estabelece princípios e diretrizes para as políticas públicas para o emigrante.
              </p>
            </div>
        </div>
    </main>
  );
};
