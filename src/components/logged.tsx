"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Logged() {
  const session = useSession();

  const islogged = session?.status === "authenticated";

  {
    /* <button onClick={() => console.log(session)}>Status</button> */
  }

  if (!islogged) {
    return (
      <div>
        <button onClick={() => signIn()}>Signin</button>
      </div>
    );
  }

  const user = session?.data?.user?.name;

  return (
    <div>
      <span>{user}</span>
      <button onClick={() => signOut()}>Signout</button>
    </div>
  );
}
