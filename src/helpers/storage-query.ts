import { generateId } from "./number";
import produce from "immer";
import { createMatrix } from "../helpers/array";

const INIT_HEIGHT = 16;
const INIT_WIDTH = 19;

export function createProject(projects: any) {
  const id = generateId();
  const result = produce(projects, (draft: any) => {
    draft[id] = {
      name: "New project",
      sprites: {},
    };
  });

  return createSprite(result, id);
}

export function createSprite(projects: any, projectId: number) {
  const id = generateId();
  const result = produce(projects, (draft: any) => {
    draft[projectId].sprites[id] = {
      name: "New Sprite",
      frames: {},
    };
  });

  return createFrame(result, projectId, id);
}

export function createFrame(
  projects: any,
  projectId: number,
  spriteId: number,
  frames?: boolean[][]
) {
  return produce(projects, (draft: any) => {
    draft[projectId].sprites[spriteId].frames[generateId()] = {
      data: !frames ? createMatrix(INIT_HEIGHT, INIT_WIDTH, false) : frames,
    };
  });
}

export function deleteProject(projects: any, projectId: number) {
  return produce(projects, (draft: any) => {
    delete draft[projectId];
  });
}

export function deleteSprite(
  projects: any,
  projectId: number,
  spriteId: number
) {
  return produce(projects, (draft: any) => {
    delete draft[projectId].sprites[spriteId];
  });
}

export function deleteFrame(
  projects: any,
  projectId: number,
  spriteId: number,
  frameId: number
) {
  return produce(projects, (draft: any) => {
    delete draft[projectId].sprites[spriteId].frames[frameId];
  });
}

export function updateFrame(
  projects: any,
  projectId: number,
  spriteId: number,
  frameId: number,
  data: boolean[][]
) {
  return produce(projects, (draft: any) => {
    draft[projectId].sprites[spriteId].frames[frameId].data = data;
  });
}
