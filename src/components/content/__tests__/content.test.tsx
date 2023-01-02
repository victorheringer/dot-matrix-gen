import { render } from "@testing-library/react";
import { Content } from "../index";

describe("Content", () => {
  it("should render correctly", () => {
    const tree = render(
      <Content>
        <p>test</p>
      </Content>
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
