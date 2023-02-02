import { useSelector } from "react-redux";
import { separator } from "../../utilities/formatMoney/formatMoney";
import {
  Container,
  CoinContainer,
  CoinIcon,
  YourCoinData,
  MarketPriceData,
  Header,
  DataContainer,
  MainHeader,
  PercentageData,
} from "./AssetList.styles";

export default function AssetList() {
  const { portfolio, hasError, isLoading } = useSelector(
    (state) => state.portfolio
  );
  const { currency, currencySymbol } = useSelector(
    (state) => state.localStorage
  );

  return (
    <Container>
      {isLoading && <h3>Loading Portfolio...</h3>}
      {!isLoading && hasError && <h3>Error</h3>}
      {!isLoading && !hasError && portfolio.length > 0 && (
        <MainHeader>Your statistics</MainHeader>
      )}
      {!isLoading &&
        !hasError &&
        portfolio.length > 0 &&
        portfolio.map(
          (coin) =>
            coin.image && (
              <CoinContainer key={coin.id}>
                <CoinIcon>
                  <img src={coin.image} alt="coin-icon" />
                  <p>
                    {coin.id} ({coin.symbol.toUpperCase()})
                  </p>
                </CoinIcon>
                <DataContainer>
                  <Header>Market Price:</Header>
                  <MarketPriceData>
                    <p>
                      Current Price:{" "}
                      <PercentageData percent={1}>
                        {currencySymbol}
                        {separator(coin.currentPrice[currency]) || "n/a"}
                      </PercentageData>
                    </p>
                    <p>
                      Price Change 24h:{" "}
                      <PercentageData percent={coin.change_24[currency]}>
                        {currencySymbol}{" "}
                        {coin.change_24[currency].toFixed(2) || "n/a"}
                      </PercentageData>
                    </p>
                    <p>
                      Market Cap vs Volume:{" "}
                      <PercentageData
                        percent={
                          (coin.marketCap[currency] /
                            coin.totalVolume[currency]) *
                          100
                        }
                      >
                        {(
                          (coin.totalVolume[currency] /
                            coin.marketCap[currency]) *
                          100
                        ).toFixed(0) || "n/a"}
                        %
                      </PercentageData>
                    </p>
                    <p>
                      Circ Supply vs Max Supply:{" "}
                      <PercentageData
                        percent={(coin.maxSupply / coin.circSupply) * 100}
                      >
                        {((coin.maxSupply / coin.circSupply) * 100).toFixed(
                          0
                        ) || "n/a"}
                        %{" "}
                      </PercentageData>
                    </p>
                  </MarketPriceData>
                  <Header>Your Coin:</Header>
                  <YourCoinData>
                    <p>
                      Coin Amount:{" "}
                      <PercentageData percent={1}>{coin.amount}</PercentageData>
                    </p>
                    <p>
                      Amount Value:{" "}
                      <PercentageData percent={1}>
                        {currencySymbol}
                        {separator(
                          (coin.currentPrice[currency] * coin.amount).toFixed(2)
                        ) || "n/a"}
                      </PercentageData>
                    </p>
                    <p>
                      Price Change Since Purchase:{" "}
                      <PercentageData
                        percent={
                          ((coin.currentPrice[currency] -
                            coin.historyPrice[currency]) /
                            coin.historyPrice[currency]) *
                          100
                        }
                      >
                        {(
                          ((coin.currentPrice[currency] -
                            coin.historyPrice[currency]) /
                            coin.historyPrice[currency]) *
                          100
                        ).toFixed(0) || "n/a"}
                        %
                      </PercentageData>
                    </p>
                    <p>
                      Purchase Date:{" "}
                      <PercentageData percent={1}>
                        {coin.purchaseDate.toString().slice(4, 15)}
                      </PercentageData>
                    </p>
                  </YourCoinData>
                </DataContainer>
              </CoinContainer>
            )
        )}
    </Container>
  );
}
