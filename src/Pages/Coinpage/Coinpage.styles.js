import styled from "styled-components";
import { CoinpageLink } from "../../Components/CoinpageLink/CoinpageLink";
import { CurrencyCalculator } from "../../Components/CurrencyCalculator/CurrencyCalculator";

export const Header = styled.h3`
  padding: 0 9rem;
  margin: 3.5rem 0;
`;

export const UpperCaseText = styled.p`
  text-transform: uppercase;
`;

export const Cointainer = styled.div`
  display: flex;
  padding: 0 9rem;
  gap: 3rem;
  justify-content: center;
`;

const BlackBox = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 0.5rem;
`;

export const CoinBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  div {
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 0.5rem;
    font-weight: 700;
    font-size: 20px;
    padding: 2.5rem 3.5rem 5rem 3.5rem;
    text-align: center;
  }

  img {
    background-color: ${({ theme }) => theme.main};
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }

  div:nth-child(2) {
    font-size: 16px;
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 0.5rem;
    padding: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 15.8rem;

    img {
      padding: 0.2rem;
      margin: 0 0.2rem 0.1rem 0;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.textColor};
    }
  }
`;

export const PriceData = styled(BlackBox)`
  padding: 2rem 4rem;

  h3 {
    font-size: 42px;
    font-weight: 500;
  }

  div:first-child {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }
  p {
    color: ${(props) =>
      props.percentage < 0 ? "hsl(348, 99%, 53%)" : "hsl(130, 100%, 50%)"};
    display: flex;
    align-items: center;
  }

  div:nth-child(2) {
    text-align: center;
    margin-top: 1rem;
  }

  div:nth-child(3),
  div:nth-child(4) {
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
    justify-content: center;
    p {
      color: ${({ theme }) => theme.textColor};
      font-weight: 700;
      font-size: 17px;
      line-height: 1.5rem;
    }
  }
`;

export const MarketData = styled(BlackBox)`
  padding: 2rem;
  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const PlusIcon = styled.p`
  background-color: hsl(215, 79%, 51%);
  border-radius: 0.2rem;
  padding: 0 0.3rem;
  margin: 0.3rem 0.5rem 0.3rem 0;
`;

export const Description = styled(BlackBox)`
  margin: 0 9rem 2rem 9rem;
  padding: 0 1.5rem 3rem 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  font-size: 15.5px;
  font-weight: 700;

  img {
    margin: 2rem 0;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  padding: 0 9rem;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const StyledCoinLink = styled(CoinpageLink)`
  display: flex;
  padding: 1rem;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.secondary};
  text-decoration: none;
  border-radius: 0.5rem;

  p {
    color: ${({ theme }) => theme.textColor};
  }
`;

export const TimeChartContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledCurrencyCalculator = styled(CurrencyCalculator)`
  display: flex;
  gap: 2.5rem;
  margin: 2rem 0;
  text-transform: uppercase;
  font-weight: 700;

  div {
    display: flex;
    align-items: center;
  }

  p {
    background-color: hsl(143, 95%, 40%);
    height: 2.5rem;
    padding: 0.7rem 0.7rem 0 0.7rem;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  input {
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textColor};
    font-size: 14px;
    font-weight: 700;
    height: 2.5rem;
    padding-left: 1rem;
    border-radius: 0 0.5rem 0.5rem 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
