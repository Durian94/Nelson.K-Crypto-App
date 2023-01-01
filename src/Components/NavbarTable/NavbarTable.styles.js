import styled from "styled-components";

export const TableRowContainer = styled.div`
  width: fit-content;
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.secondary};
  padding: 1rem 2rem;
  border-radius: 0 0 0.7rem 0.7rem;
`;

export const TableData = styled.div`
  font-weight: 700;
  font-size: 15px;
  display: flex;
  align-items: center;

  img {
    width: 0.8rem;
    margin: 0 0.4rem;
  }
`;

export const NavbarProgressBar = styled.div`
  background-color: hsl(215, 79%, 51%);
  width: 3rem;
  height: 0.4rem;
  border-radius: 0.2rem;
  margin-left: 0.2rem;

  div {
    width: ${({ width }) => width}%;
    height: 100%;
    background-color: ${({ theme }) => theme.inverted};
    border-radius: 0.2rem;
  }
`;
