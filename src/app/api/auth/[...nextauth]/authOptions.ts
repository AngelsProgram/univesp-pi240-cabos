import * as NextAuth from "next-auth";
import provider_credentials from "./provider-credential";

export const authOptions: NextAuth.AuthOptions = {
  providers: [provider_credentials],
  session: { strategy: "jwt", maxAge: 60 * 60 * 10 },
  // pages: { signOut: "/login" },
};
