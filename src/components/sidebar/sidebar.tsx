import { Link } from "react-router-dom";
import { SidebarContainer, Logo, List, ListItem } from "./styled";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <Logo>Dot Matrix Gen</Logo>
      <List>
        <ListItem>
          <Link to="projects">Projects</Link>
        </ListItem>
        <ListItem>
          <a
            target="_blank"
            href="https://github.com/victorheringer/dot-matrix-gen"
          >
            Github
          </a>
        </ListItem>
      </List>
    </SidebarContainer>
  );
}
