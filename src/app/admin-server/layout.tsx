import React from 'react';
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistema Cabos - Vendas",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

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
      {children}
    </>
  );
}
