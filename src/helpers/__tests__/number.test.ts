import { generateId } from "../number";

jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));

describe("generateId", () => {
  it("should return a number based on date", () => {
    expect(generateId()).toBe(1577836800000);
  });
});
