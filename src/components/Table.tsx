import React from "react";
import { chakra } from "@chakra-ui/react";

interface TableProps {
  children: React.ReactNode;
}
export const Table = (props: TableProps): JSX.Element => (
  <chakra.div overflowX="auto" my="4">
    <chakra.table
      textAlign="left"
      my="4"
      width="full"
      css={{
        tr: {
          borderBottom: "1px solid #b9b9b937",
        },
        "td, th": {
          padding: "0.5em 0",
        },
      }}
    >
      {props.children}
    </chakra.table>
  </chakra.div>
);

export default Table;
