import { useState } from "react";
import { useParsedParams } from "./../../hooks/useParsedParams";

export function useEditor(projects: any) {
  const { projectId, spriteId }: any = useParsedParams({
    projectId: parseInt,
    spriteId: parseInt,
  });

  const sprite = projects[projectId].sprites[spriteId];

  const [selectedFrame, setSelectedFrame] = useState<any>(
    Object.keys(sprite.frames)[0]
  );

  return {
    sprite,
    selectedFrame,
    setSelectedFrame,
  };
}
