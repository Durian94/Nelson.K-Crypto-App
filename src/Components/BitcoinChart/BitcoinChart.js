import React from "react";
import BitcoinVolumeChart from "../BitcoinVolumeChart/BitcoinVolumeChart";
import BitcoinPriceChart from "../BitcoinPriceChart/BitcoinPriceChart";
import { Container, MainHeader } from "./BitcoinChart.styles";

export default function BitcoinChart(props) {
  const {
    bitcoinChartData,
    coinListData,
    isLoading,
    hasError,
    currencySymbol,
  } = props;
  const hasData = bitcoinChartData !== null && coinListData.length;
  return (
    <>
      {!isLoading && !hasError && hasData && (
        <>
          <MainHeader>Your overview</MainHeader>
          <Container>
            <BitcoinPriceChart
              chartData={bitcoinChartData}
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
