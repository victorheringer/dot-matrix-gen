import useProjects from "../../hooks/useProjects";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components";
import { ProjectsContainer, ProjectsList, Title } from "./styled";

export default function Projects() {
  const { projects, createProject, deleteProject } = useProjects();
  const navigate = useNavigate();

  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      <ProjectsList>
        <Card onClick={createProject}>Create Project</Card>
        {projects.map((project) => (
          <Card>
            <div
              onClick={() => {
                navigate(`/projects/${project.id}`), { replace: true };
              }}
            >
              {project.name}
            </div>

            <button onClick={() => deleteProject(project)}>Delete</button>
          </Card>
        ))}
      </ProjectsList>
    </ProjectsContainer>
  );
}
