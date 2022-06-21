import useProjects from "../../hooks/useProjects";
import { Card, Button } from "../../components";
import {
  ProjectsContainer,
  ProjectsList,
  Title,
  CardGrid,
  CardTextColumn,
  ProjectName,
  StyledLink,
  CreateProjectLabel,
  NoProjects,
} from "./styled";

export default function Projects() {
  const { projects, handleCreateProject, handleDeleteProject } = useProjects();

  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      <ProjectsList>
        <Card>
          <CardGrid>
            <CardTextColumn>
              <CreateProjectLabel>Create Project</CreateProjectLabel>
            </CardTextColumn>
            <Button variant="default" onClick={handleCreateProject}>
              New
            </Button>
          </CardGrid>
        </Card>
        {projects.map((project) => (
          <Card key={project.id}>
            <CardGrid>
              <CardTextColumn>
                <ProjectName>{project.name}</ProjectName>
                <StyledLink to={`/projects/${project.id}`}>
                  to project →
                </StyledLink>
              </CardTextColumn>
              <Button
                variant="danger"
                onClick={() => handleDeleteProject(project.id)}
              >
                Delete
              </Button>
            </CardGrid>
          </Card>
        ))}
        {projects.length === 0 && (
          <NoProjects>
            You don't have any projects yet, just click above and create a new
            one!
          </NoProjects>
        )}
      </ProjectsList>
    </ProjectsContainer>
  );
}
