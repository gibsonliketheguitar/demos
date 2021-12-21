import DataGrid from 'react-data-grid';
import { useEffect, useRef, useState } from 'react'
import useTableState from './hooks/useTableState.js'
import Button from '@mui/material/Button';
import BasicModal from './components/BasicModal'
import { useAtom } from 'jotai';
import { tableStateAtom } from './store/atoms.js';

export default function App() {
  const colWidthRef = useRef()
  const [columns, setColumns] = useState([])
  const [rows, setRow] = useState([])
  const { tableState, dispatch } = useTableState()

  const updateColWidth = () => {
    const hasNoData = Boolean(!colWidthRef.current)
    if (hasNoData) return
    const { targetIndx, width } = colWidthRef.current
    const { columns } = tableState

    const updatedColumns = columns.map((column, indx) => {
      return (indx === targetIndx) ? { ...column, width: width } : { ...column }
    })
    dispatch({ data: { columns: updatedColumns }, type: 'update' })
  }

  useEffect(() => {
    const { columns, rows } = tableState
    setColumns(() => columns)
    setRow(() => rows)
  }, [tableState])

  return (
    <>
      <Button variant="contained" onClick={updateColWidth}>Update Column Width</Button>
      <DataGrid
        onColumnResize={(index, width) => (colWidthRef.current = { targetIndx: index, width })}
        columns={columns}
        rows={rows}
        defaultColumnOptions={{
          resizable: true
        }}
      />

      <BasicModal />
    </>
  )
}

//https://epicreact.dev/how-react-uses-closures-to-avoid-bugs/ 
//Look into debounce later. Too tired to currently read
