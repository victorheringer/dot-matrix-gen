import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  padding: 0 30px;
  max-width: 600px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 32px;
`;

export const Paragraph = styled.p`
  line-height: 26px;
`;

export const StyledLink = styled(Link)`
  margin-bottom: 20px;
  display: block;
`;
