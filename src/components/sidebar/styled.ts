import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #212121;
  min-height: 100vh;
  padding: 20px;
  color: #e3e3e3;
`;

export const Logo = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 20px;
`;

export const List = styled.ul`
  margin: 30px 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-top: 15px;

  a {
    color: #e3e3e3;
  }
`;
