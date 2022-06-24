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
  const { projectId } = useParams();
  const { projects, getById, handleCreateSprite, handleDeleteSprite } =
    useProjects();

  const sprites = getById(projects, parseInt(projectId || ""))?.sprites;

  return (
    <>
      <CrudList
        onCreateClick={() => handleCreateSprite(parseInt(projectId || ""))}
        createBtnText="Create sprite"
        title="Sprites"
        total={sprites.length}
      >
        {sprites.map((sprite) => (
          <Card key={sprite.id}>
            <CrudListItemGrid>
              <CrudListItemColumn>
                <CrusListItemTitle>{sprite.name}</CrusListItemTitle>

                <CrudListItemLink
                  to={`/projects/${projectId}/sprites/${sprite.id}`}
                >
                  to sprite →
                </CrudListItemLink>
              </CrudListItemColumn>

              <Button
                variant="danger"
                onClick={() =>
                  handleDeleteSprite(parseInt(projectId || ""), sprite.id)
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
