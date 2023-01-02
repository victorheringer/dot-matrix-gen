import { render } from "@testing-library/react";
import { Header } from "../index";

describe("Header", () => {
  it("should render correctly", () => {
    const tree = render(<Header />).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
