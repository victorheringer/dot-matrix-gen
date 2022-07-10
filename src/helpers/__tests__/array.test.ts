import { moveMatrixData, createMatrix } from "../array";

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
        "down"
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
        "up"
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
        "right"
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
        "left"
      )
    ).toEqual([
      [true, true, true, false],
      [true, false, true, false],
      [false, false, true, false],
    ]);
  });
});
