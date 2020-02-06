import React from "react";
import { TooltipPlacement } from "../core/Tooltip.types";
import { getPosition } from "../core/getPosition";
import { useClientRect } from "../core/useClientRect";
import cn from "../styles/Flyout.module.css";

export interface FlyoutProps {
  targetRect: DOMRect;
  placement: TooltipPlacement;
}

export const Flyout: React.FC<FlyoutProps> = props => {
  const [tooltipRect, ref] = useClientRect<HTMLDivElement>([props.targetRect]);

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
