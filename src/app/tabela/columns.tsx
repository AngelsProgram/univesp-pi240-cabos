import type { ColumnDef } from "@tanstack/react-table";
import type { Produto, Venda } from "@prisma/client";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { FaCartPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import Swal from "sweetalert2";
import { deleteProduto } from "./actions";

function showConfirm(id: number) {
  Swal.fire({
    title: "Tem certeza que deseja deletar?",
    showDenyButton: true,
    confirmButtonText: "Sim",
    denyButtonText: "Não",
  }).then((result) => {
    if (!result.isConfirmed) return;
    deleteProduto(id);
  });
}

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
      const vendas: Venda[] = info.row.original?.Venda;
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
    accessorKey: "Venda",
    cell: (info) => {
      info.getValue().map((item: Venda) => {
        return <div key={item.id}>{`${item.dia}: ${item.quantidade}`};</div>;
      });
    },
  },
  {
    header: "Ações",
    cell: (info) => {
      return (
        <ButtonGroup>
          <Button variant="success">
            <FaCartPlus />
          </Button>
          <Button
            variant="danger"
            onClick={() => showConfirm(info.row.original.id)}
          >
            <MdDeleteForever />
          </Button>
        </ButtonGroup>
      );
    },
  },
];
