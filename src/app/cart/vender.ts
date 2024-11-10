"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import type {CartItem} from "#/context/context-cart";

export async function vender(cart:CartItem[]){
    const venda = cart.map(item=>({
        idProduto: item.produto.id,
        preco: item.produto.precoVendaImposto,
        quantidade: parseInt(item.quantidade),
        total: (item.produto.precoVendaImposto * item.quantidade),
    }));

    try {
        console.log("Trying venda");

        const result = await prisma.cart.create({
            // include: { Venda: true },
            data:{
                dia: new Date(),
                venda: { create: venda, },
             }
        });
        console.log(result)
    } catch (error) {
        console.error(error);
    }
}
