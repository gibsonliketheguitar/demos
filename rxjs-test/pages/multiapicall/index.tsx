import { useEffect, useState } from "react"
import { from, mergeMap, Observable, of, Subject } from "rxjs"

export default function MultiApiCall() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const num = [1, 2, 3, 4, 5, 6, 7, 8]
            const response: any = []
            const getAll = num.map(async (x) => fetch(`/api/multi/${x}`))
            await Promise.all(getAll)
                .then(results => Promise.all(results.map((r: any) => r.json())))
                .then(result => response.push(result))

            setData(() => {
                console.log('setting data')
                return response
            })
        }
        console.log('start fetching data')
        getData()
    }, [])

    useEffect(() => {
        if (data.length < 1) return
        console.log(data)

    }, [data])

    const http$ = from([1, 2, 3, 4, 5, 6])


    useEffect(() => {

    }, [])

    return (
        <div>Hello</div>
    )
}