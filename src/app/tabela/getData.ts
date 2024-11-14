"use server";
import { prisma } from "#/context/database";

export async function getData() {
  const data = await prisma.produto.findMany({ include: { venda: true } });
  return data;
}
