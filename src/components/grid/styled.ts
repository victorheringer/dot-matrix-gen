import styled from "styled-components";

export const TableContainer = styled.div`
  align-self: center;
`;

export const TableColumn = styled.td<{ isPainted: boolean; size: number }>`
  border: 1px solid #ccc;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ isPainted }) => (isPainted ? "#212121" : "#fafafa")};
`;
