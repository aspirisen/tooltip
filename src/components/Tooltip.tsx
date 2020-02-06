import React from "react";
import ReactDOM from "react-dom";
import { Popover, PopoverProps } from "./Popover";

export interface TooltipProps<T extends HTMLElement> extends Pick<PopoverProps, "placement"> {
  content: React.ReactNode;
  children: (ref: React.RefObject<T>) => React.ReactNode;
}

export function Tooltip<T extends HTMLElement>(props: TooltipProps<T>) {
  const ref = React.createRef<T>();
  const targetElement = props.children(ref);

  return (
    <>
      {targetElement}
      {ReactDOM.createPortal(
        <Popover placement={props.placement} target={ref}>
          {props.content}
        </Popover>,
        document.body
      )}
    </>
  );
}
