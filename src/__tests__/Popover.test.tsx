import React from "react";
import { render, act } from "@testing-library/react";
import { Popover } from "../components/Popover";

describe("Popover", () => {
  it("should render Popover", async () => {
    let enter: Function;

    const element = {
      getBoundingClientRect: () => ({
        left: 0,
        top: 0,
        bottom: 40,
        height: 40,
        width: 40,
        x: 0,
        y: 0
      }),
      addEventListener: (type: string, callback: EventListener) => {
        if (type === "mouseenter") {
          enter = callback;
        }
      }
    } as HTMLDivElement;

    element.removeEventListener = jest.fn();

    const target = { current: element };

    const wrapper = render(
      <Popover placement="bottom" target={target}>
        <div>Some Content</div>
      </Popover>
    );

    act(() => {
      enter();
    });

    expect(wrapper.container).toMatchSnapshot();
  });

  it("should open Popover on mouse enter", async () => {
    let enter: Function;

    const element = {
      getBoundingClientRect: () => ({
        left: 0,
        top: 0,
        bottom: 40,
        height: 40,
        width: 40,
        x: 0,
        y: 0
      }),
      addEventListener: (type: string, callback: EventListener) => {
        if (type === "mouseenter") {
          enter = callback;
        }
      }
    } as HTMLDivElement;

    element.removeEventListener = jest.fn();

    const target = { current: element };

    const id = "content";

    const wrapper = render(
      <Popover placement="bottom" target={target}>
        <div data-testid={id}>Some Content</div>
      </Popover>
    );

    act(() => {
      enter();
    });

    expect(wrapper.getByTestId(id)).toBeDefined();
  });

  it("should close tooltip on mouse leave", async () => {
    let enter: Function;
    let leave: Function;

    const element = {
      getBoundingClientRect: () => ({
        left: 0,
        top: 0,
        bottom: 40,
        height: 40,
        width: 40,
        x: 0,
        y: 0
      }),
      addEventListener: (type: string, callback: EventListener) => {
        if (type === "mouseenter") {
          enter = callback;
        }

        if (type === "mouseleave") {
          leave = callback;
        }
      }
    } as HTMLDivElement;

    element.removeEventListener = jest.fn();

    const target = { current: element };

    const id = "content";

    const wrapper = render(
      <Popover placement="bottom" target={target}>
        <div data-testid={id}>Some Content</div>
      </Popover>
    );

    act(() => {
      enter();
    });

    expect(wrapper.getByTestId(id)).toBeDefined();

    act(() => {
      leave();
    });

    expect(() => wrapper.getByTestId(id)).toThrow();
  });
});
