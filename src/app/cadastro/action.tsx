"use server";
import { prisma } from "#/context/database";

import type { Produto } from "@prisma/client";
import type { SubmitHandler } from "react-hook-form";

export const insertProduto: SubmitHandler<Produto> = async function (
  data,
): Promise<Produto | undefined> {
  try {
    const produto = await prisma.produto.create({ data });
    return produto;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
