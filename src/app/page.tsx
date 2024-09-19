import { Descricao } from "#/components/descricao";

export default function Home() {
  return (
    <main>
      <div className="menu--container">
        <Descricao label="Página Inicial" descricao="Descrição das páginas." />
        <Descricao label="Cadastro" descricao="Cadastro de novos itens." />
        <Descricao label="Relatório" descricao="Tabela de equipamentos." />
      </div>
    </main>
  );
}
