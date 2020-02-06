import React from "react";
import { TooltipPlacement } from "../core/Tooltip.types";
import { getPosition } from "../core/getPosition";
import * as cn from "../styles/Flyout.module.css";

export interface FlyoutProps {
  targetRect: DOMRect;
  placement: TooltipPlacement;
}

export const Flyout: React.FC<FlyoutProps> = props => {
  const ref = React.createRef<HTMLDivElement>();

  const [tooltipRect, setTooltipRect] = React.useState<DOMRect | undefined>(
    undefined
  );

  React.useEffect(() => {
    setTooltipRect(ref.current?.getBoundingClientRect());
  }, [props.targetRect]);

  const styles: React.CSSProperties =
    props.targetRect && tooltipRect
      ? getPosition(props.placement, props.targetRect, tooltipRect)
      : { visibility: "hidden" };

  return (
    <div ref={ref} className={cn.flyout} style={styles}>
      <div className={cn.body}>{props.children}</div>
    </div>
  );
};
