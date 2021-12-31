import { useObservableState } from 'observable-hooks'
import { useStock } from "../store/stock"

export default function Portfolio() {
    const { portfolio$ } = useStock()
    const portfolio: any = useObservableState(portfolio$, [])
    return (
        <div >
            <h4>Portfolio</h4>
            {portfolio.map((s: any, index: number) => (
                <div key={s.id + index}>
                    <div>{s.symbol + ' ' + s.name}</div>
                </div>
            ))}
        </div>
    )
}