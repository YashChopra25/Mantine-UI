import React from 'react'
import TableComponents from './Table'
import { TableBodyType } from '../TypeScriptTypes/Types'

const TableOnScreenFirst = ({ data }: { data: TableBodyType[] | null }) => {
    const Table1Header1: string[] = ["Year", "Crop with Maximum Production in that Year", "Crop with Minimum  Production in that Year"]
    return (
        <React.Fragment>
            <TableComponents headers={Table1Header1} data={data} />
        </React.Fragment>
    )
}

export default TableOnScreenFirst