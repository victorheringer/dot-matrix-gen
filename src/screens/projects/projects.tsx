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
        {projects.map((project) => (
          <Card key={project.id}>
            <CrudListItemGrid>
              <CrudListItemColumn>
                <CrusListItemTitle>{project.name}</CrusListItemTitle>
                <CrudListItemLink to={`/projects/${project.id}`}>
                  to project →
                </CrudListItemLink>
              </CrudListItemColumn>
              <Button
                variant="danger"
                onClick={() => handleDeleteProject(project.id)}
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
