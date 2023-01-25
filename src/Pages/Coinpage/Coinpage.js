import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { separator } from "../../utilities/formatMoney/formatMoney";
import { shortenLink } from "../../utilities/formatMoney/formatMoney";
import {
  fetchCoinpageData,
  fetchChartData,
} from "../../store/coinpage/actions";
import TimeChart from "../../Components/TimeChart/TimeChart";
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
  StyledCurrencyCalculator,
  StyledTimeOptions,
  Loader,
} from "./Coinpage.styles";
import PositiveArrow from "../../assets/images/positiveArrow.svg";
import NegativeArrow from "../../assets/images/negativeArrow.svg";
import PaperIcon from "../../assets/images/price-data-icon.svg";
import LinkIcon from "../../assets/images/link-icon.svg";

export default function Coinpage() {
  const { currency, currencySymbol } = useSelector(
    (state) => state.localStorage
  );
  const { isLoading, hasError, coinData, coinChartData } = useSelector(
    (state) => state.coinPageData
  );
  const [amount, setAmount] = useState(0);
  const [cryptoValue, setCryptoValue] = useState(0);
  const params = useParams();
  const prevProps = useRef(params);
  const dispatch = useDispatch();

  const handleAmount = (e) => {
    setAmount(e.target.value);
    setCryptoValue(e.target.value / coinData.currentPrice[currency].toFixed(8));
  };

  const handleCryptoValue = (e) => {
    setCryptoValue(e.target.value);
    setAmount(e.target.value * coinData.currentPrice[currency].toFixed(2));
  };

  const handleTimeframe = (e) => {
    const parameters = {
      name: params.coinName,
      number: e.target.value,
      currency: currency,
    };
    dispatch(fetchChartData(parameters));
  };

  useEffect(() => {
    const parameters = {
      name: params.coinName,
      number: 1,
      currency: currency,
    };
    dispatch(fetchCoinpageData(params.coinName));
    dispatch(fetchChartData(parameters));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (prevProps.current.params !== params) {
      dispatch(fetchCoinpageData(params.coinName));
    }
    prevProps.current = params;
    // eslint-disable-next-line
  }, [params]);

  return (
    <>
      <Header>Your Summary</Header>
      {isLoading && !hasError && <Loader>Loading...</Loader>}
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
                <PlusIcon>+</PlusIcon>Fully Diluted Valuation: {currencySymbol}
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
                <PlusIcon>+</PlusIcon>Circulating Supply: {coinData.circSupply}{" "}
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
          <StyledTimeOptions handleTimeframe={handleTimeframe} />
          <StyledCurrencyCalculator
            coin={coinData.symbol}
            amount={amount}
            cryptoValue={cryptoValue}
            handleCryptoValue={handleCryptoValue}
            handleAmount={handleAmount}
          />
          {coinChartData !== null && (
            <TimeChart coinChartData={coinChartData} />
          )}
        </>
      )}
    </>
  );
}
