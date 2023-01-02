import { render } from "@testing-library/react";
import { Button } from "../index";

describe("Button", () => {
  it("should render correctly the default variant", () => {
    const tree = render(<Button variant="default" />).asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly the danger variant", () => {
    const tree = render(<Button variant="danger" />).asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly the secondary variant", () => {
    const tree = render(<Button variant="secondary" />).asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly the default variant and full width", () => {
    const tree = render(<Button variant="default" full />).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
