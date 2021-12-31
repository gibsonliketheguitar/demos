import { StockProvider } from "./store/stock"
import Search from './components/Search'
import Portfolio from './components/Portfolio'

export default function Stock() {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
        }}>
            <StockProvider>
                <Search />
                <Portfolio />
            </StockProvider>
        </div>
    )
}