import { generateId } from "../number";

const mockDate = new Date("2020-01-01");

jest.spyOn(global, "Date").mockImplementation((): any => mockDate);

describe("generateId", () => {
  it("should return a number based on date", () => {
    expect(generateId()).toBe(1577836800000);
  });
});
