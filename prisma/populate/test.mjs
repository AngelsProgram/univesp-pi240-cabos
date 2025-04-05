import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const results = await prisma.cart.findMany({include: {venda: {include: {fkProduto: true}}}});
const last = results[results.length-1].venda[0];
console.log('a')
