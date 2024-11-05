import XLSX from 'xlsx';
import * as Prisma from "@prisma/client";
import { PrismaClient } from "@prisma/client";
const Produto = Prisma.Produto;
const workbook = XLSX.readFile("BD_Dados_Cabos.csv");
const sheetname = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetname];
/**
 * @type {object}
 * @property {string} $$index$$
 * @property {string} Acumulado_estoque
 * @property {string} Bitola
 * @property {string} Cor
 * @property {string} Espessura_Isolacao
 * @property {string} Estoque_em_metros
 * @property {string} Nome_do_produto
 * @property {string} Preco_por_metro_compra_SEM_imposto
 * @property {string} Preco_por_metro_venda_COM_imposto
 * @property {string} Preco_por_metro_venda_SEM_imposto
 * @property {string} Raio_de_dobra
 * @property {string} Tipo
*/
const jsa = XLSX.utils.sheet_to_json(worksheet);

const prisma = new PrismaClient();

jsa.forEach(async row => {
    try {
        await prisma.produto.create({
            data: {
                tipo: 'cabo',
                nome: row['Nome_do_produto'],
                cor: row['Cor'],
                raio: row['Raio_de_dobra'],
                isolacao: row['Espessura_Isolacao'],
                bitola: row['Bitola'],
                precoCompra: row['Preco_por_metro_compra_SEM_impostos'],
                precoVendaLiquido: row['Preco_por_metro_venda_SEM_impostos'],
                precoVendaImposto: row['Preco_por_metro_venda_COM_impostos'],
                quantidade: row['Estoque_em_metros'],
            }
        })
    } catch (error) {
        console.error(error);
    }
});

console.log('Finished')