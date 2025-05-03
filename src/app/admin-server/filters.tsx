"use client";

import React from "react";

export default function Filters({ produtos }: { produtos: string[] }) {
    const [filter, setFilter] = React.useState("");
    const [selecteds, setSelecteds] = React.useState<string[]>([]);

    return (
        <div>
            <input type="search" onChange={(event) => setFilter(p => event.target.value)} />
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
            <pre>
                {JSON.stringify(selecteds, null, 2)}
            </pre>
        </div>
    )
}
