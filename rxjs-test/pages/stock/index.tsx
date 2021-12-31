import { useEffect, useMemo, useState } from "react"
import { stock$, selected$ } from "./store/stock"

export default function Stock() {
    const [search, setSearch] = useState('')
    const [stock, setStock] = useState([])

    useEffect(() => {
        const sub: any = stock$.subscribe(setStock)
        return () => sub.unsubscribe()
    }, [])

    const filteredStock = useMemo(() => {
        return stock.filter((s: any) => s.name?.toLowerCase().includes(search?.toLocaleLowerCase()))
    }, [search, stock])

    return (
        <div>
            <input
                type='text'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div>
                {filteredStock.map((s: any, index: number) => (
                    <div key={s.name + index}>
                        <input type='checkbox'
                            checked={s.selected}
                            onChange={() => {
                                if (selected$.value.includes(s.id)) {
                                    selected$.next(selected$.value.filter((id) => id !== s.id))
                                }
                                else {
                                    selected$.next([...selected$.value, s.id])
                                }
                            }}
                        />
                        <strong> {s.symbol}</strong> : {s.name}
                    </div>
                ))}
            </div>
        </div>
    )
}