"use client";

import React, { useRef } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export function Filters() {
    const router = useRouter();
    const pathname = usePathname();

    const start = useRef<HTMLInputElement>(null);
    const end = useRef<HTMLInputElement>(null);

    function handleClick() { router.push(`${pathname}?start=${start.current?.value}&end=${end.current?.value}`); }

    return (
        <div>
            <input type="date" ref={start} />
            <input type="date" ref={end} />
            <button onClick={handleClick}>Atualizar filtro</button>
        </div>
    )
}
