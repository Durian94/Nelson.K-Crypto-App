import { Sparklines, SparklinesLine } from "react-sparklines";
import InfiniteScroll from "react-infinite-scroll-component";
import { separator } from "../../utilities/formatMoney/formatMoney";
import {
  Container,
  CoinItem,
  StyledCoinListBar,
  Header,
  CoinListHeaders,
  CoinName,
  Percentages,
  CurrentPrice,
  Loader,
} from "./CoinList.styles";

export default function CoinList(props) {
  const { isLoading, hasError, coinListData, currencySymbol, getCoinListData } =
    props;

  return (
    <>
      <Header>Your overview</Header>
      {isLoading && <p>Loading...</p>}
      {!isLoading && hasError && <p>Error!</p>}
      {coinListData.length && (
        <Container>
          <CoinListHeaders>
            <p>#</p>
            <p>Name</p>
            <p>Price</p>
            <p>1h%</p>
            <p>24h%</p>
            <p>7d%</p>
            <p>24h Volume/Market Cap</p>
            <p>Circulating/Total Supply</p>
            <p>Last 7d</p>
          </CoinListHeaders>
          {coinListData.map(
            (item) =>
              Object.values(item).every((obj) => obj !== null) && (
                <CoinItem key={item.id}>
                  <p>{item.market_cap_rank}</p>
                  <img src={item.image} alt="coin-logo" />
                  <CoinName to={`/coin/${item.id}`}>
                    {item.name} ({item.symbol.toUpperCase()})
                  </CoinName>
                  <CurrentPrice>
                    {currencySymbol}
                    {separator(item.current_price)}
                  </CurrentPrice>
                  <Percentages
                    percent={item.price_change_percentage_1h_in_currency}
                  />
                  <Percentages
                    percent={item.price_change_percentage_24h_in_currency}
                  />
                  <Percentages
                    percent={item.price_change_percentage_7d_in_currency}
                  />

                  <StyledCoinListBar
                    leftData={item.total_volume}
                    rightData={item.market_cap}
                    currencySymbol={currencySymbol}
                  />
                  <StyledCoinListBar
                    leftData={item.circulating_supply}
                    rightData={item.total_supply}
                  />
                  <Sparklines
                    data={item.sparkline_in_7d.price}
                    limit={30}
                    width={60}
                    height={30}
                    style={{ width: "9rem" }}
                  >
                    <SparklinesLine color="blue" style={{ fill: "none" }} />
                  </Sparklines>
                </CoinItem>
              )
          )}
          <InfiniteScroll
            dataLength={coinListData.length}
            next={getCoinListData}
            hasMore={true}
            scrollThreshold={1}
            loader={<Loader>Loading...</Loader>}
          />
        </Container>
      )}
    </>
  );
}
