import { PieChart } from "@mui/x-charts/PieChart";

import { vendaProduto } from "../getVendas";

export default async function Page() {
  const dataset_produto = await vendaProduto();

  return (
    <PieChart
      series={[{ data: dataset_produto, },]}
      width={1800}
      height={900}
    />
  );
}
