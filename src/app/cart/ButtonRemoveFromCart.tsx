import React from "react";
import { ContextCart } from "#/context/context-cart";

import Button from "react-bootstrap/Button";
import { MdDeleteForever } from "react-icons/md";

export function ButtonRemoveCart({ id, qtd }: { id: number, qtd: number }) {
    const cart = React.useContext(ContextCart);
    return (
        <Button
            variant="danger"
            onClick={
                () => {
                    const index = cart.findIndex(item => (id == item.produto.id && qtd == item.quantidade));
                    if (index > -1) cart.splice(index, 1);
                }
            }
        >
            <MdDeleteForever />
        </Button>
    )
}
