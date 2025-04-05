import XLSX from 'xlsx';
import moment from 'moment';
import { PrismaClient } from "@prisma/client";

const workbook = XLSX.readFile("prisma/populate/Dados_vendas.xlsx");
const sheetname = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetname];
/**
 * @property { string } Data
 * @property { string } Item
 * @property { string } quantidade
 */
const jsa = XLSX.utils.sheet_to_json(worksheet, {raw: false});

const prisma = new PrismaClient();

for(const row of jsa){
   try {
         const dia = moment(row['Data'], 'M/D/YY');
   const [cor, bitola] = row['Item'].replaceAll("Cabo_Automotivo_", "").replaceAll("-", ".").split("_");
   const quantidade = parseInt(row['Quantidade']);

   const result = await prisma.produto.findMany({ where:{ cor, bitola: parseFloat(bitola), quantidade: {gte: quantidade}} });
   if(result.length < 1)
   {
      console.error(`Not Found: ${cor} - ${bitola}`);
      continue;
   }
   try {
      const index = Math.floor(Math.random()*result.length);
      const produto = result[index];
      await prisma.cart.create({data: {
         dia,
         venda: {create: {
            idProduto: produto.id,
            preco: produto.precoVendaImposto,
            quantidade: quantidade,
            total: (produto.precoVendaImposto*quantidade)
         }}
      }});
   } catch (error) {
      console.log(result);
      console.log(`${produto.id} - ${quantidade}`);
      console.error(error);
   }
   } catch (error) {
      console.log(JSON.stringify(row));
      console.error(error);
   }
}
