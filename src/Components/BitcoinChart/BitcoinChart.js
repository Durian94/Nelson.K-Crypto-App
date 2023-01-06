import React from "react";
import BitcoinVolumeChart from "../BitcoinVolumeChart/BitcoinVolumeChart";
import BitcoinPriceChart from "../BitcoinPriceChart/BitcoinPriceChart";
import { Container, MainHeader } from "./BitcoinChart.styles";

export default class BitcoinChart extends React.Component {
  render() {
    const {
      bitcoinChartData,
      isLoading,
      hasError,
      coinListData,
      currencySymbol,
    } = this.props;
    const hasData = bitcoinChartData !== null && coinListData.length;

    return (
      <>
        {!isLoading && !hasError && hasData && (
          <>
            <MainHeader>Your overview</MainHeader>
            <Container>
              <BitcoinPriceChart
                chartData={bitcoinChartData}
                currentPrice={coinListData[0].current_price}
                currencySymbol={currencySymbol}
              />
              <BitcoinVolumeChart
                chartData={bitcoinChartData}
                currencySymbol={currencySymbol}
              />
            </Container>
          </>
        )}
      </>
    );
  }
}
