import { useAtom } from "jotai";
import { useEffect } from "react";
import { tableStateAtom } from "../store/atoms";


export default function useTableState() {
    const [tableState, setTableState] = useAtom(tableStateAtom)

    function dispatch(payload) {
        const { type, data } = payload
        switch (type) {
            case 'loadData':
                setTableState({ ...data })
                break;
            case 'update':
                setTableState(prevState => ({ ...prevState, ...data }))
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const data = localStorage.getItem('myTable')
            if (data) dispatch({ type: 'loadData', data: JSON.parse(data) })
        }
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('myTable', JSON.stringify(tableState))
            const data = localStorage.getItem('myTable')
            console.log(JSON.parse(data))
        }
    }, [tableState])

    return {
        tableState,
        dispatch,
    }
}