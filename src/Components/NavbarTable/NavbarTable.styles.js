import styled from "styled-components";

export const TableRowContainer = styled.div`
  width: fit-content;
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme.secondary};
  padding: 1rem 2rem;
  border-radius: 0 0 0.7rem 0.7rem;
`;

export const TableData = styled.div`
  font-weight: 700;
  font-size: 15px;
`;
