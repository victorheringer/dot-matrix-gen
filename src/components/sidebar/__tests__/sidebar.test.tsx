import { render } from "@testing-library/react";
import { Sidebar } from "../index";
import { RouterWrapper } from "../../../__mocks__/router";

describe("Sidebar", () => {
  it("should render correctly", () => {
    const tree = render(
      <RouterWrapper>
        <Sidebar />
      </RouterWrapper>
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
