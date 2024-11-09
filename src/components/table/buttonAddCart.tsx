"use client";
import React from "react";
import { ContextCart } from "#/context/context-cart";
import type { Produto } from "@prisma/client";

import Button from "react-bootstrap/Button";
import { FaCartPlus } from "react-icons/fa";

import { modalAdd } from "#/modals/table";

export function ButtonAddCart({ info }: any) {
    const cart = React.useContext(ContextCart);
    return (
        <Button variant="success"
            onClick={async () => {
                const confirm = await modalAdd.fire({
                    title: `Produto: ${info.row.original.nome}`,
                });
                if (confirm.isDenied) return;
                const item = { produto: info.row.original, quantidade: confirm.value };
                cart.push(item);
            }}
        >
            <FaCartPlus />
        </Button>
    )
}
