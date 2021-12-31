import { useObservableState } from 'observable-hooks'
import { useMemo, useState } from "react"
import { useStock } from "../store/stock"

export default function Search() {
    const [search, setSearch] = useState('')
    const { selected$, stock$ } = useStock()
    const stock = useObservableState(stock$, [])

    const filteredStock = useMemo(() => {
        return stock.filter((s: any) => {
            const sInput = search?.toLocaleLowerCase()
            return s.name?.toLowerCase().includes(sInput) || s.symbol.toLowerCase().includes(sInput)
        })
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