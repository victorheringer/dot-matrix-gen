import useLocalStorageState from "use-local-storage-state";

import {
  createProject,
  createFrame,
  createSprite,
  deleteProject,
  deleteSprite,
  updateFrame,
} from "../helpers/storage-query";

export default function useProjects() {
  const [projects, setProjects, { removeItem }] = useLocalStorageState(
    "projects",
    {
      defaultValue: createProject({}),
    }
  );

  function handleCreateProject() {
    const updated = createProject(projects);
    setProjects(updated);
  }

  function handleCreateFrame(projectId: number, spriteId: number) {
    const updated = createFrame(projects, projectId, spriteId);
    setProjects(updated);
  }

  function handleCreateSprite(projectId: number) {
    const updated = createSprite(projects, projectId);
    setProjects(updated);
  }

  function handleDeleteProject(projectId: number) {
    const updated = deleteProject(projects, projectId);
    setProjects(updated);
  }

  function handleDeleteSprite(projectId: number, spriteId: number) {
    const updated = deleteSprite(projects, projectId, spriteId);
    setProjects(updated);
  }

  function handleUpdateFrame(
    projects: any,
    projectId: number,
    spriteId: number,
    frameId: number,
    data: boolean[][]
  ) {
    const updated = updateFrame(projects, projectId, spriteId, frameId, data);
    setProjects(updated);
  }

  return {
    projects,
    handleCreateProject,
    handleDeleteProject,
    handleCreateSprite,
    handleDeleteSprite,
    handleCreateFrame,
    handleUpdateFrame,
    removeItem,
  };
}
