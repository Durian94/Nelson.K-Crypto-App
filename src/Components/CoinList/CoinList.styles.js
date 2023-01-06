import styled from "styled-components";
import CoinListBar from "../CoinListBar/CoinListBar";

export const Container = styled.div`
  font-size: 16px;
  font-weight: 700;
  background-color: ${(props) => props.theme.secondary};
  padding: 1.5rem 1.1rem 3rem 1.1rem;
  border-radius: 0.7rem;
  margin-bottom: 3rem;

  div:last-child {
    border: none;
  }
`;

export const Header = styled.h3`
  margin-bottom: 1.5rem;
`;

export const CoinListHeaders = styled.div`
  display: flex;
  margin: 1rem 0 1rem 0;
  font-size: 13px;
  gap: 1.5rem;
  padding-left: 0.5rem;

  p:nth-child(2) {
    width: 14.7rem;
  }

  p:nth-child(3) {
    width: 6rem;
  }

  p:nth-child(4) {
    width: 7rem;
  }

  p:nth-child(5) {
    width: 6rem;
  }

  p:nth-child(6) {
    width: 5.5rem;
  }
`;

export const CoinItem = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  border-bottom: 1px solid hsl(0, 0%, 44%);
  padding: 0.7rem 0rem 0.7rem 0.5rem;

  img {
    width: 1.5rem;
  }
`;

export const CoinName = styled.p`
  width: 14rem;
`;

export const CurrentPrice = styled.p`
  width: 6rem;
`;

export const Percentages = styled.div`
  color: ${(props) =>
    props.percent < 0 ? "hsl(348, 99%, 53%)" : "hsl(130, 100%, 50%)"};
  width: 8rem;
  display: flex;
  justify-content: center;

  img {
    width: 0.7rem;
    margin-right: 0.3rem;
  }
`;

export const StyledCoinListBar = styled(CoinListBar)`
  font-size: 12px;
  font-weight: 700;
  width: 9rem;
`;

export const ProgressBarData = styled.div`
  display: flex;

  p:first-child {
    color: hsl(215, 79%, 51%);
  }
  p:last-child {
    color: ${(props) => props.theme.inverted};
    margin-left: auto;
  }
`;

export const ProgressBar = styled.div`
  background-color: ${(props) => props.theme.inverted};
  width: 9rem;
  height: 0.4rem;
  border-radius: 0.2rem;

  div {
    width: ${({ width }) => width}%;
    height: 100%;
    background-color: hsl(215, 79%, 51%);
    border-radius: 0.2rem;
  }
`;

export const Loader = styled.h4`
  text-align: center;
  margin-top: 2rem;
`;

export const EndMessage = styled.h4`
  text-align: center;
  margin-top: 2rem;
`;
