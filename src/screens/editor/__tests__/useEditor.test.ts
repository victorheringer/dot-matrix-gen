import { renderHook } from "@testing-library/react-hooks";
import { useEditor } from "../useEditor";
import * as useParsedParams from "../../../hooks/useParsedParams";

describe("useEditor", () => {
  beforeAll(() => {
    jest.spyOn(useParsedParams, "useParsedParams").mockReturnValue({
      projectId: 1,
      spriteId: 1,
    });
  });

  it("should correctly return values", () => {
    const { result } = renderHook(() =>
      useEditor({ 1: { sprites: { 1: { frames: ["test"] } } } })
    );

    expect(result.current.sprite).toEqual({ frames: ["test"] });
  });
});
