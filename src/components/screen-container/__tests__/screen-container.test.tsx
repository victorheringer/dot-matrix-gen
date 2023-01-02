import { render } from "@testing-library/react";
import { ScreenContainer } from "../index";

describe("ScreenContainer", () => {
  it("should render correctly", () => {
    const tree = render(<ScreenContainer />).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
