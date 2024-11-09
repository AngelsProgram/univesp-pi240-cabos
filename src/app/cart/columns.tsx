import type { ColumnDef } from "@tanstack/react-table";

import { ButtonRemoveCart } from "./ButtonRemoveFromCart"

import type { CartItem } from "#/context/context-cart";

export const columns: ColumnDef<CartItem, any>[] = [
  {
    header: "test",
    cell: (info) => (
      <button onClick={() => console.log(info.row.original)}>Click</button>
    ),
  },
  {
    header: "nome",
    accessorFn: (row) => row.produto.nome,
  },
  {
    header: "valor",
    accessorFn: (row) => row.produto.precoVendaImposto,
  },
  {
    accessorKey: "quantidade",
    // header: "quantidade",
  },
  {
    header: "Remover",
    cell: (info) => <ButtonRemoveCart id={info.row.original.produto.id} qtd={info.row.original.quantidade} />
  }
];
