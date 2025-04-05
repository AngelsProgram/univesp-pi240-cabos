"use server";
import { prisma } from "#/context/database";

export async function getData() {
  const query = await prisma.produto.findMany({ include: { venda: true } });
  const data = query.filter(row=>{
    const t = row.venda.reduce((total, v)=>total+v.quantidade, 0);
    return (row.quantidade > t);
  });
  return data;
}
