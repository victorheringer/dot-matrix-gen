import { render, fireEvent } from "@testing-library/react";
import { RouterWrapper } from "../../../__mocks__/router";
import {
  CrudList,
  CrusListItemTitle,
  CrudListItemLink,
  CrudListItemColumn,
  CrudListItemGrid,
} from "../index";

describe("CrudList", () => {
  it("should render correctly with content", () => {
    const tree = render(
      <CrudList
        title="test-title"
        createBtnText="test-btn-text"
        onCreateClick={jest.fn()}
        total={10}
      >
        <p>test</p>
      </CrudList>
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly without content", () => {
    const tree = render(
      <CrudList
        title="test-title"
        createBtnText="test-btn-text"
        onCreateClick={jest.fn()}
        total={0}
      >
        <p>test</p>
      </CrudList>
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should correctly call createBtnText on press", () => {
    const mockOnPress = jest.fn();

    const { getByText } = render(
      <CrudList
        title="test-title"
        createBtnText="test-btn-text"
        onCreateClick={mockOnPress}
        total={0}
      >
        <p>test</p>
      </CrudList>
    );

    fireEvent.click(getByText("New"));
    expect(mockOnPress).toBeCalledTimes(1);
  });
});

describe("CrusListItemTitle", () => {
  it("should render correctly", () => {
    const tree = render(
      <CrusListItemTitle>test</CrusListItemTitle>
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });
});

describe("CrudListItemLink", () => {
  it("should render correctly", () => {
    const tree = render(
      <RouterWrapper>
        <CrudListItemLink to="test/url">test</CrudListItemLink>
      </RouterWrapper>
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });
});

describe("CrudListItemColumn", () => {
  it("should render correctly", () => {
    const tree = render(
      <CrudListItemColumn>test</CrudListItemColumn>
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });
});

describe("CrudListItemGrid", () => {
  it("should render correctly", () => {
    const tree = render(<CrudListItemGrid>test</CrudListItemGrid>).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
