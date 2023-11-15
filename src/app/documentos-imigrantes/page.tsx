import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import Header from '../components/Header';



export default function DocImigrantes() {
 
  return (
    <main>
        <Header/>
        <div className='p-10'>
        <h1 className='font-bold text-2xl mb-4'>Regularização para imigrante no Brasil</h1>
        </div>
    <div className='flex flex-col justify-center items-center' >
          {/* CRNM */}
          <Accordion className='bg-zinc-950 w-4/5 rounded-lg mb-4'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='text-white'/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='font-bold text-lg text-emerald-600'>Carteira de Registro Nacional Migratório (CRNM)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='p-2 lg:p-10 text-justify text-white'>
      
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
      
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* CPF */}
        <Accordion className='bg-zinc-950 w-4/5 rounded-lg mb-4'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='text-white'/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className='font-bold text-lg text-emerald-600'>Cadastro de Pessoa Física (CPF)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='p-10 text-justify text-white'>
              <h3 className='mb-4 font-bold text-lg'>O que é?</h3>
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
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* CPTS */}
        <Accordion className='bg-zinc-950 w-4/5 rounded-lg mb-4'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='text-white'/>}
            aria-controls="panel3a-content"
            id="panel2a-header"
          >
            <Typography className='font-bold text-lg text-emerald-600'>Carteira de Trabalho e Previdência Social (CTPS)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='p-10 text-justify text-white'>
            <h3 className='font-bold text-lg mb-4'>O que é?</h3>
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
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* CNH */}
        <Accordion className='bg-zinc-950 w-4/5 rounded-lg mb-4'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='text-white'/>}
            aria-controls="panel3a-content"
            id="panel2a-header"
          >
            <Typography className='font-bold text-lg text-emerald-600'>Carteira Nacional de Habilitação (CNH)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='p-10 text-justify text-white'>
            <h3 className='font-bold text-lg my-4'>O que é?</h3>
          <p>A Carteira Nacional de Habilitação (CNH) é um documento oficial que atesta a aptidão de um cidadão para conduzir veículos automotores no Brasil. Ela é emitida pelo Departamento Nacional de Trânsito (DENATRAN) e é válida em todo o território nacional.</p>
          <h3 className='font-bold text-lg my-4'>Quem pode obter?</h3>
          <p>Para obter a CNH na categoria A (para motocicletas e similares) ou ACC (para ciclomotores), o candidato deve ter pelo menos 18 anos. Para as demais categorias (B, C, D, e E), a idade mínima varia de 21 a 24 anos, dependendo da categoria do veículo. Deve ser alfabetizado, ou seja, ser capaz de ler e escrever.</p>
          <h3 className='font-bold text-lg my-4'>Documentação Necessária para estrangeiro que já possui habilitação em seu país</h3>
          <ul className='list-disc pl-4'>
            <li>Carteira de habilitação do país de origem, dentro do prazo de validade</li>
            <li>Permissão Internacional para Dirigir (PID) acompanhada de habilitação estrangeira, válida, quando se tratar de documentos expedidos por Parte Contratante da Convenção de Viena sobre Trânsito Viário de 1968</li>
            <li>Documento de identificação</li>
            <li>Documento que comprove a data de entrada no país.</li>
            <li>Deverá submeter-se aos Exames de Aptidão Física e Mental e Avaliação Psicológica, respeitada a sua categoria, para obter a Carteira Nacional de Habilitação (CNH)</li>
          </ul>
          <p>O estrangeiro não habilitado, com estada regular no Brasil, pretendendo habilitar-se para conduzir veículo automotor no território nacional, deverá satisfazer todas as exigências previstas na legislação de trânsito brasileira em vigor.</p>
          <p>Para mais informações, acesse o site do DETRAN do estado em que se encontra.</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion>
      
    </div>
        
        
        
    </main>
  );
};
