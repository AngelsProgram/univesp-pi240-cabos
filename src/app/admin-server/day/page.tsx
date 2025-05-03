import { LineChart } from '@mui/x-charts/LineChart';

import { vendasDia } from "../getVendas";

export default async function Page({ searchParams }: any) {
  const dataset_dia = await vendasDia();

  return (
    <LineChart
      dataset={dataset_dia}
      xAxis={[{ scaleType: "point", dataKey: "d", label: "Dias" }]}
      yAxis={[{ label: "Quantidade", dataKey: "t" }]}
      series={[{ dataKey: "t", label: "Vendas por dia" }]}
      width={1800}
      height={900}
    />
  );
}
