import React from 'react';
import { getServerSession } from "next-auth";

// type T = {
//   children: React.ReactNode,
//   params: any,
// }

export default async function Page({ searchParams }: any) {
  const session = await getServerSession();

  if (session?.user?.name !== "admin") {
    return (
      <main>
        <h3>
          Precisa estar logado como administrador!
        </h3>
      </main>
    )
  }

  return (
    <div>
      Filtros serão adicionados futuramente.
      <pre>
        {JSON.stringify(searchParams, null, 2)}
      </pre>
    </div>
  );
}
