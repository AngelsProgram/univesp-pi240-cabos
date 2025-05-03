
import { PieChart } from "@mui/x-charts/PieChart";

import { vendaProduto } from "../getVendas";

export default async function Page({ searchParams }: any) {
  const all = await vendaProduto();
  const dataset_produto = (searchParams?.itensFilter) ? all.filter(i => searchParams?.itensFilter.includes(i.label)) : all;

  return (
    <PieChart
      series={[{
        data: dataset_produto,
        highlightScope: { fade: 'global', highlight: 'item' },
        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
      },]}
      width={1800}
      height={900}
    />
  );
}
