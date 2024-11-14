"use server";
import { prisma } from "#/context/database";

import type {CartItem} from "#/context/context-cart";

export async function vender(cart:CartItem[]){
    const venda = cart.map(item=>({
        idProduto: item.produto.id,
        preco: item.produto.precoVendaImposto,
        quantidade: item.quantidade,
        total: (item.produto.precoVendaImposto * item.quantidade),
    }));

    try {
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
