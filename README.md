# Project

Project created with [Next.js](https://nextjs.org/)

Esse projeto é referente ao projeto integrador, requisito da faculdade Univesp.

## Setup inicial

```bash
npm install
# Arrume o .env file para o banco de dados
npx prisma db push # apenas se o banco de dados ainda não existe
npx prisma generate
npm build
```

E então os próximos uso basta dar o comando: `npm start`

## Recursos utilizados

- [Framework: nextjs](https://nextjs.org/)
- [react](https://react.dev/)
- [prisma orm](https://www.prisma.io/)

## Deploys

- 2024-11-09: Com modelo de banco de dados e tabelas
- 2024-11-10 14:44 Deploy das funções básicas, porém sem a função do admin
- 2024-11-17 Fix problem with database and final deploy
- Next Auth Secret
- 2025-05-03 Filter by product

## Analytics

Vercel
