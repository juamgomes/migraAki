import Link from 'next/link';
import Header from '../components/Header';

export default function DocRefugiados() {
  return (
    <main>
        <Header/>
        <div className='p-10'>
        <h1 className='font-bold text-2xl mb-4'>Regularização para Refugiados no Brasil</h1>

        <section className='mb-8'>
        {/* Carteira de Registro Nacional Migratório (CRNM) */}
        <h3 className='font-bold text-lg mt-4 text-emerald-600 '>Carteira de Registro Nacional Migratório (CRNM)</h3>
        <p className='mt-4 text-justify'>
        <h2 className='font-bold mb-4'>O que é?</h2>
            É um documento físico de identificação de estrangeiros registrado no Brasil, tem
            como objetivo facilitar a identificação do cidadão com as autoridades brasileiras.
        <h2 className='font-bold my-4'>Onde obter? </h2>
            Deve ser obtido pessoalmente nos postos de delegacia da Polícia Federal que
            realizem o procedimento
        <h2 className='font-bold mt-4'>Link para mais informações de postos de Delegacia da Polícia Federal:</h2>
        <Link 
        href="https://www.gov.br/pf/pt-br/acesso-a-informacao/institucional/quem-e-quem/superint
endencias-e-delegacias"
className='text-emerald-500'
        >
            Clique aqui
        </Link>

        <h2 className='font-bold mt-4'>Após a identificação da unidade desejada, prossiga para realizar o agendamento
Link para agendamento:</h2>
        <Link 
        href="https://servicos.dpf.gov.br/sismigra-internet/faces/publico/tipoSolicitacao/permanenc
        iaRegistroEmissaoCie.seam?cid=12052"
className='text-emerald-500'
        >
            Clique aqui
        </Link>
        <br/>
    Nesse determinado site será solicitado um preenchimento completo com dados
    pessoais do em um formulário eletrônico. Após realizar todo o preenchimento corretamente
    é necessário imprimir o formulário e o seu código
<h2 className='font-bold my-4'>Documentação Necessária:</h2>
        <ul className='list-disc pl-4'>
          <li>Duas fotos 3x4, recentes, coloridas e com fundo branco</li>
          <li>Cópia do comprovante de residência (conta de luz, de internet, gás, água, etc.)</li>
          <li>Caso não tenha comprovante de residência em seu nome, anexar o comprovante existente junto à carteira de identidade do titular do comprovante de residência, com declaração redigida e assinada por ele, para que confirme sua morada.</li>
          <li>Documento de identificação oficial de identidade do país de origem, ou documento com foto emitido por órgão público brasileiro.</li>
          <li>Formulário original do visto</li>
          <li>Documento de identificação do chamante (em casos de visto temporário por reunião familiar)</li>
          <li>Comprovante do pagamento de taxa</li>
        </ul>
O valor para se obter a CNRM é de R$ 204,77 e ela poderá ser paga em qualquer
instituição bancária, casas lotéricas, agência de correio e correspondentes bancários.
        </p>



        {/* CPF */}
        <h3 className='font-bold text-lg mt-4 text-emerald-600 '>Cadastro de Pessoa Física (CPF)</h3>
        <section className='mb-8'>
        <h3 className='my-4 font-bold text-lg'>O que é?</h3>
        <p>É um número de identificação fiscal atribuído a cada cidadão brasileiro, bem como a estrangeiros que residem no Brasil. Ele é emitido pela Receita Federal do Brasil e serve para identificar os contribuintes no país. Permite o acesso a uma série de facilidades, como o Sistema Público de Saúde (SUS), o registro em instituições públicas de educação, a abertura de contas em bancos e outras operações financeiras.</p>

        <h3 className=' my-4 font-bold text-lg'>Quem pode obter?</h3>
        <p>Qualquer cidadão nacional ou estrangeiro pode obter o cadastro.</p>

        <h3 className='font-bold text-lg my-4'>Onde obter?</h3>
        <p>Em qualquer agência da Receita Federal, mediante pagamento de taxa, e o documento será expedido na mesma hora em que solicitado. Para mais informações sobre endereço das agências: <a href='https://www.receita.fazenda.gov.br'>www.receita.fazenda.gov.br</a></p>

        <h3 className='font-bold text-lg my-4'>Documentos Necessários:</h3>
        <ul className='list-disc pl-4'>
          <li>Documento de identificação original ou cópia autenticada (aos maiores de 18 anos).</li>
          <li>Documento de identificação original ou a cópia autenticada e o documento de identificação de um dos pais ou responsável (aos menores de 18 anos).</li>
        </ul>
      </section>

        {/* Carteira de Trabalho e Previdência Social (CTPS) */}
        <h3 className='font-bold text-lg mt-4 text-emerald-600'>Carteira de Trabalho e Previdência Social (CTPS)</h3>
        <section className='mb-8'>
            <h3 className='font-bold text-lg my-4'>O que é?</h3>
            <p>É um documento oficial brasileiro que registra a vida profissional e previdenciária do trabalhador. Ela é emitida pelo Ministério da Economia e é um dos documentos mais importantes para quem está ingressando no mercado de trabalho no Brasil.</p>

            <h3 className='font-bold text-lg my-4'>Quem pode obter?</h3>
            <p>Qualquer pessoa maior de 14 anos, nacional ou estrangeira, com residência regular no Brasil.</p>

            <h3 className='font-bold text-lg my-4'>Onde obter?</h3>
            <p>Superintendência Regional do Trabalho e Emprego (SRTE) ou à Gerência Regional mais próxima da sua residência. Informações sobre a localização dos postos de atendimento podem ser obtidas por telefone 158 na Central de Atendimento Alô Trabalho.</p>

            <h3 className='font-bold text-lg my-4'>Documentos Necessários:</h3>
            <ul className='list-disc pl-4'>
            <li>Duas fotos em tamanho 3cmx4cm, com fundo branco, coloridas ou em preto-e-branco, iguais e recentes.</li>
            <li>Registro Nacional de Estrangeiro (RNE) original acompanhada de cópia (frente e verso) ou Protocolo de Solicitação do RNE (original e cópia).</li>
            </ul>
      </section>     
        </section>
        </div>
    </main>
  );
};
