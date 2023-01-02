import { render } from "@testing-library/react";
import { ScreenTitle } from "../index";

describe("ScreenTitle", () => {
  it("should render correctly", () => {
    const tree = render(<ScreenTitle>Test</ScreenTitle>).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
