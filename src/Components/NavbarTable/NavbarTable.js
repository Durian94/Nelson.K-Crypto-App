import React from "react";
import { TableRowContainer, TableData} from "./NavbarTable.styles";

export default class NavbarTable extends React.Component {
  
    render() {
      return (
      <TableRowContainer>
        <TableData>Coins 7884</TableData>
        <TableData>Exchange 622</TableData>
        <TableData>$1.69T</TableData>
        <TableData>$124.45B</TableData>
        <TableData>44%</TableData>
        <TableData>21%</TableData>
      </TableRowContainer>
      )
    }
  }
  