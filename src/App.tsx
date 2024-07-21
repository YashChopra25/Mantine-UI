import "@mantine/core/styles.css";
import { Container, Divider, Flex, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import TableOnScreenFirst from "./components/TableOnScreenFirst";
import TableOnScreenSecond from "./components/TableOnScreenSecond";
import { CropAverageData, CropMaximumProductinBasesOnYear } from "./utils/FilterData";
import { useMemo } from "react";
import { TableBodyType } from "./TypeScriptTypes/Types";
export default function App() {
  const DataCropMaximumProductinBasesOnYear: TableBodyType[] | null = useMemo(() => CropMaximumProductinBasesOnYear(), []);
  const DataCropAverageOfYeildAndCoverageArea: TableBodyType[] | null = useMemo(() => CropAverageData(), []);
  return (
    <>
      <MantineProvider theme={theme}>
        <Container mt="md">
          <Flex
            mih={100}
            gap={"sm"}
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
          >
            <TableOnScreenFirst data={DataCropMaximumProductinBasesOnYear} />
            <Divider mx="md" w={"100%"} color="black" m={5} />
            <TableOnScreenSecond data={DataCropAverageOfYeildAndCoverageArea} />
          </Flex>
        </Container>

      </MantineProvider>
    </>
  );
}
