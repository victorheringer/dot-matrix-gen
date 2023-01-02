import { copyTextToClipboard } from "../copy";

const mockCopy = jest.fn();

Object.assign(navigator, {
  clipboard: {
    writeText: mockCopy,
  },
});

describe("copyTextToClipboard", () => {
  it("should correctly call writeText with given text", () => {
    copyTextToClipboard("test");
    expect(mockCopy).toBeCalledTimes(1);
    expect(mockCopy).toBeCalledWith("test");
  });
});
