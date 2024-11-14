import type { ColumnDef } from "@tanstack/react-table";

import { Prisma } from '@prisma/client'

type Produto = Prisma.ProdutoGetPayload<{ include: { venda: true } }>

import type { Venda } from "@prisma/client";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { MdDeleteForever } from "react-icons/md";

import { modalDelete } from "#/modals/table";
import { deleteProduto } from "./actions";

import { ButtonAddCart } from "#/components/table/buttonAddCart"

export const columnsD: ColumnDef<Produto, any>[] = [
  {
    header: "test",
    cell: (info) => (
      <button onClick={() => console.log(info.row.original)}>Click</button>
    ),
  },
  {
    accessorKey: "id",
    // accessorFn: (row) => row.id,
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
    // header: "Full Name",
  },
  {
    accessorKey: "tipo",
    cell: (info) => info.getValue(),
    meta: {
      filterVariant: "select",
    },
  },
  {
    accessorKey: "nome",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "cor",
    cell: (info) => info.getValue(),
    meta: {
      filterVariant: "select",
    },
  },
  {
    accessorKey: "raio",
    cell: (info) => info.getValue(),
    meta: {
      filterVariant: "range",
    },
  },
  {
    accessorKey: "isolacao",
    cell: (info) => info.getValue(),
    meta: {
      filterVariant: "range",
    },
  },
  {
    accessorKey: "bitola",
    cell: (info) => info.getValue(),
    meta: {
      filterVariant: "range",
    },
  },
  {
    accessorKey: "precoCompra",
    header: "Preço Compra",
    cell: (info) => info.getValue(),
    meta: {
      filterVariant: "range",
    },
  },
  {
    accessorKey: "precoVendaLiquido",
    header: "Preço venda liquido",
    cell: (info) => info.getValue(),
    meta: {
      filterVariant: "range",
    },
  },
  {
    accessorKey: "precoVendaImposto",
    header: "Preço venda bruto",
    cell: (info) => info.getValue(),
    meta: {
      filterVariant: "range",
    },
  },
  {
    accessorKey: "quantidade",
    header: "quantidade (disponível/total)",
    cell: (info) => {
      const vendas: Venda[] = info.row.original?.venda;
      let vendido = vendas.reduce(
        (total, item) => (total += item.quantidade),
        0
      );
      vendido = info.getValue() - vendido;
      return `${vendido}/${info.getValue()}`;
    },
    meta: {
      filterVariant: "range",
    },
  },
  {
    accessorKey: "venda",
    cell: (info) => {
      info.getValue().map((item: Venda) => {
        return <div key={item.id}>{`(${item.idCart}): ${item.quantidade}`};</div>;
      });
    },
  },
  {
    header: "Ações",
    cell: (info) => {
      return (
        <ButtonGroup>
          <ButtonAddCart info={info} />
          <Button
            variant="danger"
            onClick={async () => {
              const confirm = await modalDelete.fire();
              if (!confirm.isConfirmed) return;
              deleteProduto(info?.row?.original?.id);
            }}
          >
            <MdDeleteForever />
          </Button>
        </ButtonGroup >
      );
    },
  },
];
