import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProjectsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  color: #212121;
  margin-bottom: 40px;
  font-size: 32px;
  margin-top: 0;
`;

export const ProjectsList = styled.div`
  width: 600px;
`;

export const CardGrid = styled.div`
  display: flex;
`;

export const CardTextColumn = styled.div`
  flex-grow: 1;
  justify-content: center;
`;

export const ProjectName = styled.p`
  margin: 0;
`;

export const StyledLink = styled(Link)`
  font-size: 12px;
`;

export const NoProjects = styled.p`
  font-weight: bold;
  color: #757575;
  text-align: center;
`;

export const CreateProjectLabel = styled.p`
  font-size: 16px;
  margin: 0;
  font-weight: bold;
  margin-top: 5px;
  color: #424242;
`;
