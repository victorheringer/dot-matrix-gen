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

  console.log(result);

  return result;
}

export function createFrame(
  projects: Project[],
  projectId: number,
  spriteId: number
) {
  console.log(projects, projectId, spriteId);

  return projects.map((project) => {
    if (project.id === projectId) {
      console.log("project equal id");
      project.sprites = project.sprites.map((sprite) => {
        if (sprite.id === spriteId) {
          console.log("sprite equal id");
          sprite.frames.push({ id: generateId() });
          return sprite;
        }

        return sprite;
      });

      return project;
    }

    return project;
  });
}
