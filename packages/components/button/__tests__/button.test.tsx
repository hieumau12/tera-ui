import * as React from "react";
import {act, render} from "@testing-library/react";

import {Button} from "../src";

describe("Button", () => {
  it("should render correctly", () => {
    const wrapper = render(<Button disableRipple />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<Button ref={ref} disableRipple />);
    expect(ref.current).not.toBeNull();
  });

  it("should trigger onPress function", () => {
    const onPress = jest.fn();
    const {getByRole} = render(<Button disableRipple onPress={onPress} />);

    act(() => {
      getByRole("button").click();
    });

    expect(onPress).toHaveBeenCalled();
  });

  it("should ignore events when disabled", () => {
    const onPress = jest.fn();
    const {getByRole} = render(<Button disableRipple isDisabled onPress={onPress} />);

    act(() => {
      getByRole("button").click();
    });

    expect(onPress).not.toHaveBeenCalled();
  });

  it("should renders with start icon", () => {
    const wrapper = render(
      <Button disableRipple startContent={<span data-testid="start-icon">Icon</span>}>
        Button
      </Button>,
    );

    expect(wrapper.getByTestId("start-icon")).toBeInTheDocument();
  });

  it("should renders with end icon", () => {
    const wrapper = render(
      <Button disableRipple endContent={<span data-testid="end-icon">Icon</span>}>
        Button
      </Button>,
    );

    expect(wrapper.getByTestId("end-icon")).toBeInTheDocument();
  });

  it("should have the proper type attribute", () => {
    const wrapper = render(<Button disableRipple type="submit" />);

    expect(wrapper.getByRole("button")).toHaveAttribute("type", "submit");
  });

  it("should uppercase text inside", () => {
    const wrapper = render(<Button uppercase={true}>Button</Button>);

    expect(wrapper.getAllByRole("button")[0]).toHaveClass("uppercase");

    const wrapper2 = render(<Button uppercase={false}>Button</Button>);

    expect(wrapper2.getAllByRole("button")[1]).not.toHaveClass("uppercase");
  });

  it("should bold text inside", () => {
    const wrapper = render(<Button bold={true}>Button</Button>);

    expect(wrapper.getAllByRole("button")[0]).toHaveClass("font-bold");

    const wrapper2 = render(<Button bold={false}>Button</Button>);

    expect(wrapper2.getAllByRole("button")[1]).toHaveClass("font-normal");
  });
});
