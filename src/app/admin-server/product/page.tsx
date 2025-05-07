
import { PieChart } from "@mui/x-charts/PieChart";

import { getProdutos } from '../getVendas';
import { vendaProduto } from "../getVendas";
import Filters from './filters';

export default async function Page({ searchParams }: any) {
  const produtos = await getProdutos();
  const all = await vendaProduto();
  const dataset_produto = (searchParams?.itensFilter) ? all.filter(i => searchParams?.itensFilter.includes(i.label)) : all;

  return (
    <>
      <Filters produtos={produtos} />
      <PieChart
        series={[{
          data: dataset_produto,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },]}
        width={1800}
        height={900}
      />
    </>
  );
}
