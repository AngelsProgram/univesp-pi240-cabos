import { getServerSession } from "next-auth";

export default async function Page() {
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
    </div>
  );
}
