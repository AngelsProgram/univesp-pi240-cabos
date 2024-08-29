import CredentialsProvider from "next-auth/providers/credentials";

const bg_red = "\x1b[41m";
const reset = "\x1b[0m";

export default CredentialsProvider({
  name: "Credentials",
  credentials: {
    username: { label: "Usuário", type: "text" },
    password: { label: "Senha", type: "password" },
  },
  async authorize(credentials, req) {
    if (!credentials || !credentials?.username || !credentials?.password)
      return null;
    const user = { id: "0", name: "" };
    if (credentials.username === "test" && credentials.password === "123")
      user.name = "visitante";
    if (credentials.username === "admin" && credentials.password === "123456")
      user.name = "admin";
    if (user.name) return user;
    return null;
  },
});
