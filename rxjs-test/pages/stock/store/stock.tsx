
import React, { createContext, useContext } from "react";
import { BehaviorSubject, combineLatestWith, map } from "rxjs";
import { readRemoteFile } from "react-papaparse";
import { I_Stock } from "../ts/StockInterface";

//$suffix to denote observable
const rawStock$ = new BehaviorSubject<any>([])
export const formatStock$ = rawStock$.pipe(
    map((stock) =>
        stock.map((s: any, index: number) => ({
            id: index,
            category: s['Market Category'],
            fin_status: s['Financial Status'],
            lot_size: s['Round Lot Size'],
            name: s['Company Name'],
            security_name: s['Security Name'],
            symbol: s['Symbol'],
            test_issue: s['Test Issue'],
        })
        )
    ))

export const selected$ = new BehaviorSubject<number[]>([])

export const stock$ = formatStock$.pipe(
    combineLatestWith(selected$),
    map(([stock, selected]) =>
        stock.map((s: any) => ({
            ...s,
            selected: selected.includes(s.id)
        }))
    )
)

export const portfolio$ = stock$.pipe(
    map((stock) => stock.filter((s: any) => s.selected)
    )
)

async function fetchStock() {
    const config: any = {
        complete: (results: any) => rawStock$.next(results.data),
        download: true,
        header: true,
    }
    await readRemoteFile('https://pkgstore.datahub.io/core/nasdaq-listings/nasdaq-listed_csv/data/7665719fb51081ba0bd834fde71ce822/nasdaq-listed_csv.csv', config)
}

fetchStock()

const StockContext = createContext({
    portfolio$,
    selected$,
    stock$
});

export const useStock = () => useContext(StockContext)

export const StockProvider: React.FunctionComponent = ({ children }) => {
    return (
        <StockContext.Provider
            value={{
                portfolio$,
                selected$,
                stock$
            }}>
            {children}
        </StockContext.Provider>
    )
}