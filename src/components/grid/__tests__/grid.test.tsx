import { fireEvent, render } from "@testing-library/react";
import { Grid } from "../index";

describe("Grid", () => {
  it("should render correctly", () => {
    const tree = render(
      <Grid
        matrix={[
          [true, false],
          [true, false],
        ]}
        clickCell={jest.fn()}
        pixelSize={10}
      />
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should call clickCell when a cell is cell is clicked", () => {
    const mockClickCell = jest.fn();

    const { getByLabelText } = render(
      <Grid
        matrix={[
          [true, false],
          [true, false],
        ]}
        clickCell={mockClickCell}
        pixelSize={10}
      />
    );

    fireEvent.click(getByLabelText("cell position 0:0"));

    expect(mockClickCell).toBeCalledTimes(1);
    expect(mockClickCell).toBeCalledWith(0, 0, true);
  });
});
