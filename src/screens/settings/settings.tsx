import { ScreenContainer, ScreenTitle } from "../../components";
import useProjects from "../../hooks/useProjects";
import { Button } from "../../components";
import {
  Container,
  ItemWrapper,
  GrowColumn,
  ActionColumn,
  Text,
} from "./styled";

export default function Settings() {
  const { removeItem } = useProjects();

  return (
    <ScreenContainer>
      <ScreenTitle>Settings</ScreenTitle>
      <Container>
        <ItemWrapper>
          <GrowColumn>
            <Text>Remove all data</Text>
          </GrowColumn>
          <ActionColumn>
            <Button onClick={removeItem} variant="danger">
              Delete
            </Button>
          </ActionColumn>
        </ItemWrapper>
      </Container>
    </ScreenContainer>
  );
}
