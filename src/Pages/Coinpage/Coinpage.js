import React from "react";
import axios from "axios";
import WithRouter from "../../Components/WithRouter/WithRouter";
import { separator } from "../../utilities/formatMoney/formatMoney";
import { shortenLink } from "../../utilities/formatMoney/formatMoney";
import {
  Cointainer,
  CoinBanner,
  Header,
  PriceData,
  MarketData,
  PlusIcon,
  UpperCaseText,
  Description,
  StyledCoinLink,
  LinkContainer,
  TimeChartContainer,
  StyledCurrencyCalculator,
} from "./Coinpage.styles";
import PositiveArrow from "../../assets/images/positiveArrow.svg";
import NegativeArrow from "../../assets/images/negativeArrow.svg";
import PaperIcon from "../../assets/images/price-data-icon.svg";
import LinkIcon from "../../assets/images/link-icon.svg";

class Coinpage extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    coinData: null,
    amount: 1,
    cryptoValue: 0,
  };

  getCoinpageData = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${this.props.params.coinName}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );

      const filteredItems = {
        image: data.image.small,
        name: data.name,
        symbol: data.symbol,
        link: data.links.homepage[0],
        price_24h: data.market_data.price_change_percentage_24h,
        currentPrice: data.market_data.current_price,
        ath: data.market_data.ath,
        athDate: data.market_data.ath_date,
        atl: data.market_data.atl,
        atlDate: data.market_data.atl_date,
        marketCap: data.market_data.market_cap,
        valuation: data.market_data.fully_diluted_valuation,
        totalVolume: data.market_data.total_volume,
        circSupply: data.market_data.circulating_supply,
        maxSupply: data.market_data.max_supply,
        description: data.description.en,
        blockChainSite: data.links.blockchain_site,
      };

      this.setState({
        coinData: filteredItems,
        isLoading: false,
      });
    } catch (err) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  handleAmount = (e) => {
    this.setState({
      amount: e.target.value,
      cryptoValue: (
        e.target.value / this.state.coinData.currentPrice[this.props.currency]
      ).toFixed(8),
    });
  };

  handleCryptoValue = (e) => {
    this.setState({
      cryptoValue: e.target.value,
      amount:
        e.target.value *
        this.state.coinData.currentPrice[this.props.currency].toFixed(2),
    });
  };

  componentDidMount() {
    this.getCoinpageData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.coinName !== this.props.params.coinName) {
      this.getCoinpageData();
    }
  }

  render() {
    const { coinData, isLoading, hasError } = this.state;
    const { currencySymbol, currency } = this.props;

    return (
      <>
        <Header>Your Summary</Header>
        {isLoading && !hasError && <h3>Loading...</h3>}
        {!hasError && !isLoading && coinData !== null && (
          <>
            <Cointainer>
              <CoinBanner>
                <div>
                  <img src={coinData.image} alt="coin-icon" />
                  <p>
                    {coinData.name} ({coinData.symbol})
                  </p>
                </div>
                <div>
                  <img src={LinkIcon} alt="link-icon" />
                  <a
                    href={coinData.link}
                    target="_blank"
                    without
                    rel="noreferrer"
                  >
                    {coinData.link}
                  </a>
                </div>
              </CoinBanner>
              <PriceData percentage={coinData.price_24h}>
                <div>
                  <h3>
                    {currencySymbol}
                    {separator(coinData.currentPrice[currency])}
                  </h3>
                  <p>
                    <img
                      src={
                        coinData.price_24h >= 0 ? PositiveArrow : NegativeArrow
                      }
                      alt="arrow"
                    />
                    {coinData.price_24h.toFixed(2)}%
                  </p>
                </div>
                <div>
                  <img src={PaperIcon} alt="paper-icon" />
                </div>

                <div>
                  <img src={PositiveArrow} alt="green-arrow" />
                  <p>
                    All Time High: {currencySymbol}
                    {coinData.ath[currency]}
                    <br></br>
                    {coinData.athDate[currency].slice(0, 10)}
                  </p>
                </div>
                <div>
                  <img src={NegativeArrow} alt="red-arrow" />
                  <p>
                    All Time Low: {currencySymbol}
                    {coinData.atl[currency]}
                    <br></br>
                    {coinData.atlDate[currency].slice(0, 10)}
                  </p>
                </div>
              </PriceData>
              <MarketData>
                <p>
                  <PlusIcon>+</PlusIcon>Market Cap: {currencySymbol}
                  {separator(coinData.marketCap[currency])}
                </p>
                <p>
                  <PlusIcon>+</PlusIcon>Fully Diluted Valuation:{" "}
                  {currencySymbol}
                  {coinData.valuation[currency]}
                </p>
                <p>
                  <PlusIcon>+</PlusIcon>Volume 24: n/a
                </p>
                <p>
                  <PlusIcon>+</PlusIcon>Total Volume:{" "}
                  {separator(coinData.totalVolume[currency])}{" "}
                  <UpperCaseText>{coinData.symbol}</UpperCaseText>
                </p>
                <p>
                  <PlusIcon>+</PlusIcon>Circulating Supply:{" "}
                  {coinData.circSupply}{" "}
                  <UpperCaseText>{coinData.symbol}</UpperCaseText>
                </p>
                <p>
                  <PlusIcon>+</PlusIcon>Max Supply: {coinData.maxSupply}{" "}
                  <UpperCaseText>{coinData.symbol}</UpperCaseText>
                </p>
              </MarketData>
            </Cointainer>
            <Header>Description</Header>
            <Description>
              <img src={PaperIcon} alt="paper-icon" />
              <p dangerouslySetInnerHTML={{ __html: coinData.description }}></p>
            </Description>
            <LinkContainer>
              <StyledCoinLink link={shortenLink(coinData.blockChainSite[0])} />
              <StyledCoinLink link={shortenLink(coinData.blockChainSite[1])} />
              <StyledCoinLink link={shortenLink(coinData.blockChainSite[2])} />
            </LinkContainer>
            <TimeChartContainer>
              <StyledCurrencyCalculator
                currency={currency}
                coin={coinData.symbol}
                currencySymbol={currencySymbol}
                amount={this.state.amount}
                cryptoValue={this.state.cryptoValue}
                handleCryptoValue={this.handleCryptoValue}
                handleAmount={this.handleAmount}
              />
            </TimeChartContainer>
          </>
        )}
      </>
    );
  }
}

export default WithRouter(Coinpage);
