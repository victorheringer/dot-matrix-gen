import { generateId } from "./number";

export function createProject(projects: Project[], name: string) {
  return [{ id: generateId(), name, sprites: [] }, ...projects];
}

export function deleteProject(projects: Project[], projectId: number) {
  return projects.filter((item) => item.id !== projectId);
}

export function getProject(projects: Project[], projectId: number) {
  const [result] = projects.filter((item) => item.id === projectId);
  return result;
}

export function createSprite(
  projects: Project[],
  projectId: number,
  name: string
) {
  const project = getProject(projects, projectId);
  const without = projects.filter((item) => item.id !== projectId);

  project.sprites.push({ id: generateId(), name, frames: [] });

  return [project, ...without];
}

export function deleteSprite(
  projects: Project[],
  projectId: number,
  spriteId: number
) {
  const project = getProject(projects, projectId);
  const without = projects.filter((item) => item.id !== projectId);

  const withoutSprite = project.sprites.filter(
    (sprite) => sprite.id !== spriteId
  );

  project.sprites = withoutSprite;

  return [project, ...without];
}

export function getSprite(
  projects: Project[],
  projectId: number,
  spriteId: number
) {
  const project = getProject(projects, projectId);
  const [result] = project.sprites.filter((item) => item.id === spriteId);

  return result;
}
