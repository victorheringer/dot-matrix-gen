import { Button } from "../../components";
import {
  GridContainer,
  TabContainer,
  ButtonsContainer,
  ProjectContainer,
  EditorContainer,
  Column,
} from "./styled";
import useAnimateGrid from "../../hooks/useAnimateGrid";
import { useGenerator } from "../../hooks/useGenerator";
import { Grid, FormControl } from "../../components";

export default function Project() {
  const {
    matrix,
    width,
    height,
    handleChangeInput,
    handleCopyCode,
    handleGenerateCleanMatrix,
    toggleMatrixCell,
  } = useGenerator();

  return (
    <ProjectContainer>
      <TabContainer>
        <Button variant="default" onClick={() => {}}>
          Editor
        </Button>
        <Button variant="default" onClick={() => {}}>
          Animation
        </Button>
      </TabContainer>

      <EditorContainer>
        <Column>
          <FormControl>
            <label>Columns</label>
            <input
              type="number"
              value={width}
              name="width"
              onChange={handleChangeInput}
            />
          </FormControl>
          <FormControl>
            <label>Rows</label>
            <input
              type="number"
              value={height}
              name="height"
              onChange={handleChangeInput}
            />
          </FormControl>

          <ButtonsContainer>
            <Button full variant="danger" onClick={handleGenerateCleanMatrix}>
              Refresh
            </Button>
            <Button full variant="default" onClick={handleCopyCode}>
              Copy as array
            </Button>
          </ButtonsContainer>
        </Column>
        <Column>
          <GridContainer>
            <Grid matrix={matrix} pixelSize={25} clickCell={toggleMatrixCell} />
          </GridContainer>
        </Column>
      </EditorContainer>
    </ProjectContainer>
  );
}
