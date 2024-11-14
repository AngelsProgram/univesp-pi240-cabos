import {prisma} from "#/context/database";

export async function vendasDia()
{
    const vendas = await prisma.venda.findMany({ include: { fkCart: { select: { dia: true } }, fkProduto: { select: { nome: true } } }, });

    const grouped = vendas.reduce<Record<string, number>>((previous, current) => {
    const dia = current.fkCart.dia.toISOString().slice(0, 10);
    if (!previous[dia]) previous[dia] = 0;
        previous[dia] += current.quantidade;
        return previous;
    }, {});

  const dataset = Object.entries(grouped)
    .sort(([dateA], [dateB]) => new Date(dateA).getTime() - new Date(dateB).getTime())
    .map(item => ({ d: item[0], t: item[1] }));

    return dataset;
}

export async function vendaProduto(){
    const vendas = await prisma.produto.findMany({include: {venda: {select: {quantidade: true}}}});
    const porc = vendas.map(item=>{
        const total = item.venda.reduce((previous, current)=>{previous+=current.quantidade;return previous;}, 0);
        return {id:item.id, label:item.nome, value:total}
    });
    return porc;
}
