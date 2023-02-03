import styled from "styled-components";

export const Container = styled.div`
  padding: 0 5rem;
  text-align: center;
  margin: 2rem 0 4rem 0;
}
`;

export const AddAssetButton = styled.button`
  border: none;
  background-color: hsl(143, 95%, 43%);
  color: ${({ theme }) => theme.textColor};
  font-weight: 700;
  font-size: 16px;
  padding: 1rem 8rem;
  border-radius: 0.5rem;
`;
