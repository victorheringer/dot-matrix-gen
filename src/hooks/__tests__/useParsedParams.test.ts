import { renderHook } from "@testing-library/react-hooks";
import { useParsedParams } from "../useParsedParams";

jest.mock("react-router-dom", () => ({
  useParams: () => ({ test: "123", hello: "1" }),
}));

describe("useParsedParams", () => {
  it("should correctly parse all params", () => {
    const { result } = renderHook(() =>
      useParsedParams({ test: parseInt, hello: parseInt })
    );

    expect(result.current).toMatchObject({
      test: 123,
      hello: 1,
    });
  });
});
