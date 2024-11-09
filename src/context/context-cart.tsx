"use client";
import React, { ReactNode } from "react";
import type { Produto } from "@prisma/client";

export type CartItem = {
    produto: Produto,
    quantidade: number,
}

export const ContextCart = React.createContext([] as CartItem[]);

export default function ContextCartProvider({ children }: { children: ReactNode }) {
    return (
        <ContextCart.Provider value={[]}>
            {children}
        </ContextCart.Provider>
    )
}
