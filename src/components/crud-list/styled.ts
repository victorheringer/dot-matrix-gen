import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ListContent = styled.div`
  width: 600px;
`;

export const ListTitle = styled.h2`
  color: #212121;
  margin-bottom: 40px;
  font-size: 32px;
  margin-top: 0;
`;

export const CardGrid = styled.div`
  display: flex;
`;

export const CardTextColumn = styled.div`
  flex-grow: 1;
  justify-content: center;
`;

export const NoData = styled.p`
  font-weight: bold;
  color: #757575;
  text-align: center;
`;

export const CreateLabel = styled.p`
  font-size: 16px;
  margin: 0;
  font-weight: bold;
  margin-top: 5px;
  color: #424242;
`;

export const CrusListItemTitle = styled.p`
  margin: 0;
`;

export const CrudListItemLink = styled(Link)`
  font-size: 12px;
`;

export const CrudListItemColumn = styled.div`
  flex-grow: 1;
  justify-content: center;
`;

export const CrudListItemGrid = styled.div`
  display: flex;
`;
