import { useState, ChangeEvent } from "react";
import { copyTextToClipboard } from "../helpers/copy";
import { createMatrix } from "../helpers/array";
import produce from "immer";

const INIT_HEIGHT = 16;
const INIT_WIDTH = 19;

export function useGenerator() {
  const [size, setSize] = useState({ height: INIT_HEIGHT, width: INIT_WIDTH });
  const [matrix, setMatrix] = useState(
    createMatrix(INIT_HEIGHT, INIT_WIDTH, false)
  );

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setSize({ ...size, [event.target.name]: parseInt(event.target.value) });
  }

  function handleGenerateCleanMatrix() {
    setMatrix(createMatrix(size.height, size.width, false));
  }

  function toggleMatrixCell(line: number, column: number, value: boolean) {
    const copy = produce(matrix, (draft: any) => {
      draft[line][column] = !value;
    });

    setMatrix(copy);
  }

  function handleCopyCode() {
    copyTextToClipboard(JSON.stringify(matrix));
    alert("Matrix copy as array to your clipboard!");
  }

  return {
    ...size,
    matrix,
    handleChangeInput,
    handleGenerateCleanMatrix,
    handleCopyCode,
    toggleMatrixCell,
  };
}
