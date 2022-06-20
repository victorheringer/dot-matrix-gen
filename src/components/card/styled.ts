import styled from "styled-components";

export const CardWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid #e3e3e3;
  padding: 20px;
  margin: 10px;
  ${({ onClick }) => onClick && "cursor: pointer;"}
`;
