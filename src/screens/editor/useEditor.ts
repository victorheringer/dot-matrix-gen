import { useState, useEffect } from "react";
import { useParsedParams } from "./../../hooks/useParsedParams";

export function useEditor(projects) {
  const { projectId, spriteId } = useParsedParams({
    projectId: parseInt,
    spriteId: parseInt,
  });

  const sprite = projects[projectId].sprites[spriteId];

  const [selectedFrame, setSelectedFrame] = useState(
    Object.keys(sprite.frames)[0]
  );

  return {
    sprite,
    selectedFrame,
    setSelectedFrame,
  };
}
