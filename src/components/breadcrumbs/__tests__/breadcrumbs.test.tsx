import { RouterWrapper } from "../../../__mocks__/router";
import { render } from "@testing-library/react";
import { Breadcrumbs } from "../index";
import useBreadcrumbs from "use-react-router-breadcrumbs";

jest.mock("use-react-router-breadcrumbs");

describe("Breadcrumbs", () => {
  beforeAll(() => {
    (useBreadcrumbs as jest.Mock).mockReturnValue([
      { match: { pathname: "test" }, breadcrumb: "text-value" },
      { match: { pathname: "test-other" }, breadcrumb: "text-other-value" },
    ]);
  });

  it("should render correctly", () => {
    const tree = render(
      <RouterWrapper>
        <Breadcrumbs />
      </RouterWrapper>
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
