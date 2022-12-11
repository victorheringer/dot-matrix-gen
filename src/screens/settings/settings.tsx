import { ScreenContainer, ScreenTitle } from "../../components";
import useProjects from "../../hooks/useProjects";
import { EXPORT_FORMAT, useSettings } from "../../hooks/useSettings";
import { Button } from "../../components";
import {
  Container,
  ItemWrapper,
  GrowColumn,
  ActionColumn,
  Text,
} from "./styled";

export const EXPORT_FORMAT_LIST = [
  { text: "Hex", id: EXPORT_FORMAT.HEX },
  { text: "Boolean", id: EXPORT_FORMAT.BOOLEAN },
];

export default function Settings() {
  const { removeItem } = useProjects();
  const { settings, updateExportFormat } = useSettings();

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
        <br />
        <ItemWrapper>
          <GrowColumn>
            <Text>Export Format</Text>
          </GrowColumn>
          <ActionColumn>
            <select
              defaultValue={settings.exportFormat}
              onChange={(e: any) => updateExportFormat(e.target.value)}
            >
              {EXPORT_FORMAT_LIST.map((format) => (
                <option value={format.id} key={format.id}>
                  {format.text}
                </option>
              ))}
            </select>
          </ActionColumn>
        </ItemWrapper>
      </Container>
    </ScreenContainer>
  );
}
