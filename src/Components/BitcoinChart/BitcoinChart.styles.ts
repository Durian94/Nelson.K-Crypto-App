import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0 3rem 0;
`;

export const MainHeader = styled.h3`
  margin: 1.5rem 0;
`;

export const ChartContainer = styled.div`
  width: 42rem;
  padding: 1rem 3rem 2rem 3rem;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 0.5rem;
`;

export const ChartHeader = styled.div`
  font-size: 19px;
  h3 {
    font-size: 32px;
    margin: 0.2rem 0;
  }

  position: relative;
  right: 1.5rem;
`;
