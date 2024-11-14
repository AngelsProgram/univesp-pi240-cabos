import { getServerSession } from "next-auth";

import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from "@mui/x-charts/PieChart";

import { vendasDia, vendaProduto } from "./getVendas";

export default async function Page() {
  const session = await getServerSession();

  if (session?.user?.name !== "admin") {
    return (
      <main>
        <h3>
          Precisa estar logado como administrador!
        </h3>
      </main>
    )
  }

  const dataset_dia = await vendasDia();
  const dataset_produto = await vendaProduto();

  return (
    <div>
      <LineChart
        dataset={dataset_dia}
        xAxis={[{ scaleType: "point", dataKey: "d", label: "Dias" }]}
        yAxis={[{ label: "Quantidade", dataKey: "t" }]}
        series={[{ dataKey: "t", label: "Vendas por dia" }]}
        width={500}
        height={300}
      />
      <PieChart
        series={[{ data: dataset_produto, },]}
        width={400}
        height={200}
      />
    </div>
  );
}
