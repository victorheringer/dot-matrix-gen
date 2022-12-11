import { useState, ChangeEvent } from "react";
import { copyTextToClipboard } from "../helpers/copy";
import {
  MOVE_DIRECTIONS,
  createMatrix,
  moveMatrixData,
  booleanMatrixToHex,
} from "../helpers/array";
import { EXPORT_FORMAT, useSettings } from "./useSettings";

import produce from "immer";

const INIT_HEIGHT = 16;
const INIT_WIDTH = 19;

export function useGenerator() {
  const [size, setSize] = useState({ height: INIT_HEIGHT, width: INIT_WIDTH });
  const { settings } = useSettings();
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
    const formatted: any = {
      [EXPORT_FORMAT.BOOLEAN]: matrix,
      [EXPORT_FORMAT.HEX]: booleanMatrixToHex(matrix),
    };

    copyTextToClipboard(JSON.stringify(formatted[settings.exportFormat]));
    alert("Matrix copy as array to your clipboard!");
  }

  function handleMoveMatrixUp() {
    setMatrix(moveMatrixData(matrix, MOVE_DIRECTIONS.UP));
  }

  function handleMoveMatrixDown() {
    setMatrix(moveMatrixData(matrix, MOVE_DIRECTIONS.DOWN));
  }

  function handleMoveMatrixLeft() {
    setMatrix(moveMatrixData(matrix, MOVE_DIRECTIONS.LEFT));
  }

  function handleMoveMatrixRight() {
    setMatrix(moveMatrixData(matrix, MOVE_DIRECTIONS.RIGHT));
  }

  return {
    ...size,
    matrix,
    setMatrix,
    handleMoveMatrixDown,
    handleMoveMatrixLeft,
    handleMoveMatrixUp,
    handleMoveMatrixRight,
    handleChangeInput,
    handleGenerateCleanMatrix,
    handleCopyCode,
    toggleMatrixCell,
  };
}
