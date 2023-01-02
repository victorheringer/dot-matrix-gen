import { render, fireEvent } from "@testing-library/react";
import { Card } from "..";

describe("Card", () => {
  it("should render correctly", () => {
    const tree = render(
      <Card onClick={jest.fn()}>
        <p>test</p>
      </Card>
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should correctly call onPress", () => {
    const mockOnPress = jest.fn();

    const { getByText } = render(
      <Card onClick={mockOnPress}>
        <p>test</p>
      </Card>
    );

    fireEvent.click(getByText("test"));
    expect(mockOnPress).toBeCalledTimes(1);
  });
});
