export function createMatrix(
  height: number,
  width: number,
  content: string | boolean | number
) {
  return Array(height)
    .fill(content)
    .map(() => Array(width).fill(content));
}

export enum MOVE_DIRECTIONS {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

export function moveMatrixData(
  matrix: boolean[][],
  direction: MOVE_DIRECTIONS
) {
  const draft = createMatrix(matrix.length, matrix[0].length, false);

  switch (direction) {
    case MOVE_DIRECTIONS.DOWN: {
      for (let x = 0; x < matrix.length - 1; x++) {
        draft[x + 1] = matrix[x];
      }

      return draft;
    }

    case MOVE_DIRECTIONS.UP: {
      for (let x = 1; x < matrix.length; x++) {
        draft[x - 1] = matrix[x];
      }

      return draft;
    }

    case MOVE_DIRECTIONS.RIGHT: {
      for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[0].length - 1; y++) {
          draft[x][y + 1] = matrix[x][y];
        }
      }

      return draft;
    }

    case MOVE_DIRECTIONS.LEFT: {
      for (let x = 0; x < matrix.length; x++) {
        for (let y = 1; y < matrix[0].length; y++) {
          draft[x][y - 1] = matrix[x][y];
        }
      }

      return draft;
    }
  }
}

export function booleanArrayToBinary(row: boolean[]) {
  return row.reduce((acc: string, value) => `${acc}${value ? 1 : 0}`, "");
}

export function booleanMatrixToHex(matrix: boolean[][]) {
  return matrix.map((row) => {
    const rowAsBinaryString = booleanArrayToBinary(row);
    return parseInt(rowAsBinaryString, 2).toString(16).toUpperCase();
  });
}

export function floodFill(x: number, y: number, matrix: boolean[][]) {
  if (!(x >= 0 && x < matrix.length && y >= 0 && y < matrix[x].length)) return;

  if (matrix[x][y] == true) return;

  matrix[x][y] = true;

  floodFill(x + 1, y, matrix);
  floodFill(x - 1, y, matrix);
  floodFill(x, y + 1, matrix);
  floodFill(x, y - 1, matrix);

  return matrix;
}
