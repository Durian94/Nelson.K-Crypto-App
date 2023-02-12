import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { LocalStorageState } from "../../store/app/appReducer";
import { HomeState } from "../../store/Home/homeReducer";
import { fetchBitcoinData } from "../../store/Home/actions";
import BitcoinVolumeChart from "../BitcoinVolumeChart/BitcoinVolumeChart";
import BitcoinPriceChart from "../BitcoinPriceChart/BitcoinPriceChart";
import { Container, MainHeader } from "./BitcoinChart.styles";

export default function BitcoinChart() {
  const { currencySymbol, currency } = useSelector(
    (state: LocalStorageState) => state.localStorage
  );
  const { isLoading, hasError, bitcoinChartData } = useSelector(
    (state: HomeState) => state.homeData
  );
  const dispatch: any = useDispatch();
  const prevState: React.MutableRefObject<string> = useRef(currency);

  useEffect(() => {
    dispatch(fetchBitcoinData());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (prevState.current !== currency) {
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
