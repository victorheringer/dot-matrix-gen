import useProjects from "../../hooks/useProjects";
import { useParams } from "react-router-dom";
import { Button, Card } from "../../components";
import { Link } from "react-router-dom";

export default function ProjectsDetails() {
  const { projectId } = useParams();
  const { projects, getProject, handleCreateSprite, handleDeleteSprite } =
    useProjects();

  console.log(getProject(projects, projectId));

  console.log(projectId);

  return (
    <>
      <div>
        <Button
          variant="default"
          onClick={() => handleCreateSprite(parseInt(projectId || ""))}
        >
          add
        </Button>
      </div>
      <div>
        {getProject(projects, parseInt(projectId || ""))?.sprites.map(
          (sprite) => (
            <Card>
              <div>
                {sprite.name}
                <Link
                  replace
                  to={`/projects/${projectId}/sprites/${sprite.id}`}
                >
                  go to sprite
                </Link>
              </div>

              <Button
                variant="danger"
                onClick={() =>
                  handleDeleteSprite(parseInt(projectId || ""), sprite.id)
                }
              >
                delete
              </Button>
            </Card>
          )
        )}
      </div>
    </>
  );
}
