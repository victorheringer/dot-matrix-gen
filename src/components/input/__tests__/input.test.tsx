import { render } from "@testing-library/react";
import { Input } from "../index";

describe("Input", () => {
  it("should render correctly", () => {
    const tree = render(<Input />).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
