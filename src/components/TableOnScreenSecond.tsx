import React from 'react'
import TableComponents from './Table'
import { TableBodyType } from '../TypeScriptTypes/Types'

const TableOnScreenSecond = ({ data }: { data: TableBodyType[] | null }) => {
    const Table1Header2: string[] = ["Crop", "Average Yield of the Crop between 1950-2020", "Average Cultivation Area of the Crop between 1950-2020"]
    return (
        <React.Fragment>
            <TableComponents headers={Table1Header2} data={data} />
        </React.Fragment>

    )
}

export default TableOnScreenSecond