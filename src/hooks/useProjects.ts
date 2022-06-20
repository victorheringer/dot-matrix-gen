import useLocalStorageState from "use-local-storage-state";
import { generateId } from "../helpers/number";

export default function useProjects() {
  const [projects, setProjects] = useLocalStorageState("projects", {
    defaultValue: [{ id: generateId(), name: "New project", sprites: [] }],
  });

  function createProject() {
    setProjects([
      {
        id: generateId(),
        name: `New project ${projects.length}`,
        sprites: [],
      },
      ...projects,
    ]);
  }

  function deleteProject(project) {
    setProjects(projects.filter((item) => item.id !== project.id));
  }

  function getProject(projectId: number) {
    return projects.filter((item) => item.id === projectId);
  }

  function createSprite(projectId: number) {
    const project = getProject(projectId);
    project.sprites.push({ id: generateId(), name: "New spite" });

    const without = projects.filter((item) => item.id !== projectId);
    setProjects([project, ...without]);
  }

  function deleteSprite(projectId: number, spriteId: number) {
    const project = getProject(projectId);

    const withoutSprite = project.sprites.filter(
      (sprite) => sprite.id !== spriteId
    );

    project.sprites = withoutSprite;

    const without = projects.filter((item) => item.id !== projectId);
    setProjects([project, ...without]);
  }

  function getSprite(projectId: number, spriteId: number) {
    const project = getProject(projectId);
    return project.sprites.filter((item) => item.id === spriteId);
  }

  return {
    projects,
    createProject,
    deleteProject,
    getProject,
    createSprite,
    deleteSprite,
    getSprite,
  };
}
