import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 0;
  position: fixed;
`;

export const CoinList = styled.ul`
  border-radius: 0.7rem;
  width: 22rem;
  height: 6.5rem;
  position: fixed;
  overflow-y: scroll;
  margin-left: 1rem;
  margin-top: 7rem;

  li {
    padding: 0.3rem 0;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.secondary};
  }

  img {
    margin: 0 1rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.searchBarColor};
  width: 44rem;
  padding: 1rem 10rem 3rem 10rem;
  border-radius: 0.7rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  input {
    margin: 1rem 0 0 1rem;
    width: 22rem;
    background-color: ${({ theme }) => theme.secondary};
    border: none;
    color: ${({ theme }) => theme.textColor};
    outline: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 16px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input::placeholder {
    color: ${({ theme }) => theme.textColor};
  }

  p {
    background-color: ${({ theme }) => theme.secondary};
    width: 22rem;
    padding: 0.5rem 1rem;
    margin: 1rem 0 0 1rem;
    border-radius: 0.5rem;
    text-align: left;
  }

  span {
    border: 1px solid ${({ theme }) => theme.textColor};
    padding: 0.2rem 1rem;
    border-radius: 0.3rem;
    font-size: 14px;
    margin-left: 1rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  button {
    border: none;
    width: 10rem;
    font-weight: 700;
    font-size: 16px;
    padding: 0.7rem 0;
    width: 13rem;
    border-radius: 0.5rem;
  }

  button:nth-child(2) {
    background-color: hsl(143, 95%, 43%);
    color: ${({ theme }) => theme.textColor};
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 1rem 6rem;

  span {
    font-size: 50px;
    font-weight: 700;
    transform: rotate(45deg);
    border: none;
    color: hsl(143, 95%, 43%);
    margin-left: 24rem;
    position: absolute;
  }

  h3 {
    margin-left: 3rem;
  }
`;

export const CalendarContainer = styled.div`
  width: 18rem;
  position: fixed;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;
