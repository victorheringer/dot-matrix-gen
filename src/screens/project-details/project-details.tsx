import useProjects from "../../hooks/useProjects";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CrudList,
  CrusListItemTitle,
  CrudListItemLink,
  CrudListItemColumn,
  CrudListItemGrid,
} from "../../components";

export default function ProjectsDetails() {
  const { projectId }: any = useParams();
  const { projects, handleCreateSprite, handleDeleteSprite } = useProjects();

  const sprites = projects[projectId].sprites;

  return (
    <>
      <CrudList
        onCreateClick={() => handleCreateSprite(parseInt(projectId || ""))}
        createBtnText="Create sprite"
        title="Sprites"
        total={sprites.length}
      >
        {Object.keys(sprites).map((id) => (
          <Card key={id}>
            <CrudListItemGrid>
              <CrudListItemColumn>
                <CrusListItemTitle>{sprites[id].name}</CrusListItemTitle>
                <CrudListItemLink to={`/projects/${projectId}/sprites/${id}`}>
                  to sprite →
                </CrudListItemLink>
              </CrudListItemColumn>

              <Button
                variant="danger"
                onClick={() =>
                  handleDeleteSprite(parseInt(projectId || ""), parseInt(id))
                }
              >
                delete
              </Button>
            </CrudListItemGrid>
          </Card>
        ))}
      </CrudList>
    </>
  );
}
