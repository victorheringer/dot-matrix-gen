import useLocalStorageState from "use-local-storage-state";
import { generateId } from "../helpers/number";
import {
  createProject,
  removeById,
  createSprite,
  deleteSprite,
  getById,
  createFrame,
  getSprite,
  handleUpdateFrame,
} from "../helpers/storage-query";

export default function useProjects() {
  const [projects, setProjects] = useLocalStorageState("projects", {
    defaultValue: [{ id: generateId(), name: "New project", sprites: [] }],
  });

  function handleCreateProject() {
    const updated = createProject(projects, `New project ${projects.length}`);
    setProjects(updated);
  }

  function handleDeleteProject(projectId: number) {
    const updated = removeById(projects, projectId);
    setProjects(updated);
  }

  function handleCreateSprite(projectId: number) {
    const updated = createSprite(projects, projectId, "New sprite");
    setProjects(updated);
  }

  function handleDeleteSprite(projectId: number, spriteId: number) {
    const updated = deleteSprite(projects, projectId, spriteId);
    setProjects(updated);
  }

  function handleCreateFrame(projectId: number, spriteId: number) {
    const updated = createFrame(projects, projectId, spriteId);
    setProjects(updated);
  }

  return {
    projects,
    getSprite,
    getById,
    handleCreateProject,
    handleDeleteProject,
    handleCreateSprite,
    handleDeleteSprite,
    handleCreateFrame,
    handleUpdateFrame,
  };
}
