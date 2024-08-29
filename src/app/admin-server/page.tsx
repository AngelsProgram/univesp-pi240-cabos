import { getServerSession } from "next-auth";

export default async function Page() {
  //   const session = await getServerSession(req, res, authOptions);
  const session = await getServerSession();

  return (
    <main>
      <h1>Session Connected:</h1>
      <div>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </main>
  );
}
