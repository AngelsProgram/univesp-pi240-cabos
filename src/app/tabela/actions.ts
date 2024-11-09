"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteProduto(id: number) {
  const result = await prisma.produto.delete({ where: { id: id } });
  return result;
}
