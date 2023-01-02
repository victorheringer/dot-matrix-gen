import { render } from "@testing-library/react";
import { FormControl } from "../index";

describe("FormControl", () => {
  it("should render correctly", () => {
    const tree = render(<FormControl />).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
