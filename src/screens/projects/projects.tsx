import useProjects from "../../hooks/useProjects";
import {
  Card,
  Button,
  CrudList,
  CrusListItemTitle,
  CrudListItemLink,
  CrudListItemColumn,
  CrudListItemGrid,
} from "../../components";

export default function Projects() {
  const { projects, handleCreateProject, handleDeleteProject } = useProjects();

  return (
    <>
      <CrudList
        onCreateClick={handleCreateProject}
        createBtnText="Create Project"
        title="Projects"
        total={projects.length}
      >
        {Object.keys(projects).map((id) => (
          <Card key={id}>
            <CrudListItemGrid>
              <CrudListItemColumn>
                <CrusListItemTitle>{projects[id].name}</CrusListItemTitle>
                <CrudListItemLink to={`/projects/${id}`}>
                  to project →
                </CrudListItemLink>
              </CrudListItemColumn>
              <Button
                variant="danger"
                onClick={() => handleDeleteProject(parseInt(id))}
              >
                Delete
              </Button>
            </CrudListItemGrid>
          </Card>
        ))}
      </CrudList>
    </>
  );
}
