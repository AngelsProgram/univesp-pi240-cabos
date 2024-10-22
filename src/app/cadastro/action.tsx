"use server";

type Produto = any;

import type { SubmitHandler } from "react-hook-form";

export const insertProduto: SubmitHandler<Produto> = async function (
  data,
): Promise<Produto | undefined> {
  try {
    console.log(data);
    return data;
  } catch (error) {
    return undefined;
  }
};
