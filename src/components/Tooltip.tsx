import React from "react";
import { TooltipPlacement } from "../core/Tooltip.types";
import { Flyout } from "./Flyout";

export interface TooltipProps {
  target: React.RefObject<HTMLElement>;
  placement: TooltipPlacement;
}

export const Tooltip: React.FC<TooltipProps> = props => {
  const [isOver, setIsOver] = React.useState(false);

  React.useEffect(() => {
    const enter = () => setIsOver(true);
    const leave = () => setIsOver(false);

    props.target.current?.addEventListener("mouseenter", enter);
    props.target.current?.addEventListener("mouseleave", leave);

    return () => {
      props.target.current?.removeEventListener("mouseenter", enter);
      props.target.current?.removeEventListener("mouseleave", leave);
    };
  }, [props.target.current]);

  const targetRect = props.target.current?.getBoundingClientRect();

  if (!isOver || !targetRect) {
    return null;
  }

  return (
    <Flyout placement={props.placement} targetRect={targetRect}>
      {props.children}
    </Flyout>
  );
};
