import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
await prisma.produto.deleteMany();
