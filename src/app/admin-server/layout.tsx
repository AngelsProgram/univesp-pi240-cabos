import React from 'react';
import Link from "next/link";
import type { Metadata } from "next";

import { getProdutos } from './getVendas';
import Filters from './filters';

export const metadata: Metadata = {
  title: "Sistema Cabos - Vendas",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const produtos = await getProdutos();

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link href="/admin-server/day" replace>Vendas por dia</Link></li>
            <li><Link href="/admin-server/product" replace>Vendas por produto</Link></li>
          </ul>
        </nav>
      </header>
      <Filters produtos={produtos} />
      <main>
        {children}
      </main>
    </>
  );
}
