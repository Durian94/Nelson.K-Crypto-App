import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchBitcoinData } from "../../store/Home/actions";
import BitcoinVolumeChart from "../BitcoinVolumeChart/BitcoinVolumeChart";
import BitcoinPriceChart from "../BitcoinPriceChart/BitcoinPriceChart";
import { Container, MainHeader } from "./BitcoinChart.styles";

export default function BitcoinChart() {
  const { currencySymbol, currency } = useSelector(
    (state) => state.localStorage
  );
  const dispatch = useDispatch();
  const { isLoading, hasError, bitcoinChartData } = useSelector(
    (state) => state.homeData
  );
  const prevState = useRef(currency);

  useEffect(() => {
    dispatch(fetchBitcoinData());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (prevState.current.currency !== currency) {
      dispatch(fetchBitcoinData());
    }
    prevState.current = currency;
    // eslint-disable-next-line
  }, [currency]);

  return (
    <>
      {!isLoading && !hasError && bitcoinChartData !== null && (
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
