import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SessionProvider from "#/provider/SessionProvider";
import { getServerSession } from "next-auth";

import Header from "#/components/header";

import ContextCartProvider from "#/context/context-cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistema Cabos",
  description: "PI Univesp",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <SessionProvider session={session}>
      <ContextCartProvider>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            {children}
            <Analytics />
          </body>
        </html>
      </ContextCartProvider>
    </SessionProvider>
  );
}
