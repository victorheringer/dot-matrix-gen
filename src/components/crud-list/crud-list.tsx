import { ReactNode } from "react";
import { Card, Button } from "..";
import {
  ListTitle,
  ListContainer,
  ListContent,
  CardGrid,
  CardTextColumn,
  CreateLabel,
  NoData,
} from "./styled";

type CrudListProps = {
  title: string;
  children: ReactNode;
  createBtnText: string;
  onCreateClick: () => void;
  total: number;
};

export default function CrudList({
  title,
  children,
  createBtnText,
  onCreateClick,
  total,
}: CrudListProps) {
  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>

      <ListContent>
        <Card>
          <CardGrid>
            <CardTextColumn>
              <CreateLabel>{createBtnText}</CreateLabel>
            </CardTextColumn>
            <Button variant="default" onClick={onCreateClick}>
              New
            </Button>
          </CardGrid>
        </Card>
        {children}

        {total === 0 && (
          <NoData>
            You don't have any content yet, just click above and create a new
            one!
          </NoData>
        )}
      </ListContent>
    </ListContainer>
  );
}
