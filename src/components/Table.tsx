import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea } from '@mantine/core'
import classes from './TableScrollArea.module.css';
import { TableBodyType } from '../TypeScriptTypes/Types';

const TableComponents = ({ headers, data }: { headers: string[], data: TableBodyType[] | null }) => {
  const [scrolled, setScrolled] = useState(false);
  if (!data) {
    return
  }
  const rows = data.map((row) => (
    <Table.Tr key={row.col1 as string}>
      <Table.Td style={{ textAlign: "center" }}>{row?.col1 as string}</Table.Td>
      <Table.Td style={{ textAlign: "center" }}>{row?.col2 as string}
        {/* -{row?.maximum}  */}
      </Table.Td>
      <Table.Td style={{ textAlign: "center" }}>{row?.col3 as string}
        {/* -{row?.minimum} */}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table maw={550} highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <Table.Tr>
            {headers.length > 0 && headers.map((header) => <Table.Th key={Math.random()} style={{ textAlign: "center" }} miw={"100"}>{header}</Table.Th>)}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
export default TableComponents