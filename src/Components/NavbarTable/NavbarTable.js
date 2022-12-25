import React from "react";
import { TableRowContainer, TableData } from "./NavbarTable.styles";

export default class NavbarTable extends React.Component {
  render() {
    const { isLoading, hasError, navbarData } = this.props;

    return (
      <TableRowContainer>
        {isLoading && <p>Loading...</p>}
        {!isLoading && hasError && <p>Error</p>}
        {!isLoading && !hasError && navbarData !== null && (
          <>
            <TableData>
              Coins {navbarData.data.active_cryptocurrencies}
            </TableData>
            <TableData>Exchanges {navbarData.data.markets}</TableData>
            <TableData>
              ${navbarData.data.total_market_cap.usd.toString().slice(0, 3)}B
            </TableData>
            <TableData>
              ${navbarData.data.total_volume.usd.toString().slice(0, 2)}B
            </TableData>
            <TableData>
              {navbarData.data.market_cap_percentage.btc.toFixed(0)}%
            </TableData>
            <TableData>
              {navbarData.data.market_cap_percentage.eth.toFixed(0)}%
            </TableData>
          </>
        )}
      </TableRowContainer>
    );
  }
}
