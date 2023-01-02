import { render } from "@testing-library/react";
import { Modal } from "../index";

describe("Modal", () => {
  it("should render correctly a visible modal", () => {
    const tree = render(<Modal visible>Test</Modal>).asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should not render correctly a hidden modal", () => {
    const tree = render(<Modal visible={false}>Test</Modal>).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
