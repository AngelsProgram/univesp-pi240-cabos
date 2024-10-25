import "#/styles/header.css";
import Link from "next/link";

import Logged from "./logged";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
          <li>
            <Link href="/cadastro">Cadastro</Link>
          </li>
          <li>
            <Link href="/table">Tabela</Link>
          </li>
          <li>
            <Logged />
          </li>
        </ul>
      </nav>
    </header>
  );
}
