"use client";

import React from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function Filters({ produtos }: { produtos: string[] }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [filter, setFilter] = React.useState("");
    const [selecteds, setSelecteds] = React.useState<string[]>([]);

    function onClick() {
        const params = new URLSearchParams(); //searchParams.toString()
        // params.set('itensFilter', selecteds);
        selecteds.forEach(i => params.append('itensFilter', i));
        router.push(`${pathname}?${params.toString()}`);
    }

    return (
        <div>
            Filtrar: <input type="search" onChange={(event) => setFilter(p => event.target.value)} />
            <select
                // multiple
                id="filter_products"
                name="filter_products"
                onChange={(event) => setSelecteds(p => [...p, event.target.value])}>
                <option></option>
                {produtos.filter(i => i.toLowerCase().includes(filter)).map(i => (<option key={i}>{i}</option>))}
            </select>
            <select onChange={(event) => setSelecteds(p => p.filter(i => i !== event.target.value))}>
                <option></option>
                {selecteds.filter(i => i.toLowerCase().includes(filter)).map(i => (<option key={i}>{i}</option>))}
            </select>
            <button onClick={onClick}>Atualizar filtros</button>
            {/* <pre>
                {JSON.stringify(selecteds, null, 2)}
            </pre> */}
        </div>
    )
}
