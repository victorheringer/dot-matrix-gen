import { useEffect, useState } from "react";
import { Button } from "../../components";
import { useParams } from "react-router-dom";
import {
  GridContainer,
  TabContainer,
  ProjectContainer,
  EditorContainer,
  Frame,
  FrameContainer,
  AddButton,
  ButtonSeparator,
} from "./styled";
import useProjects from "../../hooks/useProjects";
import useAnimateGrid from "../../hooks/useAnimateGrid";
import { useGenerator } from "../../hooks/useGenerator";
import { Grid } from "../../components";

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

  const { projectId, spriteId } = useParams();
  const { projects, handleCreateFrame, handleUpdateFrame } = useProjects();
  const sprite =
    projects[parseInt(projectId || "")].sprites[parseInt(spriteId || "")];

  const [selectedFrame, setSelectedFrame] = useState(0);
  const [mode, setMode] = useState<"edit" | "animate">("edit");
  const { grid, pause, play } = useAnimateGrid({
    grids: Object.values(sprite?.frames || {}).map((frame: any) => frame.data),
    time: 1000,
  });

  useEffect(() => {
    pause();
  }, []);

  return (
    <ProjectContainer>
      <TabContainer>
        <Button
          variant={mode == "edit" ? "secondary" : "default"}
          onClick={() => {
            setMode("edit");
          }}
        >
          Editor
        </Button>
        <Button
          variant={mode == "animate" ? "secondary" : "default"}
          onClick={() => {
            setMode("animate");
          }}
        >
          Animation
        </Button>
        <ButtonSeparator>|</ButtonSeparator>

        <Button variant="default" onClick={handleCopyCode}>
          Copy as array
        </Button>

        <Button variant="default" onClick={play}>
          Play
        </Button>
        <Button variant="default" onClick={pause}>
          Pause
        </Button>

        <Button
          variant="default"
          onClick={() => {
            handleUpdateFrame(
              projects,
              parseInt(projectId || ""),
              parseInt(spriteId || ""),
              selectedFrame,
              matrix
            );

            alert("Saved");
          }}
        >
          Save
        </Button>
        <Button variant="danger" onClick={() => alert("delete")}>
          Delete
        </Button>
      </TabContainer>

      <FrameContainer>
        <AddButton
          onClick={() =>
            handleCreateFrame(
              parseInt(projectId || ""),
              parseInt(spriteId || "")
            )
          }
        >
          +
        </AddButton>

        {Object.keys(sprite?.frames || {}).map((id, index) => (
          <Frame
            selected={selectedFrame === id}
            key={id}
            onClick={() => setSelectedFrame(id)}
          >
            {index + 1}
          </Frame>
        ))}
      </FrameContainer>

      <EditorContainer>
        <GridContainer>
          {mode === "edit" && (
            <Grid matrix={matrix} pixelSize={25} clickCell={toggleMatrixCell} />
          )}
          {mode === "animate" && (
            <Grid matrix={grid} pixelSize={25} clickCell={() => {}} />
          )}
        </GridContainer>
      </EditorContainer>
    </ProjectContainer>
  );
}
