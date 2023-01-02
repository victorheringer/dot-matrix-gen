import { render } from "@testing-library/react";
import { AppContainer } from "../index";

describe("AppContainer", () => {
  it("should render correctly", () => {
    const tree = render(<AppContainer />).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
