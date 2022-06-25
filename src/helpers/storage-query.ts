import { generateId } from "./number";

export function getById(collection: any[], id: number) {
  const [result] = collection.filter((item) => item.id === id);
  return result;
}

export function removeById(collection: any[], id: number) {
  return collection.filter((item) => item.id !== id);
}

export function createProject(projects: Project[], name: string) {
  return [{ id: generateId(), name, sprites: [] }, ...projects];
}

export function createSprite(
  projects: Project[],
  projectId: number,
  name: string
) {
  const project = getById(projects, projectId);
  const without = projects.filter((item) => item.id !== projectId);

  project.sprites.push({ id: generateId(), name, frames: [] });

  return [project, ...without];
}

export function deleteSprite(
  projects: Project[],
  projectId: number,
  spriteId: number
) {
  const project = getById(projects, projectId);
  const without = removeById(projects, projectId);

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
  const project = getById(projects, projectId);
  const [result] = project.sprites.filter((item) => item.id === spriteId);

  return result;
}

export function createFrame(
  projects: Project[],
  projectId: number,
  spriteId: number
) {
  return projects.map((project) => {
    if (project.id === projectId) {
      project.sprites = project.sprites.map((sprite) => {
        if (sprite.id === spriteId) {
          sprite.frames.push({ id: generateId(), data: [[]] });
          return sprite;
        }

        return sprite;
      });

      return project;
    }

    return project;
  });
}

export function handleUpdateFrame(
  projects: Project[],
  projectId: number,
  spriteId: number,
  frameId: number,
  data: boolean[][]
) {
  return projects.map((project) => {
    if (project.id === projectId) {
      project.sprites = project.sprites.map((sprite) => {
        if (sprite.id === spriteId) {
          sprite.frames = sprite.frames.map((frame) => {
            if (frame.id === frameId) {
              frame.data = data;
              return frame;
            }

            return frame;
          });
        }

        return sprite;
      });

      return project;
    }

    return project;
  });
}
