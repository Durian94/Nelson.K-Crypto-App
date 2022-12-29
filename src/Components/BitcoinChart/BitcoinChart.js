import React from "react";
import BitcoinVolumeChart from "../BitcoinVolumeChart/BitcoinVolumeChart";
import BitcoinPriceChart from "../BitcoinPriceChart/BitcoinPriceChart";
import { Container } from "./BitcoinChart.styles";

export default class BitcoinChart extends React.Component {
  render() {
    const { bitcoinChartData, isLoading, hasError, coinListData } = this.props;
    const hasData = bitcoinChartData !== null && coinListData.length;

    return (
      <>
        {!isLoading && !hasError && hasData && (
          <Container>
            <BitcoinPriceChart
              chartData={bitcoinChartData}
              currentPrice={coinListData[0].current_price}
            />
            <BitcoinVolumeChart chartData={bitcoinChartData} />
          </Container>
        )}
      </>
    );
  }
}
