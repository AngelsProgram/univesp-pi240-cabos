import { prisma } from "#/context/database";

import { Descricao } from "#/components/descricao";

const conn_t = <span style={{ color: "green" }}>Connected</span>;
const conn_f = <span style={{ color: "red" }}>Disconnected</span>;

export default async function Home() {
  let status = false;

  try {
    const connections = await prisma.$connect();
    status = true;
  } catch (error) { }

  return (
    <main>
      <div className="menu--container">
        <Descricao label='"Database status' descricao={status ? conn_t : conn_f} />
        <Descricao label="Página Inicial" descricao="Descrição das páginas." />
        <Descricao label="Página Inicial" descricao="Descrição das páginas." />
        <Descricao label="Cadastro" descricao="Cadastro de novos itens." />
        <Descricao label="Relatório" descricao="Tabela de equipamentos." />
      </div>
    </main>
  );
}
