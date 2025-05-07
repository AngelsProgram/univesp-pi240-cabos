import { LineChart } from '@mui/x-charts/LineChart';

import { vendasDia } from '../getVendas';
import { Filters } from './filter';

export default async function Page({ searchParams }: any) {
  const dataset_dia = await vendasDia(searchParams?.start, searchParams?.end);

  return (
    <>
      <Filters />
      <LineChart
        dataset={dataset_dia}
        xAxis={[{ scaleType: "point", dataKey: "d", label: "Dias" }]}
        yAxis={[{ label: "Quantidade", dataKey: "t" }]}
        series={[{ dataKey: "t", label: "Vendas por dia" }]}
        width={1800}
        height={900}
      />
    </>
  );
}
