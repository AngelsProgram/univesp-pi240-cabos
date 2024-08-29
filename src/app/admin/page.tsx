"use client";
import { useSession } from "next-auth/react";

export default function Page() {
  const session = useSession();

  return (
    <main>
      <h1>Session Status:</h1>
      <div>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </main>
  );
}
