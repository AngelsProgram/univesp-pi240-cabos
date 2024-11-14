"use server";
import { prisma } from "#/context/database";

export async function deleteProduto(id: number) {
  const result = await prisma.produto.delete({ where: { id: id } });
  return result;
}
