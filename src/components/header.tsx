import "#/styles/header.css";
import Link from "next/link";

import Logged from "./logged";

import { IoIosHome } from "react-icons/io";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/"><IoIosHome /> Home</Link>
          </li>
          <li>
            <Link href="/admin"><RiAdminLine /> Admin</Link>
          </li>
          <li>
            <Link href="/cadastro">Cadastro</Link>
          </li>
          <li>
            <Link href="/tabela">Tabela</Link>
          </li>
          <li><Link href="/cart"><MdOutlineShoppingCartCheckout /> Carrinho</Link></li>
          <li>
            <Logged />
          </li>
        </ul>
      </nav>
    </header>
  );
}
