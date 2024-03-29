import {
  MOVE_DIRECTIONS,
  moveMatrixData,
  createMatrix,
  booleanArrayToBinary,
  booleanMatrixToHex,
  floodFill,
} from "../array";

describe("createMatrix", () => {
  it("should create a function with correctly width and height", () => {
    const y = 3,
      x = 4;

    expect(createMatrix(y, x, false)).toEqual([
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false],
    ]);
  });
});

describe("moveMatrixData", () => {
  it("should move all data from a matrix to next line", () => {
    expect(
      moveMatrixData(
        [
          [true, true, true, true],
          [false, true, false, true],
          [true, false, false, true],
        ],
        MOVE_DIRECTIONS.DOWN
      )
    ).toEqual([
      [false, false, false, false],
      [true, true, true, true],
      [false, true, false, true],
    ]);
  });

  it("should move all data from a matrix to the line before", () => {
    expect(
      moveMatrixData(
        [
          [true, true, true],
          [false, true, false],
          [true, false, false],
        ],
        MOVE_DIRECTIONS.UP
      )
    ).toEqual([
      [false, true, false],
      [true, false, false],
      [false, false, false],
    ]);
  });

  it("should move all data from a matrix to the right", () => {
    expect(
      moveMatrixData(
        [
          [true, true, true, true],
          [false, true, false, true],
          [true, false, false, true],
        ],
        MOVE_DIRECTIONS.RIGHT
      )
    ).toEqual([
      [false, true, true, true],
      [false, false, true, false],
      [false, true, false, false],
    ]);
  });

  it("should move all data from a matrix to the left", () => {
    expect(
      moveMatrixData(
        [
          [true, true, true, true],
          [false, true, false, true],
          [true, false, false, true],
        ],
        MOVE_DIRECTIONS.LEFT
      )
    ).toEqual([
      [true, true, true, false],
      [true, false, true, false],
      [false, false, true, false],
    ]);
  });
});

describe("booleanArrayToBinary", () => {
  it("should convert an array of booleans to binary string", () => {
    expect(booleanArrayToBinary([true, false, true, true])).toBe("1011");
  });
});

describe("booleanMatrixToHex", () => {
  it("should convert boolean matrix to an array of hex values", () => {
    expect(
      booleanMatrixToHex([
        [false, true, true, true],
        [false, false, true, false],
        [false, true, false, false],
      ])
    ).toEqual(["7", "2", "4"]);
  });
});

describe("floodFill", () => {
  it("should correctly return a small matrix filled", () => {
    expect(
      floodFill(1, 1, [
        [false, true, true, false],
        [true, false, false, true],
        [false, true, true, false],
      ])
    ).toEqual([
      [false, true, true, false],
      [true, true, true, true],
      [false, true, true, false],
    ]);
  });

  it("should correctly fill a big matrix", () => {
    expect(
      floodFill(2, 3, [
        [false, false, false, false, false, false, false, false],
        [false, true, true, true, true, true, false, false],
        [false, true, false, false, false, true, false, false],
        [false, true, false, false, false, true, false, false],
        [false, true, false, false, false, true, false, false],
        [false, true, true, true, true, true, false, false],
      ])
    ).toEqual([
      [false, false, false, false, false, false, false, false],
      [false, true, true, true, true, true, false, false],
      [false, true, true, true, true, true, false, false],
      [false, true, true, true, true, true, false, false],
      [false, true, true, true, true, true, false, false],
      [false, true, true, true, true, true, false, false],
    ]);
  });

  it("should return the same matrix if a filled item position is given", () => {
    expect(
      floodFill(0, 1, [
        [false, true, true, false],
        [true, false, false, true],
        [false, true, true, false],
      ])
    ).toEqual([
      [false, true, true, false],
      [true, false, false, true],
      [false, true, true, false],
    ]);
  });

  it("should fill a full matrix", () => {
    expect(
      floodFill(0, 0, [
        [false, false],
        [false, false],
      ])
    ).toEqual([
      [true, true],
      [true, true],
    ]);
  });
});
