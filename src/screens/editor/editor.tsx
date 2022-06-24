import { useState } from "react";
import { Button } from "../../components";
import { useParams } from "react-router-dom";
import {
  GridContainer,
  TabContainer,
  ButtonsContainer,
  ProjectContainer,
  EditorContainer,
  Column,
  Frame,
  FrameContainer,
} from "./styled";
import useProjects from "../../hooks/useProjects";
import useAnimateGrid from "../../hooks/useAnimateGrid";
import { useGenerator } from "../../hooks/useGenerator";
import { Grid, FormControl } from "../../components";

export default function Editor() {
  const {
    matrix,
    width,
    height,
    handleChangeInput,
    handleCopyCode,
    handleGenerateCleanMatrix,
    toggleMatrixCell,
  } = useGenerator();
  const [selectedFrame, setSelectedFrame] = useState(0);

  const { projects, handleCreateFrame, getSprite } = useProjects();

  const { projectId, spriteId } = useParams();

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

      <FrameContainer>
        <>
          <Frame
            onClick={() =>
              handleCreateFrame(
                parseInt(projectId || ""),
                parseInt(spriteId || "")
              )
            }
          >
            New
          </Frame>
          {getSprite(
            projects,
            parseInt(projectId || ""),
            parseInt(spriteId || "")
          )?.frames.map((frame, index) => (
            <Frame
              selected={selectedFrame === frame.id}
              key={frame.id}
              onClick={() => setSelectedFrame(frame.id)}
            >
              frame {index + 1}
            </Frame>
          ))}
        </>
      </FrameContainer>

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
            <Button full variant="danger" onClick={() => alert("delete")}>
              Delete
            </Button>
            <Button full variant="danger" onClick={handleGenerateCleanMatrix}>
              Refresh
            </Button>
            <Button full variant="default" onClick={handleCopyCode}>
              Copy as array
            </Button>
            <Button full variant="default" onClick={() => {}}>
              Save
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
