"use client";
import { useSession } from "next-auth/react";

import { redirect } from "next/navigation";

export default function Page() {
  const session = useSession();

  if (session.data?.user?.name !== "admin") {
    return (
      <main>
        <h3>
          Precisa estar logado como administrador!
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </h3>
      </main>
    )
  }

  redirect("/admin-server");
}
