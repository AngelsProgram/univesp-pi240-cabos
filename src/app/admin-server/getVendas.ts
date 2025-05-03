"use server";

import {prisma} from "#/context/database";

// const grouped = vendas.reduce((group, venda)=>{
//     const p = venda.fkProduto.nome;
//     if(group[p]==null) group[p] = [];
//     group[p].push();
//     return group;
// }, {});

const cores: Record<string, string> = {
    "Amarelo": "yellow",
    "Azul": "blue",
    "Branco": "white",
    "Cinza": "gray",
    "Laranja": "orange",
    "Marrom": "brown",
    "Preto": "black",
    "Rosa": "pink",
    "Verde": "green",
    "Vermelho": "red",
    "Violeta": "violet",
    "Branco_Laranja": "#FFA460",
    "Branco_Azul": "#82EEFD",
    "Branco_Verde": "#E3F5E0",
    "Branco_Marrom": "#C4A17E",
}

export async function getProdutos(){
    const query = await prisma.produto.groupBy({ by: "nome" });
    const p = query.map(p=>p.nome);
    return p;
}

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

function getColor(ccc:string|undefined){
    if(!ccc) return '#E7DDFF';
    if(ccc in cores) return cores[ccc];
    return '#E7DDFF';
}

export async function vendaProduto(){
    const vendas = await prisma.venda.findMany( { include: { fkCart: { select: { dia: true } }, fkProduto: true }, } );
    const grouped = Object.groupBy(vendas, venda=>venda.fkProduto.nome);
    const result = Object.entries(grouped).map(([ídentifier, items])=>{
        if(!items) return {id: 0, label: 'empty', value: 0};
        const total = items.reduce((sum, item)=>sum+item.total, 0);
        const color_key = items?.at(0)?.fkProduto?.cor;
        const color = getColor(color_key)
        return { id: items[0].idProduto, label: ídentifier, value: total, color };
    });

    return result;
}
