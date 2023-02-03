import styled from "styled-components";

export const Container = styled.div`
  margin: 1.5rem 0;
  font-weight: 700;
`;

export const CoinContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;

export const CoinIcon = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 4rem 2rem;
  border-radius: 0.5rem;
  font-size: 20px;
  width: 15rem;

  p {
    text-transform: capitalize;
    margin: 1rem 0;
  }

  img {
    background-color: ${({ theme }) => theme.main};
    padding: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    color: ${({ theme }) => theme.textColor};
    background-color: hsl(143, 95%, 43%);
    font-weight: 700;
  }
`;

export const DataContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2rem;
  font-size: 15px;
  width: 60rem;
`;

export const MarketPriceData = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.secondary};
  padding: 2rem;
  margin: 1rem 0;
  border-radius: 0.7rem;
`;

export const YourCoinData = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 3rem;
  background-color: ${({ theme }) => theme.secondary};
  padding: 2rem;
  border-radius: 0.7rem;
`;

export const PercentageData = styled.span`
  color: ${(props) =>
    props.percent < 0 ? "hsl(348, 99%, 53%)" : "hsl(130, 100%, 50%)"};
`;

export const Header = styled.h3`
  text-align: left;
`;

export const MainHeader = styled.h3`
  text-align: left;
  margin: 2.5rem 0 3.5rem 0;
`;
