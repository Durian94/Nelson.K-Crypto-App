import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { LocalStorageState } from "../../store/app/appReducer";
import { separator } from "../../utilities/formatMoney/functions";
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
    (state: LocalStorageState) => state.localStorage
  );
  const { isLoading, hasError, coinData, coinChartData } = useSelector(
    (state: any) => state.coinPageData
  );
  const [amount, setAmount] = useState(0);
  const [cryptoValue, setCryptoValue] = useState(0);
  const params: any = useParams();
  const prevProps: any = useRef(params);
  const dispatch: any = useDispatch();

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value));
    setCryptoValue(
      parseFloat(e.target.value) / coinData.currentPrice[currency].toFixed(8)
    );
  };

  const handleCryptoValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCryptoValue(parseFloat(e.target.value));
    setAmount(
      parseFloat(e.target.value) * coinData.currentPrice[currency].toFixed(2)
    );
  };

  const handleTimeframe = (e: React.MouseEvent<HTMLInputElement>) => {
    interface Parameters {
      name: string;
      number: number;
      currency: string;
    }
    const parameters: Parameters = {
      name: params.coinName,
      number: parseInt(e.currentTarget.value),
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
                <a href={coinData.link} target="_blank" rel="noreferrer">
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
            <StyledCoinLink link={coinData.blockChainSite[0]} />
            <StyledCoinLink link={coinData.blockChainSite[1]} />
            <StyledCoinLink link={coinData.blockChainSite[2]} />
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
